import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Layout } from '@/components/layout'
import { TopBox } from '@/components/topBox'
import { ChartLineBox } from '@/components/graph/chartsLineBox'
import { BarCharts } from '../components/graph/barCharts'
import {barChartBoxVisit,barChartBoxRevenue} from '../data'
import { PieChartsBox } from '@/components/graph/pieChartBox'
import { AreaChartsBox } from '@/components/graph/areaChartBox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
    <Layout>
       <div className="w-[98%] jr:mt-[91.5rem] mj:mt-[80rem] mt-[93rem]  sm:mt-0 h-[85vh] flex flex-col sm:grid  lg:grid-cols-4 lg:grid-row-4 md:grid-cols-3 items-center justify-center gap-4">
           <div className='bg-gray-700 rounded-lg p-2  border border-black row-span-3 w-[98%] h-[100%]'>
             <TopBox/>
           </div>
           <div className='bg-gray-700 rounded-lg p-2  border border-black w-[98%] h-[100%]'>
            <ChartLineBox title="Total Users" views={11.238} porc='45'/>
           </div>
           <div className='bg-gray-700 rounded-lg p-2  border border-black w-[98%] h-[100%]'>
            <ChartLineBox title="Total Revenue" views={56.432} porc='-12'/>
           </div>
           <div className='bg-gray-700 rounded-lg p-2  border border-black w-[98%] h-[100%]'>
            <ChartLineBox title="Total Products" views={284} porc='21'/>
           </div>
           <div className='bg-gray-700 rounded-lg p-2  border border-black w-[98%] h-[100%]'>
            <ChartLineBox title="Total Ratio" views={12} porc='12'/>
           </div>
         
           <div className='bg-gray-700 rounded-lg p-2  border border-black w-[98%] h-[100%]'>
           <BarCharts {...barChartBoxVisit}/>
            </div>
           <div className='bg-gray-700 rounded-lg p-2  border border-black w-[98%]  h-[100%]'>
           <BarCharts {...barChartBoxRevenue}/>
           </div>
           <div className='bg-gray-700 rounded-lg p-2  border border-black w-[98%] sm:w-[99%] h-[100%] lg:col-start-2 lg:row-start-3 col-span-2 row-span-2'>
           <AreaChartsBox/>
           </div>
           <div className='bg-gray-700 rounded-lg p-2  border border-black row-span-3  w-[98%] lg:row-start-1 lg:col-start-4 h-[100%]'>
            <PieChartsBox/>
           </div>
      </div>
    </Layout>
   </>
  )
}
