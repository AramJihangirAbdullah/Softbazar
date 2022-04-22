import React, { useState , useEffect } from 'react'
import '../css/item.css';
import { useParams } from 'react-router-dom';
import Cookies from 'js-cookie'
import axios from 'axios';

import {
    GlassMagnifier
} from "react-image-magnifiers";
import Rating from './Rating';

const Item = () => {
    const [alldata, setAlldata] = useState({})
    // const { productName} = useParams();
    let getprod = async ()=>{
        await axios.get(`http://localhost:8000/api/products/${Cookies.get('product_id')}`)
       .then((response) => {
         setAlldata(response.data);
         console.log("resa");
         console.log(alldata);
       }, (error) => {
         console.log(error);
       });
       }
       useEffect(() => {
           getprod()
       }, []);
    //    function modifyimage(jsonObj) {
    //     let words=[];
    //     let dom = 'http://127.0.0.1:8000/uploads/images/'
    //       let datajson = jsonObj.image.slice(1, -1);
    //          words = datajson.split(',');
    //          jsonObj.img = dom + words[0].slice(1, -1);
    //       console.log(jsonObj);
    //         return jsonObj;
    //   }
    //   console.log(modifyimage(alldata));
       console.log(alldata);
       //    console.log(alldata.image.slice(1, -1).split(','));
       const data = [{imageSrc:'p1.jpg',imageAlt:'image'},{imageSrc:'p2.jpg',imageAlt:'image'},{imageSrc:'p3.jpg',imageAlt:'image'},{imageSrc:'p4.png',imageAlt:'image'}]
       const dataa = [alldata.img]
       console.log(dataa);
    //    const data = alldata.image;
    // if (alldata) {
    //     // let fidata = alldata.image.split(',')
    // } 
       
    const [showImg, setShowImg] = useState(data[0].imageSrc);
    const [quantity, setQuantity] = useState(0);
    const [images, setImages] = useState(data)
    const imgClick = (e)=>{
        setShowImg(data[e.target.alt].imageSrc)
    }
    
    return (
        <div id="main"> 
        <div className="top">
            <div className="magni">
                <div id="picholder">
                    <GlassMagnifier
                    imageSrc={ require(`../images/slideshow/${showImg}`).default}
                    imageAlt="Example"
                    largeImageSrc={ require(`../images/slideshow/${showImg}`).default}
                    />
                </div>
                <div className="smimgHold">
                    <ul className="smimgholder">
                        {images.map((image,index)=>{
                            return (
                            <li><img onClick={imgClick} src={require(`../images/slideshow/${image.imageSrc}`).default} alt={`${index}`} /></li>
                            )
                        })}
                    </ul>
                </div>
            </div>

            <div className="details">
                <div className="detail1">
                    <div className="part">
                        <span className="prod_company">{alldata.name}</span>
                        <span className="money">  ${alldata.price}</span> <br/>
                        <span className="prod_detail">{alldata.description}</span>
                        <br/>
                        <div className="rating_show">
                                <Rating rate={4}/>
                            <div className="hr-line"></div>
                            <div className="vote_holdre">

                            <span style={{marginLeft:'20px',color:'var(--orange)',fontSize:'large'}}>25</span>
                            <span style={{marginRight:'20px',fontSize:'large'}} > Vote(s)</span>
                            </div>
                        </div>
                        
                    </div>
                    <div className="part">
                        {/* <!-- quantity --> */}
                        <span className="header">Quantity:</span>
                        <span className="selectedview" id="quantity"></span>
                        <div className="selItem">
                            <button id="btn_min" className="btns" onClick={()=>{setQuantity((pre)=>pre-1)}}>-</button>
                            <input onuparr id="inp_num" type="number" value={quantity} min="0" max="100" onChange={()=>{ setQuantity(quantity+1) }}/>
                            <button id="btn_plus" className="btns" onClick={()=>{setQuantity((pre)=>pre+1)}} >+</button>
                        </div>
                        <span className="header">Taste:</span>
                        <span className="selectedview" id="size"></span>
                        {/* <!-- Size --> */}
                        <div className="size">
                            <button className="size_btn" value="XS">Onion</button>
                            <button className="size_btn" value="S">Tomato</button>
                            <button className="size_btn" value="M">Peper</button>
                            <button className="size_btn" value="L">Cheese</button>
                        </div>
                        {/* <!-- Color --> */}
                        {/* <span className="header">Color:</span>
                        <span className="selectedview" id="color"></span> */}
                        {/* <div className="color">
                            <button className="color_btn" value="black"><img src="color_black.webp" alt="black"/></button>
                            <button className="color_btn" value="brown"><img src="color_brown.webp" alt="brown"/></button>
                            <button className="color_btn" value="maroni"><img src="color_maron.webp" alt="maroni"/></button>
                            <button className="color_btn" value="black"><img src="color_black.webp" alt="black"/></button>
                            <button className="color_btn" value="brown"><img src="color_brown.webp" alt="brown"/></button>
                        </div> */}
                        
                    </div>
                    <div className="part">
                        <button id="addtocart">Add to cart</button>
                        <button id="wishlist">WISHLIST</button>
                    </div>
                </div>
                <div className="detail2">
                    <div className="part">
                    </div>
                </div>
            </div>
            
        </div>
        <div className="offers">
            <span className="header">Offers</span>
            <div className="offersList">
                <span id="offer1">Free Delivery on order above $100</span>
                <span id="offer2">Pay on delivery might be available</span>
                <span id="offer3">Easy 30 days returns and exchanges</span>
                <span id="offer4">Try & Buy might be available</span>
                <span id="offer5">Get %20 deiscount above $15</span>
                <span id="offer6">Get %40 discount avove $250</span>
            </div>
        </div>
    </div>
    )
}

export default Item
