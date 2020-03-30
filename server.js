const mongoose = require("mongoose");

const Workout = require("./models/workout");
const seed = require("./seeders/seed");




Workout.create(seed[0])
  .then(dbWorkout => {
    console.log(dbWorkout);
  })
  .catch(({ message }) => {
    console.log(message);
  });