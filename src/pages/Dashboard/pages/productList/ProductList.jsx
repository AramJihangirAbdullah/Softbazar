import "./productList.css";
import React, {useContext,useEffect} from 'react'
import AuthContext from '../../../../contexts/AuthContext'
import Cookies from 'js-cookie'
import axios from 'axios';

import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import Button from '@mui/material/Button';



function modifyimage(jsonObj) {
  let words=[];
  let dom = 'http://127.0.0.1:8000/uploads/images/'
  for (var i = 0; i < jsonObj.length; i++) {
    let datajson = jsonObj[i].image.slice(1, -1);
       words = datajson.split(',');
       jsonObj[i].img = dom +  words[0].slice(1, -1);
    }
    console.log(jsonObj);
      return jsonObj;
}

export default function ProductList() {
  let getallprod = async ()=>{
    await axios.get(`http://localhost:8000/api/products`)
   .then((response) => {
     setData(modifyimage(response.data));
     console.log("resssssssssssssssssssss");
     console.log(response.data);
   }, (error) => {
     console.log(error);
   });
   }
  let {vendorId,role} = useContext(AuthContext)
  console.log("role::"+role);
    const [data, setData] = useState([]);
    useEffect(() => {
      if (role == 0) {
        getallprod()
      }
      if (role) {
        console.log("role:"+role);
        if(role == 1){
          if(vendorId){
            getvenprod();
          }
        }
         
      }
    }, [vendorId,role])
    let getvenprod = async ()=>{
     await axios.get(`http://localhost:8000/api/productsofvender/${vendorId}`)
    .then((response) => {
      setData(modifyimage(response.data));
      console.log("res");
      console.log(data);
    }, (error) => {
      console.log(error);
    });
    }
    
    let delvenprod = async (id)=>{
      axios.delete(`http://localhost:8000/api/products/${id}`,{
        vender_id:vendorId,headers: { Authorization: `Bearer ${Cookies.get('barear_token')}` }
    },)
    .then((response) => {
      console.log("deleted");
      console.log(response);
    }, (error) => {
      console.log(error);
    });
    }
    
  console.log(data);
  const handleDelete = (id) => {
    delvenprod(id)
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="productListItem">
            <img className="productListImg" src={params.row.img} alt="" />
            {params.row.name}
            
          </div>
        );
      },
    },
    
    {
      field: "price",
      headerName: "Price ( $ )",
      width: 160,
    },
    {
      field: "vender_id",
      headerName: "Vender",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            {role == 1 && <Link to={"../product/" + params.row.id}>
              <button className="productListEdit">Edit</button>
            </Link>}
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>

    <div className="productList">
      {role==1 && <Link to={"../newproduct"}>
        <Button variant="contained" color="success">Add Product</Button>
      </Link>}
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        />
    </div>
    </>
  );
}
