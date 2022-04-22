import "./userList.css";
import React, {useEffect,useState} from 'react'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import axios from 'axios';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function UserList() {
  // let {vendorId} = useContext(AuthContext)

const [category, setCategory] = useState('')
  const [data, setData] = useState([]);
  useEffect(() => {
      getven();

  }, [])

  let getven = async ()=>{
    await axios.get(`http://localhost:8000/api/categories`)
   .then((response) => {
     console.log("res");
     console.log(response);
     setData((response.data));
   }, (error) => {
     console.log(error);
   });
   }
  let setven = async (name)=>{
    await axios.post(`http://localhost:8000/api/categories`,{name})
   .then((response) => {
     console.log(response);
     setData([...data,(response.data)]);
   }, (error) => {
     console.log(error);
   });
   }
  let putven = async (id,name)=>{
    await axios.put(`http://localhost:8000/api/categories/${id}`,{name})
   .then((response) => {
     console.log(response);
     getven();
    }, (error) => {
     console.log(error);
   });
   }
  let delcat = async (id)=>{
    await axios.delete(`http://localhost:8000/api/categories/${id}`)
   .then((response) => {
    setData(data.filter((item) => item.id !== id));
   }, (error) => {
     console.log(error);
   });
   }
  const handleDelete = (id) => {
    delcat(id)
  };
  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "name",
      headerName: "Categories",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListUser">
            {params.row.name}
          </div>
        );
      },
    },
    { field: "created_at", headerName: "Added at", width: 180 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <button onClick={()=>putbtn(params.row.id,params.row.name)} className="productListEdit">Edit</button>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];
  const [put, setPut] = useState(false)
  const [putdata, setPutdata] = useState('')
  const handleClick = ()=>{
    if (put) {
      putven(putdata,category);
      setPut(false)
      setCategory('')
    }else{ setven(category);setCategory('')}
  }
  const putbtn = (id,name)=>{
    setPut(true)
    console.log("id:"+id);
    console.log("name:"+name);
    setPutdata(id)
    setCategory(name)
  }

  return (
    
    <div className="userList">
      <TextField
                id="outlined-name"
                name='name'
                value={category}
                label={`Category`}
                onChange={(e)=>setCategory(e.target.value)}
                sx={{width:"30%",marginTop:2}}
      />
      <Button sx={{ width: 1/10,height:"55px", m: 2,bgcolor:"var(--orange)"}} variant="contained" onClick={()=>handleClick()}>
         {put? "Update":"Add"}
      </Button>
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
