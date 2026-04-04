import { useApp } from "../../context/AppContext";

function SummaryCards() {
  const { transactions } = useApp();

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="cards">
      <div className="card balance">
        <h3>₹ {balance}</h3>
        <p>Total Balance</p>
      </div>

      <div className="card income">
        <h3>₹ {income}</h3>
        <p>Total Income</p>
      </div>

      <div className="card expense">
        <h3>₹ {expense}</h3>
        <p>Total Expense</p>
      </div>
    </div>
  );
}

export default SummaryCards;