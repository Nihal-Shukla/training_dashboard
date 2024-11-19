import React from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (
    <>
      <div className="navbarr">
       <div style={{display:"flex"}}>
        <span className='icon'><FontAwesomeIcon icon={faToggleOff} /> </span>    
<span><input type="text" placeholder='search ...'   FontAwesomeIcon icon={faMagnifyingGlass}  /> <FontAwesomeIcon icon={faMagnifyingGlass} className='search'/></span>
</div>
<div>
<span><button className="buy">Buy Now</button></span>
</div>
</div>
  
    </>
  )
}

export default Navbar
