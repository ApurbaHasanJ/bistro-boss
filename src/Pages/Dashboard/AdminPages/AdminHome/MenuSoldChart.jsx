import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from "recharts";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useEffect, useState } from "react";

const MenuSoldChart = () => {
  const [orders, setOrders] = useState([]);
  const [axiosSecure] = useAxiosSecure();
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "red", "pink"];

  // get order stats
  useEffect(() => {
    axiosSecure
      .get(`/pay-history/admin/order-stats`)
      .then((res) => setOrders(res.data));
  },[]);

  console.log(orders);

  const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${
      x + width / 2
    },${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${
      x + width
    }, ${y + height}
    Z`;
  };

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;

    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  return (
    <ResponsiveContainer width="100%" height={400} className="drop-shadow-2xl">
      <BarChart
        data={orders}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5,
        }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="category" />
        <YAxis />
        <Bar
          dataKey="total"
          fill="#8884d8"
          shape={<TriangleBar />}
          label={{ position: "top" }}>
          {orders.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % 20]} />
          ))}
        </Bar>
      </BarChart>
      <div className="text-yellow-600 font-semibold text-center text-lg">
        --Sold--
      </div>
    </ResponsiveContainer>
  );
};

export default MenuSoldChart;
