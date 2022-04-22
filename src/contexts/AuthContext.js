import React ,{useContext} from 'react'
import axios from 'axios';
import Cookies from 'js-cookie'
import { createContext, useState, useEffect } from 'react'
import {Link, Navigate, useLocation, useNavigate } from 'react-router-dom';


const AuthContext = createContext();


axios.defaults.withCredentials = true; //auth related
// axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json';
axios.interceptors.request.use(function (config){
  const token = Cookies.get('barear_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
})
const loopi=(data)=>{
  let arr = []
  for (let i = 0; i < data.length; i++) {
    arr[i] = data[i].name
  }
  return(arr);
}
export const AuthProvider = ({children}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  console.log("fffffff"+from);
  const [authToken, setAuthToken] = useState(null);
  const [auth, setAuth] = useState({});
  const [user, setUser] = useState(null)
  const [userId, setUserId] = useState(null)
  const [vendorId, setVendorId] = useState(null)
  const [vendorprod, setVendorprod] = useState([])
  
  const [role, setRole] = useState(null)
  const [alert, setAlert] = useState(null);
  const [category, setCategory] = useState([]);
  // const location = useLocation();
  // const from = location.state?.from?.pathname || "/"
  let loginUser = async (data)=>{
    
    axios.get('http://localhost:8000/sanctum/csrf-cookie').then((response) => {
      axios.post('http://localhost:8000/api/login',data)
      .then(function (response) {
        
        console.log("roleee"+response.data.user.role);
        Cookies.set('barear_token',response.data.token);
        setAuth({roles:response.data.user.role,token:response.data.token});
        navigate(from , {replace:true});
      })
      .catch(function (error) {
        console.log(error);
        // setAlert(error)
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
    }
  }
  
 
  let logoutUser = ()=>{
    axios.post('http://localhost:8000/api/logout')
    .then(function (response) {
      console.log("outtttytyt"+response);
        setAuthToken(null);
        setUser(null);
        Cookies.remove('barear_token');
        navigate("/");
      })
      .catch(function (error) {
        console.log(error);
      });
    // localStorage.removeItem('authToken')
    // localStorage.removeItem('user')
  }
  let whoami = async (token)=>{
      await axios.get('http://localhost:8000/api/user',{
        headers: { Authorization: `Bearer ${token}` }
    })
    .then( async function (response) {
      // handle success
      console.log("id user " + response.data.id);
      console.log("eeol "+response.data.role);
      if (response.data.role!=1) {
        setRole(response.data.role)
      }
      else if (response.data.role==1) {
        console.log("jjjjjjjll");
        await axios.get(`http://localhost:8000/api/getvenderid/${response.data.id}`,{
        headers: { Authorization: `Bearer ${token}` }
        }).then(async function(res){
            setVendorId(res.data)
            console.log("olalala");
            await axios.get(`http://localhost:8000/api/venders/${res.data}`,{
              headers: { Authorization: `Bearer ${token}` }
              }).then(function(re){
                // setVendorId(res.data)
                // console.log("ven id "+ res.data);
                console.log("nummmm"+re.data.activation);
                if(re.data.activation==1){
                  setRole(1)
                }else setRole(2)
                // console.log("ven activation "+ res.data.activation);
              })
        })
      }
      setUser(response.data.name) 
      setUserId(response.data.id)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
  }
// Admin panel
  let addprod = async (data)=>{
    console.log(data);
    axios.post(`http://localhost:8000/api/products`,data)
    .then((response) => {
      console.log(response);
    }, (error) => {
      console.log(error);
    });
  }
  let getvenprod = async ()=>{
      axios.get(`http://localhost:8000/api/productsofvender/${1}`)
    .then((response) => {
      console.log("res");
      console.log(response);
      setVendorprod(response.data);
    }, (error) => {
      console.log(error);
    });
  }
  let getCategory = ()=>{
    axios.get('http://localhost:8000/api/categories')
  .then(function (response) {
      setCategory(loopi(response.data))
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  }
  let contextData = {
    role:role,
    user:user,
    alert:alert,
    category:category,
    userId:userId,
    vendorId:vendorId,
    vendorprod:vendorprod,
    auth:auth,
    loginUser:loginUser,
    whoami:whoami,
    getCategory:getCategory,
    signupUser:signupUser,
    getvenprod:getvenprod,
    addprod:addprod,
    logoutUser:logoutUser
  }
  return (
    <AuthContext.Provider value={contextData}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext