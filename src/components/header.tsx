import {BsFullscreen} from "react-icons/bs"
import {BsSearch} from "react-icons/bs"
import {HiOutlineBellAlert} from "react-icons/hi2"
import {FaNotesMedical} from "react-icons/fa"
import {CiPlane} from "react-icons/ci"
import {BsGearWideConnected} from "react-icons/bs"

interface IHeader{
 
}

export const Header=(props:IHeader)=>{
    return(
        <>
        <div className={`w-screen bg-gray-900 text-gray-300 h-[65px] flex items-center justify-between px-5`}>
           <div className="flex gap-2 items-center">
              <CiPlane/>
              <strong>Jm</strong>
           </div>
           <div className="flex gap-5 items-center justify-center">
            <BsSearch/>
             <BsFullscreen/>
             <HiOutlineBellAlert/>
             <FaNotesMedical/>
             <span className="w-[2.2rem] h-[2.2rem] bg-gray-300 rounded-full">

             </span>
             <BsGearWideConnected/>
           </div>
        </div>
        </>
    )
}