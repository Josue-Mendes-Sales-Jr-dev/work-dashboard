import { Header } from "./header"
import {userRows} from "../../data"
import Image from "next/image"
import { Input } from "../input"

export const UsersDate=()=>{
    return(
        <>
        <div className="flex items-center justify-center flex-col gap-2 w-[100%] h-[100vh]">
            <div className="flex w-[90%] items-center gap-2 h-[30px]">
                      <h1 className="text-white">
                        Users
                      </h1>
                      <button className="bg-gray-300 px-2 py-1 rounded hover:bg-gray-400 text-gray-900">
                       Add New User
                      </button>
             </div>
            <div className=" md:min-w-[650px] flex flex-col items-center rounded-lg w-[90%] h-[80vh] bg-gray-300">
            
                <div className=" w-[100%] min-h-[70vh] flex flex-col justify-around rounded-t-lg border-box overflow-hidden">
                   <Header/>
                   <div className="flex items-center  h-[35px] gap-2 sm:gap-0  border-b-gray-500 py-1 px-5 text-[.6rem] sm:text-[.7rem] ">
                                   <Input type="checkbox" className="sm:mr-5" />
                                    <div className="w-[25px]">
                                       id
                                    </div>
                                    <div className="w-[40px]">
                                        Avatar
                                    </div>
                                    <div className="w-[100px]">
                                        FirstName
                                    </div>
                                    <div className="w-[100px] hidden md:block">
                                        LastName
                                    </div>
                                    <div className="w-[200px] hidden md:block">
                                        Email
                                    </div>
                                    <div className="w-[120px] hidden md:block">
                                        Phone
                                    </div>
                                    <div className="w-[120px]">
                                        CreatedAt
                                    </div>
                                     <div className="w-[100px]">
                                        Verified
                                     </div>
                                     <div className="w-[100px]">
                                        Action
                                     </div>
                    </div>
                    <ul className="flex flex-col  h-[75%] overflow-hidden">
                        {
                            userRows.map((items)=>(
                                <li key={items.id} className="flex border border-gray-400 gap-2 sm:gap-0 py-1 px-5 text-[.6rem] sm:text-[.7rem] hover:bg-gray-500 hover:text-white">
                                    <Input type="checkbox" className="sm:mr-5" />
                                    <div className="w-[25px]">
                                       {items.id}
                                    </div>
                                    <div className="w-[40px]">
                                        <Image src={items.img} width={200} height={200} className="w-[1.2rem] h-[1.2rem] rounded-full" alt={items.firstName}/>
                                    </div>
                                    <div className="w-[100px]">
                                        {items.firstName}
                                    </div>
                                    <div className="w-[100px] hidden md:block">
                                        {items.lastName}
                                    </div>
                                    <div className="w-[200px] hidden md:block">
                                        {items.email}
                                    </div>
                                    <div className="w-[120px] hidden md:block">
                                        {items.phone}
                                    </div>
                                    <div className="w-[120px]">
                                        {items.createdAt}
                                    </div>
                                     <div className="w-[100px]">
                                        {items.verified}
                                     </div>
                                     <div className="w-[100px]">
                                        dd
                                     </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="w-[100%] text-[.8rem] flex items-center justify-end pr-10 h-[35px]">
                        1-8 of 8
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}