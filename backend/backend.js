import express from 'express'
import collection from './mongo.js'
// const collection = require('./mongo')
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended:true}))
app.use(cors())


app.get("/", cors(),(req, res)=>{

})

app.post("/", async(req,res)=>{
    const{email, message, name} = req.body

    try{
        const check = await collection.findOne({email:email})
        
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }catch(e){
        res.json("notexist")

    }
})


app.post("/Signup", async(req,res)=>{
    const{name,email, message} = req.body

    const data={
        name:name,
        email:email,
        message:message
    }

    try{
        const check = await collection.findOne({email:email})
        
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }catch(e){
        res.json("notexist")

    }
})

app.listen(3000,()=>{
    console.log("Port connected");
})

