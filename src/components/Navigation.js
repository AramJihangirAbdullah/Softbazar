import React , {useRef , useEffect } from 'react'
import NavParent from "./navComponents/NavParent";
import { useNavContext } from "../contexts/navContext";
const Navigation = () => {
    const { isNavOpen } = useNavContext();
    const toggleNavRef = useRef(null);
    useEffect(() => {
        const navResize = () =>{
            if (isNavOpen && window.innerWidth > 900) {
                toggleNavRef.current.style.width = '370px';
                document.body.style.overflow = "hidden";
            }
            else if(isNavOpen && window.innerWidth <= 900) 
                {toggleNavRef.current.style.width = '100vw';
                document.body.style.overflow = "hidden";}
            else{
                toggleNavRef.current.style.width = '0px';
                document.body.style.overflow = "visible";
            }
        }
        navResize();
        function handleResize() {
           navResize();
        }
      
        window.addEventListener('resize', handleResize)
      
        return _ => {
            window.removeEventListener('resize', handleResize)
        }
    },[window.innerWidt,isNavOpen])
    return (
        <>
           {/* <!-- humnav --> */}
        <div id="navhum" ref={toggleNavRef}>
            <div className="humTexts">    
                <NavParent />
                <NavParent />
                <NavParent />
                <NavParent />
            </div>
        </div> 
        </>
    )
}

export default Navigation
