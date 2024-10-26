const nodemailer = require('nodemailer');
const userModel = require('../models/user');
const cron = require('node-cron');

// Function to send email
const sendEmail = async (email, name, subject, message) => {
  const transporter = nodemailer.createTransport({
    host: 'mail.smtp2go.com',
    port: 2525,
    secure: false,
    auth: {
      user: 'soumya2401.be22@chitkara.edu.in',
      pass: 'oK75CEH7gPdvkP5B',
    },
  });

  const mailOptions = {
    from: 'makkartyres@outlook.com',
    to: email,
    subject: subject,
    text: message,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent: ' + info.response);
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

exports.generateEmail = async (req, res) => {
  const { name, email, contact, service } = req.body;
  let user = await userModel.findOne({ email });
  if (!user) {
    user = await userModel.create({ name, email, contact, service });
  }

  // Send the initial thank-you email
  const thankYouSubject = 'Thank You for Shopping at Makkar Tyres!';
  const thankYouMessage = `Hi ${name},\n\nThank you for choosing Makkar Tyres. We hope you enjoyed our services.\n\nBest regards,\nThe Makkar Tyres Team`;
  await sendEmail(email, name, thankYouSubject, thankYouMessage);

  // Schedule the alignment reminder for 3 months later
  const reminderSubject = 'Reminder: Your Wheel Alignment Service is Due';
  const reminderMessage = `Hi ${name},\n\nIt’s been three months since your last visit. We recommend scheduling an alignment soon for optimal tire health.\n\nBest regards,\nThe Makkar Tyres Team`;

  // Schedule the email to be sent after three months
  cron.schedule('0 0 0 */3 * *', async () => {
    await sendEmail(email, name, reminderSubject, reminderMessage);
  });

  res.status(200).json({ message: 'Thank you email sent successfully, and reminder email scheduled!' });
};
