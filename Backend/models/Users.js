const mongoose = require("mongoose")

const Users = new mongoose.Schema({
    username:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    password:{type:String,required:true},
    confirmpassword:{type:String,required:true},
    whatsappNo:{type:String,required:true},
    mobile:{type:String,required:true},
    year:{type:String,required:true},
    qr:{type:String},
    myWork: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Works' }]
})

const UserModel = mongoose.model("Users",Users) 
module.exports=UserModel;