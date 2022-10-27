import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Label, LabelList, PieChart, Pie } from 'recharts';

interface IPieChart {
  percent: number;
  color: string;
  title: string;
}

export default function RootPieChart(props: IPieChart) {
  const data = [
    { name: 'Group A', value: props.percent },
    { name: 'Group B', value: 100 - props.percent }
  ];
  return (
    <div className="root-pie-chart">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={162} height={162}>
          <text x="50%" y="50%" dy={6} textAnchor="middle" fill="#0A0603" fontFamily="Inter" fontSize="20px" fontWeight={600}>
            {props.percent} %
          </text>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={0}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
          >
            <Cell key={`cell-1`}
              strokeWidth={0}
              fill={props.color}
            />
            <Cell key={`cell-2`}
              strokeWidth={0}
              fill="#ECEFF7"
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <h4 className="text-regular-1 root-pie-chart__title">{props.title}</h4>
    </div>
  )
}
