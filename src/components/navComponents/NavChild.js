import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretRight } from '@fortawesome/free-solid-svg-icons'
const Navchild = () => {
    return (
        <div className="links">
            <span>SoftBazar Music</span>
            <i><FontAwesomeIcon icon={faCaretRight} style={{ fontSize: "x-large"}} /></i>
        </div>
    )
}

export default Navchild
