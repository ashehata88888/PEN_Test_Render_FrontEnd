import React from "react";
import {useSelector,useDispatch} from "react-redux";
import {incremented, decremented} from "./index" 

export const Counter = ()=>{
    const globalState = useSelector((state)=> state)
    const dispatch = useDispatch()
 
    return (
        <>
        <div>Counter is : {globalState.value}</div>
        <button onClick={()=>dispatch(incremented())}>Increase</button>
        <button onClick={()=>dispatch(decremented())}>Decrease</button>
        </>
    )

}