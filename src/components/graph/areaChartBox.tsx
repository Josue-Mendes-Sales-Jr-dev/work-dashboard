import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Sun',
    books: 4000,
    clothes: 2400,
    eletronic: 2400,
  },
  {
    name: 'Mon',
    books: 3000,
    clothes: 1398,
    eletronic: 2210,
  },
  {
    name: 'Tue',
    books: 2000,
    clothes: 9800,
    eletronic: 2290,
  },
  {
    name: 'Wed',
    books: 2780,
    clothes: 3908,
    eletronic: 2000,
  },
  {
    name: 'Thu',
   books: 1890,
   clothes: 4800,
   eltronic: 2181,
  },
  {
    name: 'Fri',
   books: 2390,
   clothes: 3800,
   eletronic: 2500,
  },
  {
    name: 'Sat',
   books: 3490,
   clothes: 4300,
   eletronic: 2100,
  },
];


export const AreaChartsBox=()=>{
    return(
    <>
    <div className='flex flex-col items-center justify-around gap-4'>
        <h1 className='text-white text-[1.4rem] w-[100%] pl-2'>
        Total Revenue
        </h1>
        <ResponsiveContainer width="99%" height={300}>
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
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="books" stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey="clothes" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
          <Area type="monotone" dataKey="eletronic" stackId="1" stroke="#ffc658" fill="#ffc658" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
    </>
    )
}