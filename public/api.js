const API = {
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1];
  },
  async addExercise(data) {
    const newData=JSON.stringify(data);
    console.log(newData);
    // const id = location.search.split("=")[1];
    // console.log(id);

    const res = await fetch("/api/workouts/", {
      method: "POST",
      body: newData,
      headers: { "Content-Type": "application/json" }
      
    });


  },
  async createWorkout(data) {
    const res = await fetch("/api/create/", {
      method: "POST",
      body:data,
      headers: { "Content-Type": "application/json" }
    });

  },

  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
