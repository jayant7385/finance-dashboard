import "./App.css";
import { useEffect } from "react";
import Container from "./components/layout/Container";
import Header from "./components/layout/Header";
import SummaryCards from "./components/dashboard/SummaryCards";
import Transactions from "./components/transactions/Transactions";
import TransactionForm from "./components/transactions/TransactionForm";
import Insights from "./components/dashboard/Insights";
import EditModal from "./components/transactions/EditModal";
import Charts from "./components/dashboard/Charts";
import { useApp } from "./context/AppContext";

function App() {
  const { role, darkMode } = useApp();

  useEffect(() => {
    document.body.className = darkMode ? "dark-body" : "light-body";
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark" : "app light"}>
      <Container>
        <Header />
        <SummaryCards />

        {/* ✅ NEW CHART SECTION */}
        <Charts />

        <div className="grid">
          <Transactions />
          <Insights />
        </div>

        {role === "admin" && <TransactionForm />}
        <EditModal />
      </Container>
    </div>
  );
}

export default App;