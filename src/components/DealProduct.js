import React from 'react'

const DealProduct = ({image,price}) => {
    return (
        <div className="product">
            <div  className="productimg">
            <img src={image} alt="" />
            </div>
            <span>${price}</span>
        </div>
    )
}

export default DealProduct
