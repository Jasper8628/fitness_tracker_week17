const mongoose = require("mongoose");
const express=require("express");
const Workout = require("./models/workout");
const seed = require("./seeders/seed");
const db = require("./models");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));


const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/dbWorkouts", { useNewUrlParser: true });


// db.Workout.create(seed)
//   .then(dbWorkout => {
//     console.log(dbWorkout);
//   })
//   .catch(({ message }) => {
//     console.log(message);
//   });
  
app.get("/api/workouts/", (req,res)=>{
  db.Workout.find({})
    .then(dbWorkout =>{
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.post("/api/workouts/",({body},res)=>{
  db.Workout.create(body)
  .then(({_id})=>{
    db.Workout.findByIdAndUpdate({},{$push:{workouts:_id}},{newa:true})
  })
  .then(dbWorkout =>{
    res.json(dbWorkout);
  })
  .catch(err =>{
    res.json(err);
  });
});

//app.put("/api/workouts/")

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});

