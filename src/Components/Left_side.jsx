import React from 'react'
import './Left_side.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot} from '@fortawesome/free-solid-svg-icons/faCircleDot';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faFileLines , faCircleNotch ,faDownload,faStar} from '@fortawesome/free-solid-svg-icons';
// import Right from './Right';

function Left_side() {
  return (
    <div className='container-one'> 
      
        <div className="guidex">
          <img src="./Images/logo.png" alt="" style={{height:"25px"}}/>
        </div>
        <div className="box">                                  <div className="box-1">
        <div class="accordion" id="accordionExample" >
  <div class="accordion-item" className='Accordion'>
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{backgroundColor:"#1D2531"}} >
      <FontAwesomeIcon icon={faClock}  className='Icon'/> Getting Started
      </button> 
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <FontAwesomeIcon icon={faCircleDot} className='Icon-2'/>Intoduction <br /><br />
      <FontAwesomeIcon icon={faCircleDot} className='Icon-2'/>Core Features <br /><br />
      <FontAwesomeIcon icon={faCircleDot} className='Icon-2'/>  File Structure <br /><br />
      <FontAwesomeIcon icon={faCircleDot} className='Icon-2'/> Starter Page <br /><br />
      <FontAwesomeIcon icon={faCircleDot}className='Icon-2' /> Customization
      </div>
    </div>
  </div>
  <div class="accordion-item" className='Accordion'>
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{backgroundColor:"#1D2531"}}>
      <FontAwesomeIcon icon={faFileLines} className='Icon' /> Content
      </button> 
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body" >       
      <FontAwesomeIcon icon={faCircleDot}className='Icon-2' />  Typography <br /><br />
      <FontAwesomeIcon icon={faCircleDot} className='Icon-2'/> Icon <br /><br />
      <FontAwesomeIcon icon={faCircleDot} className='Icon-2'/>  Image <br /><br />
      <FontAwesomeIcon icon={faCircleDot} className='Icon-2'/>  Code <br />
      </div>
    </div>
  </div>
  <div class="accordion-item"className='Accordion' >
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{backgroundColor:"#1D2531"}} >
      <FontAwesomeIcon icon={faCircleNotch}className='Icon' />  Source Files
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
      <FontAwesomeIcon icon={faCircleDot}className='Icon-2' />  CSS Files <br /><br />
      <FontAwesomeIcon icon={faCircleDot}className='Icon-2' />  JS Files <br /><br />
      <FontAwesomeIcon icon={faCircleDot}className='Icon-2' />  Credits <br />
      </div>
    </div>
  </div>  
</div>
</div>
   <div style={{borderTop:'2px solid #27303e', margin:'10px 15px'}}></div>
 {/* /* Accordion 1 end */ } 

 <div className="box-2">
 <h6 style={{color:"white" , marginLeft:"30px"}}>CONFIGURATION</h6>
 <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item" className='Accordion'>
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne" style={{backgroundColor:"#1D2531"}} >
      <FontAwesomeIcon icon={faDownload} className='Icon' />Installation
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show">
      <div class="accordion-body">
      <FontAwesomeIcon icon={faCircleDot} className='Icon-2'/> Local Server <br /><br />
      <FontAwesomeIcon icon={faCircleDot} className='Icon-2' /> Live Server <br />
      </div>
    </div>
  </div>
</div>
</div>
<div style={{borderTop:'2px solid #27303e', margin:'10px 15px'}}></div> 
 {/* Accordion 2 end */}

{/* Info */}
<div className="box-3">

<div className="info">
 <h6 style={{marginLeft:"30px"}}>INFO</h6>
  <h6 style={{marginLeft:"30px"}}> <FontAwesomeIcon icon={faClock}className='Icon' />Change Log</h6>
   <h6 style={{marginLeft:"30px"}}><FontAwesomeIcon icon={faStar} className='Icon'/>Thank You</h6>
</div>
        </div>            
    </div>


 
    </div>
  )
}

export default Left_side
