/* eslint-disable */

import {useState , useEffect} from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { solid, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used


// import HomeIcon from '@material-ui/icons/Home'
// import FlashOnIcon from '@material-ui/icons/FlashOn'
// import Equalizer from '@material-ui/icons/Equalizer'
// import Summarize from '@material-ui/icons/Description'

// import LogoutOutlined from '@mui/icons/logout'
// import Logout from '@mui/icons-material/PowerSettingsNew'
// import Logout from '@mui/icons-material/Logout'

import Icon from '@mui/material/Icon';

import { Link, useNavigate } from 'react-router-dom'



/* eslint-disable */
import FullWidthTabs from './FullWidthTabs'
import styles from './styles.module.css';
import hTabs from './hTabs.module.css'
import PreLoader3 from '../Loading/PreLoader3'
import Reports from './Reports'
import { Navigate } from 'react-router-dom'
import UnderDev from '../../imgs/UnderDev.jpg'

console.log("Icon is ",Icon)


function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component={'span'} variant={'body2'} >{children}</Typography>
        </Box>
      )}
    </div>
  )
}


TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`
  }
}

export default function VerticalTabs() {
  const [value, setValue] = useState(0)

  const [saveDone , setSaveDone] = useState(false)
  const [ countFullWCToVTabs , setCountFullWCToVTabs] = useState(false)
  

  const [countFullWToVTabs ,setCountFullWToVTabs] = useState(0)

  const navigate = useNavigate()
  console.log("count from Virteical Tabs is :) ", countFullWToVTabs)

  const logOut = ()=>{
 
    
      // localStorage.removeItem('userData');

      console.log('User was loged out Bye Bye' ,localStorage.userData)
         navigate('/',{replace:false})
      // setIsLoggedin(false);
  
  }

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

   useEffect(() => {
     const loadSave = ()=>{
      setSaveDone(true)
      setTimeout(()=>setSaveDone(false),4000)
     }

 if(countFullWToVTabs > 0){
  loadSave()
 }

   }, [countFullWToVTabs])

   useEffect(() => {
    const loadSave = ()=>{
     setSaveDone(true)
     setTimeout(()=>setSaveDone(false),4000)
    }

if(countFullWToVTabs > 0){
 loadSave()
}

  }, [countFullWCToVTabs])





  // const CustomTab = withStyles({
  //   root: {
  //     textTransform: "none"
  //   }
  // })(Tab);

  return (
    saveDone ? <div> 
    
    <div className={hTabs.backgroundSave}>
    <PreLoader3 />
    </div>  
    

    <Box
    sx={{
      flexGrow: 1,
      bgcolor: 'background.paper',
      display: 'flex',
      height: '100%',
      padding: '0',
    }}
   >
    <Tabs
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{ borderRight: 1, borderColor: 'divider', margin: '0px', padding: '0px', height:'100%'}}
    >
      {/* <HomeIcon fontSize ='medium' />
      <FlashOnIcon fontSize ='medium' />
      <Equalizer fontSize ='medium' />
      <Summarize fontSize ='medium' /> */}

      
{/* <FontAwesomeIcon icon={solid('user-secret')} />
<FontAwesomeIcon icon={regular('coffee')} />
<FontAwesomeIcon icon={icon({name: 'coffee', style: 'solid'})} />
<FontAwesomeIcon icon={brands('twitter')} /> */}

      <Tab icon='' iconPosition="start" label="Home"  {...a11yProps(0)} style={{justifyContent:'start' , fontSize:'13pt' }} />
      <Tab icon='' iconPosition="start" label="Activities" {...a11yProps(1)} style={{justifyContent:'start' , fontSize:'13pt'}} />
      <Tab icon='' iconPosition="start" label="Market Data" {...a11yProps(2)} style={{justifyContent:'start' , fontSize:'13pt'}} />
      <Tab icon='' iconPosition="start" label="Reports" {...a11yProps(3)} style={{justifyContent:'start' , fontSize:'13pt'}} />
      
    </Tabs>
    <TabPanel value={value} index={0}>
      <div className={styles.title}>
        <h1 className='h1Home'>Welcome to Home Page</h1>
   
        <h1>You've logged in!</h1>

        <i className="fas fa-trash m-2" 
                    // onClick={this.deleteHand}
                    ></i>
        <br />
       
      </div>
    </TabPanel>
    <TabPanel value={value} index={1}>
      <FullWidthTabs
      setCountFullWToVTabs={setCountFullWToVTabs}
      setCountFullWCToVTabs={setCountFullWCToVTabs}
      />
    </TabPanel>
    <TabPanel value={value} index={2}>
      Item Three
    </TabPanel>
    <TabPanel value={value} index={3}>
      Item Four
    </TabPanel>
   </Box>

</div>
    : 
 <Box
 sx={{
   flexGrow: 1,
   bgcolor: 'background.paper',
   display: 'flex',
   height: '100%',
   padding: '0',
 }}
>
 <Tabs
   orientation="vertical"
   variant="scrollable"
   value={value}
   onChange={handleChange}
   aria-label="Vertical tabs example"
   sx={{ borderRight: 1, borderColor: 'divider', margin: '0px', padding: '0px', height:'100%'}}
 >

 {/* {<HomeIcon fontSize ='medium' />}
 {<FlashOnIcon fontSize ='medium' />}
 {<Equalizer fontSize ='medium' />}
 {<Summarize fontSize ='medium' />} */}


   <Tab icon="" {...a11yProps(0)} iconPosition="start" label="🏠 Home"  {...a11yProps(1)} style={{justifyContent:'start' , fontSize:'13pt' }} />
   <Tab icon="" iconPosition="start" label="⚡ Activities" {...a11yProps(1)} style={{justifyContent:'start' , fontSize:'13pt'}} />
   <Tab icon="" iconPosition="start" label="📊 Market Data" {...a11yProps(2)} style={{justifyContent:'start' , fontSize:'13pt'}} />
   <Tab icon="" iconPosition="start" label="📰 Reports" {...a11yProps(3)} style={{justifyContent:'start' , textAlign:'left', fontSize:'13pt'}} />
   <Tab 
  //  icon={<LogoutOutlined fontSize ='medium' />} 
  iconPosition="start" 
   label="🚪 Logout" {...a11yProps(4)}
   onClick={logOut}
   style={{justifyContent:'start' , fontSize:'13pt'}} />
 </Tabs>
 <TabPanel value={value} index={0}>
   <div className={styles.title}>
   {/* <FontAwesomeIcon icon="fa-solid fa-house" /> */}
   {/* <svg
        xmlns="http://www.w3.org/2000/svg"
        className="ionicon"
        viewBox="0 0 512 512"
      ></svg> */}
     <h1 className='h1Home'>Welcome to Home Page</h1>
     
     {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-house" /> */}
     {/* <i class="fa fa-bar-chart"></i>

     <i class="fa-sharp fa-solid fa-house"></i> */}

     <h1>You've logged in!</h1>
     {/* <i className="fa fa-home" style={{fontSize:"36px"}}></i> */}
     <br />
     </div>
 </TabPanel>
 <TabPanel value={value} index={1}>
   <FullWidthTabs
   setCountFullWToVTabs={setCountFullWToVTabs}
   setCountFullWCToVTabs={setCountFullWCToVTabs}
   />
 </TabPanel>
 <TabPanel value={value} index={2}>
  <img src={UnderDev} alt='UnderDev Img' className={hTabs.underDevImg}/> 
 </TabPanel>
 <TabPanel value={value} index={3}>
 <Reports/>
 </TabPanel>

</Box>

  )
}
