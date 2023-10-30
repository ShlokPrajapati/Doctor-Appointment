const mongoose=require('mongoose')
const validator=require('validator')
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,'name is require']
    },
    email:{
        type:String,
        required:[true,'email is require'],
        validate(val)
        {
        if(!validator.isEmail(val))
        {
        throw new Error("Enter valid email_id")
        }
        }
    },
    password:{
        type:String,
        required:[true,'password is require']
    },
})
mongoose.pluralize(null)
const userModel = mongoose.model('users',userSchema)

module.exports = userModel
