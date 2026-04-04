import { useApp } from "../../context/AppContext";

function Insights() {
  const { transactions } = useApp();

  if (!transactions.length) {
    return (
      <div className="box">
        <h3>Insights</h3>
        <p>No data available</p>
      </div>
    );
  }

  // ===== 1. Highest Spending Category =====
  const expenseMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      expenseMap[t.category] =
        (expenseMap[t.category] || 0) + t.amount;
    }
  });

  const highestCategory =
    Object.keys(expenseMap).length > 0
      ? Object.keys(expenseMap).reduce((a, b) =>
          expenseMap[a] > expenseMap[b] ? a : b
        )
      : "N/A";

  const highestAmount = expenseMap[highestCategory] || 0;

  // ===== 2. Monthly Comparison =====
  const monthly = {};

  transactions.forEach((t) => {
    const month = t.date.slice(0, 7); // YYYY-MM

    if (!monthly[month]) {
      monthly[month] = { income: 0, expense: 0 };
    }

    if (t.type === "income") {
      monthly[month].income += t.amount;
    } else {
      monthly[month].expense += t.amount;
    }
  });

  const months = Object.keys(monthly).sort();

  const lastMonth = months[months.length - 1];
  const prevMonth = months[months.length - 2];

  let comparisonText = "Not enough data";

  if (lastMonth && prevMonth) {
    const last = monthly[lastMonth];
    const prev = monthly[prevMonth];

    const incomeDiff = last.income - prev.income;
    const expenseDiff = last.expense - prev.expense;

    comparisonText = `
      Income ${incomeDiff >= 0 ? "increased" : "decreased"} by ₹${Math.abs(
      incomeDiff
    )}, 
      Expense ${expenseDiff >= 0 ? "increased" : "decreased"} by ₹${Math.abs(
      expenseDiff
    )}
    `;
  }

  // ===== 3. Useful Observation =====
  const totalIncome = transactions
    .filter((t) => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);

  let observation = "";

  if (totalExpense > totalIncome) {
    observation = "⚠️ You are spending more than your income.";
  } else if (totalExpense < totalIncome) {
    observation = "✅ Good job! You are saving money.";
  } else {
    observation = "⚖️ Your income and expenses are balanced.";
  }

  return (
    <div className="box">
      <h3>Insights</h3>

      <div style={{ marginBottom: "10px" }}>
        <strong>Highest Spending Category:</strong>
        <p>
          {highestCategory} (₹ {highestAmount})
        </p>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <strong>Monthly Comparison:</strong>
        <p>{comparisonText}</p>
      </div>

      <div>
        <strong>Observation:</strong>
        <p>{observation}</p>
      </div>
    </div>
  );
}

export default Insights;