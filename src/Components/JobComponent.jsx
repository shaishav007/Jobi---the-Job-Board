import React from 'react'
import { faBookmark, faCheckSquare } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const JobComponent = ({data:{
    company:company,
    jobType:jobType,
    jobTitle:jobTitle,
    salary:salary,
    location:location
  }}) => {

  return (
    <div className='jobParent'>
      
        <div className="companyName">
          <div className="name">{company}</div>
        <button>
          <FontAwesomeIcon icon={faBookmark}/>
        </button>
        </div>
        <div className="jobType">{jobType}</div>
        <div className="title">{jobTitle}</div>
        <div className="salary">{salary}</div>
        <div className="locationHeader">
            <div className="location">{location}</div>
            <button className="applyButton">Apply</button>
        </div>

    </div>
  )
}

export default JobComponent