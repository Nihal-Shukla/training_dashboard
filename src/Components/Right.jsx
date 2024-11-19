import React from 'react';
import './Right.scss'
import Topics from './Topics';
import Features from './Features';
// import File from './File';

const Right = () => {
  return (
    <>
      <div className="column">
        <div className="started">
          <div><h2>Getting Started</h2></div>
          <div><p>Guidex &gt; Getting Started</p></div>
        </div>
        <div className='row' >
          <div className='col-12 col-lg-8'>
          <div className="introduction_box" id='introduction'>
            <div className="introduction"><h4>Introduction</h4></div><hr />
            <div className="item">
              <p><strong>Item Name</strong> : Guidex - Online Documentation Template.</p>
              <p><strong>Item Version  </strong> : 3.1.0</p>
              <p><strong>Author </strong> : ashishmarviya</p>
              <p><strong>copyright </strong> : 2024</p>
            </div>
            <div><p>Welcome to the documentation for the Guidex template! This page will guide you on how to use and customize the template to suit your needs.</p></div>
            <h2>Guidex - Online Documentation Template.</h2>
            <p>An online documentation HTML template is a pre-designed structure and layout that helps developers and creators present their template, projects, or products in an organized and user-friendly manner on the web. It serves as a guide or reference for users, providing comprehensive information about the template's features, installation process, usage instructions, and other essential <br /><br />

              The primary purpose of an online documentation HTML template is to facilitate effective communication between the developers and end-users by offering a clear and easy-to-navigate interface for accessing relevant information. Below is a brief description of the key components typically found in an online documentation HTML template:  <br /><br />

              An effective online documentation HTML template provides clear and concise information, encourages user engagement, and enhances the overall user experience. It simplifies the process of creating comprehensive documentation and helps developers deliver a valuable product to their users.</p>
          </div>
          </div>
          <div className='col-12 col-lg-4'>
          <Topics />
          </div>
        </div>


      </div>
      <Features></Features>
      {/* <File></File> */}
    </>
  )
}

export default Right
