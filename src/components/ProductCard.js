import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';

const ProductCard = ({product,subsubm}) => {
	
    const {id,name,price, category, description,img } = product

    return (
        <div className="product-card">
		{/* <div className="badge">Hot</div> */}
		<div className="product-tumb">
			<img src={img} alt={name} />
		</div>
		<div className="product-details">
			<span className="product-catagory">{category}</span>
			<h4 onClick={()=>subsubm(id,name)}>{name}</h4>
			<p className='product_des'>{description}</p>
			<div className="product-bottom-details">
				<div className="product-price">
					{/* <small>${price+Math.floor(80/price)}</small> */}
					${price}</div>
				<div className="product-links">
					<i><FavoriteIcon/></i>
				</div>
			</div>
		</div>
	</div>
    )
}

export default ProductCard
