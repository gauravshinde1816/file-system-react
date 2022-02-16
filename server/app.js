const express = require("express")
const app = express();
const fs = require("fs")
const cors = require("cors")

app.use(cors())

app.get("/" , (req , res)=>{
    const dir = 'D:\\Gaurav\\Internship\\public'
    const files = fs.readdirSync(dir)
    return res.json(files)
})

app.listen(5000 , ()=>{
    console.log("Server started at 5000")
})