const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    facebookId: String,
    email: String,
    password: String,
})
userSchema.methods.verifyPassword = (candidatePassword, cb) => {
    console.log('param...', this, candidatePassword)
    if(this.password === candidatePassword){ return true }
    return false
}
// mongoose.model('users', userSchema);
mongoose.model('users', userSchema)
