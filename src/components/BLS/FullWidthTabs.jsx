/* eslint-disable */
import React,{useState ,useRef,forwardRef,useImperativeHandle} from 'react'
import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import TabContext from '@mui/lab/TabContext'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import hTabs from './hTabs.module.css'
import CustomizedAccordions from './CustomizedAccordions'
import CustomerInfoAccordion from './CustomerInfoAccordion'
import underDev from '../../imgs/UnderDev.jpg'
import { display } from '@mui/system'
import ActivityTable from '../../components/Table/ActivityTable'

import ActivityTableNew from '../../components/Table/ActivityTableNew'



export default function LabTabs({setCountFullWToVTabs , setCountFullWCToVTabs}) {
  const [value, setValue] = useState('1')
  const [displayMainBtns,setDisplayMainBtns]= useState(hTabs.callInfoAccordionhiddenBtns)
  const [countCustAccorToFullW , setCountCustAccorToFullW] = useState(0)
  const [countCustAccorToFullWC , setCountCustAccorToFullWC] = useState(0)
  setCountFullWCToVTabs(countCustAccorToFullWC)

  setCountFullWToVTabs(countCustAccorToFullW)
  const childRef = useRef(null);


  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  const [count, setCount] = useState(0);
  const [delCount, setDelCount] = useState(0);
  const [saveCount , setSaveCount] = useState(0)

  const AddCallhandleClick = () => {
    setCount(current => current + 1);
  };
       
  const DeleteCallhandleClick = ()=>{
    setDelCount(current => current + 1);
  }

    const ActivityMainSaveOnClick = () => {
      setSaveCount((current) => current + 1)
    }


  




  const displayPassMainBtns = async (name)=>{
    
    console.log("passed class Name :",name)
    if (await name.includes("Block")) {
      setDisplayMainBtns(hTabs.callInfoAccordionBlockBtns)
    } else {
      setDisplayMainBtns(hTabs.callInfoAccordionhiddenBtns)
    }
  }

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


  return (
    <Box sx={{ width: '93.5%', height: '99vh' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', position: 'fixed' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab
              label="Create New Record"
              value="2"
              style={{ fontSize: '15pt', textTransform: 'none', fontWeight: 'bold', width: '50%' }}
            />
            <Tab  
              label="History Records"
              value="1"
              style={{
                fontSize: '15pt',
                textTransform: 'none',
                fontWeight: 'bold',
                textAlign: 'center',
                width: '50%'
              }}
            />
          </TabList>
        </Box>
        <Box
          sx={{
            width: '100%',
            typography: 'body1',
            height: '73%',
            overflowY: 'scroll',
            marginTop: '5%'
          }}
        >
          <TabPanel value="2" >
            <CustomizedAccordions
              displayPassMainBtns={displayPassMainBtns}
              delCount={delCount}
              count={count}
              saveCount={saveCount}
              ref={childRef}
              setCountCustAccorToFullW={setCountCustAccorToFullW}
              setCountCustAccorToFullWC={setCountCustAccorToFullWC}
            />
            <div className={hTabs.activityMainBtns}>
              <button
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
              </button>

              <button
                className={hTabs.saveBtn}
                id="SaveActivity"
                onClick={(event) => ActivityMainSaveOnClick(event)}
              >
                Save Activity
              </button>
            </div>
          </TabPanel>
        </Box>
        <TabPanel active value="1" >
          <div>
          {/* <img
            src={underDev}
            alt="Under Development Img"
            style={{ width: '600px', padding: '100px' }}
          /> */}
           {/* <GYN /> */}
          {/* <ActivityTable /> */}
          <ActivityTableNew/>
          </div>
        </TabPanel>
      </TabContext>
    </Box>
  )
}
