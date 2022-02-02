import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
const ProductCard = ({product,error,loading}) => {
    const {title,price, category, description,image } = product
    return (
        <div className="product-card">
		{/* <div className="badge">Hot</div> */}
		<div className="product-tumb">
			<img src={image} alt={title} />
		</div>
		<div className="product-details">
			<span className="product-catagory">{category}</span>
			<h4 ><a className='product_title' href="">{title}</a></h4>
			<p className='product_des'>{description}</p>
			<div className="product-bottom-details">
				<div className="product-price"><small>${price+Math.floor(80/price)}</small>${price}</div>
				<div className="product-links">
					<a href=""><i><FavoriteIcon/></i></a>
					<a href=""><i><ShoppingBagIcon/></i></a>
				</div>
			</div>
		</div>
	</div>
    )
}

export default ProductCard
