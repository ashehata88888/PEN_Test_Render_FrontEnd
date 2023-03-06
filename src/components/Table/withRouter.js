import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/BLS/Home.jsx';
import { React , useContext,useState} from 'react';
import {useSelector,useDispatch} from "react-redux";


export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const uContext = useContext(UserContext)
    const uState = useState()

    const globalState = useSelector((state)=> state)
    const dispatch = useDispatch()
  
//   const userData = JSON.parse(uContext)

  // const userData = React.useContext(UserContext)

  // const userId = userData.id
    
    
    return (
      <Component
        navigate={navigate}
        uContext={uContext}
        uState = {uState}
        globalState = {globalState}
        dispatch = {dispatch}
        {...props}
        />
    );
  };
  
  return Wrapper;
};