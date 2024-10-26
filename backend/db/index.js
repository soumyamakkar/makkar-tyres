const mongoose=require('mongoose');
// mongoose.set('debug', true);
require('dotenv').config();
const uri="mongodb+srv://soumya:456@cluster0.cu2po.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

if(!uri) throw new Error("Database URI is missing");


const dbConnect=()=>{
    mongoose.connect(uri).then(()=>{
        console.log('db connected!');
    }).catch((error)=>{
        console.log('db connection failed: ',error.message);
    })
};

module.exports={dbConnect};