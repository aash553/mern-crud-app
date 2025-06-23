import mongoose  from "mongoose";


const Userschema = new mongoose.Schema(
    {
        fname:{
            type:String,
            required:true
        },
        lname:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        password:{
            type:String,
            required:true
        },
    }
)

export default  mongoose.model("User", Userschema)