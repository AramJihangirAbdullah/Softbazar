import React from 'react'

const LdealProduct = ({id, img, price,name}) => {
    return (
        <div className="Lproduct">
            <div className="productimg">
                <img  src={`${img}`} alt={name} />
            </div>
            <div className="price">
                <span >{name}</span>
                <span className="dis">${price}</span>
            </div>
        </div>
    )
}

export default LdealProduct
