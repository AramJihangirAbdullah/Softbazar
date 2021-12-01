import React ,{useEffect,useRef} from 'react';
import logimg from "../images/abs.svg";
import { useNavContext } from "../contexts/navContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faHome} from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
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
        
        <>
    <footer id="footer" ref={toggleNavRef}>
        <div id="footer_parts">
            <div id="left">
                <h2 className="footer_header">Contact Us</h2>
                <hr />
                <div className="contacts">
                    <div className="contact">
                        <i className="fas fa-envelope"></i>
                        <span><b>E-Mail us:</b> softbazar@gmail.com</span>
                    </div>
                    <div className="contact">
                        <i className="fas fa-phone-alt"></i>
                        <span><b>Call Center:</b> +964 (750) 571 9449</span>
                    </div>
                    <div className="contact">
                        <i className="fab fa-whatsapp"></i>
                        <span><b>WhatsApp:</b> +964 (750) 571 9449</span>
                    </div>

                </div>
                <div className="social Flayout">
                    <i style={{color: "#4267B2"}} className="fab fa-facebook-square"></i>
                    <i className="ri-instagram-fill insta"></i>
                    <i style={{color: "#c4302b"}} className="fab fa-youtube-square"></i>
                    <i style={{color: " #FFFC00 "}} className="fab fa-snapchat-square"></i>
                </div>
            </div>
            <div id="mid">
                <h2 className="footer_header">Our service</h2>
                <hr />
                <div className="contacts">
                    <div className="contact">
                        <span>Delivery 24/7</span>
                    </div>
                    <div className="contact">
                        <span>Payment Methods</span>
                    </div>
                    <div className="contact fapp">
                        <span>Shop-on-you-go</span>
                        <i className="fab fa-apple"></i>
                        <i className="ri-android-fill"></i>
                    </div>
                    <div className="contact">
                        <span>Shop with Confidence</span>
                    </div>
                </div>
                <div className="subscribe Flayout">
                    <input type="email" placeholder="Your Email"/>
                    <input type="button" value="SUBSCRIBE"/>
                </div>
                
            </div>
            <div id="right">
                <h2 className="footer_header">Information</h2>
                <hr />
                <div className="contacts">
                    <div className="contact">
                        <span>Shopping Policy</span>
                    </div>
                    <div className="contact">
                        <span>Privacy Policy</span>
                    </div>
                    <div className="contact">
                        <span>Return/Refund Policy</span>
                    </div>
                    <div className="contact">
                        <span>About Us</span>
                    </div>
                    <div className="contact">
                        <span>How to buy</span>
                    </div>
                    <div className="contact">
                        <span>Why <span>Software</span></span>
                    </div>
                </div>
            </div>
        </div>
</footer >
    {/* <!-- mobile navigation --> */}
    <div id="mobNav">
        <div className="mobNavitem">
            <a href="index.html"><i><FontAwesomeIcon icon={faHome} style={{color: "var(--orange)" , fontSize: "x-large" , marginRight:"9px"}} /></i></a>
        </div>
        <div className="mobNavitem">
            <label htmlFor="humy">
            <i><FontAwesomeIcon icon={faBars} style={{color: "var(--orange)" , fontSize: "x-large" , marginRight:"9px"}} /></i>
            </label>
        </div>
        <div className="mobNavitem">
        <i>
            <svg width="30" height="33" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{fontSize: "xx-large" , color: "var(--orange)"}}>
                <path fillRule="evenodd" clipRule="evenodd" d="M12 2C10.3431 2 8.99997 3.34315 8.99997 5H15C15 3.34315 13.6568 2 12 2ZM15 7V8C15 8.55228 15.4477 9 16 9C16.5522 9 17 8.55228 17 8V7H18.2215C18.7286 7 19.1554 7.37955 19.2146 7.88316L20.744 20.8832C20.814 21.4777 20.3495 22 19.7509 22H4.24905C3.65046 22 3.18596 21.4777 3.2559 20.8832L4.78531 7.88316C4.84456 7.37955 5.27138 7 5.77846 7H6.99997V8C6.99997 8.55228 7.44768 9 7.99997 9C8.55225 9 8.99997 8.55228 8.99997 8V7H15ZM6.99997 5H5.77846C4.25721 5 2.97676 6.13864 2.79901 7.64948L1.2696 20.6495C1.05978 22.433 2.45327 24 4.24905 24H19.7509C21.5467 24 22.9402 22.433 22.7303 20.6495L21.2009 7.64948C21.0232 6.13864 19.7427 5 18.2215 5H17C17 2.23858 14.7614 0 12 0C9.23854 0 6.99997 2.23858 6.99997 5Z" fill="var(--orange)"/>
            </svg>
        </i>
        </div>
        <div className="mobNavitem">
        <a href="registration.php">
                <img src={logimg} alt="login" width="35" style={{color:"red",marginTop:"5px"}} />
            </a>
        </div>
    </div>
    </>
    )
}

export default Footer
