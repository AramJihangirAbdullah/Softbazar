import "./product.css";
import React from 'react';
import { useParams } from 'react-router-dom';
import { format } from 'date-fns'
import Cookies from 'js-cookie'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select , { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextInput from '../../components/TextInput';
import { useState,useContext } from "react";
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { useEffect } from 'react';
import Variant from '../../components/variant/Variant';
import Variants from '../../components/variant/Variants';
import AuthContext  from "../../../../contexts/AuthContext";
import axios from 'axios';



export default function Product() {
    const { productId } = useParams();
    console.log("idddd" + productId);
    let {getCategory,category,vendorId,addprod} = useContext(AuthContext)
    const [prodinfo, setProdinfo] = useState({"name":null,"category_id":'',"type":null,"description":null,"price_orginal":null,"price": null,"vender_id":vendorId,"expire_date":null})
    let getvenprod = async (productId)=>{

        await axios.get(`http://localhost:8000/api/products/${productId}`)
      .then((response) => {
          setProdinfo(response.data)
          console.log(prodinfo);

      }, (error) => {
        console.log(error);
      });
      }
    
  let names = []
  useEffect(() => {
    if(vendorId){
        getvenprod(productId)
        setProdinfo({...prodinfo,vender_id:vendorId})
        getCategory()
    }
  },[vendorId])
  names = category;


  const [files, setFiles] = useState([])
  const onImageChange = (e)=>{
    setFiles(e.target.files)
    
    console.log("final"+prodinfo);
  }
  const handleChanges = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    
    setProdinfo({...prodinfo,[name]: value})
    console.log(prodinfo);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if(prodinfo.name){
      console.log("prod submit");
      const mdata = new FormData();
      for (let i = 0; i < files.length; i++) {      
        mdata.append('image[]',files[i])
      }
        mdata.append('name', prodinfo.name);
        mdata.append('price', prodinfo.price);
        mdata.append('vender_id', prodinfo.vender_id);
        mdata.append('category_id', prodinfo.category_id);
        mdata.append('type', prodinfo.type);
        mdata.append('description', prodinfo.description);
        mdata.append('price_orginal', prodinfo.price_orginal);
        // mdata.append('expire_date', new Date(prodinfo.expire_date) );
       
      for (var key of mdata.entries()) {
        console.log("images");
        console.log(key[0] + ', ' + key[1]);
    }   
    //  setProdinfo({...prodinfo,image:mdata})
      addprod(mdata)
      
    }
  };
  
// date
const [valuedate, setValuedate] = React.useState(new Date(' '));

const handledate = (newValue) => {
  setValuedate(newValue);
  setProdinfo({...prodinfo,expire_date:format(newValue, 'MM/dd/yyyy')})
};

// image
const Input = styled('input')({
    display: 'none',
  });

  return (

    <div className="newProduct">
      <h1 className="addProductTitle">Update Product</h1>
      <form className="addProductForm">
        {/* name */}
        <div className="addProductItem">
        <TextField
        id="outlined-name"
        name='name'
        label={`Name`}
        onChange={handleChanges}
        helperText={"Name:"+prodinfo.name}
        required
        />
        </div>
        {/* Category */}
        <div className="addProductItem">
          <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Category</InputLabel>
                <Select
                fullWidth
                name="category_id"
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="category_id"
                value={prodinfo.category_id}
                onChange={handleChanges}
                >
                  {names.map((name,i) => (
                    <MenuItem key={name} value={i+1}>{name}</MenuItem>
                  ))}
                </Select>
            </FormControl>
        </div>
        {/* brand */}
        <div className="addProductItem">
        <TextField
        id="outlined-name"
        name='type'
        label={`Brand`}
        helperText={"Brand:"+prodinfo.type}

        onChange={handleChanges}

        />
        </div>
        <div className="addProductItem">
        <TextField
        helperText={"Price:"+prodinfo.price}
        id="outlined-name"
        name='price'
        type="number"
        label={`Price`}
        onChange={handleChanges}
        required
        />
        </div>
        <div className="addProductItem">
        <TextField
        helperText={"Orginal Price:"+prodinfo.price_orginal}

        id="outlined-name"
        name='price_orginal'
        type="number"
        label={`Orginal Price`}
        onChange={handleChanges}
        />
        </div>
        <div className="addProductItem">
        <TextField
        helperText={"Description:"+prodinfo.description}
        id="outlined-name"
        name="description"
        label={`Description`}
        onChange={handleChanges}
        />
        </div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>

          <div className="addProductItem">
            <DesktopDatePicker
              helperText={"Expire_date:"+prodinfo.expire_date}
              label="Expire Date"
              inputFormat="MM/dd/yyyy"
              name="expire_date"
              value={valuedate}
              onChange={handledate}
              renderInput={(params) => <TextField {...params} />}
              />
          </div>
        </LocalizationProvider>
        <div className="addProductItem">
          <label>----------------------------------------</label>
          <label htmlFor="contained-button-file">
            <Input name='image[]' onChange={onImageChange} accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span">
              Upload images
            </Button>
          </label>
          <label>----------------------------------------</label>
        </div>
        
      </form>
      <Button
        type="submit"
        onClick={handleSubmit}
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 1,width:"20%" }}
      >
        Update
      </Button>
    </div>
  );
}
