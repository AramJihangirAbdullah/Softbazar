import React from 'react';
import TextField from '@mui/material/TextField';

const TextInput = ({label}) => {
  return <TextField id="outlined-basic" label={label} variant="outlined" />;
};

export default TextInput;
