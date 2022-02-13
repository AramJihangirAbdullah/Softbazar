import React from 'react'
import logimg from "../images/abs.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapPin , faSearch , faBars } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { useNavContext } from "../contexts/navContext";

const Header = () => {
    const { toggleNav } = useNavContext();
    return (
        <header>
        <nav>
            <span id="logo">SoftBazar</span>
            <div className="location hide">
                <i><FontAwesomeIcon icon={faMapPin} style={{color: "var(--orange)" , fontSize: "x-large"}} /></i>
                <span>Erbil</span>
            </div>
            <div id="searchpa">
                <input id="search" type="text" />
                <button id="searchbtn"><i><FontAwesomeIcon icon={faSearch} /></i></button>
            </div>
            <a href="registration.php" className="hide">
                <img src={logimg} alt="login" width="35" style={{marginTop:"5px"}} />
            </a>
            <i className="hide"><FontAwesomeIcon icon={faHeart}  style={{fontSize: "xx-large",color: "var(--orange)"}} /></i>
            <i className="hide">
            <svg width="30" height="33" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{fontSize: "xx-large" , color: "var(--orange)"}}>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C10.3431 2 8.99997 3.34315 8.99997 5H15C15 3.34315 13.6568 2 12 2ZM15 7V8C15 8.55228 15.4477 9 16 9C16.5522 9 17 8.55228 17 8V7H18.2215C18.7286 7 19.1554 7.37955 19.2146 7.88316L20.744 20.8832C20.814 21.4777 20.3495 22 19.7509 22H4.24905C3.65046 22 3.18596 21.4777 3.2559 20.8832L4.78531 7.88316C4.84456 7.37955 5.27138 7 5.77846 7H6.99997V8C6.99997 8.55228 7.44768 9 7.99997 9C8.55225 9 8.99997 8.55228 8.99997 8V7H15ZM6.99997 5H5.77846C4.25721 5 2.97676 6.13864 2.79901 7.64948L1.2696 20.6495C1.05978 22.433 2.45327 24 4.24905 24H19.7509C21.5467 24 22.9402 22.433 22.7303 20.6495L21.2009 7.64948C21.0232 6.13864 19.7427 5 18.2215 5H17C17 2.23858 14.7614 0 12 0C9.23854 0 6.99997 2.23858 6.99997 5Z" fill="var(--orange)"/>
            </svg>
            </i>
        </nav>
        {/* <!-- nav 2 --> */}
        <div id="nav2" className="hide">
            <div id="hum">
                <label htmlFor="humy">
                <i><FontAwesomeIcon icon={faBars} style={{color: "var(--orange)" , fontSize: "x-large" , marginRight:"9px"}} /></i>
                    <span>All</span>
                </label>
                
                <input type="checkbox" name="humcheck" id="humy" onClick={toggleNav}  />
                    
            </div>
        
            <span>Today`s Deals</span>
            <span>Customer service</span>
            <span>Gift Cards</span>
            <span>Contact Us</span>
            <span>About Us</span>
        </div>
        
    </header>
    )
}

export default Header