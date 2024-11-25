import React from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faToggleOff } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
function Navbar({toggleFun}) {

  const [ text, setText] = useState(false);

  function textFun(){
    setText(!text);
    console.log(text);
  }
  
  return (
    <>
   
      <div className="navbarr"> 
       <div style={{display:"flex"}}>
       
       {/* <FontAwesomeIcon icon={faToggleOff}  className='toggle' onClick={textFun}/> */}
       <FontAwesomeIcon icon={faToggleOff}  className='toggle' onClick={toggleFun}/>
       
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
