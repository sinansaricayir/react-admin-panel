import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import "./chart.scss";

const Chart = () => {
  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 400 },
    { name: "April", Total: 800 },
    { name: "May", Total: 2200 },
    { name: "June", Total: 3400 },
  ];

  return (
    <div className="chart">
      <div className="title">Last 6 Months (Revenue)</div>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" className="chartGrid" />
          <XAxis dataKey="name" stroke="gray" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
