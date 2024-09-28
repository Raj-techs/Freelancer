const express = require("express")
const app = express()
const cors = require("cors")



const userRouter = require('./routes/UserRoutes')
const workRouter = require('./routes/WorksRoutes')
const dotEnv = require("dotenv")
dotEnv.config();

const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect(process.env.MONGO_URI).then(_=>console.log("DB Connected Successfully..")).catch(_=>console.log("DB Not Connected.."))

const PORT = process.env.PORT || 5000
app.use(cors())
app.use(bodyParser.json())

app.get('/',async(req,res)=>{
    res.status(200).send("THQ Darling..")
})


app.use('/user',userRouter)
app.use('/work',workRouter)






app.listen(PORT,_=>console.log(`server started at ${PORT}`))