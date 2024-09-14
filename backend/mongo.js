import mongoose from "mongoose" 
mongoose.connect("mongodb://127.0.0.1:27017/feedback")
.then(()=>{
    console.log("mongodb is connected");
})
.catch(()=>{
    console.log('failed');
})

const newSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    message:{
        type:String,
        required:true
    },
    

})

const collection = mongoose.model("collection", newSchema)

// module.exports = collection
export default collection;
