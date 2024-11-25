
import Left_side from './Components/Left_side.jsx';
import Navbar from './Components/Navbar.jsx';
import './App.css';
import Right from './Components/Right.jsx';
import { useState } from 'react';


function App() {

  const [toggle, setToggle] = useState(false);
  function toggleFun(){
    setToggle(!toggle);
    console.log(toggle);
  }

  return (
    <>
    <div style={{display:"flex"}}>
   <Left_side toggle={toggle}></Left_side> 
  <div id='mainn' className={`${toggle?'margin-left-off':'margin-left-on'}`}> 
   <Navbar toggle={toggle} setToggle={setToggle} toggleFun={toggleFun}/> 
   
   <Right/>

   
  </div>
  
   </div>   
    </>
  );
}

export default App;
