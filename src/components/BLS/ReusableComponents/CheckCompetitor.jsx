/* eslint-disable */
import React, { useEffect, useState ,useContext} from 'react'
import hTabs from '../hTabs.module.css'
import { display } from '@mui/system';
import { styled } from '@mui/material/styles';
import { UserContext } from "../Home";



const CheckCompetitor = ({checkBoxTitle, setTestObj,competitors,compInx})=>{

    const [checked, setChecked] = useState(false);
    const [text, setText] = useState("");
    const [text2, setText2] = useState("");
    const [selected, setSelected]= useState(true);
    // const [testObj,setTestObj] = useState({test:"test"})
    // const [competitors,setCompetitors] = useState([])
    const [competitor_id,setCompetitor_id] = useState(0)


    // const userData = JSON.parse(useContext(UserContext));
    // const BL = userData.bl1_id;

    // const fetchCompetitors = async () => {
    //   // console.log("BL is checkBox ......,", BL);
    //   // console.log("supkey is checkBox ......,", supKey);

    //   // + BL +"/" + supKey
    //   // "http://localhost:7000/api/competitors/" + BL + "/" + supKey
      
    //   await fetch(`http://localhost:7000/api/competitors/${BL}/${supKey}`, {
    //     method: "GET",
    //     headers: new Headers({
    //       Authorization: "bearer " + userData.token,
    //       "Content-Type": "application/x-www-form-urlencoded",
    //     }),
    //   }).then(async (response) => {
    //     const newData = await response.json();
    //     //    setSupplierName(newData);
    //     console.log("Competitors data inside fetch method", [...newData]);
    //     setCompetitors([...newData]);
    //   });
    // };
    // fetchCompetitors();
  


    let marketSizeRecordObj1 = {
      marketSizeRecordsID: 1,
      egmed_consumption: 1,
      total_consumption: 1,
      competitor_id: competitor_id,
      item_qty1: 1,
      item_status1: 1,
      item_qty2: 1,
      item_status2: 1,
      market_size_id: 1,
    }

    const onChangeHandler = (e)=>{

   if(!checked) {
    console.log("event.target.name check box Ttitle =",checkBoxTitle)
   console.log("competitors from checkbox are ...",competitors)
   console.log("compInxb ",compInx )
   console.log("competitor ID is ..." ,competitors[compInx].id )
   const competitorId = competitors[compInx].id
   setCompetitor_id(competitorId)
   }

   setTestObj(marketSizeRecordObj1)

    }

    return(

<div style={{marginLeft:'10px'}} >
  <ul className={hTabs.competitorUL}>
    <li className={hTabs.competitorli}>
    <input  
        type="checkbox"
        name='checkBox'
        className={hTabs.checkBox}
        value="Bike"
        // onClick={onClickCheckBoxHandler}
        checked={checked}
        onChange={(e) => {
          onChangeHandler(e)
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

