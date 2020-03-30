const mongoose = require("mongoose");
const express = require("express");
const seed = require("./seeders/seed");
const db = require("./models");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbWorkouts", { useNewUrlParser: true });


app.get("/api/workouts/", (req, res) => {
  db.Workout.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});
// db.Workout.create(seed)
//   .then(dbWorkout => {
//     console.log(dbWorkout);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });



app.post("/api/create/", ({ body }, res) => {
  db.Day.create(body)
    .then((dbDay) => {
      console.log(dbDay);
    })
    .catch(({ message }) => {
      console.log(message);
    })
})



app.post("/api/workouts/", ({ body }, res) => {
  db.Workout.create(body)
    .then(({ _id }) => db.Day.findOneAndUpdate({}, { $push: { workouts: _id } }, { new: true }))
    .then(dbDay => {
      console.log(dbDay._id);
      res.json(dbDay);
    })
    .catch(err => {
      res.json(err);
    });


  // db.Workout.create(body)
  // .then(({_id})=>{
  //   db.Workout.findByIdAndUpdate({},{$push:{workouts:_id}},{new:true})
  // })
  // .then(dbWorkout =>{
  //   res.json(dbWorkout);
  // })
  // .catch(err =>{
  //   res.json(err);
  // });
});

app.post("/api/workouts/create", res => {
  db.Workout.create(newWorkOut)
})

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

