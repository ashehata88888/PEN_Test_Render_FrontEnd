/* eslint-disable */
import React, {
  useState,
  useEffect,
  useRef,
  useContext,
  forwardRef,
  useImperativeHandle,
} from "react";

import { v4 as uuid } from 'uuid';

import { UserContext } from "./Home";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import hTabs from "./hTabs.module.css";
import CustomizedAccordions from "./CustomizedAccordions";
import CustomerInfoAccordion from "./CustomerInfoAccordion";
import underDev from "../../imgs/UnderDev.jpg";
import { display } from "@mui/system";
import ActivityTable from "../Table/ActivityTable";

import {updateMarketSizeRecordsId} from "../../store/index"

import ActivityTableNew from "../Table/ActivityTableNew";
// import Counter from '../../store/counter'
import { Counter } from "./../../store/counter";
import JOT from "./JOT";
import TRM from "./TRM";
import BIOS from "./BIOS";
import BB from "./BB";
import SD from "./SD";
import CONS from "./CONS";
import IMP from "./IMP";
import STER from "./STER";
import WCL from "./WCL";
import LAPA from "./LAPA";
import ENT from "./ENT";
import ENTTH from "./ENTTH";
import ERBE from "./ERBE";
import GYN from "./GYN";
import UR from "./UR";
import OR from "./OR";
import ICU from "./ICU";
import NICU from "./NICU";
import SE from "./SE";
import Fluke from "./Fluke";
import Private_Disposable from "./Private_Disposable";
import AccountNameAdress from "./AccountNameAdress";
import Private_OR from "./Private_OR";
import Private_Medical_lower from "./Private_Medical_lower";
import Private_Medical_upper from "./Private_Medical_upper";
import MarketSizeRow from "./MarketSizeRowN";

import {useSelector,useDispatch} from "react-redux";
import { updateMarketSize , 
  delFirstMarketSize,
  updateSaveBtn} from "../../store";
import { faTemperatureEmpty } from "@fortawesome/free-solid-svg-icons";


export default function LabTabsMarket({
  setCountFullWToVTabs,
  setCountFullWCToVTabs,
}) {
  const [value, setValue] = useState("1");
  const [displayMainBtns, setDisplayMainBtns] = useState(
    hTabs.callInfoAccordionhiddenBtns
  );
  const [countCustAccorToFullW, setCountCustAccorToFullW] = useState(0);
  const [countCustAccorToFullWC, setCountCustAccorToFullWC] = useState(0);
  const [indexCount, setIndexCount] = useState(0);
  // setCountFullWCToVTabs(countCustAccorToFullWC)
  const firstId = 0;
  const [marketSizeRows, setMarketSizeRows] = useState([
  ]);

  const [marketSizeData, setMarketSizeData] = useState([])

  const [curantSaveBtn ,setcurantSaveBtn] = useState(0)
  const [currAddRow , setCurrAddRow] = useState(0)

  const [currSav,setCurrSav] = useState(0)

  // setCountFullWToVTabs(countCustAccorToFullW)
  const childRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [count, setCount] = useState(0);
  const [delCount, setDelCount] = useState(0);
  const [saveCount, setSaveCount] = useState(0);
  const [expander,setExpander] = useState(false)
  const [finalRecords,setFinalRecords]=useState([])
  const [finalMarketSize,setFinalMarketSize] = useState([])

  const [inxRowId,setInxRowId]=useState('')

  const [indexRow, setIndexRow] = useState(0)


  const [uncheckedComp, setUncheckedComp] = useState(0)

  const [ unCheckItemGroup , setUnCheckItemGroup] = useState(0)

  const [current,setCurrent] = useState(0)




  const [newelement,setNewelement] = useState([{
    marketSizeRowID: 0,
    supplier_id: 0,
    product_family_id: 0,
    market_potential_id: 0,
    marketSizeRecords: [
      {
        item_group_id: 0,
        marketSizeRecordsID: 0,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0,
      },
    ],
  }]);


  const [supplierId,setSupplierId] = useState(0)
  const [productFamilyId,setProductFamilyId] = useState(0)

  const [eve, setEve] =useState()
  const [inxSizeRow,setInxSizeRow] = useState(0)
  
  const [inxRecoRow,setInxRecoRow] = useState(0)


  console.log("supplierId from market size Row ...",supplierId)

  const [ marketSize, setMarketSize] = useState(
    [
      // {
      //   marketSizeRowID: 0,
      //   supplier_id: 0,
      //   product_family_id: 0,
      //   item_group_id: 0,
      //   market_potential_id: 0,
      //   marketSizeRecords: [
      //     {
      //       marketSizeRecordsID: 0,
      //       egmed_consumption: 0,
      //       total_consumption: 0,
      //       competitor_id: 0,
      //       item_qty1: 0,
      //       item_status1: 0,
      //       item_qty2: 0,
      //       item_status2: 0,
      //       market_size_id: 0,
      //     },
      //   ],
      // },
      // {
      //   marketSizeRowID: 0,
      //   supplier_id: 0,
      //   product_family_id: 0,
      //   item_group_id: 0,
      //   market_potential_id: 0,
      //   marketSizeRecords: [
      //     {
      //       marketSizeRecordsID: 0,
      //       egmed_consumption: 0,
      //       total_consumption: 0,
      //       competitor_id: 0,
      //       item_qty1: 0,
      //       item_status1: 0,
      //       item_qty2: 0,
      //       item_status2: 0,
      //       market_size_id: 0,
      //     },
      //   ],
      // },
      // {
      //   marketSizeRowID: 0,
      //   supplier_id: 0,
      //   product_family_id: 0,
      //   item_group_id: 0,
      //   market_potential_id: 0,
      //   marketSizeRecords: [
      //     {
      //       marketSizeRecordsID: 0,
      //       egmed_consumption: 0,
      //       total_consumption: 0,
      //       competitor_id: 0,
      //       item_qty1: 0,
      //       item_status1: 0,
      //       item_qty2: 0,
      //       item_status2: 0,
      //       market_size_id: 0,
      //     },
      //   ],
      // },
      // {
      //   marketSizeRowID: 0,
      //   supplier_id: 0,
      //   product_family_id: 0,
      //   item_group_id: 0,
      //   market_potential_id: 0,
      //   marketSizeRecords: [
      //     {
      //       item_group_id: 0,
      //       marketSizeRecordsID: 0,
      //       egmed_consumption: 0,
      //       total_consumption: 0,
      //       competitor_id: 0,
      //       item_qty1: 0,
      //       item_status1: 0,
      //       item_qty2: 0,
      //       item_status2: 0,
      //       market_size_id: 0,
      //     },
      //   ],
      // }
    ]
  )



  const [marketSizeRecordsID,setmarketSizeRecordsID] = useState(0)
  const [egmed_consumption,setegmed_consumption] = useState(0)
  const [total_consumption,settotal_consumption] = useState(0)
  const [competitor_id,setcompetitor_id] = useState(0)
  const [item_qty1,setitem_qty1] = useState(0)
  const [item_status1,setitem_status1] = useState(0)
  const [item_qty2,setitem_qty2] = useState(0)
  const [item_status2,setitem_status2] = useState(0)
  const [market_size_id,setmarket_size_id] = useState(0)
  const [itemGroupId , setItemGroupId] = useState(0)

  const [addCheck,setAddCheck] = useState(0)
  const [removeUnCheck,setRemoveUnCheck] = useState(0)
  


// setmarketSizeRecordsID ,
// setegmed_consumption ,
// settotal_consumption ,
// setcompetitor_id ,
// setitem_qty1 ,
// setitem_status1 ,
// setitem_qty2 ,
// setitem_status2 ,
// setmarket_size_id ,


const dispatch = useDispatch()

console.log("competitor_id...",competitor_id)





console.log("testForSizeIndex...",inxSizeRow)


  useEffect(()=>{


// if( addCheck > 0  ){
//   setegmed_consumption(0)
// settotal_consumption(0)
// setcompetitor_id(0)
// setitem_qty1(0)
// setitem_status1(0)
// setitem_qty2(0)
// setitem_status2(0)
// setmarket_size_id(0)
// }

    // const changeHandlerTest = ()=>{


      const data = [...marketSize]

      
      if(eve == "supplier_id" && inxSizeRow == 0 ){
        data[0]["supplier_id"]=supplierId
        setMarketSize(data)
      } else if (eve == "product_family_id" && inxSizeRow == 0 ){
        data[0]["product_family_id"]=productFamilyId
        setMarketSize(data)
      } else if(eve == "supplier_id" && inxSizeRow == 1 ){
        data[1]["supplier_id"]=supplierId
        setMarketSize(data)
      } else if (eve == "product_family_id" && inxSizeRow == 1 ){
        data[1]["product_family_id"]=productFamilyId
        setMarketSize(data)
      } else if(eve == "supplier_id" && inxSizeRow == 2 ){
        data[2]["supplier_id"]=supplierId
        setMarketSize(data)
      } else if (eve == "product_family_id" && inxSizeRow == 2 ){
        data[2]["product_family_id"]=productFamilyId
        setMarketSize(data)
      } else if(eve == "supplier_id" && inxSizeRow == 3 ){
        data[3]["supplier_id"]=supplierId
        setMarketSize(data)
      } else if (eve == "product_family_id" && inxSizeRow == 3 ){
        data[3]["product_family_id"]=productFamilyId
        setMarketSize(data)
      }

      // if(competitor_id > 0){
      //   data[inxSizeRow]["marketSizeRecords"][data[inxSizeRow]["marketSizeRecords"].length - 1]["item_group_id"] = itemGroupId
      //   setMarketSize(data)
      //   setTimeout(()=>console.log(marketSize),1000)


      

      


// let recoInx = data[inxSizeRow]["marketSizeRecords"].indexOf({
//   competitor_id : 0 , 
//   egmed_consumption : 0 ,
//   item_group_id : 0 ,
//   item_qty1 : 0 ,
//   item_qty2 : 0 ,
//   item_status1 : 0 ,
//   item_status2 : 0 ,
//   marketSizeRecordsID : 0 ,
//   market_size_id : 0 ,
//   total_consumption : 0 
// })


  let msrInx = data[inxSizeRow]["marketSizeRecords"].findIndex((Reco) => Reco.competitor_id == competitor_id && Reco.item_group_id == itemGroupId);

  if(msrInx){


    let msrInx = data[inxSizeRow]["marketSizeRecords"].findIndex((Reco) => Reco.competitor_id == competitor_id && Reco.item_group_id == itemGroupId);
    
    console.log(`testingRowIndex ${msrInx} compID IS ${competitor_id} itemGroup IS ${itemGroupId}`)
  
  
    // data[inxSizeRow]["marketSizeRecords"][searchIndex]["item_group_id"] = itemGroupId   
    // data[inxSizeRow]["marketSizeRecords"][searchIndex]["competitor_id"] = competitor_id  
    // data[inxSizeRow]["marketSizeRecords"][searchIndex]["item_qty1"] = item_qty1  
    // data[inxSizeRow]["marketSizeRecords"][searchIndex]["item_status1"] = item_status1   
    // data[inxSizeRow]["marketSizeRecords"][searchIndex]["item_qty2"] = item_qty2   
    // data[inxSizeRow]["marketSizeRecords"][searchIndex]["item_status2"] = item_status2   
  
  
  
     
      
    let unique_id = uuid();
    let rowId = unique_id.slice(0,8)

//  marketSizeRecordsID: rowId,
  
  
  
       
  
  
  
  
  
        // }
  
      //   if(competitor_id > 0 && inxSizeRow == 0  && data[0]["marketSizeRecords"].length - 1 == 0 ){
         
      //     data[0]["marketSizeRecords"][0]["marketSizeRecordsID"] = rowId
      //     data[0]["marketSizeRecords"][0]["item_group_id"] = itemGroupId   
      //     data[0]["marketSizeRecords"][0]["competitor_id"] = competitor_id  
      //     data[0]["marketSizeRecords"][0]["item_qty1"] = item_qty1  
      //     data[0]["marketSizeRecords"][0]["item_status1"] = item_status1   
      //     data[0]["marketSizeRecords"][0]["item_qty2"] = item_qty2   
      //     data[0]["marketSizeRecords"][0]["item_status2"] = item_status2   
          
  
  
      //     setMarketSize(data)
   
      //   } else if(competitor_id > 0 && inxSizeRow == 0  && msrInx == 1 ){
         
         
         
      //     data[0]["marketSizeRecords"][1]["item_group_id"] = itemGroupId  
      //     data[0]["marketSizeRecords"][1]["competitor_id"] = competitor_id 
      //     data[0]["marketSizeRecords"][1]["item_qty1"] = item_qty1 
      //     data[0]["marketSizeRecords"][1]["item_status1"] = item_status1 
      //     data[0]["marketSizeRecords"][1]["item_qty2"] = item_qty2 
      //     data[0]["marketSizeRecords"][1]["item_status2"] = item_status2 
  
  
  
      //     setMarketSize(data)
     
  
      //   } else if(competitor_id > 0 && inxSizeRow == 0  && msrInx == 2 ){
      //     data[0]["marketSizeRecords"][2]["item_group_id"] = itemGroupId
      //     data[0]["marketSizeRecords"][2]["competitor_id"] = competitor_id
      //     data[0]["marketSizeRecords"][2]["item_qty1"] = item_qty1
      //     data[0]["marketSizeRecords"][2]["item_status1"] = item_status1
      //     data[0]["marketSizeRecords"][2]["item_qty2"] = item_qty2
      //     data[0]["marketSizeRecords"][2]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if(competitor_id > 0 && inxSizeRow == 0  && msrInx == 3 ){
      //     data[0]["marketSizeRecords"][3]["item_group_id"] = itemGroupId
      //     data[0]["marketSizeRecords"][3]["competitor_id"] = competitor_id
      //     data[0]["marketSizeRecords"][3]["item_qty1"] = item_qty1
      //     data[0]["marketSizeRecords"][3]["item_status1"] = item_status1
      //     data[0]["marketSizeRecords"][3]["item_qty2"] = item_qty2
      //     data[0]["marketSizeRecords"][3]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }
      //   else if (competitor_id > 0 && inxSizeRow == 0  && msrInx == 4 ){
      //     data[0]["marketSizeRecords"][4]["item_group_id"] = itemGroupId
      //     data[0]["marketSizeRecords"][4]["competitor_id"] = competitor_id
      //     data[0]["marketSizeRecords"][4]["item_qty1"] = item_qty1
      //     data[0]["marketSizeRecords"][4]["item_status1"] = item_status1
      //     data[0]["marketSizeRecords"][4]["item_qty2"] = item_qty2
      //     data[0]["marketSizeRecords"][4]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 0  && msrInx == 5 ){
      //     data[0]["marketSizeRecords"][5]["item_group_id"] = itemGroupId
      //     data[0]["marketSizeRecords"][5]["competitor_id"] = competitor_id
      //     data[0]["marketSizeRecords"][5]["item_qty1"] = item_qty1
      //     data[0]["marketSizeRecords"][5]["item_status1"] = item_status1
      //     data[0]["marketSizeRecords"][5]["item_qty2"] = item_qty2
      //     data[0]["marketSizeRecords"][5]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 0  && msrInx == 6 ){
      //     data[0]["marketSizeRecords"][6]["item_group_id"] = itemGroupId
      //     data[0]["marketSizeRecords"][6]["competitor_id"] = competitor_id
      //     data[0]["marketSizeRecords"][6]["item_qty1"] = item_qty1
      //     data[0]["marketSizeRecords"][6]["item_status1"] = item_status1
      //     data[0]["marketSizeRecords"][6]["item_qty2"] = item_qty2
      //     data[0]["marketSizeRecords"][6]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 0  && msrInx == 7 ){
      //     data[0]["marketSizeRecords"][7]["item_group_id"] = itemGroupId
      //     data[0]["marketSizeRecords"][7]["competitor_id"] = competitor_id
      //     data[0]["marketSizeRecords"][7]["item_qty1"] = item_qty1
      //     data[0]["marketSizeRecords"][7]["item_status1"] = item_status1
      //     data[0]["marketSizeRecords"][7]["item_qty2"] = item_qty2
      //     data[0]["marketSizeRecords"][7]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 0  && msrInx == 8 ){
      //     data[0]["marketSizeRecords"][8]["item_group_id"] = itemGroupId
      //     data[0]["marketSizeRecords"][8]["competitor_id"] = competitor_id
      //     data[0]["marketSizeRecords"][8]["item_qty1"] = item_qty1
      //     data[0]["marketSizeRecords"][8]["item_status1"] = item_status1
      //     data[0]["marketSizeRecords"][8]["item_qty2"] = item_qty2
      //     data[0]["marketSizeRecords"][8]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }
      //   else if(competitor_id > 0 && inxSizeRow == 1  && msrInx == 0 ){
      //     data[1]["marketSizeRecords"][0]["item_group_id"] = itemGroupId
      //     data[1]["marketSizeRecords"][0]["competitor_id"] = competitor_id
      //     data[1]["marketSizeRecords"][0]["item_qty1"] = item_qty1
      //     data[1]["marketSizeRecords"][0]["item_status1"] = item_status1
      //     data[1]["marketSizeRecords"][0]["item_qty2"] = item_qty2
      //     data[1]["marketSizeRecords"][0]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   } else if (competitor_id > 0 && inxSizeRow == 1  && msrInx == 1 ){
      //     data[1]["marketSizeRecords"][1]["item_group_id"] = itemGroupId
      //     data[1]["marketSizeRecords"][1]["competitor_id"] = competitor_id
      //     data[1]["marketSizeRecords"][1]["item_qty1"] = item_qty1
      //     data[1]["marketSizeRecords"][1]["item_status1"] = item_status1
      //     data[1]["marketSizeRecords"][1]["item_qty2"] = item_qty2
      //     data[1]["marketSizeRecords"][1]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   } else if (competitor_id > 0 && inxSizeRow == 1  && msrInx == 2 ){
      //     data[1]["marketSizeRecords"][2]["item_group_id"] = itemGroupId
      //     data[1]["marketSizeRecords"][2]["competitor_id"] = competitor_id
      //     data[1]["marketSizeRecords"][2]["item_qty1"] = item_qty1
      //     data[1]["marketSizeRecords"][2]["item_status1"] = item_status1
      //     data[1]["marketSizeRecords"][2]["item_qty2"] = item_qty2
      //     data[1]["marketSizeRecords"][2]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 1  && msrInx == 3 ){
      //     data[1]["marketSizeRecords"][3]["item_group_id"] = itemGroupId
      //     data[1]["marketSizeRecords"][3]["competitor_id"] = competitor_id
      //     data[1]["marketSizeRecords"][3]["item_qty1"] = item_qty1
      //     data[1]["marketSizeRecords"][3]["item_status1"] = item_status1
      //     data[1]["marketSizeRecords"][3]["item_qty2"] = item_qty2
      //     data[1]["marketSizeRecords"][3]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 1  && msrInx == 4 ){
      //     data[1]["marketSizeRecords"][4]["item_group_id"] = itemGroupId
      //     data[1]["marketSizeRecords"][4]["competitor_id"] = competitor_id
      //     data[1]["marketSizeRecords"][4]["item_qty1"] = item_qty1
      //     data[1]["marketSizeRecords"][4]["item_status1"] = item_status1
      //     data[1]["marketSizeRecords"][4]["item_qty2"] = item_qty2
      //     data[1]["marketSizeRecords"][4]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 1  && msrInx == 6 ){
      //     data[1]["marketSizeRecords"][6]["item_group_id"] = itemGroupId
      //     data[1]["marketSizeRecords"][6]["competitor_id"] = competitor_id
      //     data[1]["marketSizeRecords"][6]["item_qty1"] = item_qty1
      //     data[1]["marketSizeRecords"][6]["item_status1"] = item_status1
      //     data[1]["marketSizeRecords"][6]["item_qty2"] = item_qty2
      //     data[1]["marketSizeRecords"][6]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 1  && msrInx == 7 ){
      //     data[1]["marketSizeRecords"][7]["item_group_id"] = itemGroupId
      //     data[1]["marketSizeRecords"][7]["competitor_id"] = competitor_id
      //     data[1]["marketSizeRecords"][7]["item_qty1"] = item_qty1
      //     data[1]["marketSizeRecords"][7]["item_status1"] = item_status1
      //     data[1]["marketSizeRecords"][7]["item_qty2"] = item_qty2
      //     data[1]["marketSizeRecords"][7]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 1  && msrInx == 8 ){
      //     data[1]["marketSizeRecords"][8]["item_group_id"] = itemGroupId
      //     data[1]["marketSizeRecords"][8]["competitor_id"] = competitor_id
      //     data[1]["marketSizeRecords"][8]["item_qty1"] = item_qty1
      //     data[1]["marketSizeRecords"][8]["item_status1"] = item_status1
      //     data[1]["marketSizeRecords"][8]["item_qty2"] = item_qty2
      //     data[1]["marketSizeRecords"][8]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }if(competitor_id > 0 && inxSizeRow == 2  && msrInx == 0 ){
      //     data[2]["marketSizeRecords"][0]["item_group_id"] = itemGroupId
      //     data[2]["marketSizeRecords"][0]["competitor_id"] = competitor_id
      //     data[2]["marketSizeRecords"][0]["item_qty1"] = item_qty1
      //     data[2]["marketSizeRecords"][0]["item_status1"] = item_status1
      //     data[2]["marketSizeRecords"][0]["item_qty2"] = item_qty2
      //     data[2]["marketSizeRecords"][0]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   } else if (competitor_id > 0 && inxSizeRow == 2  && msrInx == 1 ){
      //     data[2]["marketSizeRecords"][1]["item_group_id"] = itemGroupId
      //     data[2]["marketSizeRecords"][1]["competitor_id"] = competitor_id
      //     data[2]["marketSizeRecords"][1]["item_qty1"] = item_qty1
      //     data[2]["marketSizeRecords"][1]["item_status1"] = item_status1
      //     data[2]["marketSizeRecords"][1]["item_qty2"] = item_qty2
      //     data[2]["marketSizeRecords"][1]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   } else if (competitor_id > 0 && inxSizeRow == 2  && msrInx == 2 ){
      //     data[2]["marketSizeRecords"][2]["item_group_id"] = itemGroupId
      //     data[2]["marketSizeRecords"][2]["competitor_id"] = competitor_id
      //     data[2]["marketSizeRecords"][2]["item_qty1"] = item_qty1
      //     data[2]["marketSizeRecords"][2]["item_status1"] = item_status1
      //     data[2]["marketSizeRecords"][2]["item_qty2"] = item_qty2
      //     data[2]["marketSizeRecords"][2]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 2  && msrInx == 3 ){
      //     data[2]["marketSizeRecords"][3]["item_group_id"] = itemGroupId
      //     data[2]["marketSizeRecords"][3]["competitor_id"] = competitor_id
      //     data[2]["marketSizeRecords"][3]["item_qty1"] = item_qty1
      //     data[2]["marketSizeRecords"][3]["item_status1"] = item_status1
      //     data[2]["marketSizeRecords"][3]["item_qty2"] = item_qty2
      //     data[2]["marketSizeRecords"][3]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 2  && msrInx == 4 ){
      //     data[2]["marketSizeRecords"][4]["item_group_id"] = itemGroupId
      //     data[2]["marketSizeRecords"][4]["competitor_id"] = competitor_id
      //     data[2]["marketSizeRecords"][4]["item_qty1"] = item_qty1
      //     data[2]["marketSizeRecords"][4]["item_status1"] = item_status1
      //     data[2]["marketSizeRecords"][4]["item_qty2"] = item_qty2
      //     data[2]["marketSizeRecords"][4]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 2  && msrInx == 6 ){
      //     data[2]["marketSizeRecords"][6]["item_group_id"] = itemGroupId
      //     data[2]["marketSizeRecords"][6]["competitor_id"] = competitor_id
      //     data[2]["marketSizeRecords"][6]["item_qty1"] = item_qty1
      //     data[2]["marketSizeRecords"][6]["item_status1"] = item_status1
      //     data[2]["marketSizeRecords"][6]["item_qty2"] = item_qty2
      //     data[2]["marketSizeRecords"][6]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 2  && msrInx == 7 ){
      //     data[2]["marketSizeRecords"][7]["item_group_id"] = itemGroupId
      //     data[2]["marketSizeRecords"][7]["competitor_id"] = competitor_id
      //     data[2]["marketSizeRecords"][7]["item_qty1"] = item_qty1
      //     data[2]["marketSizeRecords"][7]["item_status1"] = item_status1
      //     data[2]["marketSizeRecords"][7]["item_qty2"] = item_qty2
      //     data[2]["marketSizeRecords"][7]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 2  && msrInx == 8 ){
      //     data[2]["marketSizeRecords"][8]["item_group_id"] = itemGroupId
      //     data[2]["marketSizeRecords"][8]["competitor_id"] = competitor_id
      //     data[2]["marketSizeRecords"][8]["item_qty1"] = item_qty1
      //     data[2]["marketSizeRecords"][8]["item_status1"] = item_status1
      //     data[2]["marketSizeRecords"][8]["item_qty2"] = item_qty2
      //     data[2]["marketSizeRecords"][8]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }if(competitor_id > 0 && inxSizeRow == 3  && msrInx == 0 ){
      //     data[3]["marketSizeRecords"][0]["item_group_id"] = itemGroupId
      //     data[3]["marketSizeRecords"][0]["competitor_id"] = competitor_id
      //     data[3]["marketSizeRecords"][0]["item_qty1"] = item_qty1
      //     data[3]["marketSizeRecords"][0]["item_status1"] = item_status1
      //     data[3]["marketSizeRecords"][0]["item_qty2"] = item_qty2
      //     data[3]["marketSizeRecords"][0]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   } else if (competitor_id > 0 && inxSizeRow == 3  && msrInx == 1 ){
      //     data[3]["marketSizeRecords"][1]["item_group_id"] = itemGroupId
      //     data[3]["marketSizeRecords"][1]["competitor_id"] = competitor_id
      //     data[3]["marketSizeRecords"][1]["item_qty1"] = item_qty1
      //     data[3]["marketSizeRecords"][1]["item_status1"] = item_status1
      //     data[3]["marketSizeRecords"][1]["item_qty2"] = item_qty2
      //     data[3]["marketSizeRecords"][1]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   } else if (competitor_id > 0 && inxSizeRow == 3  && msrInx == 2 ){
      //     data[3]["marketSizeRecords"][2]["item_group_id"] = itemGroupId
      //     data[3]["marketSizeRecords"][2]["competitor_id"] = competitor_id
      //     data[3]["marketSizeRecords"][2]["item_qty1"] = item_qty1
      //     data[3]["marketSizeRecords"][2]["item_status1"] = item_status1
      //     data[3]["marketSizeRecords"][2]["item_qty2"] = item_qty2
      //     data[3]["marketSizeRecords"][2]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 3  && msrInx == 3 ){
      //     data[3]["marketSizeRecords"][3]["item_group_id"] = itemGroupId
      //     data[3]["marketSizeRecords"][3]["competitor_id"] = competitor_id
      //     data[3]["marketSizeRecords"][3]["item_qty1"] = item_qty1
      //     data[3]["marketSizeRecords"][3]["item_status1"] = item_status1
      //     data[3]["marketSizeRecords"][3]["item_qty2"] = item_qty2
      //     data[3]["marketSizeRecords"][3]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 3  && msrInx == 4 ){
      //     data[3]["marketSizeRecords"][4]["item_group_id"] = itemGroupId
      //     data[3]["marketSizeRecords"][4]["competitor_id"] = competitor_id
      //     data[3]["marketSizeRecords"][4]["item_qty1"] = item_qty1
      //     data[3]["marketSizeRecords"][4]["item_status1"] = item_status1
      //     data[3]["marketSizeRecords"][4]["item_qty2"] = item_qty2
      //     data[3]["marketSizeRecords"][4]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 3  && msrInx == 6 ){
      //     data[3]["marketSizeRecords"][6]["item_group_id"] = itemGroupId
      //     data[3]["marketSizeRecords"][6]["competitor_id"] = competitor_id
      //     data[3]["marketSizeRecords"][6]["item_qty1"] = item_qty1
      //     data[3]["marketSizeRecords"][6]["item_status1"] = item_status1
      //     data[3]["marketSizeRecords"][6]["item_qty2"] = item_qty2
      //     data[3]["marketSizeRecords"][6]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 3  && msrInx == 7 ){
      //     data[3]["marketSizeRecords"][7]["item_group_id"] = itemGroupId
      //     data[3]["marketSizeRecords"][7]["competitor_id"] = competitor_id
      //     data[3]["marketSizeRecords"][7]["item_qty1"] = item_qty1
      //     data[3]["marketSizeRecords"][7]["item_status1"] = item_status1
      //     data[3]["marketSizeRecords"][7]["item_qty2"] = item_qty2
      //     data[3]["marketSizeRecords"][7]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }else if (competitor_id > 0 && inxSizeRow == 3  && msrInx == 8 ){
      //     data[3]["marketSizeRecords"][8]["item_group_id"] = itemGroupId
      //     data[3]["marketSizeRecords"][8]["competitor_id"] = competitor_id
      //     data[3]["marketSizeRecords"][8]["item_qty1"] = item_qty1
      //     data[3]["marketSizeRecords"][8]["item_status1"] = item_status1
      //     data[3]["marketSizeRecords"][8]["item_qty2"] = item_qty2
      //     data[3]["marketSizeRecords"][8]["item_status2"] = item_status2
      //     setMarketSize(data)
      //   }
  

      // }
  









let RecoRowInx = data[inxSizeRow]["marketSizeRecords"].findIndex(item => item.marketSizeRecordsID == inxRecoRow)




// if(RecoRowInx != -1){
// console.log("testRowIndexID...",RecoRowInx)

// if(competitor_id > 0 && inxSizeRow == 0  && data[0]["marketSizeRecords"].length  == 3 ){
       
//   data[inxSizeRow]["marketSizeRecords"][RecoRowInx]["marketSizeRecordsID"] = 0
//   data[inxSizeRow]["marketSizeRecords"][RecoRowInx]["item_group_id"] = itemGroupId   
//     data[inxSizeRow]["marketSizeRecords"][RecoRowInx]["competitor_id"] = competitor_id  
//     data[inxSizeRow]["marketSizeRecords"][RecoRowInx]["item_qty1"] = item_qty1  
//     data[inxSizeRow]["marketSizeRecords"][RecoRowInx]["item_status1"] = item_status1   
//     data[inxSizeRow]["marketSizeRecords"][RecoRowInx]["item_qty2"] = item_qty2   
//     data[inxSizeRow]["marketSizeRecords"][RecoRowInx]["item_status2"] = item_status2   
    


//     setMarketSize(data)

//   }
// }











      if(competitor_id > 0 && inxSizeRow == 0  && data[0]["marketSizeRecords"].length  == 3 ){
       
        data[0]["marketSizeRecords"][2]["marketSizeRecordsID"] = 0
        data[0]["marketSizeRecords"][2]["item_group_id"] = itemGroupId   
          data[0]["marketSizeRecords"][2]["competitor_id"] = competitor_id  
          data[0]["marketSizeRecords"][2]["item_qty1"] = item_qty1  
          data[0]["marketSizeRecords"][2]["item_status1"] = item_status1   
          data[0]["marketSizeRecords"][2]["item_qty2"] = item_qty2   
          data[0]["marketSizeRecords"][2]["item_status2"] = item_status2   
          
  
  
          setMarketSize(data)
   
        } else if(competitor_id > 0 && inxSizeRow == 0  && data[0]["marketSizeRecords"].length - 1 == 1 ){
         
         
          // data[0]["marketSizeRecords"][1]["marketSizeRecordsID"] = rowId
          data[0]["marketSizeRecords"][1]["item_group_id"] = itemGroupId  
          data[0]["marketSizeRecords"][1]["competitor_id"] = competitor_id 
          data[0]["marketSizeRecords"][1]["item_qty1"] = item_qty1 
          data[0]["marketSizeRecords"][1]["item_status1"] = item_status1 
          data[0]["marketSizeRecords"][1]["item_qty2"] = item_qty2 
          data[0]["marketSizeRecords"][1]["item_status2"] = item_status2 
  
  
  
          setMarketSize(data)
     
  
        } else if(competitor_id > 0 && inxSizeRow == 0  && data[0]["marketSizeRecords"].length - 1 == 2 ){
          data[0]["marketSizeRecords"][2]["item_group_id"] = itemGroupId
          data[0]["marketSizeRecords"][2]["competitor_id"] = competitor_id
          data[0]["marketSizeRecords"][2]["item_qty1"] = item_qty1
          data[0]["marketSizeRecords"][2]["item_status1"] = item_status1
          data[0]["marketSizeRecords"][2]["item_qty2"] = item_qty2
          data[0]["marketSizeRecords"][2]["item_status2"] = item_status2
          setMarketSize(data)
        }else if(competitor_id > 0 && inxSizeRow == 0  && data[0]["marketSizeRecords"].length - 1 == 3 ){
          data[0]["marketSizeRecords"][3]["item_group_id"] = itemGroupId
          data[0]["marketSizeRecords"][3]["competitor_id"] = competitor_id
          data[0]["marketSizeRecords"][3]["item_qty1"] = item_qty1
          data[0]["marketSizeRecords"][3]["item_status1"] = item_status1
          data[0]["marketSizeRecords"][3]["item_qty2"] = item_qty2
          data[0]["marketSizeRecords"][3]["item_status2"] = item_status2
          setMarketSize(data)
        }
        else if (competitor_id > 0 && inxSizeRow == 0  && data[0]["marketSizeRecords"].length - 1 == 4 ){
          data[0]["marketSizeRecords"][4]["item_group_id"] = itemGroupId
          data[0]["marketSizeRecords"][4]["competitor_id"] = competitor_id
          data[0]["marketSizeRecords"][4]["item_qty1"] = item_qty1
          data[0]["marketSizeRecords"][4]["item_status1"] = item_status1
          data[0]["marketSizeRecords"][4]["item_qty2"] = item_qty2
          data[0]["marketSizeRecords"][4]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 0  && data[0]["marketSizeRecords"].length - 1 == 5 ){
          data[0]["marketSizeRecords"][5]["item_group_id"] = itemGroupId
          data[0]["marketSizeRecords"][5]["competitor_id"] = competitor_id
          data[0]["marketSizeRecords"][5]["item_qty1"] = item_qty1
          data[0]["marketSizeRecords"][5]["item_status1"] = item_status1
          data[0]["marketSizeRecords"][5]["item_qty2"] = item_qty2
          data[0]["marketSizeRecords"][5]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 0  && data[0]["marketSizeRecords"].length - 1 == 6 ){
          data[0]["marketSizeRecords"][6]["item_group_id"] = itemGroupId
          data[0]["marketSizeRecords"][6]["competitor_id"] = competitor_id
          data[0]["marketSizeRecords"][6]["item_qty1"] = item_qty1
          data[0]["marketSizeRecords"][6]["item_status1"] = item_status1
          data[0]["marketSizeRecords"][6]["item_qty2"] = item_qty2
          data[0]["marketSizeRecords"][6]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 0  && data[0]["marketSizeRecords"].length - 1 == 7 ){
          data[0]["marketSizeRecords"][7]["item_group_id"] = itemGroupId
          data[0]["marketSizeRecords"][7]["competitor_id"] = competitor_id
          data[0]["marketSizeRecords"][7]["item_qty1"] = item_qty1
          data[0]["marketSizeRecords"][7]["item_status1"] = item_status1
          data[0]["marketSizeRecords"][7]["item_qty2"] = item_qty2
          data[0]["marketSizeRecords"][7]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 0  && data[0]["marketSizeRecords"].length - 1 == 8 ){
          data[0]["marketSizeRecords"][8]["item_group_id"] = itemGroupId
          data[0]["marketSizeRecords"][8]["competitor_id"] = competitor_id
          data[0]["marketSizeRecords"][8]["item_qty1"] = item_qty1
          data[0]["marketSizeRecords"][8]["item_status1"] = item_status1
          data[0]["marketSizeRecords"][8]["item_qty2"] = item_qty2
          data[0]["marketSizeRecords"][8]["item_status2"] = item_status2
          setMarketSize(data)
        }
        else if(competitor_id > 0 && inxSizeRow == 1  && data[1]["marketSizeRecords"].length - 1 == 0 ){
          data[1]["marketSizeRecords"][0]["item_group_id"] = itemGroupId
          data[1]["marketSizeRecords"][0]["competitor_id"] = competitor_id
          data[1]["marketSizeRecords"][0]["item_qty1"] = item_qty1
          data[1]["marketSizeRecords"][0]["item_status1"] = item_status1
          data[1]["marketSizeRecords"][0]["item_qty2"] = item_qty2
          data[1]["marketSizeRecords"][0]["item_status2"] = item_status2
          setMarketSize(data)
        } else if (competitor_id > 0 && inxSizeRow == 1  && data[1]["marketSizeRecords"].length - 1 == 1 ){
          data[1]["marketSizeRecords"][1]["item_group_id"] = itemGroupId
          data[1]["marketSizeRecords"][1]["competitor_id"] = competitor_id
          data[1]["marketSizeRecords"][1]["item_qty1"] = item_qty1
          data[1]["marketSizeRecords"][1]["item_status1"] = item_status1
          data[1]["marketSizeRecords"][1]["item_qty2"] = item_qty2
          data[1]["marketSizeRecords"][1]["item_status2"] = item_status2
          setMarketSize(data)
        } else if (competitor_id > 0 && inxSizeRow == 1  && data[1]["marketSizeRecords"].length - 1 == 2 ){
          data[1]["marketSizeRecords"][2]["item_group_id"] = itemGroupId
          data[1]["marketSizeRecords"][2]["competitor_id"] = competitor_id
          data[1]["marketSizeRecords"][2]["item_qty1"] = item_qty1
          data[1]["marketSizeRecords"][2]["item_status1"] = item_status1
          data[1]["marketSizeRecords"][2]["item_qty2"] = item_qty2
          data[1]["marketSizeRecords"][2]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 1  && data[1]["marketSizeRecords"].length - 1 == 3 ){
          data[1]["marketSizeRecords"][3]["item_group_id"] = itemGroupId
          data[1]["marketSizeRecords"][3]["competitor_id"] = competitor_id
          data[1]["marketSizeRecords"][3]["item_qty1"] = item_qty1
          data[1]["marketSizeRecords"][3]["item_status1"] = item_status1
          data[1]["marketSizeRecords"][3]["item_qty2"] = item_qty2
          data[1]["marketSizeRecords"][3]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 1  && data[1]["marketSizeRecords"].length - 1 == 4 ){
          data[1]["marketSizeRecords"][4]["item_group_id"] = itemGroupId
          data[1]["marketSizeRecords"][4]["competitor_id"] = competitor_id
          data[1]["marketSizeRecords"][4]["item_qty1"] = item_qty1
          data[1]["marketSizeRecords"][4]["item_status1"] = item_status1
          data[1]["marketSizeRecords"][4]["item_qty2"] = item_qty2
          data[1]["marketSizeRecords"][4]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 1  && data[1]["marketSizeRecords"].length - 1 == 6 ){
          data[1]["marketSizeRecords"][6]["item_group_id"] = itemGroupId
          data[1]["marketSizeRecords"][6]["competitor_id"] = competitor_id
          data[1]["marketSizeRecords"][6]["item_qty1"] = item_qty1
          data[1]["marketSizeRecords"][6]["item_status1"] = item_status1
          data[1]["marketSizeRecords"][6]["item_qty2"] = item_qty2
          data[1]["marketSizeRecords"][6]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 1  && data[1]["marketSizeRecords"].length - 1 == 7 ){
          data[1]["marketSizeRecords"][7]["item_group_id"] = itemGroupId
          data[1]["marketSizeRecords"][7]["competitor_id"] = competitor_id
          data[1]["marketSizeRecords"][7]["item_qty1"] = item_qty1
          data[1]["marketSizeRecords"][7]["item_status1"] = item_status1
          data[1]["marketSizeRecords"][7]["item_qty2"] = item_qty2
          data[1]["marketSizeRecords"][7]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 1  && data[1]["marketSizeRecords"].length - 1 == 8 ){
          data[1]["marketSizeRecords"][8]["item_group_id"] = itemGroupId
          data[1]["marketSizeRecords"][8]["competitor_id"] = competitor_id
          data[1]["marketSizeRecords"][8]["item_qty1"] = item_qty1
          data[1]["marketSizeRecords"][8]["item_status1"] = item_status1
          data[1]["marketSizeRecords"][8]["item_qty2"] = item_qty2
          data[1]["marketSizeRecords"][8]["item_status2"] = item_status2
          setMarketSize(data)
        }if(competitor_id > 0 && inxSizeRow == 2  && data[2]["marketSizeRecords"].length - 1 == 0 ){
          data[2]["marketSizeRecords"][0]["item_group_id"] = itemGroupId
          data[2]["marketSizeRecords"][0]["competitor_id"] = competitor_id
          data[2]["marketSizeRecords"][0]["item_qty1"] = item_qty1
          data[2]["marketSizeRecords"][0]["item_status1"] = item_status1
          data[2]["marketSizeRecords"][0]["item_qty2"] = item_qty2
          data[2]["marketSizeRecords"][0]["item_status2"] = item_status2
          setMarketSize(data)
        } else if (competitor_id > 0 && inxSizeRow == 2  && data[2]["marketSizeRecords"].length - 1 == 1 ){
          data[2]["marketSizeRecords"][1]["item_group_id"] = itemGroupId
          data[2]["marketSizeRecords"][1]["competitor_id"] = competitor_id
          data[2]["marketSizeRecords"][1]["item_qty1"] = item_qty1
          data[2]["marketSizeRecords"][1]["item_status1"] = item_status1
          data[2]["marketSizeRecords"][1]["item_qty2"] = item_qty2
          data[2]["marketSizeRecords"][1]["item_status2"] = item_status2
          setMarketSize(data)
        } else if (competitor_id > 0 && inxSizeRow == 2  && data[2]["marketSizeRecords"].length - 1 == 2 ){
          data[2]["marketSizeRecords"][2]["item_group_id"] = itemGroupId
          data[2]["marketSizeRecords"][2]["competitor_id"] = competitor_id
          data[2]["marketSizeRecords"][2]["item_qty1"] = item_qty1
          data[2]["marketSizeRecords"][2]["item_status1"] = item_status1
          data[2]["marketSizeRecords"][2]["item_qty2"] = item_qty2
          data[2]["marketSizeRecords"][2]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 2  && data[2]["marketSizeRecords"].length - 1 == 3 ){
          data[2]["marketSizeRecords"][3]["item_group_id"] = itemGroupId
          data[2]["marketSizeRecords"][3]["competitor_id"] = competitor_id
          data[2]["marketSizeRecords"][3]["item_qty1"] = item_qty1
          data[2]["marketSizeRecords"][3]["item_status1"] = item_status1
          data[2]["marketSizeRecords"][3]["item_qty2"] = item_qty2
          data[2]["marketSizeRecords"][3]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 2  && data[2]["marketSizeRecords"].length - 1 == 4 ){
          data[2]["marketSizeRecords"][4]["item_group_id"] = itemGroupId
          data[2]["marketSizeRecords"][4]["competitor_id"] = competitor_id
          data[2]["marketSizeRecords"][4]["item_qty1"] = item_qty1
          data[2]["marketSizeRecords"][4]["item_status1"] = item_status1
          data[2]["marketSizeRecords"][4]["item_qty2"] = item_qty2
          data[2]["marketSizeRecords"][4]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 2  && data[2]["marketSizeRecords"].length - 1 == 6 ){
          data[2]["marketSizeRecords"][6]["item_group_id"] = itemGroupId
          data[2]["marketSizeRecords"][6]["competitor_id"] = competitor_id
          data[2]["marketSizeRecords"][6]["item_qty1"] = item_qty1
          data[2]["marketSizeRecords"][6]["item_status1"] = item_status1
          data[2]["marketSizeRecords"][6]["item_qty2"] = item_qty2
          data[2]["marketSizeRecords"][6]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 2  && data[2]["marketSizeRecords"].length - 1 == 7 ){
          data[2]["marketSizeRecords"][7]["item_group_id"] = itemGroupId
          data[2]["marketSizeRecords"][7]["competitor_id"] = competitor_id
          data[2]["marketSizeRecords"][7]["item_qty1"] = item_qty1
          data[2]["marketSizeRecords"][7]["item_status1"] = item_status1
          data[2]["marketSizeRecords"][7]["item_qty2"] = item_qty2
          data[2]["marketSizeRecords"][7]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 2  && data[2]["marketSizeRecords"].length - 1 == 8 ){
          data[2]["marketSizeRecords"][8]["item_group_id"] = itemGroupId
          data[2]["marketSizeRecords"][8]["competitor_id"] = competitor_id
          data[2]["marketSizeRecords"][8]["item_qty1"] = item_qty1
          data[2]["marketSizeRecords"][8]["item_status1"] = item_status1
          data[2]["marketSizeRecords"][8]["item_qty2"] = item_qty2
          data[2]["marketSizeRecords"][8]["item_status2"] = item_status2
          setMarketSize(data)
        }if(competitor_id > 0 && inxSizeRow == 3  && data[3]["marketSizeRecords"].length - 1 == 0 ){
          data[3]["marketSizeRecords"][0]["item_group_id"] = itemGroupId
          data[3]["marketSizeRecords"][0]["competitor_id"] = competitor_id
          data[3]["marketSizeRecords"][0]["item_qty1"] = item_qty1
          data[3]["marketSizeRecords"][0]["item_status1"] = item_status1
          data[3]["marketSizeRecords"][0]["item_qty2"] = item_qty2
          data[3]["marketSizeRecords"][0]["item_status2"] = item_status2
          setMarketSize(data)
        } else if (competitor_id > 0 && inxSizeRow == 3  && data[3]["marketSizeRecords"].length - 1 == 1 ){
          data[3]["marketSizeRecords"][1]["item_group_id"] = itemGroupId
          data[3]["marketSizeRecords"][1]["competitor_id"] = competitor_id
          data[3]["marketSizeRecords"][1]["item_qty1"] = item_qty1
          data[3]["marketSizeRecords"][1]["item_status1"] = item_status1
          data[3]["marketSizeRecords"][1]["item_qty2"] = item_qty2
          data[3]["marketSizeRecords"][1]["item_status2"] = item_status2
          setMarketSize(data)
        } else if (competitor_id > 0 && inxSizeRow == 3  && data[3]["marketSizeRecords"].length - 1 == 2 ){
          data[3]["marketSizeRecords"][2]["item_group_id"] = itemGroupId
          data[3]["marketSizeRecords"][2]["competitor_id"] = competitor_id
          data[3]["marketSizeRecords"][2]["item_qty1"] = item_qty1
          data[3]["marketSizeRecords"][2]["item_status1"] = item_status1
          data[3]["marketSizeRecords"][2]["item_qty2"] = item_qty2
          data[3]["marketSizeRecords"][2]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 3  && data[3]["marketSizeRecords"].length - 1 == 3 ){
          data[3]["marketSizeRecords"][3]["item_group_id"] = itemGroupId
          data[3]["marketSizeRecords"][3]["competitor_id"] = competitor_id
          data[3]["marketSizeRecords"][3]["item_qty1"] = item_qty1
          data[3]["marketSizeRecords"][3]["item_status1"] = item_status1
          data[3]["marketSizeRecords"][3]["item_qty2"] = item_qty2
          data[3]["marketSizeRecords"][3]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 3  && data[3]["marketSizeRecords"].length - 1 == 4 ){
          data[3]["marketSizeRecords"][4]["item_group_id"] = itemGroupId
          data[3]["marketSizeRecords"][4]["competitor_id"] = competitor_id
          data[3]["marketSizeRecords"][4]["item_qty1"] = item_qty1
          data[3]["marketSizeRecords"][4]["item_status1"] = item_status1
          data[3]["marketSizeRecords"][4]["item_qty2"] = item_qty2
          data[3]["marketSizeRecords"][4]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 3  && data[3]["marketSizeRecords"].length - 1 == 6 ){
          data[3]["marketSizeRecords"][6]["item_group_id"] = itemGroupId
          data[3]["marketSizeRecords"][6]["competitor_id"] = competitor_id
          data[3]["marketSizeRecords"][6]["item_qty1"] = item_qty1
          data[3]["marketSizeRecords"][6]["item_status1"] = item_status1
          data[3]["marketSizeRecords"][6]["item_qty2"] = item_qty2
          data[3]["marketSizeRecords"][6]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 3  && data[3]["marketSizeRecords"].length - 1 == 7 ){
          data[3]["marketSizeRecords"][7]["item_group_id"] = itemGroupId
          data[3]["marketSizeRecords"][7]["competitor_id"] = competitor_id
          data[3]["marketSizeRecords"][7]["item_qty1"] = item_qty1
          data[3]["marketSizeRecords"][7]["item_status1"] = item_status1
          data[3]["marketSizeRecords"][7]["item_qty2"] = item_qty2
          data[3]["marketSizeRecords"][7]["item_status2"] = item_status2
          setMarketSize(data)
        }else if (competitor_id > 0 && inxSizeRow == 3  && data[3]["marketSizeRecords"].length - 1 == 8 ){
          data[3]["marketSizeRecords"][8]["item_group_id"] = itemGroupId
          data[3]["marketSizeRecords"][8]["competitor_id"] = competitor_id
          data[3]["marketSizeRecords"][8]["item_qty1"] = item_qty1
          data[3]["marketSizeRecords"][8]["item_status1"] = item_status1
          data[3]["marketSizeRecords"][8]["item_qty2"] = item_qty2
          data[3]["marketSizeRecords"][8]["item_status2"] = item_status2
          setMarketSize(data)
        }
  

      }

      
    


      
      


        

// console.log("test MSRows"||
// [competitor_id ,
//   item_qty1 ,
//   item_status1 ,
//   item_qty2 ,
//   item_status2 ,
//   itemGroupId ])



    console.log("Indextesting",indexRow)
		
    console.log("eveTest",inxSizeRow)
    
  //   setMarketSize([{
  //     marketSizeRowID: 0,
  //     supplier_id: supplierId,
  //     product_family_id: productFamilyId,
  //     item_group_id: 0,
  //     market_potential_id: 0,
  //     marketSizeRecords: [
  //       {
  //         marketSizeRecordsID: 0,
  //         egmed_consumption: 0,
  //         total_consumption: 0,
  //         competitor_id: 0,
  //         item_qty1: 0,
  //         item_status1: 0,
  //         item_qty2: 0,
  //         item_status2: 0,
  //         market_size_id: 0,
  //       },
  //     ],
  //   }]
  // )

  
	}, [inxSizeRow , supplierId , productFamilyId,
    competitor_id ,
    item_qty1 ,
    item_status1 ,
    item_qty2 ,
    item_status2, addCheck, currSav,itemGroupId])
  
  


console.log("marketSizeTest",marketSize)

  function CallBack(childData){
    // const data = childData + ' this is adding test'

    
 
    setFinalMarketSize(childData)

    return <div>
      <p>Message from chiled - {JSON.stringify(childData)}</p>
    </div>
  }

  function CallBackRecords(childData){


    setFinalRecords([...finalRecords,...[childData]])


    return <div>
    <p>Message from chiledcheckBox - {JSON.stringify(childData)}</p>
  </div>
  }

  

  const globalState = useSelector((state)=> state)

  // const dispatch = useDispatch()

  const [saveBtn, setSaveBtn] = useState(false)



console.log()

  const elemento = {
  marketSizeRowID: 4,
  supplier_id: 3,
  product_family_id: 4,
  market_potential_id: 0,
  marketSizeRecords: [
    {
      item_group_id: 0,
      marketSizeRecordsID: 0,
      egmed_consumption: 0,
      total_consumption: 0,
      competitor_id: 0,
      item_qty1: 0,
      item_status1: 0,
      item_qty2: 0,
      item_status2: 0,
      market_size_id: 0,
    },
  ]
}

  const userData = JSON.parse(useContext(UserContext));
  const key = userData.id;
  const bl1 = userData.bl1_id;
  console.log("from AccountNameAdress", bl1);

  let bls = {
    BB: 1,
    BIOS: 2,
    CONS: 3,
    DM: 4,
    IMP: 5,
    SD: 6,
    STER: 7,
    WCL: 8,
    JOT: 9,
    CMF: 10,
    TRM: 11,
    OR: 12,
    ENT: 13,
    ENTTH: 14,
    UR: 15,
    LAPA: 16,
    GYN: 17,
    ERBE: 18,
    ICU: 19,
    NICU: 20,
    SE: 21,
    Fluke: 22,
    Private_Medical_upper: 23,
    Private_Medical_lower: 24,
    Private_OR: 25,
    Private_Disposable: 26,
  };

  const AddCallhandleClick = () => {
    setCount((current) => current + 1);
  };

  const DeleteCallhandleClick = () => {
    setDelCount((current) => current + 1);
  };

  const ActivityMainSaveOnClick = () => {
    setSaveCount((current) => current + 1);
  };

  const displayPassMainBtns = async (name) => {
    console.log("passed class Name :", name);
    if (await name.includes("Block")) {
      setDisplayMainBtns(hTabs.callInfoAccordionBlockBtns);
    } else {
      setDisplayMainBtns(hTabs.callInfoAccordionhiddenBtns);
    }
  };

  // const addContactBtn = (event) => {
  //   event.preventDefault()
  //   const abc = [...val, []]
  //   setVal(abc)
  // }
  // console.log(val, 'data')

  // const deleteContactBtn = (i) => {
  //   i.preventDefault()
  //   const deleteVal = [...val]
  //   deleteVal.splice(i, 1)
  //   setVal(deleteVal)
  // }
  // const handleClick = () => {
  //   childRef.current.childFunction1();

  //   childRef.current.childFunction2();

  function removeDuplicates(arr) {
    let unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
  // };
 const testSave = (e) => {
  e.preventDefault()

  // finalMarketSize.filter((item,
  //   index) => finalMarketSize.marketSizeRecords.indexOf(item) === index);

  // console.log("finalMarketSize..",finalMarketSize)

  // let markSizeCopy = [...finalMarketSize.marketSizeRecords]


  // setcurantSaveBtn()


  // removeDuplicates(markSizeCopy)



  // markSizeCopy.filter((item,
  //   index) => markSizeCopy.indexOf(item) === index);


    // setTimeout(()=>  console.log("finalMarketSize...",markSizeCopy),1000)
  setSaveBtn(true)

 setcurantSaveBtn(current => current + 1)

 setTimeout(()=>console.log("curantSaveBtn ",curantSaveBtn),0)

  dispatch(updateSaveBtn(1))
  // setNewelement([...marketSizeData,newelement ])
  // console.log("marketSizeData",marketSizeData).

  if(marketSize[0]["marketSizeRecords"][0].competitor_id == 0){
    let newMRS = [...marketSize]
    newMRS[0]["marketSizeRecords"].splice(0,2)
    setMarketSize(newMRS)
  }

const globalS = [...globalState.marketSize]
globalS.shift()

//  console.log("marketSizeData-GlobalS",globalS)


 setTimeout(()=> console.log("marketSizeData",globalState.marketSize),0)


  
 }

 

  const addMarketFamilyOnClick = (event) => {
    // event.preventDefault();
    
    let index = marketSizeRows.length

    setIndexRow(index)
    setCurrAddRow(curr => curr + 1)
 

setExpander(true)

    console.log("add new family button was pressed");
    if(marketSizeRows.length < 4){
    setMarketSizeRows([
      ...marketSizeRows,
      <MarketSizeRow
      inxRowId = {inxRowId}
      setRemoveUnCheck = {setRemoveUnCheck}
      setAddCheck = {setAddCheck}
      setInxRecoRow = {setInxRecoRow}
      setmarketSizeRecordsID = {setmarketSizeRecordsID}
      setegmed_consumption = {setegmed_consumption}
      settotal_consumption = {settotal_consumption}
      setcompetitor_id = {setcompetitor_id}
      setitem_qty1 = {setitem_qty1}
      setitem_status1 = {setitem_status1}
      setitem_qty2 = {setitem_qty2}
      setitem_status2 = {setitem_status2}
      setmarket_size_id = {setmarket_size_id}
      setItemGroupId= {setItemGroupId}
      
      setInxSizeRow={setInxSizeRow} setEve={setEve} setSupplierId={setSupplierId} setProductFamilyId={setProductFamilyId} currAddRow={currAddRow} saveBtn={curantSaveBtn} idprop={index} key={index} expander={expander} marketSizeData={marketSize} handelCallBack={CallBack} callBackRecords={CallBackRecords} />,
    ]);
  }

  setMarketSize([
    ...marketSize,
    {
      marketSizeRowID: 0,
      supplier_id: 0,
      product_family_id: 0,
      market_potential_id: 0,
      marketSizeRecords: [
        // {
        //   item_group_id : 0,
        //   marketSizeRecordsID: 0,
        //   egmed_consumption: 0,
        //   total_consumption: 0,
        //   competitor_id: 0,
        //   item_qty1: 0,
        //   item_status1: 0,
        //   item_qty2: 0,
        //   item_status2: 0,
        //   market_size_id: 0,
        // }
      ],
    }
  ])

  // setMarketSizeData
   setTimeout(()=> setExpander(false),200)

    console.log("add new family button was pressed");
  };

const checkComp =(comp)=>{
  let newRecords = [...marketSize]

  console.log("checkComp",comp)
  newRecords[inxSizeRow]["marketSizeRecords"] = [
    ...newRecords[0]["marketSizeRecords"],
    {
      item_group_id : 0,
      marketSizeRecordsID:newRecords[0]["marketSizeRecords"].length,
      egmed_consumption: 0,
      total_consumption: 0,
      competitor_id: 0,
      item_qty1: 0,
      item_status1: 0,
      item_qty2: 0,
      item_status2: 0,
      market_size_id: 0,
    }
  ]


  

  setMarketSize(newRecords) 


}

  // add marketSizeRecords Obj 

  useEffect(()=>{

    let unique_id = uuid();
    let rowId = unique_id.slice(0,8)

 let i = 0
  
 const addI = (i) => i + 1

 setCurrent((curr) => curr + 1)


console.log("testCompId...",competitor_id)
console.log("testUniID...",unique_id)
console.log("testUniID....",rowId)



    let newRecords = [...marketSize]
    setInxRowId(current)
    dispatch(updateMarketSizeRecordsId(rowId))

    newRecords[inxSizeRow]["marketSizeRecords"] = [
      ...newRecords[inxSizeRow]["marketSizeRecords"],
      {
        item_group_id : 0,
        marketSizeRecordsID : inxRecoRow,
        egmed_consumption: 0,
        total_consumption: 0,
        competitor_id: 0,
        item_qty1: 0,
        item_status1: 0,
        item_qty2: 0,
        item_status2: 0,
        market_size_id: 0,
      }
    ]
  
  
    
  
   setTimeout(()=> setMarketSize(newRecords)  , 0) 


// if (addCheck > 0 ) 


console.log("addCheckMarketSizeTest...",newRecords)
// if(competitor_id == 0 ){
//   checkComp(competitor_id)
// }

// checkComp(competitor_id)

// if( competitor_id > 0 && inxSizeRow == 0 ){

//       setInxRowId(rowId)

//       newRecords[inxSizeRow]["marketSizeRecords"].length

//         newRecords[0]["marketSizeRecords"] = [
//           ...newRecords[0]["marketSizeRecords"],
//           {
//             item_group_id : 0,
//             marketSizeRecordsID: newRecords[0]["marketSizeRecords"].length,
//             egmed_consumption: 0,
//             total_consumption: 0,
//             competitor_id: 0,
//             item_qty1: 0,
//             item_status1: 0,
//             item_qty2: 0,
//             item_status2: 0,
//             market_size_id: 0,
//           }
//         ]

     
        

//         setMarketSize(newRecords) 

//       } else 


// if(competitor_id > 0 && inxSizeRow == 1){
                

//    setInxRowId(rowId)
//         newRecords[1]["marketSizeRecords"] = [
//           ...newRecords[1]["marketSizeRecords"],
//           {
//             item_group_id : 0,
//             marketSizeRecordsID: newRecords[1]["marketSizeRecords"].length,
//             egmed_consumption: 0,
//             total_consumption: 0,
//             competitor_id: 0,
//             item_qty1: 0,
//             item_status1: 0,
//             item_qty2: 0,
//             item_status2: 0,
//             market_size_id: 0,
//           }
//         ]

      
        

//         setMarketSize(newRecords) 
//       } else if(competitor_id > 0 && inxSizeRow == 2){

//         setInxRowId(rowId)
//         newRecords[2]["marketSizeRecords"] = [
//           ...newRecords[2]["marketSizeRecords"],
//           {
//             item_group_id : 0,
//             marketSizeRecordsID: newRecords[2]["marketSizeRecords"].length,
//             egmed_consumption: 0,
//             total_consumption: 0,
//             competitor_id: 0,
//             item_qty1: 0,
//             item_status1: 0,
//             item_qty2: 0,
//             item_status2: 0,
//             market_size_id: 0,
//           }
//         ]
//         setMarketSize(newRecords) 
//       }else if(competitor_id > 0 && inxSizeRow == 3){
                

//         setInxRowId(rowId)
 
//         newRecords[3]["marketSizeRecords"] = [
//           ...newRecords[3]["marketSizeRecords"],
//           {
//             item_group_id : 0,
//             marketSizeRecordsID: newRecords[3]["marketSizeRecords"].length,
//             egmed_consumption: 0,
//             total_consumption: 0,
//             competitor_id: 0,
//             item_qty1: 0,
//             item_status1: 0,
//             item_qty2: 0,
//             item_status2: 0,
//             market_size_id: 0,
//           }
//         ]
//         setMarketSize(newRecords) 
//       }
      



    

  },[parseInt(addCheck)])



  // Remove Market size record obj

  useEffect(()=>{





    if(removeUnCheck > 0){


      let newRecords = [...marketSize]



        // newRecords[inxSizeRow]["marketSizeRecords"].filter(
        //   (fruit) =>{
        //   console.log('FRUIT IS MarketSizeTest',newRecords[inxSizeRow]["marketSizeRecords"])
        //     fruit.competitor_id != 0 && fruit.item_group_id != 0}
        // )

      
          // setMarketSize((current) =>
          //   current.filter(
          //     (fruit) =>
          //       fruit.competitor_id != uncheckedComp && fruit.item_group_id != unCheckItemGroup
          //   )
          // );

          // setMarketSize(newRecords)
        
        // newRecords[0]["marketSizeRecords"] = [
        //   ...newRecords[0]["marketSizeRecords"],
          // let obj={
          //   item_group_id: 0,
          //   marketSizeRecordsID: 0,
          //   egmed_consumption: 0,
          //   total_consumption: 0,
          //   competitor_id: 0,
          //   item_qty1: 0,
          //   item_status1: 0,
          //   item_qty2: 0,
          //   item_status2: 0,
          //   market_size_id: 0,
          // }
        // ]

      // let index = indexOf()
      // newRecords[0]["marketSizeRecords"].splice(index, 1);
      console.log("addCheckMarketSizeTest...",inxSizeRow)

      
      



  }

  },[removeUnCheck])



  if(marketSizeRows.length === 0){
    addMarketFamilyOnClick()
     }



 const deleteMarketFamilyonClick = (event) => {
  event.preventDefault();

  console.log("CallBackRecords...",finalRecords)


  // dispatch(updateMarketSize(elemento))



  // setIndexCount(indexCount - 1);
  // clone
  let marketSizeRowsColne = [...marketSizeRows];

  // index
  //  marketSizeRowsColne.findIndex(e => e === "tc_001")
  let index = marketSizeRowsColne.length - 1;
  let lastInx =  marketSizeRowsColne.length - 1;

  // change

  // marketSizeRowsColne.filter((_,inx) => inx !== 2)
  marketSizeRows.length > 1 && marketSizeRowsColne.splice(lastInx,1);


  console.log("marketSizeRowsColne,,,,,,,",  [marketSizeRowsColne] );
  // setNewComponent

  setMarketSizeRows([...marketSizeRowsColne]);

  let mrketSizeClone = [...marketSize]
  mrketSizeClone.length > 1 && mrketSizeClone.splice(lastInx,1)
  setMarketSize(mrketSizeClone)


};



//   const deleteMarketFamilyonClick = (e) => {
//     e.preventDefault();
//     e.stopPropagation();

//     // setIndexCount(indexCount - 1);
//     // clone
   
//     let marketSizeRowsColne = [...marketSizeRows];
//     // index
//     //  marketSizeRowsColne.findIndex(e => e === "tc_001")
// // let idprop =  JSON.parse(localStorage.getItem('selectedMarketSizeRow'));

// // console.log('props from fullwidth is ',idprop)
   

//     // let index = marketSizeRowsColne.findIndex((inx)=>{
//     //   console.log("find index key is ",inx.key)
//     //   return inx.key == idprop;
//     // })
//     // console.log("index in find index key is ",index)
//     // let lastInx =  marketSizeRowsColne.length - 1;

//   //  console.log("last index is",lastInx)
//     // setTimeout(()=>localStorage.setItem('selectedMarketSizeRow', ''),0)
//     // change

//   //   marketSizeRowsColne.filter((k,inx) => 
//   //  k.key != 2)
//     // console.log("the key is ..",k.key))


//     // marketSizeRowsColne.splice(lastInx,1);

//     marketSizeRowsColne.pop()


//     console.log("marketSizeRowsColne,,,,,,,", [marketSizeRowsColne]);
//     // setNewComponent

//     setMarketSizeRows([marketSizeRowsColne.pop()]);
//   };

console.log("testRecordIndex",inxRecoRow)

  return (
    <Box sx={{ width: "93.5%", height: "99vh", overflow: "auto" }}>
      <TabContext value={value}>
        <Box
          sx={{ borderBottom: 1, borderColor: "divider", position: "fixed" }}
        >
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label="Market Potential"
              value="1"
              style={{
                fontSize: "15pt",
                textTransform: "none",
                fontWeight: "bold",
                width: "50%",
              }}
            />
            <Tab
              label="Market Size"
              value="2"
              style={{
                fontSize: "15pt",
                textTransform: "none",
                fontWeight: "bold",
                textAlign: "center",
                width: "50%",
              }}
            />
            {/* <Tab
              label="Market Data History"
              value="0"
              style={{
                fontSize: "15pt",
                textTransform: "none",
                fontWeight: "bold",
                textAlign: "center",
                width: "50%",
              }}
            /> */}
          </TabList>
        </Box>
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            minHeight: "70%",
            marginTop: "5%",
          }}
        >
          <TabPanel value="1">
            {/* <Counter /> */}

            <AccountNameAdress />

            {bl1 === bls.JOT ? (
              <JOT />
            ) : bl1 === bls.TRM ? (
              <TRM />
            ) : bl1 === bls.BIOS ? (
              <BIOS />
            ) : bl1 === bls.BB ? (
              <BB />
            ) : bl1 === bls.SD ? (
              <SD />
            ) : bl1 === bls.CONS ? (
              <CONS />
            ) : bl1 === bls.IMP ? (
              <IMP />
            ) : bl1 === bls.STER ? (
              <STER />
            ) : bl1 === bls.WCL ? (
              <WCL />
            ) : bl1 === bls.LAPA ? (
              <LAPA />
            ) : bl1 === bls.ENT ? (
              <ENT />
            ) : bl1 === bls.ENTTH ? (
              <ENTTH />
            ) : bl1 === bls.ERBE ? (
              <ERBE />
            ) : bl1 === bls.GYN ? (
              <GYN />
            ) : bl1 === bls.UR ? (
              <UR />
            ) : bl1 === bls.OR ? (
              <OR />
            ) : bl1 === bls.ICU ? (
              <ICU />
            ) : bl1 === bls.NICU ? (
              <NICU />
            ) : bl1 === bls.SE ? (
              <SE />
            ) : bl1 === bls.Fluke ? (
              <Fluke />
            ) : bl1 === bls.Private_Disposable ? (
              <Private_Disposable />
            ) : bl1 === bls.Private_OR ? (
              <Private_OR />
            ) : bl1 === bls.Private_Medical_lower ? (
              <Private_Medical_lower />
            ) : bl1 === bls.Private_Medical_upper ? (
              <Private_Medical_upper />
            ) : null}

            {/* <JOT/> */}
            {/* <TRM /> */}
            {/* <BIOS/> */}
            {/* <BB /> */}
            {/* <SD /> */}
            {/* <CONS/> */}
            {/* <IMP /> */}
            {/* <STER /> */}
            {/* <WCL/> */}
            {/* <LAPA/> */}
            {/* <ENT/> */}
            {/* <ENTTH/> */}
            {/* <ERBE /> */}
            {/* <GYN/> */}
            {/* <UR/> */}
            {/* <OR/> */}
            {/* <ICU/> */}
            {/* <NICU/> */}
            {/* <SE/> */}
            {/* <Fluke /> */}
            {/* <Private_Disposable /> */}
            {/* <Private_OR/> */}
            {/* <Private_Medical_lower/> */}
            {/* <Private_Medical_upper/> */}
          </TabPanel>
        </Box>
        <Box
          sx={{
            width: "100%",
            typography: "body1",
            height: "1fr",
            // minHeight:"20rem",
            // overflowY: "scroll",
            marginTop: "5%",
          }}
        >
          <TabPanel active value="2" style={{ overflowY: "scroll" }}>
            <div
            // style={{
            //   zindex: "1000",
            //   height: "fitContent",
            // overflowY: "scroll",
            // }}
            >
              {/* <label className={hTabs.CallLable}>Market Size Records</label> */}

              {/* <MarketSizeRow /> */}

              {marketSizeRows.map((obj, inx ) =>(
                
              <div key={inx}  idprop={inx}>             
                 {obj}
                </div>
              
              ))}

              {/* <img
            src={underDev}
            alt="Under Development Img"
            style={{ width: '600px', padding: '100px' }}
          /> */}
              {/* <GYN /> */}
              {/* <ActivityTable /> */}
              {/* <ActivityTableNew/> */}
            </div>
            <div className={hTabs.activityMainBtns}>
              {/* <button
                className={`${hTabs.addBtn} ${displayMainBtns}`}
                id="addContact0"
                onClick={AddCallhandleClick}
              >
                Add Call
              </button>
              <button
                className={`${hTabs.deleteBtn} ${displayMainBtns}`}
                id="deleteContact0"
                onClick={DeleteCallhandleClick}
              >
                Delete Call
              </button> */}
              <button
                className={hTabs.addBtn}
                id="addMarketSizeFamily"
                onClick={(event) => addMarketFamilyOnClick(event)}
              >
                Add Family
              </button>

              <button
                className={hTabs.deleteBtn}
                id="addMarketSizeFamily"
                onClick={(event) => deleteMarketFamilyonClick(event)}
              >
                Delete Family
              </button>


              <button
                className={hTabs.saveBtn}
                id="saveMarketData"
                onClick={(event) => {testSave(event)
                  setCurrSav((curr)=> curr + 1)
                }}

                // marketSaveonClick(event)}
              >
                Save
              </button>
            </div>
          </TabPanel>
        </Box>

        {/* <TabPanel active value="0">
          <div>
            <img
            src={underDev}
            alt="Under Development Img"
            style={{ width: '600px', padding: '100px' }}
          />

            {/* <ActivityTableNew/> */}
          {/* </div>
        </TabPanel> */} 
        
      </TabContext>
    </Box>
  );
}
