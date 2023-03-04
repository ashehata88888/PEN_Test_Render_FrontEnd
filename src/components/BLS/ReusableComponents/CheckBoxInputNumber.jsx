/* eslint-disable */
import React, { useEffect, useState,useRef } from 'react'
import hTabs from '../hTabs.module.css'
import { useSelector, useDispatch } from "react-redux";
import {
  updateNeuro_Surgery
} from "../../../store/index"


const CheckBoxInputNumber = ({ checkBoxTitle }) => {

  const globalState = useSelector((state)=> state)

  const [checked, setChecked] = useState(((globalState.marketPotentials.neuro_surgery != null || globalState.marketPotentials.neuro_surgery != undefined)  && checkBoxTitle === "Neuro surgery No./Month") ? true : false);
  const [text, setText] = useState((globalState.marketPotentials.neuro_surgery != 0 && checkBoxTitle === "Neuro surgery No./Month") ? globalState.marketPotentials.neuro_surgery : "");

  const dispatch = useDispatch()

  // globalState.marketPotentials.neuro_surgery
  
  const inputEl = useRef(null);

  useEffect(() => {
    if(checked){
      inputEl.current.focus();
    }
  
  }, [checked]);
  


  const onChangeTextHandler = (e) => {
    e.target.value < 1 && setChecked(false)

    // console.log("value of neuro surgery No" , e.target.value)
    if (checkBoxTitle === "Neuro surgery No./Month") {

      console.log("value of neuro surgery No" , text)
        
       dispatch(updateNeuro_Surgery(e.target.value))
       e.target.value < 1 && dispatch(updateNeuro_Surgery())
      // dispatch(updateNeuro_Surgery(text))
    }

  


    setText(e.target.value)

  }

  // if(globalState.marketPotentials.neuro_surgery != 0){
  //   setChecked(true)
  //   setText(globalState.marketPotentials.neuro_surgery)
  
  // }








  return (

    <div style={{ marginLeft: '10px' }}>

      <input
        type="checkbox"

        className={hTabs.checkBox}
        value="Bike"
        // onClick={onClickCheckBoxHandler}
        checked={checked}
        onChange={() => {
          if (checked) {
            setText("")
            checkBoxTitle === "Neuro surgery No./Month" && dispatch(updateNeuro_Surgery())
          }
          setChecked(!checked)
     

        }
        }
      ></input>
      <label className={hTabs.labels}>{checkBoxTitle}</label>
      <input className={hTabs.boxNum} type="number"
        disabled={!checked}
        value={text}
        autofocus="true"
        ref={inputEl}
        // onFocus={e => e.currentTarget.select()}
        onChange={e => onChangeTextHandler(e)}
      />

    </div>

  )
}

export default CheckBoxInputNumber

