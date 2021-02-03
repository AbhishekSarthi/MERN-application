const mongoose = require('mongoose');

const dbSchema = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    desc : {
        type : String,
        required : true
    },
    wishlist : {
        type : String, // LAter boolean
    }
})

module.exports = mongoose.model('Details' ,dbSchema);