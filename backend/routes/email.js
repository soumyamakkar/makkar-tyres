const express=require('express');
const {generateEmail}=require('../controllers/email');
const emailRouter=express.Router();

emailRouter.post('/generate-email',generateEmail);

module.exports=emailRouter;