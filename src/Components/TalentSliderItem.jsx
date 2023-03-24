import React from 'react'

const TalentSliderItem = (props)=>{
    console.log(props);
  return (
    <div className='personContainer'>
        <div className="personImage">personImage</div>
        <h4>{props.data.name}</h4>
        <h5>{props.data.occupation}</h5>
    </div>
  )
}

export default TalentSliderItem