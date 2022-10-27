import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

interface IBitcoinLineChart {
  data: Array<any>;
  strokeColor: string;
  strokeWidth?: number;
}

export default function CryptoLineChart(props: IBitcoinLineChart) {
  return (
    <div className="simple-line-chart">
      <ResponsiveContainer>
        <LineChart
          data={props.data}
          margin={{
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
          }}
        >
          <Tooltip />
          <Line
            type="linear"
            dataKey="pv"
            stroke={props.strokeColor}
            strokeWidth={props.strokeWidth || 2}
            dot={{ r: 0 }}
            activeDot={{ r: 0 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
