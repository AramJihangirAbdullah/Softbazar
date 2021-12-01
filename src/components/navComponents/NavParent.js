import React from 'react'
import NavChild from "./NavChild";
const NavParent = () => {
    return (
        <div className="parts">
                    <h3>Digital Content & Devices</h3>
                        <NavChild/>
                        <NavChild/>
                        <NavChild/>
                     <hr />
                </div>
    )
}

export default NavParent
