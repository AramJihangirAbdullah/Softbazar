import React from 'react';
import "./newProduct.css";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import TextInput from '../../components/TextInput';
import { useState } from "react";
import { useEffect } from 'react';
import Variant from '../../components/variant/Variant';
import Variants from '../../components/variant/Variants';


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

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

// ..option number increasing..
let optionX = 1;
export default function NewProduct() {
  // Tabs
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // Categorys
  const [personName, setPersonName] = React.useState([]);
const CategoryChange = (event) => {
  const {
    target: { value },
  } = event;
  setPersonName(
    // On autofill we get a stringified value.
    typeof value === 'string' ? value.split(',') : value,
  );
};
// ..vedio..
const [vedioP, setVedioP] = React.useState('');

  const vedioChange = (event) => {
    setVedioP(event.target.value);
  };
// ..t2..
// ..adding variants btn
// const [positionX, setPositionX] = useState(1);
const [variants, setVariants] = useState([]);
const [varPosition, setVarPosition] = useState(1);
// Adding variant
const addVariant = ()=>{
  const variant = <Variant/>
  setVariants([...variants, {id:varPosition, variant:variant}]); 
  setVarPosition((va)=>va+1)
  console.log(variants);
}
//  Delete Variant
 const deleteVariant = async (ind) => {
  setVariants(variants.filter((variant,index) => variant.id !== ind));
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
          <TextInput label="Name*" />
        </div>
        {/* Category */}
        <div className="addProductItem">
            <FormControl sx={{ width: 300 }}>
            <InputLabel id="demo-multiple-checkbox-label">Category*</InputLabel>
            <Select
              labelId="demo-multiple-checkbox-label"
              id="demo-multiple-checkbox"
              multiple
              value={personName}
              onChange={CategoryChange}
              input={<OutlinedInput label="Category*" />}
              renderValue={(selected) => selected.join(', ')}
              MenuProps={MenuProps}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={personName.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
            </FormControl>
        </div>
        {/* brand */}
        <div className="addProductItem">
        <TextInput label="Brand*"/>
        </div>
        <div className="addProductItem">
        <TextInput label="Min purchase Qty*"/>
        </div>
        <div className="addProductItem">
        <TextInput label="inStock*"/>
        </div>
        <div className="addProductItem">
          <label>----------------------------------------</label>
          <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span">
              Upload images
            </Button>
          </label>
          <label>----------------------------------------</label>
        </div>
        <div className="addProductItem">
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Vedio Provider</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={vedioP}
              label="Vedio Provider"
              onChange={vedioChange}
            >
              <MenuItem value={1}>Youtube</MenuItem>
              <MenuItem value={2}>Upload</MenuItem>
            </Select>
          </FormControl>
        </div>
        {vedioP == 1? 
        <div className="addProductItem">
        <TextInput label="Youtube Vedio Link"/>
        </div> : <label htmlFor="contained-button-file">
              <Input accept="image/*" id="contained-button-file" multiple type="file" />
              <Button variant="contained" component="span">
                Upload Vedios
              </Button>
            </label>} 
      </form>
    </div></TabPanel>
        <TabPanel value="2">
        {variants? (
          <Variants variants={variants}
          onDelete={deleteVariant} />
        ):("nya")}
          <div>-----------------------------</div>
          <div className="addNewVariants">
              <Button onClick={addVariant} variant="contained" component="span">
                add variant
              </Button>
          </div>
        </TabPanel>
        <TabPanel value="3">Item Three</TabPanel>
      </TabContext>
    </Box>
  );
}
