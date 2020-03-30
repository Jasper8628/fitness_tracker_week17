const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ExSchema = new Schema({

    category: String,
    name: String,
    duration: Number,
    weight: Number,
    reps: Number,
    sets: Number



});

const Exercise = mongoose.model("Exercise", ExSchema);

module.exports = Exercise;