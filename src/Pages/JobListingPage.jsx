import React from 'react'
import JobSearchBarComponent from '../Components/JobSearchBarComponent'
import NavbarComponent from '../Components/NavbarComponent'
import FooterComponent from '../Components/FooterComponent'
import JobComponent from '../Components/JobComponent'


const JobListingPage = () => {
  const jobArray = [
    {
      company:"placeHolderCompany",
      jobType:"Fulltime",
      jobTitle:"Lead Designer & expert in maya 3D",
      salary:"$300 - $450/week",
      location:"USA, California"
    },
    {
      company:"placeHolderCompany",
      jobType:"Fulltime",
      jobTitle:"Lead Designer & expert in maya 3D",
      salary:"$300 - $450/week",
      location:"USA, California"
    },
    {
      company:"placeHolderCompany",
      jobType:"Fulltime",
      jobTitle:"Lead Designer & expert in maya 3D",
      salary:"$300 - $450/week",
      location:"USA, California"
    }
  ];

  return (
    <div>
      <NavbarComponent />
      
      <section className="jobListingHeader">
      <div className="wrapper">
        <h1>
          Job listing
        </h1>
        <h2>We deliver blazing fast and striking work soution</h2>
        <div className="jobListingWrapper">

        <JobSearchBarComponent />
        </div>
      </div>
      </section>  
      <section className="jobs">
        <div className="wrapper">
          <div className="specificFilters">
            <div className="filterTitle">Filter By</div>
            <form action="submit" className='filterForm'>
              <input type="
              " className="keywords" />
              <label className='fieldHeading' htmlFor="categories" >Categories</label>
              <input type="text" placeholder='Development'/>
              <fieldset>
                <legend>Job Type</legend>

                <input type="checkbox" id="Fulltime" name="Fulltime" value="Fulltime"/>
                <label htmlFor="Fulltime">&ensp;Fulltime</label><br/>
                
                <input type="checkbox" id="Fulltime" name="Fulltime" value="Fulltime"/>
                <label htmlFor="Fulltime">&ensp;Hourly Contract</label><br/>
                
                <input type="checkbox" id="Fulltime" name="Fulltime" value="Fulltime"/>
                <label htmlFor="Fulltime">&ensp;Part Time(20hr/week)</label><br/>
                
                <input type="checkbox" id="Fulltime" name="Fulltime" value="Fulltime"/>
                <label htmlFor="Fulltime">&ensp;Fixed Price</label><br/>
              </fieldset>
              <fieldset>
                <legend>Experience level</legend>

                <input type="checkbox" id="Fulltime" name="Fulltime" value="Fulltime"/>
                <label htmlFor="Fulltime">&ensp;Beginner(1-3 yrs)</label><br/>
                
                <input type="checkbox" id="Fulltime" name="Fulltime" value="Fulltime"/>
                <label htmlFor="Fulltime">&ensp;Intermediate(1-5 yrs)</label><br/>
                
                <input type="checkbox" id="Fulltime" name="Fulltime" value="Fulltime"/>
                <label htmlFor="Fulltime">&ensp;Expert(7-10 yrs)</label><br/>

              </fieldset>

              <label className='fieldHeading' htmlFor="salaryRange">Salary Range</label>
              <div className="salaryNumberContainer">
              <input type="text" className='salaryNumber' />
              &emsp;
              -
              &emsp;
              <input type="text" className='salaryNumber'/>
              &emsp;
              USD
              </div>
              <input type="range" name='salaryRange'/>

              <label className='fieldHeading' htmlFor="categories">Location</label>
              <input type="dropdown" placeholder='Washington DC'/>

              <label className='fieldHeading' htmlFor="categories">English Fluency</label>
              <input type="dropdown" placeholder='Fluent'/>
            </form>
          </div>
          <div className="jobCardsContainer">
            <p>all, 7026 jobs found</p>
            <ul className='JobCards'>
            {
              jobArray.map((job)=>{
                return(
                <li><JobComponent data={job}/></li>
                )
              })
            }
            </ul>
          </div>
        </div>
      </section>
      <FooterComponent />
    </div>
  )
}

export default JobListingPage