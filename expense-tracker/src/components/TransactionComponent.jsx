import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Montserrat, sans-serif;
  align-items: flex-start;
  margin: 30px 0 10px;
  font-weight: bold;
  gap: 10px;
  width: 100%;
  font-size: 18px;

  & input {
    padding: 10px 12px;
    border-radius: 12px;
    background: #e6e8e9;
    border: 1px solid #e6e8e9;
    outline: none;
    width: 100%;
  }
`;

const Cell = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e6e8e9;
  padding: 5px 0px;
  border-right: 5px solid ${(props) => (props.isExpense ? "red" : "green")};
  width: 100%;
  font-weight: normal;
  padding-right: 15px;
  border-radius: 4px;
`;

const TransactionCell = ({ transaction }) => {
  const isExpense = transaction.type.toLowerCase() === "expense";
  return (
    <Cell isExpense={isExpense}>
      <span>{transaction.desc}</span>
      <span>${transaction.amount}</span>
    </Cell>
  );
};

function TransactionComponent({ transactions }) {
  const [filter, setFilter] = React.useState("");

  // filter transactions based on description or amount
  const filteredTransactions = (transactions || []).filter(
    (transaction) =>
      transaction.desc.toLowerCase().includes(filter.toLowerCase()) ||
      transaction.amount.toString().includes(filter)
  );

  return (
    <Container>
      <div>Transactions</div>
      <input
        placeholder="Search"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      {filteredTransactions.length > 0 ? (
        filteredTransactions.map((transaction) => (
          <TransactionCell
            key={transaction.id || transaction.desc + transaction.amount}
            transaction={transaction}
          />
        ))
      ) : (
        <div>No Transactions</div>
      )}
    </Container>
  );
}

export default TransactionComponent;
