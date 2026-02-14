import React, { useState } from "react";
import styled from "styled-components";

/* Main Box */
const Container = styled.div`
  width: 100%;
  max-width: 700px;

  background: #020617;

  padding: 25px;

  border-radius: 15px;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);

  display: flex;
  flex-direction: column;

  gap: 20px;
`;

/* Balance Row */
const Balance = styled.div`
  font-size: 20px;

  font-weight: bold;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #00e5ff;
`;

/* Button */
const AddButton = styled.button`
  background: #00e5ff;

  color: black;

  cursor: pointer;

  padding: 7px 14px;

  border-radius: 8px;

  font-weight: bold;

  font-size: 14px;

  border: none;

  transition: 0.3s;

  &:hover {
    background: #22c55e;
  }
`;


const AddContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 12px;

  padding: 15px;

  border-radius: 12px;

  background: #0f172a;

  & input {
    background: #020617;

    color: white;

    border: 1px solid #1e293b;

    padding: 10px;

    border-radius: 8px;

    outline: none;
  }
`;

const RadioBox = styled.div`
  display: flex;
  gap: 20px;

  color: white;
`;


const ExpenseSummary = styled.div`
  display: flex;
  justify-content: space-between;

  gap: 15px;
`;

const ExpenseBox = styled.div`
  flex: 1;

  background: #0f172a;

  padding: 15px;

  border-radius: 10px;

  text-align: center;

  border-left: 5px solid
    ${(props) => (props.isIncome ? "#22c55e" : "#ef4444")};

  & span {
    display: block;

    font-size: 20px;

    margin-top: 5px;

    color: ${(props) => (props.isIncome ? "#22c55e" : "#ef4444")};
  }
`;

/* Add Form Component */
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
            checked={type === "expense"}
            onChange={() => setType("expense")}
          /> Expense
        </label>

        <label>
          <input
            type="radio"
            checked={type === "income"}
            onChange={() => setType("income")}
          /> Income
        </label>
      </RadioBox>

      <AddButton onClick={handleAdd}>
        Add Transaction
      </AddButton>

    </AddContainer>
  );
};

function Overview({ transactions, AddTransaction }) {
  const [add, setAdd] = useState(false);

  const balance = transactions.reduce(
    (acc, t) =>
      t.type === "income"
        ? acc + t.amount
        : acc - t.amount,
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
        Balance : ₹ {balance}

        <AddButton onClick={() => setAdd(!add)}>
          {add ? "Cancel" : "Add"}
        </AddButton>
      </Balance>

      {add && (
        <View
          setAdd={setAdd}
          AddTransaction={AddTransaction}
        />
      )}

      <ExpenseSummary>

        <ExpenseBox>
          Expense
          <span>₹ {totalExpense}</span>
        </ExpenseBox>

        <ExpenseBox isIncome>
          Income
          <span>₹ {totalIncome}</span>
        </ExpenseBox>

      </ExpenseSummary>

    </Container>
  );
}

export default Overview;
