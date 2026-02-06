import React, { useState } from "react";
import styled from "styled-components";

import Overview from "./Overview";
import TransactionComponent from "./TransactionComponent";

import Sidebar from "./Sidebar/Sidebar";
import Navbar from "./Navbar/Navbar";

/* Main Page Layout */
const Page = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: #0f172a; /* Dark background */
  font-family: Montserrat, sans-serif;
`;

/* Main Content Area */
const Container = styled.div`
  flex: 1;

  margin-left: 230px; /* Sidebar width */
  margin-top: 60px; /* Navbar height */

  padding: 30px;

  color: white;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Expense() {
  const [transactions, setTransactions] = useState([]);

  const AddTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <Page>

      {/* Sidebar */}
      <Sidebar />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <Container>

        <h1>Expense Tracker</h1>

        <Overview
          transactions={transactions}
          AddTransaction={AddTransaction}
        />

        <TransactionComponent
          transactions={transactions}
        />

      </Container>

    </Page>
  );
}

export default Expense;
