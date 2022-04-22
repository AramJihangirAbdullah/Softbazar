import React from 'react';
import "./newProduct.css";
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


// image
const Input = styled('input')({
  display: 'none',
});
// Category
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const outsend=(input)=>{
  // console.log(input);
  let outputData = {
        name:input.name,
        category_id:input.category_id,
        type:input.type,
        description:input.description,
        price_orginal:parseInt(input.price_orginal),
        price: parseInt(input.price),
        vender_id:input.vender_id,
        expire_date:input.expire_date,
        image:input.image}
        console.log(outputData);
        return outputData;
}
// ..option number increasing..
let optionX = 1;

export default function NewProduct() {
  // fething categories
  let {getCategory,category,vendorId,addprod,whoami} = useContext(AuthContext)
  const [prodinfo, setProdinfo] = useState({"name":null,"category_id":'',"type":null,"description":null,"price_orginal":null,"price": null,"vender_id":vendorId,"expire_date":null})

  let names = []
  useEffect(() => {
    if(vendorId){
      setProdinfo({...prodinfo,vender_id:vendorId})
      getCategory()
    }
  },[vendorId])
  names = category;
 
  
 
  
  // Tabs
  const [value, setValue] = React.useState('1');
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // // Categorys
  // const [age, setAge] = React.useState('');

  // const handleChangec = (event) => {
  //   setAge(event.target.value);
  // };
  const [variant, setVariant] = useState(1)
const [variantnum, setVariantnum] = useState(1)
// const [variantdone, setVariantdone] = useState(false)

const handlevariant = (e)=>{
  setVariant(e.target.value)
}
const handledone = (e)=>{
  // setoptions(var1.value)
}



  
  // variant
const [options, setoptions] = React.useState([])
const [varian, setVarian] = React.useState([])


// handlers 
// uploading img
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
  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Product info" value="1" />
            <Tab label="Product variants" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        {/* name */}
        <div className="addProductItem">
        <TextField
        id="outlined-name"
        name='name'
        label={`Name`}
        onChange={handleChanges}
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
                value={prodinfo.category_id}
                label="category_id"
                onChange={handleChanges}
                >
                  {names.map((name,i) => (
                    <MenuItem key={name.id} value={name.id}>{name.name}</MenuItem>
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
        onChange={handleChanges}
        />
        </div>
        <div className="addProductItem">
        <TextField
        id="outlined-name"
        name='price'
        type="number"
        label={`Price`}
        onChange={handleChanges}
        />
        </div>
        <div className="addProductItem">
        <TextField
        id="outlined-name"
        name='price_orginal'
        type="number"
        label={`Orginal Price`}
        onChange={handleChanges}
        />
        </div>
        <div className="addProductItem">
        <TextField
        id="outlined-name"
        name="description"
        label={`description`}
        onChange={handleChanges}
        />
        </div>
        <LocalizationProvider dateAdapter={AdapterDateFns}>

          <div className="addProductItem">
            <DesktopDatePicker
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
    </div></TabPanel>
        <TabPanel value="2">
        <Box>
        <TextField
        id="outlined-name"
        label={`Options`}
        value={varian}
        onChange={(e)=>setVarian(e.target.value)}
      />
      <TextField
        id="outlined-name"
        label={`Values`}
        value={options}
        onChange={(e)=>setoptions(e.target.value)}
      />
        </Box>
        </TabPanel>
        <TabPanel value="3">Images</TabPanel>
      </TabContext>
      <Button
        type="submit"
        onClick={handleSubmit}
        fullWidth
        variant="contained"
        sx={{ mt: 1, mb: 1,width:"20%" }}
      >
        Add Product
      </Button>
    </Box>
  );
}
