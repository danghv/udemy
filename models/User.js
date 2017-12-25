const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String
})
// mongoose.model('users', userSchema);
const User = mongoose.model('users', userSchema)
module.exports = User