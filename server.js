require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const port = process.env.PORT || 6096

const tasks = require("./Routes/tasks.js")

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",tasks)


mongoose.connect(
    process.env.CONNECTION_STRING,
    {useNewUrlParser:true, useUnifiedTopology:true},
    () => {
        console.log("Conected to DB")
    }
)



app.listen(port, ()=> {console.log(`http://localhost:${port}`)})