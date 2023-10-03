import React from 'react';


const Resume = () => {
  return (
    <div>
        <a href={require("../Resume.pdf")} download="Rajni_resume" className="rbala_resume">
         Download my Resume
          </a>
    </div>
  )
}

export default Resume