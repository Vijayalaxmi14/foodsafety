// models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    role: String,
    // other fields like email, password, etc.
});

const User = mongoose.model('User', userSchema);
module.exports = User;
