/* eslint-disable */
import React, { useEffect, useState } from 'react'
import hTabs from '../hTabs.module.css'
import { display } from '@mui/system';
import { styled } from '@mui/material/styles';


const CheckCompetitor = ({checkBoxTitle})=>{

    const [checked, setChecked] = useState(false);
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [selected, setSelected]= useState(true);

    return(

<div style={{marginLeft:'10px'}} >
  <ul className={hTabs.competitorUL}>
    <li className={hTabs.competitorli}>
    <input  
        type="checkbox"
        
        className={hTabs.checkBox}
        value="Bike"
        // onClick={onClickCheckBoxHandler}
        checked={checked}
        onChange={() => {
          if(checked){
            setText("")
            setText2("")
            setSelected(!selected)
          }
          if(checked===false){
            setText("")
            setText2("")
            setSelected(!selected)
          }
      setChecked(!checked)
      setSelected(!selected)
        }
     }
      ></input >
    </li>

    <li className={hTabs.competitorli}>
    <label className={hTabs.labels}>{checkBoxTitle}</label>
      <input className={hTabs.boxNum} type="number" 
      style={{display:"inline"}}
      disabled ={!checked}
      value={text2}
      onChange={e => setText2(e.target.value)}
      />
    </li>

    <li className={hTabs.competitorli}>
    <select  
disabled ={!checked}
          required
          // ref={activity_type_id}
          // className={
          //   // errActivitySelectType ? hTabs.dropDownErr : 
          //   // hTabs.dropDownList
          // }
          // id="activityType"
          name="productList1"
          onChange={() => {
            // if(checked){
            //   setText("")
            // }
    
          }
       }
        >
          {selected && <option value="0" disabled selected={selected} >
            Select Status
          </option>}
          <option value="1">Active</option>
          <option value="2">Inactive</option>
          <option value="3">Need Repair</option>
          <option value="4">Need Exchange</option>
          <option value="5">Under Installation</option>
        </select>

    </li>
{/* second product status */}

    <li className={hTabs.competitorli}>
      <input className={hTabs.boxNum} type="number" 
      style={{display:"inline"}}
      disabled ={!checked}
      value={text}
      onChange={e => setText(e.target.value)}
      />
    </li>

    <li className={hTabs.competitorli}>
    <select  
disabled ={!checked}
          required
          // ref={activity_type_id}
          // className={
          //   // errActivitySelectType ? hTabs.dropDownErr : 
          //   // hTabs.dropDownList
          // }
          // id="activityType"
          name="productList1"
          onChange={() => {
            // if(checked){
            //   setText("")
            // }
    
          }
       }
        >
          <option value="0"   selected={selected}>
            Select Status
          </option>
          <option value="1">Active</option>
          <option value="2">Inactive</option>
          <option value="3">Need Repair</option>
          <option value="4">Need Exchange</option>
          <option value="5">Under Installation</option>
        </select>

    </li>


  </ul>


      


</div>

)
}

export default CheckCompetitor

