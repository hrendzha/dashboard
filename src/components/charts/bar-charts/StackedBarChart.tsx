import { Bar, BarChart } from 'recharts';

interface IStackedBarChart {
  width: number;
  height: number;
  topBgColor: string;
  bottomBgColor: string;
}

export default function StackedBarChart(props: IStackedBarChart) {

  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    }
  ];
  return (
    <>
      <BarChart
        width={props.width}
        height={props.height}
        data={data}
        margin={{
          top: 0,
          right: 0,
          left: 0,
          bottom: 0
        }}
      >
        <Bar dataKey="pv" stackId="a" fill={props.bottomBgColor} barSize={8} />
        <Bar dataKey="uv" stackId="a" fill={props.topBgColor} barSize={8} />
      </BarChart>
    </>
  )
}
