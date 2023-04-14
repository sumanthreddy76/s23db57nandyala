const mongoose = require("mongoose")
const gloveSchema = mongoose.Schema({
    gun_name: String,
    gun_weight: Number,
    gun_manufacturer: String

})
module.exports = mongoose.model("glove",
    gloveSchema)