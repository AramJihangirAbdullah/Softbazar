import React from 'react';
import TextInput from '../../components/TextInput';
import Button from '@mui/material/Button';
import Delete from '@mui/icons-material/Delete';

import ReactTagInput from "@pathofdev/react-tag-input";
import "@pathofdev/react-tag-input/build/index.css";
import "./variant.css";
const Variant = ({variant , onDelete}) => {
    
  const [tags, setTags] = React.useState([])
  return <div id={variant.id} className="variantHolder">
  <TextInput label={`Option${variant.id}`} />
  <ReactTagInput 
      tags={tags} 
      onChange={(newTags) => setTags(newTags)}
      removeOnBackspace={true}
    />
  <Button onClick={()=> onDelete(variant.id)}>
    <Delete sx={{m : 1}}/>
  </Button>
  {variant.id}
</div>
};

export default Variant;
