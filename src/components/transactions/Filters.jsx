import { useApp } from "../../context/AppContext";

function Filters() {
  const {
    search,
    setSearch,
    typeFilter,
    setTypeFilter,
    dateRange,
    setDateRange,
  } = useApp();

  const handleReset = () => {
    setSearch("");
    setTypeFilter("all");
    setDateRange({ from: "", to: "" });
  };

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={typeFilter}
        onChange={(e) => setTypeFilter(e.target.value)}
      >
        <option value="all">Type: All</option>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>

      <input
        type="date"
        value={dateRange.from}
        onChange={(e) =>
          setDateRange({ ...dateRange, from: e.target.value })
        }
      />

      <input
        type="date"
        value={dateRange.to}
        onChange={(e) =>
          setDateRange({ ...dateRange, to: e.target.value })
        }
      />

      {/* ✅ RESET BUTTON */}
      <button className="reset-btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}

export default Filters;