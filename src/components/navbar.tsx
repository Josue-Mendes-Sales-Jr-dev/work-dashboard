import Link from "next/link"
import {AiOutlineHome} from "react-icons/ai"
import {IoPersonAddOutline } from "react-icons/io5"
import {FiUsers} from "react-icons/fi"
import {MdProductionQuantityLimits} from "react-icons/md"
import {BsBorderStyle} from "react-icons/bs"
import {BsFillFileEarmarkPostFill} from "react-icons/bs"
import {LiaElementor} from "react-icons/lia"
import {MdOutlineSpeakerNotes} from "react-icons/md"
import {FaWpforms} from "react-icons/fa"
import {SlCalender} from "react-icons/sl"
import {FiSettings} from "react-icons/fi"
import {LuDatabaseBackup} from "react-icons/lu"
import {BiBarChartSquare} from "react-icons/bi"
import {AiOutlineLogout} from "react-icons/ai"

interface INavbar{
 
}

export const Navbar=(props:INavbar)=>{
    return(
        <>
        <div className={`w-[50px] jm:w-[50px] sm:w-[150px] h-[100%] flex items-center justify-center gap-2 flex-col bg-gray-900 border-r-[2px]  border-t-[1px] border-t-gray-800 rounded border-gray-800 `}>
           <div className="flex flex-col justify-around w-[96%] overflow-hidden h-[95vh] ">
              <strong className="hidden jm:hidden sm:block w-[80%] text-gray-600">Main</strong>
              <ul className="w-[100%] flex flex-col jm:gap-1 justify-center text-white py-1 sm:py-0 ">
                 <li className="hover:bg-gray-700 w-[100%] flex items-center justify-center hover:rounded-l-xl jm:py-[.5rem] py-[.5rem] sm:rounded-xl sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%] jm:w-[50%]" href="/"><AiOutlineHome/><span className="hidden sm:block jm:hidden">Homepage</span></Link></li>
                 <li className="hover:bg-gray-700 w-[100%] flex items-center justify-center hover:rounded-l-xl jm:py-[.5rem] py-[.5rem] sm:rounded-xl sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%] jm:w-[50%]" href=""><IoPersonAddOutline/><span className="hidden sm:block jm:hidden">Profile</span></Link></li>
               </ul>
               <strong className="jm:hidden hidden sm:block w-[80%] text-gray-600">Lists</strong>
              <ul className="w-[100%] flex flex-col jm:gap-1 justify-center text-white py-1 sm:py-0">
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl jm:py-[.5rem] py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%] jm:w-[50%]" href="/users"><FiUsers/> <span className="hidden sm:block jm:hidden"> Users </span></Link></li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl jm:py-[.5rem] py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%] jm:w-[50%]"  href=""><MdProductionQuantityLimits/> <span className="hidden sm:block jm:hidden">Products</span></Link></li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl jm:py-[.5rem] py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%] jm:w-[50%]"  href=""><BsBorderStyle/> <span className="hidden sm:block jm:hidden">Orders</span></Link> </li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl jm:py-[.5rem] py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%] jm:w-[50%]"  href=""><BsFillFileEarmarkPostFill/> <span className="hidden sm:block jm:hidden">Posts</span> </Link></li>
               </ul> 
               <strong className="jm:hidden hidden sm:block w-[80%] text-gray-600">General</strong>  
              <ul className="w-[100%] flex flex-col jm:gap-1 justify-center text-white py-1 sm:py-0"> 
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl jm:py-[.5rem] py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%] jm:w-[50%]"  href=""><LiaElementor/> <span className="hidden sm:block jm:hidden">Elements</span></Link></li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl jm:py-[.5rem] py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%] jm:w-[50%]"  href=""><MdOutlineSpeakerNotes/> <span className="hidden sm:block jm:hidden"> Notas</span></Link></li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl jm:py-[.5rem] py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%] jm:w-[50%]"  href=""><FaWpforms/> <span className="hidden sm:block jm:hidden"> forms </span></Link></li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl jm:py-[.5rem] py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%] jm:w-[50%]"  href=""><SlCalender/> <span className="hidden sm:block jm:hidden"> Calender </span></Link></li>
               </ul>
               <strong className="jm:hidden hidden sm:block w-[80%] text-gray-600">Maintename</strong>
              <ul className="w-[100%] flex flex-col jm:gap-1 justify-center text-white py-1 sm:py-0">
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl jm:py-[.5rem] py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%] jm:w-[50%]"  href=""><FiSettings/> <span className="hidden sm:block jm:hidden">settings</span></Link></li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl jm:py-[.5rem] py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%] jm:w-[50%]"  href=""><LuDatabaseBackup/><span className="hidden sm:block jm:hidden"> Backups</span></Link></li>
               </ul>
               <strong className="jm:hidden hidden sm:block w-[80%] text-gray-600">Analytics</strong>
              <ul className="w-[100%] flex flex-col jm:gap-1 justify-center text-white py-1 sm:py-0">
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl jm:py-[.5rem] py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%] jm:w-[50%]"  href=""><BiBarChartSquare/><span className="hidden sm:block jm:hidden"> Charts </span></Link></li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl jm:py-[.5rem] py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%] jm:w-[50%]"  href=""><AiOutlineLogout/> <span className="hidden sm:block jm:hidden">Logout </span></Link></li>
               </ul>
           </div>
        </div>
        </>
    )
}