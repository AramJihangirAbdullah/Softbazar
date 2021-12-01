import React from 'react'

const LdealProduct = ({id, image, price,title}) => {
    return (
        <div className="Lproduct">
            <div className="productimg">
                <img  src={image} alt={title} />
            </div>
            <div className="price">
                <span>${price}</span>
                <span className="dis">35%</span>
            </div>
        </div>
    )
}

export default LdealProduct
