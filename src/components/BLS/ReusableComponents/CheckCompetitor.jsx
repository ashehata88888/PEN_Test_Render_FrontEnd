/* eslint-disable */

import React, { useEffect, useState, useContext } from 'react'
import hTabs from '../hTabs.module.css'
import { display } from '@mui/system';
import { styled } from '@mui/material/styles';
import { UserContext } from "../Home";



import { useSelector, useDispatch } from "react-redux";
import { setSelectionRange } from '@testing-library/user-event/dist/utils';
import { updateSelectedItemGroup, updateMarketSize } from '../../../store/index';

// import { updateSaveBtn} from "../../store";





const CheckCompetitor = ({ currAddRow, checkBoxTitle, competitors, compInx, marketSizeObj, itemGroupP, saveBtn, rowInx }) => {

  const [checked, setChecked] = useState(false);

  const [checked2, setChecked2] = useState(false);

  const [text2, setText2] = useState("");

  const [text, setText] = useState("");

  const [selected, setSelected] = useState(true);

  const [selected2, setSelected2] = useState(true);

  const [changeStatus2, setChangeStatus2] = useState(false)


  const [egmed_consumption, setegmed_consumption] = useState(0)
  const [total_consumption, settotal_consumption] = useState(0)
  // const [item_qty1 , setitem_qty1] = useState(0)
  const [item_status1, setitem_status1] = useState(0)
  // const [item_qty2 , setitem_qty2] = useState(0)
  const [item_status2, setitem_status2] = useState(0)
  const [market_size_id, setmarket_size_id] = useState(0)
  const [competitorName, setCompetitorName] = useState(0)
  const [itemGroupC, setItemGroupC] = useState(0)
  const [finalObj, setFinalObj] = useState({})
  const [finalArray, setFinalArray] = ([])

  const [currAddRow1, setCurrAddRow] = useState(0)

  const [uncheckedComp, setUncheckedComp] = useState(0)

  const [ unCheckItemGroup , setUnCheckItemGroup] = useState(0)

  const globalState = useSelector((state) => state)

  const dispatch = useDispatch()


  console.log("itemGroupP", itemGroupP)

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

    console.log("itemGroupP from checkbox", itemGroupP)


    if (competitor_id > 0) {
      // setItemGroupC(itemGroupP)

      console.log("itemGroupP from checkbox", itemGroupP)

      // console.log("currAddRow from checkbox ",currAddRow)


      // async () =>{

      // const RetrieverDataProcess = async () => {




      // marketSizeobjfromP.marketSizeRecords.push({
      //   itemGroup: itemGroupC,
      //   competitor_id: competitor_id,
      //   cometitor_name: competitorName,
      //   // egmed_consumption: 1,
      //   // total_consumption: 1,
      //   item_qty1: parseInt(text2),
      //   item_status1: parseInt(item_status1),
      //   item_qty2: parseInt(text),
      //   item_status2: parseInt(item_status2),
      //   // market_size_id: 1
      // })





      //  switch(competitor_id ){
      //   case x:
      //     // code block
      //     break;
      //   case y:
      //     // code block
      //     break;
      //   default:
      //  }

      // setSearches(searches => [...searches, query]) 


      // setFinalArray(finalArray => [...finalArray, marketSizeobjfromP])



      parseInt(globalState.saveBtn) > 0 && dispatch(updateMarketSize(marketSizeobjfromP))


      setTimeout(() =>{ console.log("marketSizeobjfromP after CheckComp", finalArray)
      
    }, 100)

 setTimeout(()=>console.log("marketSize after Save Btn pressed ", globalState.marketSize),2000)

       
      // setFinalObj(marketSizeobjfromP)

    }


    // RetrieverDataProcess().then(()=>{
    //   setFinalObj(marketSizeobjfromP)


    // });


    if (uncheckedComp > 0) {

      console.log("uncheckedComp", uncheckedComp)

      let UnChInx = marketSizeobjfromP.marketSizeRecords.findIndex((i) => i.competitor_id == uncheckedComp && i.itemGroup == unCheckItemGroup )

      console.log("UnChInx", UnChInx)

      // console.log("currAddRow from checkbox ",currAddRow)

      marketSizeobjfromP.marketSizeRecords.splice(UnChInx, 1)


      setTimeout(() => console.log("marketSizeobjfromP afterUnchecked", marketSizeobjfromP), 0)

    }



    // if ( currAddRow1 > 0 || competitor_id > 0 && (parseInt(item_status2) > 0 && parseInt(item_status1) > 0)) {

    //   console.log("currAddRow from checkbox ", currAddRow1)
    //   const data = JSON.parse(JSON.stringify(marketSizeobjfromP));
    //   dispatch(updateMarketSize(data))
    //   setTimeout(() => console.log("global Stat after Adding Row or Save BTN", globalState.marketSize), 100)

    // } 



    //       setFinalObj(newObj)

    //   // setFinalObj(marketSizeobjfromP)

    // // }


    // setTimeout(() => console.log("marketSizeobjfromP ", marketSizeobjfromP), 0)





    // setTimeout(() => console.log("FinalObj ", finalObj), 500)




    // const callset = ()=> {

    //   setFinalObj(marketSizeobjfromP)

    //   setTimeout(() => console.log("FinalObj ", finalObj), 0)

    // }
    setTimeout(() => console.log("FinalObj ", finalObj), 1000)

  }, [parseInt(globalState.saveBtn), uncheckedComp, currAddRow1])

  // parseInt(globalState.saveBtn)

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
      setItemGroupC(itemGroupP)

      setCurrAddRow(currAddRow)

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


    if (checked) {
      const competitorId = competitors[compInx].id
      const competitorName = competitors[compInx].competitor_name
      console.log("the check Box compeitor unchecked compatitor Name is \n " + competitorName + " id is " + parseInt(competitorId))
      let newobj = { ...marketSizeobjfromP }

      setUncheckedComp(competitorId)
      setUnCheckItemGroup(itemGroupP)



      newobj.marketSizeRecords.splice(compInx, 1)

      setFinalObj(newobj)



      setTimeout(() => console.log("marketSizeobjfromP ", marketSizeobjfromP), 0)

      setTimeout(() => console.log("FinalObj when UnCheck ", finalObj), 0)

    }


    if (!checked2) {
      console.log("event.target.name check box Ttitle =", checkBoxTitle)
      console.log("competitors from checkbox are ...", competitors)
      console.log("compInxb ", compInx)
      console.log("competitor ID is ...", competitors[compInx].id)
      const competitorId = competitors[compInx].id
      const competitorName = competitors[compInx].competitor_name
      setCompetitor_id(competitorId)
      setCompetitorName(competitorName)
      setItemGroupC(itemGroupP)

      setCurrAddRow(currAddRow)

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


    if (checked2) {
      const competitorId = competitors[compInx].id
      const competitorName = competitors[compInx].competitor_name
      console.log("the check Box compeitor unchecked compatitor Name is \n " + competitorName + " id is " + parseInt(competitorId))
      let newobj = { ...marketSizeobjfromP }

      setUncheckedComp(competitorId)
      setUnCheckItemGroup(itemGroupP)



      newobj.marketSizeRecords.splice(compInx, 1)

      setFinalObj(newobj)



      setTimeout(() => console.log("marketSizeobjfromP ", marketSizeobjfromP), 0)

      setTimeout(() => console.log("FinalObj when UnCheck ", finalObj), 0)

    }





// if(
//       e.target.name == "item_status1" 
//       &&
//       checked === true
//       &&
//        text > 0 
//        &&
//        e.target.value > 0
//         ) {
//           // setitem_status1(e.target.value)

//       console.log("test for first item_status on Change")

//       marketSizeobjfromP.marketSizeRecords.push({
//         itemGroup: itemGroupC,
//         competitor_id: competitor_id,
//         cometitor_name: competitorName,
//         // egmed_consumption: 1,
//         // total_consumption: 1,
//         item_qty1: parseInt(text),
//         item_status1: parseInt(e.target.value),
//         // item_qty2: parseInt(text2),
//         // item_status2: parseInt(item_status2),
//         // market_size_id: 1
//       })

//       // setFinalObj(marketSizeobjfromP)

//       setTimeout(()=>console.log("marketSizeobjfromP after onChange item_Status1",marketSizeobjfromP),0)


//       // setTimeout(()=>console.log("marketSizeobjfromP after onChange item_Status1",marketSizeobjfromP),1000)
//     }

//     if(e.target.name == "item_status1"){
//       setitem_status1(e.target.value)
//     }




  }



  const onChangeSelectStatus1 = (e) => {
    setitem_status1(e.target.value)


    if(
      checked === true
      &&
       text > 0 
       &&
       e.target.value > 0
        ) {
          setitem_status1(e.target.value)

      console.log("test for first item_status on Change")

      marketSizeobjfromP.marketSizeRecords.push({
        itemGroup: itemGroupC,
        competitor_id: competitor_id,
        cometitor_name: competitorName,
        // egmed_consumption: 1,
        // total_consumption: 1,
        item_qty1: parseInt(text),
        item_status1: parseInt(e.target.value),
        // item_qty2: parseInt(text2),
        // item_status2: parseInt(item_status2),
        // market_size_id: 1
      })

      setTimeout(()=>console.log("marketSizeobjfromP after onChange item_Status1",marketSizeobjfromP),0)

      setFinalObj(marketSizeobjfromP)

     

    
    }

    // console.log("test for first item_status on Change")




  }



  const onChangeSelectStatu2 = (e) => {
    setitem_status2(e.target.value)

    let index = marketSizeobjfromP.marketSizeRecords.indexOf({
      itemGroup: itemGroupC,
      competitor_id: competitor_id,
      cometitor_name: competitorName,
      // egmed_consumption: 1,
      // total_consumption: 1,
      item_qty1: parseInt(text),
      item_status1: parseInt(item_status1),
      // item_qty2: parseInt(text2),
      // item_status2: parseInt(item_status2),
      // market_size_id: 1
    })

    console.log("index from onchangeselectStatus2 is ",index)

    // marketSizeobjfromP.marketSizeRecords.push({
    //   itemGroup: itemGroupC,
    //   competitor_id: competitor_id,
    //   cometitor_name: competitorName,
    //   // egmed_consumption: 1,
    //   // total_consumption: 1,
    //   item_qty1: parseInt(text),
    //   item_status1:  parseInt(item_status1),
    //   item_qty2: parseInt(text2),
    //   item_status2: parseInt(e.target.value),
    //   // market_size_id: 1
    // })



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
        <li 
        style={{marginRight:'auto'}}
        className={hTabs.competitorli}>
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
                // setText2("")
                setSelected(!selected)
              }
              if (checked === false) {
                setText("")
                // setText2("")
                setSelected(!selected)
              }
              setChecked(!checked)
              setSelected(!selected)
            }
            }
          ></input >

<label 
         style={{marginRight:'auto'}} className={hTabs.labels}>{checkBoxTitle}</label>


        </li>
      
        <li>
          <input
          className={hTabs.boxNum} 
           style={{marginRight:"15px"}}
          type="number"
            // style={{ display: "inline" }}
            disabled={!checked}
            value={text}
            onChange={e => setText(e.target.value)}
          />
        </li>

        <li  style={{marginLeft:"0px" }} className={hTabs.competitorli}>
          <select
            disabled={!checked}
            required
            name = "item_status1"
            // ref={activity_type_id}
            // className={
            //   // errActivitySelectType ? hTabs.dropDownErr : 
            //   // hTabs.dropDownList
            // }
            // id="activityType"
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

         <li  style={{marginLeft:"0px" }} className={hTabs.competitorli}>
          <input
           style={{marginLeft: "20px"}}
            type="checkbox"
            name='checkBox'
            className={hTabs.checkBox}
            value="Bike"
            // onClick={onClickCheckBoxHandler}
            checked={checked2}
            onChange={(e) => {
              onChangeHandler(e)
              if (checked2) {
                // setText("")
                setText2("")
                setSelected2(!selected2)
              }
              if (checked2 === false) {
                // setText("")
                setText2("")
                setSelected2(!selected2)
              }
              setChecked2(!checked2)
              setSelected2(!selected2)
            }
            }
          ></input >
        </li>

        <li style={{marginRight:"15px"}} className={hTabs.competitorli}>
          <input className={hTabs.boxNum} type="number"
            style={{ display: "inline" }}
            disabled={!checked2}
            value={text2}
            // placeholder="V2"
            onChange={e => setText2(e.target.value)}
          />
        </li>

        <li style={{marginLeft:"0px" }} className={hTabs.competitorli}>
          <select

            disabled={!checked2}
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
            <option value="0" selected={selected2}>
              Select Another Status
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

