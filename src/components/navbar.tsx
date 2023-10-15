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
        <div className={`w-[50px] sm:w-[150px] h-[100%] flex items-center justify-center gap-2 flex-col bg-gray-900 border-r-[2px]  border-t-[1px] border-t-gray-800 rounded border-gray-800 `}>
           <div className="flex flex-col justify-around w-[96%] overflow-hidden h-[95vh] overflow-y-auto">
              <strong className="hidden sm:block w-[80%] text-gray-600">Main</strong>
              <ul className="w-[100%] flex flex-col justify-center text-white py-1 sm:py-0 ">
                 <li className="hover:bg-gray-700 w-[100%] flex items-center justify-center hover:rounded-l-xl py-[.5rem] sm:rounded-xl sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%]" href=""><AiOutlineHome/><span className="hidden sm:block">Homepage</span></Link></li>
                 <li className="hover:bg-gray-700 w-[100%] flex items-center justify-center hover:rounded-l-xl py-[.5rem] sm:rounded-xl sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%]" href=""><IoPersonAddOutline/><span className="hidden sm:block">Profile</span></Link></li>
               </ul>
               <strong className="hidden sm:block w-[80%] text-gray-600">Lists</strong>
              <ul className="w-[100%] flex flex-col justify-center text-white py-1 sm:py-0">
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%]" href=""><FiUsers/> <span className="hidden sm:block"> Users </span></Link></li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%]"  href=""><MdProductionQuantityLimits/> <span className="hidden sm:block">Products</span></Link></li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%]"  href=""><BsBorderStyle/> <span className="hidden sm:block">Orders</span></Link> </li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%]"  href=""><BsFillFileEarmarkPostFill/> <span className="hidden sm:block">Posts</span> </Link></li>
               </ul>
               <strong className="hidden sm:block w-[80%] text-gray-600">General</strong>
              <ul className="w-[100%] flex flex-col justify-center text-white py-1 sm:py-0">
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%]"  href=""><LiaElementor/> <span className="hidden sm:block">Elements</span></Link></li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%]"  href=""><MdOutlineSpeakerNotes/> <span className="hidden sm:block"> Notas</span></Link></li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%]"  href=""><FaWpforms/> <span className="hidden sm:block"> forms </span></Link></li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%]"  href=""><SlCalender/> <span className="hidden sm:block"> Calender </span></Link></li>
               </ul>
               <strong className="hidden sm:block w-[80%] text-gray-600">Maintename</strong>
              <ul className="w-[100%] flex flex-col justify-center text-white py-1 sm:py-0">
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%]"  href=""><FiSettings/> <span className="hidden sm:block">settings</span></Link></li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%]"  href=""><LuDatabaseBackup/><span className="hidden sm:block"> Backups</span></Link></li>
               </ul>
               <strong className="hidden sm:block w-[80%] text-gray-600">Analytics</strong>
              <ul className="w-[100%] flex flex-col  justify-center text-white py-1 sm:py-0">
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%]"  href=""><BiBarChartSquare/><span className="hidden sm:block"> Charts </span></Link></li>
                 <li className="hover:bg-gray-700 sm:rounded-xl w-[100%] flex items-center justify-center hover:rounded-l-xl py-[.5rem] sm:py-0"><Link className="flex gap-1 items-center sm:w-[80%]"  href=""><AiOutlineLogout/> <span className="hidden sm:block">Logout </span></Link></li>
               </ul>
           </div>
        </div>
        </>
    )
}