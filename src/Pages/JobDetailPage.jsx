import React from 'react'
import FooterComponent from '../Components/FooterComponent'
import JobComponent from '../Components/JobComponent'
import NavbarComponent from '../Components/NavbarComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCheckCircle, faCircleCheck, faCopy } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const JobDetailPage = () => {
  const thisJob = {
    date: "18th July 2022",
    company: "Adobe",
    jobTitle : "Senior Product & Brand Design",
    overview: "When team members told us they needed more flexibility around where and how they worked, we acted, creating two options to accomodate two different styles of work. One non-negotiable principle along the way? We had to retain our deep culture of collaboration, both among ourselves and with our clients. Introducing Work from Near and Work from Anywhere at Willow Tree. Please indicate which location(s) you're interested.",
    jobDescription:"As a Product Designer at Willow Tree, you will give form to ideas by being the voice and owner of product decisions. You will drive the design direction, and then make it happen! We understand our responsibility to create a diverse, equitable and inclusive place within the tech industry, while pushing to make our industry more representative.",
    responsibilities:[
      'Collaboraborate daily with a multidisciplinary team of Software Engineers, Researchers, Strategists, and Project Mangers.',
      'Co-lead ideation sessions, workshops, demos, and presentations with clients on-site',
      'Push for and create inclusive, accessible design for all',
      'Maintain quality of the design process and ensure that when design are translated into code they accurately reflect the design specifications.',
      'Sketch, wireframes, build IA, motion design, and run usability tests',
      'Design pixel perfect responsive UIs and understand that adopting common interface pattern is better for UX than reinventing the wheel',
      'Ensure content strategy and design are perfectly in-sync',
      'Give and receive design critique to help constantly refine and push our work.'
    ],
    requiredSkills:[
      "You have been designing digital products for 2+ years.",
      "A portfolio that exemplifies strong visual design and a focus on defining the user experience.",
      "You have proudly shipped and launched several products.",
      "You have some past experience working in an agile environment- Think two-week sprints.",
      "Experience effectively presenting and communicating your design decisions to clients and team members",
      "Up-to-date knowledge of design software like Figma, Sketch, etc."
    ],
    benefits:[
      "We are a remote-first company.",
      "100% company-paid health insurance premiums for you & your dependents",
      "Vacation stipend",
      "Unlimited paid vacation and paid company holidays",
      "Monthly wellness/gym stipend."
    ]

  }

    const thisCompany = {
      imageUrl:"placeholder img",
      name:"Adobe Inc",
      salary:"50k-60k/year",
      expertise:"Intermediate",
      location:"Spain, Barcelona",
      jobType:"Fulltime",
      date:"12 jun,2022",
      experience:"2 years",
      tags:["design","product design","brands","application","UI/UX"]
    }

    const relatedJobsArray = [
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
      <NavbarComponent/>
      <section className="jobDetailsHeader">
      <div className="wrapper">
        <h1>
          Job Details
        </h1>
        <h2>We deliver blazing fast and striking work soution</h2>
      </div>
      </section>  
      <section className="jobData">
        <div className="wrapper">
          <div className="descriptionContainer">
            <p>{thisJob.date} by <span>{thisJob.company}</span></p>
            <h3>{thisJob.jobTitle}</h3>
            <ul className="socialMediaButtonList">
              <li>
                <a href="#" className='socialMediaButton'>
                <FontAwesomeIcon icon={faFacebookF}/>&nbsp;
                Facebook
              </a>
              </li>
              <li>
                <a href="#" className='socialMediaButton'>
                <FontAwesomeIcon icon={faTwitter}/>&nbsp;Twitter</a>
              </li>
              <li>
                <a href="#" className='socialMediaButton'>
                <FontAwesomeIcon icon={faCopy}/>&nbsp;Copy</a>
              </li>
            </ul>
            
            <div className="overviewContainer">
              <h4>Overview</h4>
              <p className="jobOverview">
                {
                  thisJob.overview
                }
              </p>
            </div>
            <div className="jobDescriptionContainer">
            <h4>Job Description</h4>
            <p className="jobDescription">
              {
                thisJob.jobDescription
              }
            </p>
            </div>
            <div className="responsibilitiesContainer">
            <h4>Responsibilities</h4>
            <ul className="jobResponsibilities">
              {
                thisJob.responsibilities.map((responsibility)=>{
                  return(
                    <li><FontAwesomeIcon icon={faCheck}/>&emsp;{responsibility}</li>
                  );
                })
              }
            </ul>
            </div>
            <div className="requiredSkills">
            <h4>Required Skills:</h4>
            <ul className='requiredSkills'>
            {
                thisJob.requiredSkills.map((skill)=>{
                  return(
                    <li>
                      &#8226;&emsp;{skill}</li>
                  );
                })
              }

            </ul>
            </div>
          </div>
          <div className="Summary">
            <picture className="companyLogo">
              
            </picture>
            <h4>{thisCompany.name}</h4>
            <a href="#">Visit Website</a>
            
              <ul className='summaryList'>
              <li>
                <h5>Salary</h5>
                <span className='requiredValue'>{thisCompany.salary}</span>
              </li>
              <li>
                <h5>Experience</h5>
                <span className='requiredValue'>{thisCompany.expertise}</span>
              </li>
              <li>
                <h5>Location</h5>
                <span className='requiredValue'>{thisCompany.location}</span>
              </li>
              <li>
                <h5>Job Type</h5>
                <span className='requiredValue'>{thisCompany.jobType}</span>
              </li>
              <li>
                <h5>Date</h5>
                <span className='requiredValue'>{thisCompany.date}</span>
              </li>
              <li>
                <h5>Experience</h5>
                <span className='requiredValue'>{thisCompany.experience}</span>
              </li>
              </ul>
              <ul className="companyTags">
              {
                thisCompany.tags.map((tag)=>{
                  return(
                    <li className='tag'>{tag}</li>
                  )
                })
              }
              </ul>
              <a href="#" className='applyNowButton'>Apply Now</a>
          </div>
        </div>
      </section>
      <section className="relatedJobs">
        <div className="wrapper">
          <div className="relatedJobsHeader">
          <h3>Related Jobs</h3>
          <div className="relatedButtonWidget">
              <button className="leftArrow">&larr; </button><button className="rightArrow">&rarr;</button>
            </div>
          {/* add the button widget from an earlier page here */}
          </div>
          <ul className="relatedJobsList">
          {
            relatedJobsArray.map((job)=>{
              return(
                <li><JobComponent data={job}/></li>
              )
            })
          }
          </ul>
        </div>
      </section>
      <FooterComponent/>
      
    </div>
  )
}

export default JobDetailPage