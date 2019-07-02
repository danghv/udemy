const mongoose = require('mongoose')

const User = mongoose.model('users')

module.exports = app => {
    app.post('/signup', async (req, res, next) => {
        console.log('req............', req.body)
        const existingUser = await User.findOne({ email: req.body.email })
        if (existingUser) {
            res.json(existingUser)
        } else {
            const user = await new User({ email: req.body.email, password: req.body.password }).save()
            res.json(user)
        }
    })
};