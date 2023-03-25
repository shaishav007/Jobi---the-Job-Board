import React from 'react'

const JobComponent = ({data:{
    company:company,
    jobType:jobType,
    jobTitle:jobTitle,
    salary:salary,
    location:location
  }}) => {

  return (
    <div className='jobParent'>
        <div className="companyName">{company}</div>
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