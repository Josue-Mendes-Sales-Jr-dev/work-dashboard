import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const data = [
  { name: 'Blue ', value: 400, color: '#0088FE'},
  { name: 'Green', value: 300, color: '#00C49F'},
  { name: 'Yellow', value: 300, color: '#FFBB28'},
  { name: 'Orange', value: 200, color: '#FF8042'},
];


export const PieChartsBox=()=>{
    return(
    <>
    <div className='flex flex-col items-center justify-around gap-4'>
        <h1 className='text-white text-[1.4rem] w-[100%] pl-2'>
            Leads by Source
        </h1>
        <ResponsiveContainer width="99%" height={250}>
         <PieChart>
            <Tooltip
            contentStyle={{background:"white", border: "white"}}
            />
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"98%"}
              fill="#030203"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((items) => (
                <Cell key={items.name} fill={items.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <ul className='flex gap-4'>
          {
            data.map((items)=>(
              <li key={items.name} className="flex flex-col sm:flex-wrap sm:flex-row lg:flex-col items-center justify-center">
                 <h1 className='flex items-center gap-1 text-white text-[0.8rem]'> <span style={{background:items.color}} className={` w-[8px] h-[8px]`}></span> {items.name}</h1>
                  <span className='text-white text-[0.7rem]'>{items.value}</span>
              </li>
            ))
          }
        </ul>
    </div>
    </>
    )
}