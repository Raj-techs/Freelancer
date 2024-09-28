const mongoose = require("mongoose")

const Works = new mongoose.Schema({
    work:{type:String,required:true},
    ref:{type:String},
    description:{type:String,required:true},
    closes:{type:String,required:true},
    deadline:{type:String,required:true},
    amount:{type:String,required:true},
    
})

const WorksModel = mongoose.model("Works",Works) 
module.exports={WorksModel}