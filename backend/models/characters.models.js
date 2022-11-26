const mongoose = require('mongoose');

const charactersSchema = mongoose.Schema({
    name: {type: String, required: true},
    role: {type: String, required: true}
})

const Characters = mongoose.model('Characters', charactersSchema, 'chars');

module.exports = Characters;