/* eslint-disable */
import React, { useEffect, useState } from 'react'
import hTabs from '../hTabs.module.css'


const CheckBoxInputNumber = ({checkBoxTitle})=>{

    const [checked, setChecked] = useState(false);
    const [text, setText] = useState("");
    return(

<div style={{marginLeft:'10px'}}>

<input
        type="checkbox"
        
        className={hTabs.checkBox}
        value="Bike"
        // onClick={onClickCheckBoxHandler}
        checked={checked}
        onChange={() => {
          if(checked){
            setText("")
          }
      setChecked(!checked)
        }
     }
      ></input>
      <label className={hTabs.labels}>{checkBoxTitle}</label>
      <input className={hTabs.boxNum} type="number" 
      disabled={!checked}
      value={text}
      onChange={e => setText(e.target.value)}
      />

</div>

)
}

export default CheckBoxInputNumber

