import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Expense from "./components/Expense";
import Login from "./Login/Login";
import Dashboard from "./Dashboard/Dashboard";
import Fitness from "./components/Fitness/Fitness";


const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Montserrat, sans-serif;
`;

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/expense" element={<Expense />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/fitness" element={<Fitness />} />

      </Routes>
    </Container>
  );
}

export default App;
