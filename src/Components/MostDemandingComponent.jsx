import React from 'react'
// import Images from './Images'

const MostDemandingComponent = ({data:data}) => {


  return (
    <>
      <div className="mostDemandingIcon">
        <img src={data.icon} alt="asdfa" />
      </div>
      
      <div className='mostDemandingTitle'> {data.title}</div>
      <div className="jobNumber">{data.numberOfJobs} jobs</div>
      
    </>
  )
}

export default MostDemandingComponent