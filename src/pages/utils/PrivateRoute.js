import {useContext} from 'react'
import { Route, useNavigate } from 'react-router-dom'
import AuthContext from '../../contexts/AuthContext';
const PrivateRoute = ({children,...rest}) => {
  let navigate = useNavigate();
  let {user} = useContext(AuthContext);
  return (
    <Route {...rest}>{!user ? navigate("/") : children}  </Route>
  )
}

export default PrivateRoute