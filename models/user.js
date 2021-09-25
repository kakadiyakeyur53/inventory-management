const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    mail: {type: String, required: true},
    fname: {type: String, required: true},
    lname: {type: String, required: true},
    password: {type: String, required: true},
    number: {type: Number, required: true},
});

module.exports = mongoose.model('User', userSchema)