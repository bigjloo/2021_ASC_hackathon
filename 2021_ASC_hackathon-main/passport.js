require('dotenv').config()
require('./user')
const User = require('./user')
const path = require('path')
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;



passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });





// Use the GoogleStrategy within Passport.
//   Strategies in Passport require a `verify` function, which accept
//   credentials (in this case, an accessToken, refreshToken, and Google
//   profile), and invoke a callback with a user object.
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
    function(accessToken, refreshToken, profile, done) {
        console.log("profile: ", profile)
        User.findOne({
            email: profile.emails[0].value
        }, function(err, user) {
            if (err) {
                return done(err)
            }
            
            //if no user found, create new user
            if (!user) {
                user = new User({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                })
                user.save((err) => {
                    if (err) {
                        console.log(err)
                    }
                    return done(err, user)
                })
            } else {
                return done(err, user)
            }
        })
  }
));

