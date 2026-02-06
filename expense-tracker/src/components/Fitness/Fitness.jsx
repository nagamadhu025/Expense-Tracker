import React, { useState } from "react";
import "./Fitness.css";
import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

function Fitness() {
  /* States */
  const [steps, setSteps] = useState("");
  const [calories, setCalories] = useState("");
  const [water, setWater] = useState(0);

  const [workouts, setWorkouts] = useState([]);

  /* Add Workout */
  const addWorkout = (e) => {
    e.preventDefault();

    if (!steps || !calories) return;

    const newWorkout = {
      id: Date.now(),
      steps,
      calories,
      date: new Date().toLocaleDateString(),
    };

    setWorkouts([...workouts, newWorkout]);

    setSteps("");
    setCalories("");
  };

  /* Add Water */
  const addWater = () => {
    if (water < 10) setWater(water + 1);
  };

  return (
    <div className="fitness">

      <Sidebar />
      <Navbar />

      {/* Header */}
      <h1 className="fitness-title">🏃 Fitness Tracker</h1>

      {/* Stats */}
      <div className="fitness-cards">

        <div className="fitness-card steps">
          <h3>Steps</h3>
          <p>{steps || 0}</p>
        </div>

        <div className="fitness-card calories">
          <h3>Calories</h3>
          <p>{calories || 0}</p>
        </div>

        <div className="fitness-card water">
          <h3>Water</h3>
          <p>{water} / 10 Glass</p>
        </div>

      </div>

      {/* Add Workout */}
      <form className="fitness-form" onSubmit={addWorkout}>

        <input
          type="number"
          placeholder="Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          required
        />

        <input
          type="number"
          placeholder="Calories Burned"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          required
        />

        <button>Add Workout</button>

      </form>

      {/* Water Tracker */}
      <div className="water-box">
        <h3>💧 Water Tracker</h3>
        <button onClick={addWater}>+ Add Glass</button>
      </div>

      {/* History */}
      <div className="fitness-history">

        <h3>📊 Workout History</h3>

        {workouts.length === 0 && (
          <p className="empty">No workouts added yet</p>
        )}

        {workouts.map((item) => (
          <div className="history-item" key={item.id}>

            <span>{item.date}</span>

            <span>Steps: {item.steps}</span>

            <span>🔥 {item.calories} cal</span>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Fitness;
