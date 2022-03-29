const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: String,
    name: String,
    age: Number,
    favoriteMovies: Array
})

module.exports = mongoose.model('user', userSchema)