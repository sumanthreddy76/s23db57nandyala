const mongoose = require("mongoose")
const gloveSchema = mongoose.Schema({
    // gun_name: String,
    // gun_weight: Number,
    // gun_manufacturer: String

    gun_name: {
        type: String,
        required: true
    },
    gun_weight: {
        type: Number,
        required: true,
        min: 0,
        max: 500
    },
    gun_manufacturer: {
        type: Number,
        required: true,
        min: 0,
        max: 10
    }

})
module.exports = mongoose.model("glove",
    gloveSchema)