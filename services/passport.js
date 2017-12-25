const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')    
const keys = require('../config/keys')

const User = require('../models/User')
// const User = mongoose.model('users')
// console.log(User)

passport.use(new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'    
}, (accessToken, refreshToken, profile, done) => {
        User({ googleId: profile.id }).save()
    console.log(profile.id)
    // User.findOne({ googleId: profile.id })
    //     .then((existingUser) => {
            
    //         // if (existingUser) {
                
    //         // } else {
                
    //         // }
    //     })
    
}))