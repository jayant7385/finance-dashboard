import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { initialTransactions } from "../data/mockData";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [transactions, setTransactions] = useLocalStorage(
    "transactions",
    initialTransactions
  );

  const [darkMode, setDarkMode] = useLocalStorage("darkMode", false);
  const [role, setRole] = useState("viewer");

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });

  const [editing, setEditing] = useState(null);

  return (
    <AppContext.Provider
      value={{
        transactions,
        setTransactions,
        darkMode,
        setDarkMode,
        role,
        setRole,
        search,
        setSearch,
        typeFilter,
        setTypeFilter,
        categoryFilter,
        setCategoryFilter,
        dateRange,
        setDateRange,
        editing,
        setEditing,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);