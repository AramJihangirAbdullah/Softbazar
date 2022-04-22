import React from 'react';
import Variant from './Variant';
const Variants = ({variantnum}) => {
  console.log(variantnum);
  const loop = ()=>{
    for (let i = 1; i <= variantnum; i++) {
      <Variant/>
      console.log("hello")
    }
  }
    return (
        <>
          {loop()}
        </>
      );
};

export default Variants;
