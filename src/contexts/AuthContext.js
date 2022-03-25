import React from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'
import { createContext, useState, useEffect } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import { Cookie, CookieSharp } from '@mui/icons-material';
const AuthContext = createContext();


export const AuthProvider = ({children}) => {
   
  const [authToken, setAuthToken] = useState(()=>localStorage.getItem('authToken') || null);
  const [user, setUser] = useState(()=> localStorage.getItem('user') || null)
  const [alert, setAlert] = useState(null);
  const navigate = useNavigate();
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/"
  let loginUser = async (data)=>{
    axios.defaults.withCredentials = true; //auth related
    axios.get('http://localhost:8000/sanctum/csrf-cookie').then(response => {
      axios.post('http://localhost:8000/api/login',data)
      .then(function (response) {
        console.log(response.data.token);
        Cookies.set('barear_token',response.data.token);
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
  });
    // let resp = await fetch(`http://localhost:8000/api/login`, {
    //   method: "POST",
    //   headers: { "Accept":"application/json","Content-Type":"application/json"},
    //   body: JSON.stringify(data),
    // })
    // let dat = await resp.json();
    // console.log(resp);
    // console.log(dat);
    // if(resp.ok){
    //   setAuthToken(dat.token);
    //   setUser(dat.user.name);
    //   localStorage.setItem('authToken', dat.token);
    //   localStorage.setItem('user', dat.user.name);
    //   navigate("/")
    //   // navigate(from , {replace:true})
    // }else{
    //   setAlert(dat.message)
    // }
  }
  let signupUser = async (data)=>{
    console.log(data);
    setUser(null)
    setAuthToken(null)
    let resp = await fetch(`http://localhost:8000/api/register`, {
      method: "POST",
      headers: { "Accept":"application/json","Content-Type":"application/json"},
      body: JSON.stringify(data),
    })
    let dat = await resp.json();
    console.log(resp);
    if(resp.ok){
      navigate("/login")
      // navigate(from , {replace:true})
    }
  }
  let logoutUser = ()=>{
    setAuthToken(null);
    setUser(null);
    Cookies.remove('barear_token');
    axios.post('http://localhost:8000/api/logout')
      .then(function (response) {
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
    // localStorage.removeItem('authToken')
    // localStorage.removeItem('user')
  }
  let whoami = (token)=>{
    axios.get('http://localhost:8000/api/user',{
      headers: { Authorization: `Bearer ${token}` }
  })
  .then(function (response) {
    // handle success
    setUser(response.data.name) 
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })


  }
  let contextData = {
    user:user,
    alert:alert,
    loginUser:loginUser,
    whoami:whoami,
    signupUser:signupUser,
    logoutUser:logoutUser
  }
  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext