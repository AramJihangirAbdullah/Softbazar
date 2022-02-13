import React from 'react';
import Variant from './Variant';
const Variants = ({variants , onDelete}) => {
    return (
        <>
          {variants.map((variant,index) => (
            <Variant key={index} variant={variant}
             onDelete={onDelete}
             />
          ))
          }
        </>
      );
};

export default Variants;
