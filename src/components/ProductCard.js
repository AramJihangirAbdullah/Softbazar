import React ,{useContext} from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
 import AuthContext  from "../contexts/AuthContext";
 import axios from 'axios';

const ProductCard = ({product,subsubm}) => {
	let {userId} = useContext(AuthContext)
    const {id,name,price, category, description,img } = product
 		let postfav = async (id)=>{
			await axios.post(`http://localhost:8000/api/favourites`,{user_id:userId,product_id:id})
		   .then((response) => {
			   console.log(response);
		   }, (error) => {
			 console.log(error);
		   });
		}
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
					<i onClick={()=>postfav(id)}><FavoriteIcon/></i>
				</div>
			</div>
		</div>
	</div>
    )
}

export default ProductCard
