import React from 'react'

const DealProduct = ({img,price,name}) => {
    return (
        <div className="product">
            <div  className="productimg">
            <img src={`${img}`} alt="" />
            </div>
            <span className='price'>${price}</span>
        </div>
    )
}

export default DealProduct
