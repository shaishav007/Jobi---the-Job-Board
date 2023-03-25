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
        <JobSearchBarComponent />
      </div>
      </section>  
      <section className="jobs">
        <div className="wrapper">
          <div className="filters">
            <div className="filterTitle">Filter By</div>
            <form action="submit">
              <input type="
              " className="keywords" />
              <label htmlFor="categories">Categories</label>
              <input type="text" placeholder='Development'/>
              <fieldset>
                <legend>Job Type</legend>

                <input type="checkbox" id="Fulltime" name="Fulltime" value="Fulltime"/>
                <label htmlFor="Fulltime">Fulltime</label><br/>
                
                <input type="checkbox" id="Fulltime" name="Fulltime" value="Fulltime"/>
                <label htmlFor="Fulltime">Fulltime</label><br/>
                
                <input type="checkbox" id="Fulltime" name="Fulltime" value="Fulltime"/>
                <label htmlFor="Fulltime">Fulltime</label><br/>
                
                <input type="checkbox" id="Fulltime" name="Fulltime" value="Fulltime"/>
                <label htmlFor="Fulltime">Fulltime</label><br/>
              </fieldset>
              <fieldset>
                <legend>Experience level</legend>

                <input type="checkbox" id="Fulltime" name="Fulltime" value="Fulltime"/>
                <label htmlFor="Fulltime">Beginner(1-3 yrs)</label><br/>
                
                <input type="checkbox" id="Fulltime" name="Fulltime" value="Fulltime"/>
                <label htmlFor="Fulltime">Intermediate(1-5 yrs)</label><br/>
                
                <input type="checkbox" id="Fulltime" name="Fulltime" value="Fulltime"/>
                <label htmlFor="Fulltime">Expert(7-10 yrs)</label><br/>

              </fieldset>

              <label htmlFor="salaryRange">Salary Range</label>
              <input type="range" name='salaryRange'/>

              <label htmlFor="categories">Location</label>
              <input type="dropdown" placeholder='Washington DC'/>

              <label htmlFor="categories">English Fluency</label>
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