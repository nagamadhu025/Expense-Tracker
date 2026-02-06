import React from "react";
import styled from "styled-components";

/* Container */
const Container = styled.div`
  width: 100%;
  max-width: 700px;

  background: #020617;

  padding: 25px;

  border-radius: 15px;

  box-shadow: 0 0 20px rgba(0, 0, 0, 0.6);

  display: flex;
  flex-direction: column;

  gap: 15px;

  color: white;
`;

/* Search */
const SearchInput = styled.input`
  background: #0f172a;

  border: 1px solid #1e293b;

  padding: 10px;

  border-radius: 8px;

  color: white;

  outline: none;
`;

/* Transaction Row */
const Cell = styled.div`
  display: flex;

  justify-content: space-between;

  align-items: center;

  background: #0f172a;

  padding: 10px 15px;

  border-radius: 8px;

  border-left: 5px solid
    ${(props) => (props.isExpense ? "#ef4444" : "#22c55e")};

  transition: 0.2s;

  &:hover {
    background: #020617;
  }
`;

const Title = styled.h3`
  color: #00e5ff;
`;

const TransactionCell = ({ transaction }) => {
  const isExpense =
    transaction.type === "expense";

  return (
    <Cell isExpense={isExpense}>
      <span>{transaction.desc}</span>
      <span>₹ {transaction.amount}</span>
    </Cell>
  );
};

function TransactionComponent({ transactions }) {
  const [filter, setFilter] = React.useState("");

  const filtered = (transactions || []).filter(
    (t) =>
      t.desc
        .toLowerCase()
        .includes(filter.toLowerCase()) ||
      t.amount
        .toString()
        .includes(filter)
  );

  return (
    <Container>

      <Title>Transactions</Title>

      <SearchInput
        placeholder="Search..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {filtered.length > 0 ? (
        filtered.map((t) => (
          <TransactionCell
            key={t.id}
            transaction={t}
          />
        ))
      ) : (
        <div>No Transactions</div>
      )}

    </Container>
  );
}

export default TransactionComponent;
