import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

const Slideshow = () => {  
  var items = [
    {
        name: "Random #1",
        description: "D:/LearnPath/Reactjs/test/test 3/softbazar/src/images/slideshow/p1.jpg"
    },
    {
        name: "Random Name #2",
        description: "../images/slideshow/p2.jpg"
    }
]
    return (
      <Carousel sx={{width:2/3,backgroundColor:"green"}}>

            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
function Item(props)
{
    return (
        <Paper>
            <img src={props.item.description} alt={props.item.name} />
        </Paper>
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