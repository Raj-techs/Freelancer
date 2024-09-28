const UserModel = require("../models/Users")
const dotenv = require("dotenv")
dotenv.config()
const jwt = require("jsonwebtoken")
const secretKey = process.env.WhatIsYourName

const verifyToken = async(req,res,next)=>{
    const token = req.headers.token;
    if(!token){
        return res.status(401).send({message:"token is required"})
    }
    try {
        const decoded = jwt.verify(token,secretKey);
        const user = await UserModel.findById(decoded.UserId);

        if(!user){
            return res.status(404).send({error:"user not found"})
        }
        req.UserId = user._id;
        next()
    } catch (err) {
        console.log(err);   
        return res.status(500).json({error:"verifyToken internal error"})
    }
}

module.exports = verifyToken