import React, { useState } from 'react';
import axios from 'axios';

const GenerateEmail = () => {
  const [formData, setFormData] = useState({ name: '', email: '', contact: '', service: '' });
  const [status, setStatus] = useState(''); // To show success/error message

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9001/generate-email', formData);
      setStatus('Email sent successfully!');
    } catch (error) {
      console.error('Error sending email:', error);
      setStatus('Failed to send email.');
    }
  };

  return (
    <div>
      <h2>Generate Thank You Email</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          value={formData.name} 
          onChange={(e) => setFormData({ ...formData, name: e.target.value })} 
          required 
        />
        <label>Email:</label>
        <input 
          type="email" 
          value={formData.email} 
          onChange={(e) => setFormData({ ...formData, email: e.target.value })} 
          required 
        />
        <label>Contact:</label>
        <input 
          type="text" 
          value={formData.contact} 
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })} 
          required 
        />
        <label>Service:</label>
        <select 
          value={formData.service} 
          onChange={(e) => setFormData({ ...formData, service: e.target.value })} 
          required 
        >
          <option value="">Select Service</option>
          <option value="Tire Change">Tire Change</option>
          <option value="Wheel Alignment">Wheel Alignment</option>
          <option value="Balancing">Balancing</option>
        </select>
        <button type="submit">Send Email</button>
      </form>
      {status && <p>{status}</p>} {/* Show status message */}
    </div>
  );
}

export default GenerateEmail;
