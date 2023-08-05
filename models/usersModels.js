const mongoose = require ("mongoose");
const validator = require ("validator");
const bcrypt = require ("bcrypt");


const Schema = mongoose.Schema


const userSchema = new Schema({
    firstname:{
        type: String,
        required: true,
    },
    lastname:{
        type: String,
        required: true,
    },
    username:{//by default firstname concat lastname
        type: String,
        required: true,
        // unique: true,
    },
    phone:{
        type: String,
        required: true,
    },
    birthday:{
        type: String,
        required: true,
    },
    skills:{
        type: String,
        required: true,
    },
    summary:{
        type: String,
        required: true,
    },
    jobrole:{
        type: String,
        required: true,
    },
    yearofgraduation:{
        type: String,
        required: true,
    },
    univarsity:{
        type: String,
        required: true,
    },
    speciality:{
        type: String,
        required: true,
    },
    avatar:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        unique: true,
        required:true
    },
    password:{
        type: String,
        required:true
    }
})

// static signin method
userSchema.statics.signin = async function (email,password){
    if(!email || !password){
        throw Error("all fields must be filled")
    }

    if(!validator.isEmail(email)){
        throw Error("Email is not valid")
    }

    const user = await this.findOne({email})

    if(!user){
        throw Error("Email is not exist")
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match){
        throw Error("Incorrect password")
    }

    return user
}

// static signup method
userSchema.statics.signup = async function (firstname,lastname,username,phone,birthday,skills,summary,jobrole,yearofgraduation,univarsity,speciality,avatar,email,password){
    if(!username || !email || !password){
        throw Error("all fields must be filled")
    }

    if(!validator.isEmail(email)){
        throw Error(email)
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Password is week")
    }

    const existsEmail = await this.findOne({email})

    if(existsEmail){
        throw Error("Email is already used")
    }

    const existsUserName = await this.findOne({username})

    if(existsUserName){
        throw Error("username is already used")
    }

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password,salt)

    const user = await this.create({firstname,lastname,username,phone,birthday,skills,summary,jobrole,yearofgraduation,univarsity,speciality,avatar,email,password:hash})//firstname,lastname,phone,univarsity,jobrole,barithday,skills,summary,yearofgraduation,speciality,avatar,
    return user
}

module.exports = mongoose.model("user", userSchema)