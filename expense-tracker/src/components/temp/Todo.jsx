import React, { useState, useEffect } from "react";
import "./Todo.css";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

function Todo() {

  /* States */
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  /* Load from LocalStorage */
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos"));
    if (saved) setTodos(saved);
  }, []);

  /* Save to LocalStorage */
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  /* Add Task */
  const addTask = (e) => {
    e.preventDefault();

    if (!task.trim()) return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  /* Toggle Complete */
  const toggleTask = (id) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  /* Delete Task */
  const deleteTask = (id) => {
    setTodos(todos.filter((t) => t.id !== id));
  };

  /* Stats */
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;

  return (
    <div className="todo-page">

      <Sidebar />
      <Navbar />

      {/* Header */}
      <h1 className="todo-title">📝 Todo List</h1>

      {/* Stats */}
      <div className="todo-stats">

        <div className="todo-stat">
          Total Tasks: <b>{total}</b>
        </div>

        <div className="todo-stat done">
          Completed: <b>{completed}</b>
        </div>

      </div>

      {/* Form */}
      <form className="todo-form" onSubmit={addTask}>

        <input
          type="text"
          placeholder="Enter new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button>Add</button>

      </form>

      {/* List */}
      <div className="todo-list">

        {todos.length === 0 && (
          <p className="empty">No tasks yet 🚀</p>
        )}

        {todos.map((t) => (
          <div
            key={t.id}
            className={`todo-item ${t.completed ? "done" : ""}`}
          >

            <span onClick={() => toggleTask(t.id)}>
              {t.text}
            </span>

            <button onClick={() => deleteTask(t.id)}>
              ❌
            </button>

          </div>
        ))}

      </div>

    </div>
  );
}

export default Todo;
