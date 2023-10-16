import { Input } from "../input"

interface IBoxProps{
    className?: string
    id?: any
}
export const Box=(props:IBoxProps)=>{
    return(
        <>
          <form action="#" id={props.id} className={`${props.className} placeholder:text-black hidden absolute z-30 grid gap-2 md:gap-0 py-5 md:py-0  md:grid-cols-3 bg-gray-800 items-center text-white w-[80%] md:w-[30rem] pl-5 md:h-[16rem] rounded-lg`}>
             <div className="flex flex-col w-[90%] ">
                <label> Fist name</label>
                <Input type="text" className="border text-black py-1 "/>
             </div>
             <div className="flex flex-col w-[90%]">
                <label> Last name</label>
                <Input type="text" className="border text-black py-1 "/>
             </div>
             <div className="flex flex-col w-[90%]">
                <label> Email</label>
                <Input type="email" className="border text-black py-1 "/>
             </div>
             <div className="flex flex-col w-[90%] ">
                <label> Phone</label>
                <Input type="text" className="border text-black py-1 "/>
             </div>
             <div className="flex flex-col w-[90%]">
                <label> CreatedAt</label>
                <Input type="date" className="border text-black py-1 "/>
             </div>
             <div className="flex flex-col w-[90%] items-start">
                <label> Verified</label>
                <Input type="checkbox" className="border text-black py-1 "/>
             </div>
             <Input type="submit" className="bg-gray-500 rounded py-1 w-[90%]" />
          </form>
        </>
    )
}