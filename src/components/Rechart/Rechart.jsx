import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const Rechart = () => {
  const data = [
    { month: "January", Math: 78, Chemistry: 70, Physics: 68 },
    { month: "February", Math: 82, Chemistry: 72, Physics: 70 },
    { month: "March", Math: 85, Chemistry: 74, Physics: 72 },
    { month: "April", Math: 88, Chemistry: 77, Physics: 75 },
    { month: "May", Math: 90, Chemistry: 80, Physics: 78 },
    { month: "June", Math: 92, Chemistry: 83, Physics: 80 },
    { month: "July", Math: 94, Chemistry: 85, Physics: 82 },
    { month: "August", Math: 95, Chemistry: 87, Physics: 84 },
    { month: "September", Math: 96, Chemistry: 88, Physics: 86 },
    { month: "October", Math: 98, Chemistry: 90, Physics: 88 },
    { month: "November", Math: 99, Chemistry: 91, Physics: 89 },
    { month: "December", Math: 100, Chemistry: 93, Physics: 91 },
  ];
  return (
    <div>
      <LineChart width={1200} height={600} data={data}>
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="Math" stroke="#4bc0c0"></Line>
      <Line type="monotone" dataKey="Chemistry" stroke="green"></Line>
      <Line type="monotone" dataKey="Physics" stroke="coral"></Line>

      </LineChart>
      
    </div>
  );
};

export default Rechart;
