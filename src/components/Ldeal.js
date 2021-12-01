import React from 'react'
import LdealProduct from "./LdealProduct";
import { useGlobalContext } from "../contexts/context";

const Ldeal = ({title}) => {
    const { ldealproducts } = useGlobalContext();

    return (
        <div id="Ldeal">
            <div className="deal_header">
                <img className="deal_icon" src="icons/house-top-icon-12.png" alt="" />
                <h3>{title}</h3>
            </div>
            <div className="Lproducts">
                
            {ldealproducts.map((ldealproduct) => {
                const { id } = ldealproduct;
                return (
                    
                        <LdealProduct key={id} {...ldealproduct}/>
                
                );
                })}
            
            </div>
        </div>
    )
}

export default Ldeal
