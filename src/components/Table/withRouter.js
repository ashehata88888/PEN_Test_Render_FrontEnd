import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../components/BLS/Home.jsx';
import { React , useContext} from 'react';


export const withRouter = (Component) => {
  const Wrapper = (props) => {
    const navigate = useNavigate();
    const uContext = useContext(UserContext)
  
//   const userData = JSON.parse(uContext)

  // const userData = React.useContext(UserContext)

  // const userId = userData.id
    
    
    return (
      <Component
        navigate={navigate}
        uContext={uContext}
        {...props}
        />
    );
  };
  
  return Wrapper;
};