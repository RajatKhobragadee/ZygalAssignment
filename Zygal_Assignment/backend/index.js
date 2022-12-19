const express = require("express")
const mongoose= require("mongoose")
const route = require("./routers/route")
const bodyParser = require("body-parser")
var cors = require('cors')
const app = express()

app.use(cors())

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))


const url = "mongodb+srv://avenger:rajatrajat12@cluster0.wuyw0.mongodb.net/zygal"

mongoose.connect(url, {useNewUrlParser: true})
.then(()=> console.log("Mongodb is connected "))
.catch((err)=> console.log(err))

app.use("/", route)

app.listen(process.env.PORT||5000, function(){
    console.log("Express is running on port" +(process.env.PORT||5000))
})