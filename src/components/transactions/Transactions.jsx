import { useApp } from "../../context/AppContext";
import Filters from "./Filters";

function Transactions() {
  const {
    transactions,
    setTransactions,
    search,
    role,
    setEditing,
    typeFilter,
    dateRange,
  } = useApp();

  const deleteItem = (id) => {
    setTransactions(transactions.filter((t) => t.id !== id));
  };

  const filtered = transactions.filter((t) => {
    const matchSearch =
      t.category.toLowerCase().includes(search.toLowerCase());

    const matchType =
      typeFilter === "all" || t.type === typeFilter;

    const matchDate =
      (!dateRange.from || t.date >= dateRange.from) &&
      (!dateRange.to || t.date <= dateRange.to);

    return matchSearch && matchType && matchDate;
  });

  return (
    <div className="box">
      <h3>Transactions</h3>

      <Filters />

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>₹</th>
            <th>Category</th>
            <th>Type</th>
            {role === "admin" && <th>Actions</th>}
          </tr>
        </thead>

        <tbody>
          {filtered.map((t) => (
            <tr key={t.id}>
              <td>{t.date}</td>

              <td className={t.type === "income" ? "income-text" : "expense-text"}>
                ₹ {t.amount}
              </td>

              <td>{t.category}</td>

              <td className={t.type === "income" ? "income-text" : "expense-text"}>
                {t.type}
              </td>

              {role === "admin" && (
                <td>
                  <div className="action-buttons">
                    <button className="edit-btn" onClick={() => setEditing(t)}>
                      Edit
                    </button>
                    <button className="delete-btn" onClick={() => deleteItem(t.id)}>
                      Delete
                    </button>
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;