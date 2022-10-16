const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const UserRoutes = require('./Routes/router')
const bodyParser = require('body-parser')
const url = 'mongodb://localhost:27017/CRUD'
const app = express()

mongoose.connect(url)
const Con = mongoose.connection
Con.on('open', ()=>{
    console.log('The mongodb has connected successfully')
})
app.use(cors())
app.use(bodyParser.json())
app.use("/", UserRoutes)
app.use(express.json())
const Port = 4071

app.listen(Port, ()=>{
    console.log("The server is running at port: 4000")
})