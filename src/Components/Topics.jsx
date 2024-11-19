import React from 'react'
import './Topics.scss'

function Topics() {
  return (
    <>
      <div className='topic'>
      <h4 className='px-3 py-2 pb-0 mb-0'>Topics</h4> 
      <hr />
<a href="#introduction"><button>Introduction</button> </a><br />
<a href="#features"><button>Core Features</button></a><br />
<button>File Structure</button><br />
<button>Starter Page</button><br />
<button>Customization</button>
      </div>
    </>
  )
}

export default Topics
