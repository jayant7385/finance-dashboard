import { useState } from "react";
import { useApp } from "../../context/AppContext";

function TransactionForm() {
  const { transactions, setTransactions } = useApp();

  const [form, setForm] = useState({
    date: "",
    amount: "",
    category: "",
    type: "expense",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const amountNumber = Number(form.amount);

    if (!amountNumber || amountNumber <= 0) {
      alert("Enter valid amount");
      return;
    }

    const newTransaction = {
      id: Date.now(),
      ...form,
      amount: amountNumber,
    };

    setTransactions([newTransaction, ...transactions]);

    setForm({
      date: "",
      amount: "",
      category: "",
      type: "expense",
    });
  };

  return (
    <div className="box">
      <h3>Add Transaction</h3>

      <form onSubmit={handleSubmit} className="form">
        <input type="date" required onChange={(e) =>
          setForm({ ...form, date: e.target.value })
        } />

        <input placeholder="Amount" required onChange={(e) =>
          setForm({ ...form, amount: e.target.value })
        } />

        <input placeholder="Category" required onChange={(e) =>
          setForm({ ...form, category: e.target.value })
        } />

        <select onChange={(e) =>
          setForm({ ...form, type: e.target.value })
        }>
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <button>Add</button>
      </form>
    </div>
  );
}

export default TransactionForm;