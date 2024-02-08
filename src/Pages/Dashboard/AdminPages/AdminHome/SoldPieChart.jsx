import axios from "axios";
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import PieChartLegend from "./PieChartLegend";

const SoldPieChart = () => {
  const [orders, setOrders] = useState([]);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#BB34F5"];

  useEffect(() => {
    axios
      .get(`http://localhost:5000/pay-history/admin/order-stats`)
      .then((res) => setOrders(res.data));
  }, []);
  console.log(orders);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <ResponsiveContainer width="100%" height="100%" className="drop-shadow-2xl">
      <PieChart>
        <Legend content={<PieChartLegend />} verticalAlign="top" height={36} />
        <Pie
          data={orders}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={120}
          fill="#8884d8"
          dataKey="count">
          {orders.map((entry, index) => (
            <Cell
              name={entry.category}
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SoldPieChart;
