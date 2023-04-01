import React from 'react'

const CompanyTestimonialComponent = (company) => {
    
    const example = {
        name:"Monday.com",
        logoUrl:"Monday logo",
        testimonial:"Seattle Opera simplifies performance planning with deski eSignature",
        author:"Rashed Kabir",
        authorRole:"Lead Designer",
        stars:"4.5 Excellent"
      };
  return (
    <>
        <picture className="placeHolderLogo"><img src={company.data.logoUrl} alt="" /></picture>
        <div className="testimonial">
        &ldquo;{company.data.testimonial}&rdquo;
        </div>
        <div className="author">
            <span className='authorName'>{company.data.author}</span>,&nbsp;
            <span className='authorRole'>{company.data.authorRole}</span>
        </div>
        <hr />
        <div className="rating">
            {company.data.stars}&nbsp; {company.data.rating}
            <ul className="actualStars">
                {/* starlogic here */}
                &#9733;&#9733;&#9733;&#9733;&#9733;
            </ul>
        </div>
    </>
  )
}

export default CompanyTestimonialComponent;