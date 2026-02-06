import React from "react";
import styled from "styled-components";
import { Routes, Route } from "react-router-dom";

import Expense from "./components/Expense";
import Login from "./assets/Login/Login";


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
      </Routes>
    </Container>
  );
}

export default App;
