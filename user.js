const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {console.log('mongodb connected')})

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleID: String,
    topScore: Number
})

const User = mongoose.model('User', userSchema)

module.exports = User