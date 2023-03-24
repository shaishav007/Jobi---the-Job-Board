import React from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import JobSearchBarComponent from '../Components/JobSearchBarComponent';
import MostDemandingComponent from '../Components/MostDemandingComponent';

const HomePage = () => {

  const mostDemandingCategories = ["UI/UX Design","Marketing","Development","Telemarketing","Editing","Accounting"];
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
    </div>
  )
}

export default HomePage;