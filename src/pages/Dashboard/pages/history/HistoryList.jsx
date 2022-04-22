import "./userList.css";
import React, {useEffect} from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import axios from 'axios';

export default function UserList() {
  // let {vendorId} = useContext(AuthContext)


  const [data, setData] = useState([]);
  useEffect(() => {
      getven();

  }, [])

  let getven = async ()=>{
    await axios.get(`http://localhost:8000/api/histories`)
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
      field: "type",
      headerName: "Type",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.type}
          </div>
        );
      },
    },
    {
      field: "data",
      headerName: "data",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {(params.row.data).split(',')[2]}
          </div>
        );
      },
    },
    {
      field: "table",
      headerName: "Table",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.table}
          </div>
        );
      },
    },
    {
      field: "created_at",
      headerName: "Date/Time",
      width: 130,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.created_at}
          </div>
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
