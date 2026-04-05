import {
  Chart as ChartJS,
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line, Pie } from "react-chartjs-2";
import { useApp } from "../../context/AppContext";

ChartJS.register(
  LineElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend
);

function Charts() {
  const { transactions } = useApp();

  const sorted = [...transactions].sort((a, b) =>
    a.date.localeCompare(b.date)
  );

  let runningBalance = 0;
  const labels = [];
  const dataPoints = [];

  sorted.forEach((t) => {
    runningBalance += t.type === "income" ? t.amount : -t.amount;
    labels.push(t.date);
    dataPoints.push(runningBalance);
  });

  const lineData = {
    labels,
    datasets: [
      {
        label: "Balance",
        data: dataPoints,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59,130,246,0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const categoryMap = {};

  transactions.forEach((t) => {
    if (t.type === "expense") {
      categoryMap[t.category] =
        (categoryMap[t.category] || 0) + t.amount;
    }
  });

  const pieData = {
    labels: Object.keys(categoryMap),
    datasets: [
      {
        data: Object.values(categoryMap),
        backgroundColor: ["#fbbf24", "#ef4444", "#3b82f6", "#22c55e"],
      },
    ],
  };

  return (
    <div className="charts-grid">
      <div className="box">
        <h3>Balance Trend</h3>
        <Line data={lineData} />
      </div>
      
      <div className="box">
        <h3>Spending Breakdown</h3>
        <Pie data={pieData} />
      </div>
    </div>
  );
}

export default Charts;
