import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
const Slideshow = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };
    return (
        <div>
        <h2>Auto Play</h2>
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    )
}

export default Slideshow


// {/* <div id="slide">
//                 <img className="slide_image fade" id="sl1"  src={ require(`../images/slideshow/p5.webp`).default}  alt="" />
//                 <img className="slide_image fade" id="sl2"  src={ require(`../images/slideshow/p1.jpg`).default} alt="" />
//                 <img className="slide_image fade" id="sl3"  src={ require(`../images/slideshow/p2.jpg`).default} alt="" />
//                 <img className="slide_image fade" id="sl4"  src={ require(`../images/slideshow/p3.jpg`).default} alt="" />
//                 <img className="slide_image fade" id="sl5"  src={ require(`../images/slideshow/p4.png`).default} alt="" />
//                 <div id="labels">
//                     {/* <label onClick="clicked(this , 0)" className="dot active" htmlFor="sl1"></label>
//                     <label onClick="clicked(this , 1)" className="dot" htmlFor="sl2"></label>
//                     <label onClick="clicked(this , 2)" className="dot" htmlFor="sl3"></label>
//                     <label onClick="clicked(this , 3)" className="dot" htmlFor="sl4"></label>
//                     <label onClick="clicked(this , 4)" className="dot" htmlFor="sl5"></label> */}
//                 </div>
//             </div>
//              */}