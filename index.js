const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const keys = require('./config/keys')
const bodyParser = require('body-parser')
require('./models/User')
require('./services/passport')

mongoose.connect(keys.mongoURI, { useMongoClient: true })

const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
)

app.use(passport.initialize())
app.use(passport.session())

// app.post('/login', (req, res, next) => {
//     console.log('req............', req.body)
//     res.send('test login')
//   })

require('./routes/authRoutes')(app)
require('./routes/signUp')(app)
// require('./routes/login')(app)

const PORT = process.env.PORT || 5000;
app.listen(PORT);
