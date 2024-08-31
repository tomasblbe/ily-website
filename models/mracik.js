const mongoose = require("mongoose");
const { DateTime } = require("luxon")

const Schema = mongoose.Schema;

const mrakSchema = new Schema({
    text: {type: String},
    datum: {type: Date, default: Date.now},
    nazov_obrazka: {type: String},
    margin: {type: Number}
})

mrakSchema.virtual("url").get(function(){
    return `/mraciky/${this._id}`
})

mrakSchema.virtual('datum_formatted').get(function(){
    return DateTime.fromJSDate(this.datum).toLocaleString(DateTime.DATE_MED);
})

module.exports = mongoose.model("mrak", mrakSchema)