import React,{useEffect,useRef , useContext} from 'react'
import "../css/main.css";
import { links } from "../data/dslideshow";
import Deal from "../components/Deal";
import Ldeal from "../components/Ldeal";
import { AppProvider } from "../contexts/context";
import { useNavContext } from "../contexts/navContext";
import Slideshow from '../components/Slideshow';

const Main = () => {
    
    const { isNavOpen } = useNavContext();
    const toggleNavRef = useRef(null);
    useEffect(() => {
        if (!isNavOpen) {
            toggleNavRef.current.style.filter = 'brightness(1)';
            toggleNavRef.current.style.cursor = 'auto';
        }
        else{
            toggleNavRef.current.style.filter = 'brightness(.25)';
            toggleNavRef.current.style.cursor = 'default';
        }
    }, [isNavOpen])

    return (

        <div className="work" ref={toggleNavRef} >
        {/* <!-- ads --> */}
        <div className="adspa">
            <img src={ require(`../images/reklam/reklam1.jfif`).default} alt="ads" />
            <img src={ require(`../images/reklam/reklam2.jpg`).default} alt="ads2" />
        </div>
        {/* <!-- slide --> */}
        <div id="slideshow">
            <div id="menu">
                {links.map(link=>{
                    const {id, url, text, icon} = link;
                    return(
                        <div key={id} className="menuele">
                            <span><img src={ require(`../images/icons/${icon}`).default} alt={text} /></span>
                            <h2>{text}</h2>
                            <i className="ri-arrow-right-s-line"></i>
                        </div>
                    )
                })}
            </div>
            
            <Slideshow/>
        </div>
        {/* <!-- deals --> */}
            <AppProvider>
        <div id="deals">
                <Deal title='Top Selection'/> 
                <Deal title='Today Deals'/> 
        </div>
            <div id="deals">
                <Deal title='New Arrivals'/> 
                <Deal title='Hot Deals'/> 
        </div>
        <Ldeal title='Only For You'/>
            </AppProvider>
    </div>
    )
}

export default Main
