import { useContext } from "react"
import { useLocation,Navigate,Outlet } from "react-router-dom"
import AuthContext from "./AuthContext"

const RequireAuth = () => {
    let {user} = useContext(AuthContext) 
    console.log(user);
    const location = useLocation();
  return (
    user? <Outlet/>
        : <Navigate to="/login" state={{from:location}} replace />
  )
}

export default RequireAuth