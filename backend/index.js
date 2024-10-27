require("./db/connect");
const cors = require('cors');
const express=require('express');

require('dotenv').config();
const emailRouter=require('./routes/email');
const app=express();
const PORT=process.env.PORT||9002;

const allowedOrigins = [
    'https://makkar-tyres-lcp75gx51-soumya-makkars-projects.vercel.app',
    'https://makkar-tyres.vercel.app' // Add more origins if needed
  ];

  app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed methods
  }));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/",emailRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

