/* eslint-disable */
import React, {
  useState,
  useRef,
  useContext,
  forwardRef,
  useImperativeHandle,
} from "react";

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
import MarketSizeRow from "./MarketSizeRow";

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

  const [marketSizeData, setmarketSizeData] = useState([])

  // setCountFullWToVTabs(countCustAccorToFullW)
  const childRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const [count, setCount] = useState(0);
  const [delCount, setDelCount] = useState(0);
  const [saveCount, setSaveCount] = useState(0);

  const [newelement,setNewelement] = useState([{
    marketSizeRowID: 0,
    supplier_id: 0,
    product_family_id: 0,
    item_group_id: 0,
    market_potential_id: 0,
    marketSizeRecords: [
      {
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
  // };
 const testSave = (e) => {
  // setNewelement([...marketSizeData,newelement ])
  console.log("marketSizeData",marketSizeData)
 }

 

  const addMarketFamilyOnClick = (event) => {
    // event.preventDefault();

    let index = marketSizeRows.length

    console.log("add new family button was pressed");
    setMarketSizeRows([
      ...marketSizeRows,
      <MarketSizeRow idprop={index} key={index} marketSizeData={setmarketSizeData}/>,
    ]);
    console.log("add new family button was pressed");
  };

  if(marketSizeRows.length === 0){
    addMarketFamilyOnClick()
 }



 const deleteMarketFamilyonClick = (event) => {
  event.preventDefault();

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
            <Tab
              label="Market Data History"
              value="0"
              style={{
                fontSize: "15pt",
                textTransform: "none",
                fontWeight: "bold",
                textAlign: "center",
                width: "50%",
              }}
            />
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
                onClick={(event) => testSave(event)}

                // marketSaveonClick(event)}
              >
                Save
              </button>
            </div>
          </TabPanel>
        </Box>

        <TabPanel active value="0">
          <div>
            {/* <img
            src={underDev}
            alt="Under Development Img"
            style={{ width: '600px', padding: '100px' }}
          /> */}

            {/* <ActivityTableNew/> */}
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  );
}
