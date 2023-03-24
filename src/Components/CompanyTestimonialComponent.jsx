import React from 'react'

const CompanyTestimonialComponent = (company) => {
    
    const example = {
        name:"Monday.com",
        logoUrl:"Monday logo",
        testimonial:"Seattle Opera simplifies performance planning with deski eSignature",
        author:"Rashed Kabir",
        authorRole:"Lead Designer",
        stars:4.5
      };
  return (
    <div className='testimonialParent'>
        <div className="placeHolderLogo">{company.data.name}</div>
        <div className="testimonial">
            {company.data.testimonial}
        </div>
        <div className="author">
            <span className='author'>{company.data.author}</span>
            <span className='authorRole'>{company.data.authorRole}</span>
        </div>
        <hr />
        <div className="rating">
            {company.data.stars}
        </div>
    </div>
  )
}

export default CompanyTestimonialComponent;