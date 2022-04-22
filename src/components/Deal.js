import React from 'react'
import DealProduct from "./DealProduct";
import { useGlobalContext } from "../contexts/context";
const Deal = ({title}) => {
    const { products } = useGlobalContext();
    
    return (
        <div className="deal">
                <div className="deal_header">
                    <img className="deal_icon" src="icons/house-top-icon-12.png" alt=""/>
                    <h3>{title}</h3>
                </div>
                <div className="products">
                {products.map((product) => {
                const { id } = product;
                return (
                    
                        <DealProduct key={id} {...product}/>
                
                );
                })}
                    
                    
                </div>
        </div>
    )
}

export default Deal
