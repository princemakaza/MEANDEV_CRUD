const mongoose = require('mongoose')
const Schema = mongoose.Schema
const UserDetails = Schema({
    full_name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const UserD = mongoose.model("UserDetails", UserDetails)

module.exports = UserD