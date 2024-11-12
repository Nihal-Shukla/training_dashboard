
import Left_side from './Components/Left_side.jsx';
import Navbar from './Components/Navbar.jsx';
import './App.css';
import Right from './Components/Right.jsx';


function App() {
  return (
    <>
    <div style={{display:"flex"}}>
   <Left_side></Left_side> 
  <div style={{marginLeft:'250px', backgroundColor:"#f5f7f9", width:"100%", height:"max-content"}}> 
   <Navbar/> 
   
   <Right/>

   
  </div>
  
   </div>   
    </>
  );
}

export default App;
