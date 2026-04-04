import { useApp } from "../../context/AppContext";

function Header() {
  const { role, setRole, darkMode, setDarkMode } = useApp();

  return (
    <div className="header">
      <h2>💰 Finance Dashboard</h2>

      <div className="controls">
        <select
          className="role-select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          style={{
            background: darkMode ? "#3a3a4f" : "#ffffff",
            color: darkMode ? "#ffffff" : "#111",
          }}
        >
          <option value="viewer" style={{ color: "#111" }}>
            Viewer
          </option>
          <option value="admin" style={{ color: "#111" }}>
            Admin
          </option>
        </select>

        <button
          className="theme-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? "☀ Light" : "🌙 Dark"}
        </button>
      </div>
    </div>
  );
}

export default Header;