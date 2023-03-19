/* eslint-disable */
import React, { useEffect, useState, useContext } from 'react'
import hTabs from '../hTabs.module.css'
import { display } from '@mui/system';
import { styled } from '@mui/material/styles';
import { UserContext } from "../Home";



import { useSelector, useDispatch } from "react-redux";
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { updateSelectedItemGroup } from '../../../store';

// import { updateSaveBtn} from "../../store";





const CheckCompetitor = ({ checkBoxTitle, competitors, compInx, marketSizeObj, itemGroupP, saveBtn }) => {

  const [checked, setChecked] = useState(false);

  const [text2, setText2] = useState("");

  const [text, setText] = useState("");

  const [selected, setSelected] = useState(true);

  const [changeStatus2, setChangeStatus2] = useState(false)


  const [egmed_consumption, setegmed_consumption] = useState(0)
  const [total_consumption, settotal_consumption] = useState(0)
  // const [item_qty1 , setitem_qty1] = useState(0)
  const [item_status1, setitem_status1] = useState(0)
  // const [item_qty2 , setitem_qty2] = useState(0)
  const [item_status2, setitem_status2] = useState(0)
  const [market_size_id, setmarket_size_id] = useState(0)
  const [competitorName, setCompetitorName] = useState(0)
  const [itemGroupC , setItemGroupC] = useState(0)

  const globalState = useSelector((state) => state)


  // egmed_consumption: 1,
  // total_consumption: 1,
  // item_qty1: 1,
  // item_status1: 1,
  // item_qty2: 1,
  // item_status2: 1,
  // market_size_id: 1,



  // const [testObj,setTestObj] = useState({test:"test"})
  // const [competitors,setCompetitors] = useState([])
  const [competitor_id, setCompetitor_id] = useState(0)

  const marketSizeobjfromP = { ...marketSizeObj }




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

  // if(saveBtn){
  //   marketSizeobjfromP.marketSizeRecords.push({itemGroup:itemGroupP ,
  //     competitor_id:competitor_id,
  //     cometitor_name:competitorName,
  //     // egmed_consumption: 1,
  //     // total_consumption: 1,
  //     item_qty1: parseInt(text2),
  //     item_status1: item_status1,
  //     item_qty2: parseInt(text),
  //     item_status2: item_status2,
  //     market_size_id: 1,
  //   })
  //   }

  //   console.log("marketSizeobjfromP ",marketSizeobjfromP)+

  console.log("testsaveBtnFrom Checkbox", globalState.saveBtn)





  console.log('TestSaveBtn', globalState.saveBtn)

  

  useEffect(() => {


    

    if (parseInt(globalState.saveBtn) > 0 && competitor_id > 0 && itemGroupP > 0) {
      // setItemGroupC(itemGroupP)

        marketSizeobjfromP.marketSizeRecords.push({
          // itemGroup: parseInt(globalState.selectedItemGroup),
          itemGroup : itemGroupP,
          competitor_id: competitor_id,
          cometitor_name: competitorName,
          // egmed_consumption: 1,
          // total_consumption: 1,
          item_qty1: parseInt(text2),
          item_status1: parseInt(item_status1),
          item_qty2: parseInt(text),
          item_status2: parseInt(item_status2),
          market_size_id: 1
        })


        setTimeout(() => console.log("marketSizeobjfromP ", marketSizeobjfromP), 0)

      


    }



  }, [parseInt(globalState.saveBtn)])

  console.log('TestSaveBtn', saveBtn)

  let marketSizeRecordObj1 = {
    // marketSizeRecordsID: 1,
    egmed_consumption: 1,
    total_consumption: 1,
    competitor_id: competitor_id,
    item_qty1: 1,
    item_status1: 1,
    item_qty2: 1,
    item_status2: 1,
    market_size_id: 1,
  }

  const onChangeHandler = (e) => {

    if (!checked) {
      console.log("event.target.name check box Ttitle =", checkBoxTitle)
      console.log("competitors from checkbox are ...", competitors)
      console.log("compInxb ", compInx)
      console.log("competitor ID is ...", competitors[compInx].id)
      const competitorId = competitors[compInx].id
      const competitorName = competitors[compInx].competitor_name
      setCompetitor_id(competitorId)
      setCompetitorName(competitorName)

      //  marketSizeobjfromP.marketSizeRecords.push({itemGroup:itemGroupP ,
      //   competitor_id:competitorId,
      //   cometitor_name:competitorName,
      //   // egmed_consumption: 1,
      //   // total_consumption: 1,
      //   item_qty1: text2,
      //   item_status1: item_status1,
      //   item_qty2: text,
      //   item_status2: item_status2,
      //   market_size_id: 1,
      // })
    }
  }

  const onChangeSelectStatus1 = (e) => {
    setitem_status1(e.target.value)







  }

  const onChangeSelectStatu2 = (e) => {
    setitem_status2(e.target.value)

    // console.log("saveBtn test",globalState.saveBtn)

    // setChangeStatus2(true)





  }


  // if(item_status1 !== 0  && item_status2 !== 0 && globalState.saveBtn == true ){
  //   marketSizeobjfromP.marketSizeRecords.push({itemGroup:itemGroupP ,
  //     competitor_id:competitor_id,
  //     cometitor_name:competitorName,
  //     // egmed_consumption: 1,
  //     // total_consumption: 1,
  //     item_qty1: parseInt(text2),
  //     item_status1: item_status1,
  //     item_qty2: parseInt(text),
  //     item_status2: item_status2,
  //     market_size_id: 1,
  //   })
  //   setTimeout(()=>console.log("marketSizeobjfromP ",marketSizeobjfromP) , 0)
  // }


  return (

    <div style={{ marginLeft: '10px' }} >
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
              if (checked) {
                setText("")
                setText2("")
                setSelected(!selected)
              }
              if (checked === false) {
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
            style={{ display: "inline" }}
            disabled={!checked}
            value={text2}
            onChange={e => setText2(e.target.value)}
          />
        </li>

        <li className={hTabs.competitorli}>
          <select
            disabled={!checked}
            required
            // ref={activity_type_id}
            // className={
            //   // errActivitySelectType ? hTabs.dropDownErr : 
            //   // hTabs.dropDownList
            // }
            // id="activityType"
            name="productList1"
            onChange={(e) => {
              onChangeSelectStatus1(e)


              // if(checked){
              //   setText("")
              // }

            }
            }
          >
            {/* {selected && <option value="0" disabled selected={selected} >
            Select Status
          </option>} */}

            <option value="0" selected={selected}>
              Select Status
            </option>

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
            style={{ display: "inline" }}
            disabled={!checked}
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </li>

        <li className={hTabs.competitorli}>
          <select
            disabled={!checked}
            required
            // ref={activity_type_id}
            // className={
            //   // errActivitySelectType ? hTabs.dropDownErr : 
            //   // hTabs.dropDownList
            // }
            // id="activityType"
            name="productList1"
            onChange={(e) => {
              onChangeSelectStatu2(e)

            }
            }
          >
            <option value="0" selected={selected}>
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

