import {BsFillFilePersonFill} from "react-icons/bs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

interface IChartLineBoxProps{
   title?: string
   views?:number
   porc?: string
}

export const ChartLineBox=(props:IChartLineBoxProps)=>{
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
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

    return(
        <>
        <div className="flex w-[100%] h-[100%] p-1">
           <div className="flex flex-col w-[50%] h-[100%]">
              <div className="flex gap-1 items-center w-[100%] h-[50%]">
                 <BsFillFilePersonFill/>
                 <p className="text-white text-[0.7rem]">
                   {props.title}
                 </p>
              </div>
              <span className="text-white text-[1.2rem]">
                <strong>
                  {props.views}
                </strong>
              </span>
              <p className="text-gray-500">
               View all
              </p>
           </div> 
           <div className="fex flex-col items-center w-[50%] h-[100%]">
              <span className="text-[2rem] w-[100%] h-[50%] items-center bg-gray-300">
               <ResponsiveContainer width="100%" height="50%">
                  <LineChart width={100} height={50} className="w-[100%] h-[100%]" data={data}>
                     <Tooltip
                     position={{x:10, y:-50}}
                     labelStyle={{display:"none"}}
                     contentStyle={{background:"transparent", border:"none"}}/>
                    
                     <Line 
                          type="monotone" 
                          dataKey="pv"
                          stroke="#8884d8" 
                          strokeWidth={2} />
                  </LineChart>
               </ResponsiveContainer>
               </span>
               <p className="h-[25%] text-end text-[1.2rem] text-green-400">
                  <strong >
                   {props.porc}%
                  </strong>
               </p>
               <p className="h-[25%] text-end text-white">
                this month
               </p>
           </div>
        </div>
        </>
    )
}