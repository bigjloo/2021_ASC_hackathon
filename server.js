const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()
const passport = require('passport')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
require('./passport')
const User = require('./user')
const Player = require('./player')


//Connect to database
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {console.log('mongodb connected')})


//MIDDLEWARE
app.use('/public', express.static(path.join(__dirname, 'static')))
app.use(express.urlencoded({extended: false}))
app.use(express.json())
    //passport for google auth
app.use(passport.initialize())
app.use(passport.session())
    //cookie session
app.use(cookieSession({
    name: 'some session',
    keys: ['key1', 'key2']
}))


//GET /
app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'static','index.html'))
})

//GET /login
app.get('/login', (req,res) => {
    res.sendFile(path.join(__dirname, 'static', 'login.html'))
})


                            //Google login
// GET /auth/google
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  The first step in Google authentication will involve
//   redirecting the user to google.com.  After authorization, Google
//   will redirect the user back to this application at /auth/google/callback
app.get('/auth/google',
  passport.authenticate('google', { scope: ['profile', 'email'] }));

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login_fail' }),
  function(req, res) {
    res.send(req.user)
    //res.redirect('/');
  });

//temp redirect routes for google login
app.get('/login_fail', (req,res) => {
    res.send('Login Failed!')
})

app.get('/good', (req,res) => {
    res.send(`Hi ${req.user}`)
})


//Leaderboard API
//GET /leaderboard
app.get('/leaderboard', (req,res) => {
    Player.find({}, 'name score')
    .limit(5)
    .exec((err, result) => {
        if (err) {
            console.log(err)
        } else {
            result.sort((a,b) => {
                return b.score - a.score
            })
            console.log(result)
            res.json(result)
    }})
    
})

//POST /leaderboard
app.post('/leaderboard', (req,res, next) => {
    const player = new Player({name: req.body.name, score: req.body.score})
    player.save(err => {
        if (err) return console.error(err)
    })
    res.json({name: req.body.name, score: req.body.score})
    next()
})
const port = process.env.PORT || 3000
app.listen(port, () => {console.log(`Server on port ${port}`)})