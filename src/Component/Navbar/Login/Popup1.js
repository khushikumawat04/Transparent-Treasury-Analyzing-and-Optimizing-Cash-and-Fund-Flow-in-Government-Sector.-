import React from 'react'
import './Popup1.css'
import {AiOutlineClose} from 'react-icons/ai'

const Popup1 = (props) => {
    return (props.TimePopup) ? (
        <div className='popup'>
            <div className='popup-inner'>
              <AiOutlineClose onClick={() => props.setTimePopup(false)}/>
                
                {props.children}
            </div>
    
        </div>
      ) : "";
}

export default Popup1;