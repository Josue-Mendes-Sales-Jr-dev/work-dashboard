import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

type IBarChartsProps={
  title: string
  color: string
  dataKey: string
  chartData:object[]
}
export const BarCharts=(props:IBarChartsProps)=>{
 
    return(
        <>
        <div className='flex flex-col h-[100%] w-[100%]'>
          <h1 className='text-white'>
            {props.title}
          </h1>
          <ResponsiveContainer width="100%" height="80%">
             <BarChart width={350} height={240}  data={props.chartData}>
              <Tooltip/>
              <Bar
               dataKey={props.dataKey}
               fill={props.color} />
              </BarChart>
          </ResponsiveContainer>
        </div>
        </>
    )
}