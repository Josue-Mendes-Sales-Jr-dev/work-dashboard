
import { Input } from "../input"

interface IHeader{
  value:any
  onChange: (e:any)=>void
}

export const Header=(props:IHeader)=>{
    return(
        <>
          
        <div className={` bg-gray-300 w-[100%] h-[40px] flex items-center justify-between px-5`}>
              <div className="flex gap-2">
                 <Input type="search" placeHolder="search..." className="placeholder:text-gray-600 border-b outline-none bg-gray-300" value={props.value} onChange={props.onChange}  />
              </div>
              <button>
                Export
              </button>          
        </div>
        </>
    )
}