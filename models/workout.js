const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
            category: String,
            name: String,
            duration: Number,
            weight: Number,
            reps: Number,
            sets: Number

        }
    ]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;