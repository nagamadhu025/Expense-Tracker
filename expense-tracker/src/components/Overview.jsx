import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Montserrat, sans-serif;
  align-items: center;
  margin: 10px;
  width: 100%;
`;

const Balance = styled.div`
  font-size: 18px;
  width: 100%;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Addtransact = styled.button`
  background: black;
  color: white;
  cursor: pointer;
  text-align: center;
  padding: 5px 10px;
  border-radius: 4px;
  font-weight: bold;
  font-size: 15px;
  border: none;
`;

const AddContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e6e8e9;
  gap: 10px;
  padding: 15px 20px;
  margin: 10px 20px;
  & input {
    outline: none;
    padding: 10px 12px;
    border-radius: 4px;
    border: 1px solid #e6e8e9;
  }
`;

const RadioBox = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

const ExpenseSummary = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin: 20px;
`;

const ExpenseBox = styled.div`
  border: 1px solid #e6e8e9;
  padding: 15px 20px;
  border-radius: 4px;
  display: flex;
  width: 100px;
  flex-direction: column;
  font-size: 14px;
  & span {
    font-weight: bold;
    font-size: 18px;
    margin-top: 5px;
    color: ${(props) => (props.isIncome ? "green" : "red")};
  }
`;

const View = ({ setAdd, AddTransaction }) => {
  const [type, setType] = useState("expense");
  const [amount, setAmount] = useState("");
  const [desc, setDesc] = useState("");

  const handleAdd = () => {
    if (!amount || !desc) return;
    AddTransaction({
      amount: Number(amount),
      desc,
      type,
      id: Date.now(),
    });
    setAdd(false);
    setAmount("");
    setDesc("");
    setType("expense");
  };

  return (
    <AddContainer>
      <input
        placeholder="Amount"
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <RadioBox>
        <label>
          <input
            type="radio"
            name="type"
            value="expense"
            checked={type === "expense"}
            onChange={() => setType("expense")}
          />{" "}
          Expense
        </label>
        <label>
          <input
            type="radio"
            name="type"
            value="income"
            checked={type === "income"}
            onChange={() => setType("income")}
          />{" "}
          Income
        </label>
      </RadioBox>
      <Addtransact onClick={handleAdd}>Add Transaction</Addtransact>
    </AddContainer>
  );
};

function Overview({ transactions, AddTransaction }) {
  const [add, setAdd] = useState(false);

  const balance = transactions.reduce(
    (acc, t) => (t.type === "income" ? acc + t.amount : acc - t.amount),
    0
  );

  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <Container>
      <Balance>
        Balance : ${balance}
        <Addtransact onClick={() => setAdd(!add)}>
          {add ? "CANCEL" : "ADD"}
        </Addtransact>
      </Balance>
      {add && <View setAdd={setAdd} AddTransaction={AddTransaction} />}
      <ExpenseSummary>
        <ExpenseBox isIncome={false}>
          Expense<span>${totalExpense}</span>
        </ExpenseBox>
        <ExpenseBox isIncome={true}>
          Income<span>${totalIncome}</span>
        </ExpenseBox>
      </ExpenseSummary>
    </Container>
  );
}

export default Overview;
