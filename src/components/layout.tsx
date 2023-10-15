import { ReactNode } from "react"
import { Navbar } from "./navbar"
import { Header } from "./header"

interface ILayout{
  children: ReactNode
}

export const Layout=(props:ILayout)=>{
    return(
        <>
        <div className="w-screen h-[100vh] flex flex-col items-center justify-center bg-gray-900">
            <Header/>
           <div className="flex items-center justify-center w-[100%] h-[90%]">
              <Navbar/>
              <div className="w-full h-[100%] flex items-center justify-center overflow-hidden overflow-y-auto">
                {
                    props.children
                }
              </div>
           </div>
        </div>
        </>
    )
}