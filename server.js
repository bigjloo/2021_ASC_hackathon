const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {console.log('mongodb connected')})


const playerSchema = new mongoose.Schema({
    name: String,
    score: Number
})

const Player = mongoose.model('Player', playerSchema)



app.use('/public', express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded({extended: false}))
app.use(express.json())

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'static','index.html'))
})

app.get('/leaderboard', (req,res) => {
    let query = Player.find({name: 'timmy'}).exec()
    console.log(query)
})

app.post('/leaderboard', (req,res, next) => {
    const player = new Player({name: req.body.name, score: req.body.score})
    player.save(err => {
        if (err) return console.error(err)
    })
    res.json({name: req.body.name, score: req.body.score})
    next()
})

app.listen(3000)