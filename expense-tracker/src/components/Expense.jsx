import React, { useState } from "react";
import styled from "styled-components";
import Overview from "./Overview";
import TransactionComponent from "./TransactionComponent";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Montserrat, sans-serif;
  align-items: center;
  margin: 30px 0 10px;
  width: 300px;
`;

function Expense() {
  const [transactions, setTransactions] = useState([]);

  const AddTransaction = (transaction) => {
    setTransactions((prev) => [...prev, transaction]);
  };

  return (
    <Container>
      <Overview transactions={transactions} AddTransaction={AddTransaction} />
      <TransactionComponent transactions={transactions} />
    </Container>
  );
}

export default Expense;
