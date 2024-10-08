import express from "express"
import cors from "cors"
import mongoose from "mongoose"

const app = express()
 app.use(express.json())
 app.use(express.urlencoded())
 app.use(cors())

 mongoose.connect("mongodb+srv://kkushikumawat:khushi123@cluster0.wt41sqw.mongodb.net/Treasurylogin")
 .then(con =>{
    console.log("Connect Db")
 }).catch(err =>{
    console.log("error", err);
 })

 const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Routes
 app.post("/login", async (req, res) => {
    const { email, password} = req.body
    try{
        const user = await User.findOne({ email: email });

        if (user) {
           if(password === user.password) {
            res.send({message: "Login SucessFull", user: user})
           } else {
            res.send({message : "Password didn't match"})
           }

        }else{
            
            res.send( {message:"User not  Registered"});
        }
    } catch (err) {
        res.send(err);
    }
    
 })



app.post("/register", async (req, res) => {
    const {name, email, password} = req.body
    try{
        const user = await User.findOne({ email: email });

        if (user) {
            res.send({ message: "User already registered"});

        }else{
            const newUser = new User({
                name,
                email,
                password,
            });
            await newUser.save();
            res.send({ message: "Successfully Registered"});
        }
    } catch (err) {
        res.send(err);
    }
}

)

 app.listen(80, () => {
    console.log('BE started at port 80')
 })