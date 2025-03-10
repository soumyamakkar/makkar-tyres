require("./db/connect");
const cors = require('cors');
const express=require('express');

require('dotenv').config();
const emailRouter=require('./routes/email');
const app=express();
const PORT=process.env.PORT||9002;

app.use(cors());

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/",emailRouter);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
})

