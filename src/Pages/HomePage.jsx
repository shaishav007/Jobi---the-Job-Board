import React from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import JobSearchBarComponent from '../Components/JobSearchBarComponent';
import MostDemandingComponent from '../Components/MostDemandingComponent';
import TalentSliderItem
 from '../Components/TalentSliderItem';
import CompanyTestimonialComponent from '../Components/CompanyTestimonialComponent';

const HomePage = () => {

  const mostDemandingCategories = ["UI/UX Design","Marketing","Development","Telemarketing","Editing","Accounting"];

  const talentSliderEntries = [
    {name:"Jula Ake",
    occupation:"Product Designer"},
    {name:"Jula Ake",
    occupation:"Product Designer"},
    {name:"Jula Ake",
    occupation:"Product Designer"},
    {name:"Jula Ake",
    occupation:"Product Designer"}
  ]

  const companyTestimonials=[
    {
      name:"Monday.com",
      logoUrl:"Monday logo",
      testimonial:"Seattle Opera simplifies performance planning with deski eSignature",
      author:"Rashed Kabir",
      authorRole:"Lead Designer",
      stars:4.5
    },
    {
      name:"Monday.com",
      logoUrl:"Monday logo",
      testimonial:"Seattle Opera simplifies performance planning with deski eSignature",
      author:"Rashed Kabir",
      authorRole:"Lead Designer",
      stars:4.5
    }
  ];

  const companyLogos=["google","shipBob","dribble","slack","vine","airbnb"];

  return (
    <div>
      <NavbarComponent />
      <div className="wrapper">
        <h1>
            <span className='findAndHire'>Find & Hire</span>
            <span className='top3'>Top 3% of experts</span>
            <span className='onJobi'>on jobi.</span>
        </h1>
        <h2>We delivered blazing fast & working solution</h2>
        <JobSearchBarComponent />
        <div className='belowSearchBar'><span className='popular'>Popular:</span> Design, Art, Business, Video Editing</div>
      </div>
      <section className='mostDemanding'>
        <div className="wrapper">
        <div className="mostDemandingHeader">
        <h3>Most Demanding<br/> Categories.</h3>
        <h4>
          <span>Together with useful notifications,collaboration  insights, <br/> and improvement tip, etc.

          </span>
          <a href='#'> Explore All Fields </a>
        </h4>
        </div>
        
          
          <ul className='mostDemandingList'>
            
              { mostDemandingCategories.map((item)=>{
                return(
                  <li className='mostDemanding'>
                    <MostDemandingComponent data={item}/>
                  </li>
                );
              })}
            

          </ul>
        </div>
      </section>
      <section className="getOver50">
        <div className="wrapper">
        <div className="flexParent">
        <div className="placeHolderImage">
              placeholder image here
        </div>
        <div className="getOver50Content">
          <h3>Get Over 50,000+<br/> talented experts <br/>on jobi.</h3>
          <h4>A full hybrid workforce management tools are yours to<br/>
              use, as well as access our top 1% of talent.
          </h4>
          <ul className="getOver50Checklist">
            <li>Seamless searching</li>
            <li>Get top 3% experts for your project</li>
            <li>Protected payments system</li>
          </ul>
          <a href="#">Post a Job</a>
        </div>
        </div>
        </div>
      </section>
      <section className="howItWorks">
        <div className="wrapper">
          <h3>How it Works?</h3>
          <ul className='howItWorksList'>
            <li>
              <div className="placeHolderIcon">placeholderIcon</div>
              <h4>Create Account</h4>
              <h5>Its very easy to open an account and start your journey.</h5>
              
            </li>
            <li>
              <div className="placeHolderIcon">placeholderIcon</div>
                <h4>Complete your profile</h4>
                <h5>Complete your profile with all the info to get client's attention.</h5>
            </li>
            <li>
              <div className="placeHolderIcon">placeholderIcon</div>
                <h4>Apply job or hire</h4>
                <h5>Apply & get your preferable jobs with all the requirements and get it. </h5>
            </li>
          </ul>
        </div>
      </section>
      <section className="bestTalentedExpert">
        <div className="wrapper">
          <div className="bestTalentedHeader">
            <h3>Find the best talented<br/>expert in jobi.</h3>
            <div className="talentButtonWidget">
              <button className="leftArrow">leftArrow</button><button className="rightArrow">rightArrow</button>
            </div>
            
          </div>
          <ul className="talentSlider">
            {
              talentSliderEntries.map((person)=>{
                return(
                  <li><TalentSliderItem data={person}/>
                  </li>
                )
              })
            }
            </ul>
        </div>

      </section>
      <section className="trusted">
        <div className="wrapper">
    
        <div className="trustedHeader">
            <h3>Trusted By Leading <br/> Starups</h3>
            <div className="companyTestimonialButtonWidget">
            <button className="leftArrow">leftArrow</button><button className="rightArrow">rightArrow</button>
            </div>
        </div>
        <ul className="companyTestimonials">
          {
            companyTestimonials.map((company)=>{
              return(<li><CompanyTestimonialComponent data={company}/></li>)
            })
          }
        </ul>
        <ul className="companyList">
          {
            companyLogos.map((company)=>{
              return(<li>company Logo</li>)
            })
          }
        </ul>
        </div>
      </section>
    </div>
  )
}

export default HomePage;