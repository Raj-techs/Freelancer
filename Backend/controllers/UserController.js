const UserModel = require("../models/Users")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const dotEnv = require("dotenv")
dotEnv.config()
const secretKey = process.env.WhatIsYourName;
const RegisterUser = async(req,res) =>{
    try {
        const {username,email,password,confirmpassword,whatsappNo,mobile,year,qr}=req.body;
        const User = await UserModel.findOne({email})
        if(User){
            return res.status(200).send("User Already Existed")
        }
        if(password!== confirmpassword){
            return res.status(200).send("password not matched")
        }
        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new UserModel({
            username,
            email,
            password:hashedPassword,
            confirmpassword:hashedPassword,
            whatsappNo,
            mobile,
            year,
            qr
        })
        await newUser.save()
         res.send({message:"User registered Successfully"})
         console.log("register",email);
    } catch (err) {
        console.log(err);
        return res.status(500).send("RegisterUser error")
    }
}


const UserLogin = async(req,res)=>{
    
    try {
        const {email,password}=req.body;
        let User = await UserModel.findOne({email});
        if(!User || !(await bcrypt.compare(password,User.password))){
            return res.json({error:"Invalid username or password"})
        }
        const token = jwt.sign({UserId:User._id},secretKey,{expiresIn:"1h"})

        res.status(200).send({success:"Login successfull",token})
        console.log(email,"this is token",token);
        
    } catch (err) {
        console.log(err)
        res.status(500).send("vedorLogin error")
    }
}

const AllUsers = async(req,res)=>{
    try {
        const Users = await UserModel.find();
        return res.status(200).send(Users)
    } catch (err) {
        console.log(err);
        return res.status(500).send("AllUsers error")
    }
}


module.exports = {RegisterUser,UserLogin,AllUsers}