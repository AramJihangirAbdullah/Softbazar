import React,{useContext} from 'react';
import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';
import Delete from '@mui/icons-material/Delete';
import Checkbox from '@mui/material/Checkbox';
import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import "./variant.css";
import AuthContext  from "../../../../contexts/AuthContext";

const Variant = ({i,getData}) => {
  const [option, setOption] = React.useState("")
  const [tags, setTags] = React.useState([])
  let {variantdone,setVariantdone} = useContext(AuthContext)

  console.log(tags);
  // console.log(variantdone);
//checkbox
  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };
console.log(option);
  const handletags = (newTags)=>{
    setTags(newTags);
    // getData(option,tags);
  }
  const handleoption = (e)=>{
    setOption(e.target.value)
    setVariantdone()
  }
  return <div  className="variantHolder">
  {/* <TextInput value={option} onChange={handleoption} label={`Option${i+1}`} /> */}
  <TextField
        id="outlined-name"
        label={`Option${i+1}`}
        value={option}
        onChange={handleoption}
      />
  <ReactTagInput 
      tags={tags} 
      onChange={handletags}
      removeOnBackspace={true}
      
    />
  {/* <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />   */}
</div>

};

export default Variant;
