import React from "react";
import "./Dashboard.css";

import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar, Line, Doughnut } from "react-chartjs-2";

/* Register Charts */
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  ArcElement,
  Tooltip,
  Legend
);

function Dashboard() {
  /* Demo Stats */
  const expenseTotal = 12500;
  const totalTasks = 20;
  const completedTasks = 15;
  const caloriesBurned = 450;

  /* Expense Chart */
  const expenseData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

    datasets: [
      {
        label: "Expenses (₹)",
        data: [2000, 3000, 1500, 4000, 2500, 3500],
        backgroundColor: "#00e5ff",
      },
    ],
  };

  /* Todo Chart */
  const todoData = {
    labels: ["Week 1", "Week 2", "Week 3", "Week 4"],

    datasets: [
      {
        label: "Completed Tasks",
        data: [4, 6, 3, 7],
        borderColor: "#22c55e",
        backgroundColor: "rgba(34,197,94,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  /* Fitness Chart */
  const fitnessData = {
    labels: ["Cardio", "Strength", "Yoga", "Running"],

    datasets: [
      {
        data: [35, 25, 20, 20],
        backgroundColor: [
          "#f97316",
          "#22c55e",
          "#00e5ff",
          "#a855f7",
        ],
      },
    ],
  };

  /* Common Options */
  const chartOptions = {
    responsive: true,

    plugins: {
      legend: {
        labels: {
          color: "white",
        },
      },
    },

    scales: {
      x: {
        ticks: { color: "white" },
      },

      y: {
        ticks: { color: "white" },
      },
    },
  };

  return (
    <div className="db-dashboard">

      <Navbar />
      <Sidebar />

      {/* Header */}
      <h1 className="db-title">Dashboard</h1>

      {/* Summary Cards */}
      <div className="db-cards">

        <div className="db-card db-expense">
          <h3>Total Expense</h3>
          <p>₹ {expenseTotal}</p>
        </div>

        <div className="db-card db-todo">
          <h3>Tasks Completed</h3>
          <p>
            {completedTasks} / {totalTasks}
          </p>
        </div>

        <div className="db-card db-fitness">
          <h3>Calories Burned</h3>
          <p>{caloriesBurned} kcal</p>
        </div>

      </div>

      {/* Charts Section */}
      <div className="db-charts">

        {/* Expense Chart */}
        <div className="db-chart">
          <h3>Monthly Expenses</h3>
          <Bar data={expenseData} options={chartOptions} />
        </div>

        {/* Todo Chart */}
        <div className="db-chart">
          <h3>Todo Progress</h3>
          <Line data={todoData} options={chartOptions} />
        </div>

        {/* Fitness Chart */}
        <div className="db-chart">
          <h3>Fitness Activity</h3>
          <Doughnut data={fitnessData} />
        </div>

      </div>

    </div>
  );
}

export default Dashboard;

