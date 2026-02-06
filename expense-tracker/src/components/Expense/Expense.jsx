import React, { useState } from "react";
import styled from "styled-components";

import Overview from "./Overview";
import TransactionComponent from "./TransactionComponent";

import Sidebar from "../Sidebar/Sidebar";
import Navbar from "../Navbar/Navbar";

/* Main Page Layout */
const Page = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: #0f172a;
  font-family: "Montserrat", sans-serif;
`;


/* Main Content Area */
const Container = styled.div`
  flex: 1;

  margin-left: 230px;
  margin-top: 60px;

  padding: 30px;
  padding-left: 20px; /* Move Left */

  color: white;

  display: flex;
  flex-direction: column;
  align-items: flex-start; /* Align Left */
`;

/* Title Style */
const Title = styled.h1`
  width: 100%;

  text-align: left;

  font-size: 28px;
  font-weight: bold;

  margin-bottom: 20px;

  color: #00e5ff;

  display: flex;
  align-items: center;
  gap: 10px;
`;


function Expense() {
  const [transactions, setTransactions] = useState([]);

  const AddTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <Page>
      <Sidebar />
      <Navbar />

      <Container>
        <h1 className="expense-title">
  💰 Expense Tracker
  </h1>


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
