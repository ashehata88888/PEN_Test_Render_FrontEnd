/* eslint-disable */
// import React, { Component }  from 'react';
// import { useNavigate } from "react-router-dom"

// const Unauthorized = () => {
//     const navigate = useNavigate();

//     const goBack = () => navigate(-1);

//     return (
//         <section>
//             <h1>Unauthorized</h1>
//             <br />
//             <p>You do not have access to the requested page.</p>
//             <div className="flexGrow">
//                 <button onClick={goBack}>Go Back</button>
//             </div>
//         <br/>
//         </section>
//     )
// }

// export default Unauthorized

import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import pen_logo from '../logos/final_logo1.png'
import FullWidthTabs from './BLS/FullWidthTabs'

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
          <Typography>{children}</Typography>
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

export default function Unauthorized() {
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Box
      sx={{
        flexGrow: 1,
        bgcolor: 'background.paper',
        display: 'flex',
        height: '100%',
        padding: '0'
      }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{
          borderRight: 1,
          borderColor: 'divider',
          margin: '0px',
          padding: '0px',
          height: '100%'
        }}
      >
        <Tab label="Item One" {...a11yProps(0)} />
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
        <Tab label="Item Four" {...a11yProps(3)} />
        <Tab label="Item Five" {...a11yProps(4)} />
        <Tab label="Item Six" {...a11yProps(5)} />
        <Tab label="Item Seven" {...a11yProps(6)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        <div className="homeMain">
        <img src={pen_logo} alt="PEN-Logo" className="penLogo" />
          <h1>Welcome to Home Page</h1>

          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="/Login">Go back to Login Page</a>
          </p>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <FullWidthTabs />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </Box>
  )
}
