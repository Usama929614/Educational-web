import React from 'react'
import './Programs.css'


const Programs = () => {
  return (
    <div className='programs'>
        <div className='program'>
           <img src="/program-1-DA_EvTPy.png" alt="" /> 
           <div className="caption">
            <img src="download (2).png" alt="" />
            <p>Graduation Degree</p>
           </div>
        </div>
        <div className='program'>
           <img src="/program-2.png" alt="" />
           <div className="caption">
            <img src="download (3).png" alt="" />
            <p>Master Degree</p>
           </div>
        </div>
        <div className='program'>
           <img src="/program-3.png" alt="" /> 
           <div className="caption">
            <img src="download (4).png" alt="" />
            <p>Post Graduate</p>
           </div>
        </div>
    </div>
  )
}

export default Programs