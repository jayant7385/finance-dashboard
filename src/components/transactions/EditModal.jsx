import { useApp } from "../../context/AppContext";
import { useState, useEffect } from "react";

function EditModal() {
  const { editing, setEditing, transactions, setTransactions } = useApp();

  const [form, setForm] = useState({
    amount: "",
    category: "",
    date: "",
    type: "expense",
  });

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  if (!editing) return null;

  const handleSave = () => {
    const updated = transactions.map((t) =>
      t.id === editing.id ? form : t
    );
    setTransactions(updated);
    setEditing(null);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <h3>Edit Transaction</h3>

        <input
          type="number"
          value={form.amount}
          onChange={(e) =>
            setForm({ ...form, amount: e.target.value })
          }
        />

        <input
          value={form.category}
          onChange={(e) =>
            setForm({ ...form, category: e.target.value })
          }
        />

        <input
          type="date"
          value={form.date}
          onChange={(e) =>
            setForm({ ...form, date: e.target.value })
          }
        />

        <select
          value={form.type}
          onChange={(e) =>
            setForm({ ...form, type: e.target.value })
          }
        >
          <option value="expense">Expense</option>
          <option value="income">Income</option>
        </select>

        <div className="modal-actions">
          <button className="save-btn" onClick={handleSave}>
            Save
          </button>
          <button
            className="cancel-btn"
            onClick={() => setEditing(null)}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditModal;