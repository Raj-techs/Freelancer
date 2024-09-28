const express = require("express")
const { WorksModel } = require("../models/Works")
const UserModel = require("../models/Users")


const AddWork = async(req,res)=>{
    const {work,ref,description,closes,deadline,amount}=req.body;
    const userId = req.UserId;
    console.log(userId);
    try {
        if (!work || !ref || !description || !closes || !deadline || !amount) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newWork = new WorksModel({
            work,
            ref,
            description,
            closes,
            deadline,
            amount,
            userId
        });
        const savedWork = await newWork.save();
        await UserModel.findByIdAndUpdate(userId, { $push: { myWork: savedWork._id } });
        console.log('Updated User:', userId);

        res.status(201).json({message:"Successfully Work Added"})
    } catch (err) {
        console.log(err);
        res.status(500).send("Addwork")
    }
}
const AllWorks = async(req,res)=>{
    try {
        const allworks = await WorksModel.find()
        if(!allworks){
            return res.status(201).send({message:"Work Not Available"})
        }
        return res.status(201).send(allworks)
    } catch (err) {
        console.log(err);
        return res.status(500).send("AllWorks error ")
    }
}


const MyWorks = async(req,res)=>{
    const userId = req.UserId;

    try {
        const user = await UserModel.findById(userId).populate('myWork');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ works: user.myWork });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}
const AddCompletedWorks = async(req,res)=>{
    const {work,ref,description,closes,deadline,amount}=req.body;
    const userId = req.UserId;
    console.log(userId);
    try {
        if (!work || !ref || !description || !closes || !deadline || !amount) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const newWork = new WorksModel({
            work,
            ref,
            description,
            closes,
            deadline,
            amount,
            userId
        });
        const savedWork = await newWork.save();
        await UserModel.findByIdAndUpdate(userId, { $push: { completedWorks: savedWork._id } });
        console.log('Updated User:', userId);

        res.status(201).json({message:"Successfully Work Added"})
    } catch (err) {
        console.log(err);
        res.status(500).send("Addwork")
    }
}
const CompletedWorks = async(req,res)=>{
    const userId = req.UserId;

    try {
        const user = await UserModel.findById(userId).populate('completedWorks');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json({ works: user.myWork });
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "Server Error" });
    }
}

module.exports = {AllWorks,AddWork,MyWorks,CompletedWorks,AddCompletedWorks}