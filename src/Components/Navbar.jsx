import React from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
  return (
    <>
      <div className="navbarr">
        <span className='icon'><FontAwesomeIcon icon={faToggleOff} /> </span>
<span><input type="text" placeholder='search ...'  FontAwesomeIcon icon={faMagnifyingGlass}   /></span>
<span><button className="buy">Buy Now</button></span>
      </div>
    </>
  )
}

export default Navbar
