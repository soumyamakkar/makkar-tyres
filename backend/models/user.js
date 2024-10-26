const {Schema,model}=require('mongoose');

const userSchema=new Schema({
    name:{
        type:String,
        trim:true,
    },
    email:{
        type:String,
        trim:true,
        required:true,
    },
    contact:{
        type:Number,
        required:true,
    },
    service:{
        type:String,
        required:true,
    }
})

const UserModel=model("User",userSchema);

module.exports=UserModel;