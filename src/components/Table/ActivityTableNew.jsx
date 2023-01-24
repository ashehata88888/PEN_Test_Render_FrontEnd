/* eslint-disable */

import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import hTabs from '../../components/BLS/hTabs.module.css';
import { UserContext } from '../../components/BLS/Home';
import { Navigate, useNavigate } from 'react-router-dom';


const columns = [
  { id: 'ActivityDate', label: 'Activity Date', align: 'center', width:'15%', color: 'aqua' , fontSize: '30pt'},
  { id: 'AccountName', label: 'Account Name', align: 'center', width:'25%'},
  {
    id: 'ActivityType',
    label: 'Activity Type',
    // minWidth: 50,
    align: 'center',
    width:'22.5%',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'PurchaseMethod',
    label: 'Purchase Method',
    // minWidth: 50,
    align: 'center',
    width:'22.5%',
    // format: (value) => value.toFixed(2),
  },
  {
    id: 'Action',
    label: 'Action',
    align: 'center',
    // minWidth: 50,
    width:'5%'


  },
];




const uContext=React.useContext(UserContext)
  
  const userData = JSON.parse()
  // const userData = React.useContext(UserContext)

  const userId = userData.id

  



class ActivityTableNew extends Component {
  constructor(props) {
    super(props);
    this.state={
      userId:userId,
      activityId: 0,
      token : userData.token,
      activityType:'',
      rowsPerPage:7,
      page : 0,
      rows:[]
    }
  }

  componentDidMount(){

    const fetchData = async () => {
    
      const response = await fetch('http://localhost:7000/api/activities/history/' + this.state.userId, {
        method: 'GET',
        headers: new Headers({
          Authorization: 'bearer ' + this.state.token,
          'Content-Type': 'application/x-www-form-urlencoded'
        })
      })
      
      const newData = await response.json()
      console.log("fetched Data are >.............:",newData)
      console.log("obj value is : ",newData.length)
  
       
        newData.map((obj,inx)=>{
          

          let myDate = new Date(`${obj.activity_date_from}`);
myDate.setDate(myDate.getDate() + parseInt(0));

let activityDateN = myDate.getFullYear( ) + '/' + (myDate.getMonth( ) + 1) + '/' + myDate.getDate( ) ;
console.log("my Date is ..........:", activityDateN);

      let templeteRow = {ActivityDate:`${activityDateN}` , AccountName:`${obj.account_name}`, ActivityType:`${obj.activity_type}` , PurchaseMethod:`${obj.purchase_method}`,Actions:obj.id}
     if(rows.length < newData.length){
      this.setState(rows.unshift(templeteRow))

     }else if(rows.length < newData.length - 1){
      rows.unshift(templeteRow)
     } 
       
       
        })

      if (rows.length === newData.length){
        setBool(false)
      }

  }

  if(rows.length === 0 ){
  fetchData()
}



    const deleteActivity = async () => {
      console.log("delete UseEffect was called and actvity id is..",this.state.activityId)


      await fetch('http://localhost:7000/api/call_contacts/'+ this.state.activityId, {
        method: 'DELETE',
        headers: new Headers({
          Authorization: 'bearer ' + this.state.token,
          'Content-Type': 'application/x-www-form-urlencoded'
        })
     }).then(async(response) => {
        const resC = await response.json()
        console.log("res of call_contacts are", resC)

           await fetch('http://localhost:7000/api/call_products/'+ this.state.activityId, {
               method: 'DELETE',
        headers: new Headers({
          Authorization: 'bearer ' + this.state.token,
          'Content-Type': 'application/x-www-form-urlencoded'
              })
            
           }).then(async (response) => {
              const resP = await response.json()
             
              console.log("res of call_products are", resP)

              const responseD = await fetch('http://localhost:7000/api/activities/' + this.state.activityId, {
                method: 'DELETE',
                headers: new Headers({
                  Authorization: 'bearer ' + this.state.token,
                  'Content-Type': 'application/x-www-form-urlencoded'
                })
              })
              
              const newDataD = await responseD.json()
              console.log("response from Delete Request ...:",newDataD)
              
            }).then(()=>{
              // updateActivityTable()
            })
       

            })

             }
               deleteActivity()

  }

   handleChangePage = (event, newPage) => {

   this.state({newPage : newPage})
  };

   handleChangeRowsPerPage = (event) => {


    setRowsPerPage(+event.target.value);

    this.state({
      rowsPerPage: +event.target.value,
      page : 0
    })

  };


    deleteActivityBtn =(event,ActId,ActType)=>{
    event.preventDefault()
    console.log("Delete Activity button for Activity id No "+ ActId + "was clicked")
    this.setState({activityId :ActId ,
    activityType : ActType
    })
    // setthis.state.activityId(ActId)
    // setActivityType(ActType)
  
    // setDeleteCount(current=>current + 1)
  }

  render() { 

 
    return ( 

        <Paper sx={{ width: '94.5%', height: '170vh',  marginTop: '4%' }}>
          <TableContainer sx={{ maxHeight: 550 }}>
            <Table className={hTabs.activityTableContainer} >
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth , backgroundColor:'aqua' , fontSize:'15pt' , position: 'sticky' , top:'0'}}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody className={hTabs.ActivityTable}>
                {this.state.rows
                  .slice(this.state.page * this.state.rowsPerPage, this.state.page * this.state.rowsPerPage + this.state.rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                      style={{overflow: 'auto'}}
                      hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column ,indx) => {
                          const value = row[column.id];
                          return (
                            <TableCell   
                            style={{ fontSize:'14pt', width: column.width}}
                            key={column.id} align={column.align}>
                              {value} {column.id == 'Action' && <button className={hTabs.activityTableDeleteBtn} onClick={(event)=>this.deleteActivityBtn(event,row.Actions,row.ActivityType)}>Delete</button>}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[7,14, 30, 90]}
            component="div"
            count={this.state.rows.length}
            rowsPerPage={this.state.rowsPerPage}
            page={this.state.page}
            onPageChange={this.handleChangePage}
            onRowsPerPageChange={this.handleChangeRowsPerPage}
          />
        </Paper>
    
    
    
    
      )
     
  }
}
 
export default ActivityTableNew;