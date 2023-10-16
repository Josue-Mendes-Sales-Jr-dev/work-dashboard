import React from "react"

interface IInputProps{
    type?: string
    placeHolder?: string
    className?: string
    value?: any
    onChange?: (e:any)=> void
}

export const Input=(props:IInputProps)=>{
    return(
        <>
          <input type={props.type} placeholder={props.placeHolder} className={props.className} value={props.value} onChange={props.onChange}/>
        </>
    )
}