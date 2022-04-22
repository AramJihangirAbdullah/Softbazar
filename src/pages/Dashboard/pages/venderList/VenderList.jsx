import "./userList.css";
import React, {useContext,useEffect} from 'react'
import AuthContext from '../../../../contexts/AuthContext'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from 'axios';
import Switch from '@mui/material/Switch';

export default function UserList() {
  // let {vendorId} = useContext(AuthContext)


  const [data, setData] = useState([]);
  useEffect(() => {
      getven();

  }, [])

  let getven = async ()=>{
    await axios.get(`http://localhost:8000/api/venders`)
   .then((response) => {
     console.log("res");
     console.log(response);
     setData(response.data);
   }, (error) => {
     console.log(error);
   });
   }
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  // checkbox
  const [checked, setChecked] = React.useState(true);
  
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
  let getvenprod = async (vendorId)=>{
    await axios.put(`http://localhost:8000/api/venders/${vendorId}`)
   .then((response) => {
     console.log("res");
     console.log(response);
     setData(response.data);
   }, (error) => {
     console.log(error);
   });
   }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Venders",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.name}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200 },
    {
      field: "activation",
      headerName: "Status",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            { (params.row.activation==1)?"Active":"Not Active"} 
             
          </div>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Switch
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
