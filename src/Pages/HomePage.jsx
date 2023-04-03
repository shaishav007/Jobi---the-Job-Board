import React, { useRef,useEffect } from 'react';
import NavbarComponent from '../Components/NavbarComponent';
import JobSearchBarComponent from '../Components/JobSearchBarComponent';
import MostDemandingComponent from '../Components/MostDemandingComponent';
import TalentSliderItem
 from '../Components/TalentSliderItem';
import CompanyTestimonialComponent from '../Components/CompanyTestimonialComponent';
import JobiGuidesArticleComponent from '../Components/JobiGuidesArticleComponent';
import FooterComponent from '../Components/FooterComponent';
import Images from '../Components/Images';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const HomePage = () => {

  const mostDemandingRef = useRef(null);
  const bestTalentedRef= useRef(null);

  useEffect(() => {
    if (mostDemandingRef.current) {
      mostDemandingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    else if (bestTalentedRef.current) {
      bestTalentedRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const mostDemandingCategories = [
    {
      icon:Images.uxdesign,
      title:"UI/UX Design",
      numberOfJobs:"12k+"
    },

    {
      icon:Images.marketing,
      title:"Marketing",
      numberOfJobs:"12k+"
    },
    {
      icon:Images.development,
      title:"Development",
      numberOfJobs:"12k+"
    },
    {
      icon:Images.telemarketing,
      title:"Telemarketing",
      numberofJobs:"12k+"
    },
    {
      icon:Images.editing,
      title:"Editing",
      numberofJobs:"12k+"
    },
    {
      icon:Images.accounting,
      title:"Accounting",
      numberofJobs:"12k+"
    }
  ];

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
      logoUrl:Images.mondayLogo,
      testimonial:"Seattle Opera simplifies performance planning with deski eSignature",
      author:"Rashed Kabir",
      authorRole:"Lead Designer",
      stars:"4.5",
      rating:"Excellent"
    },
    {
      name:"Monday.com",
      logoUrl:Images.mondayLogo,
      testimonial:"Seattle Opera simplifies performance planning with deski eSignature",
      author:"Rashed Kabir",
      authorRole:"Lead Designer",
      stars:"4.5",
      rating:"Excellent"
    }
  ];

  const companyLogos=[
    Images.airbnbLogo,
    Images.dribbleLogo,
    Images.googleLogo,
    Images.shipBobLogo,
    Images.slackLogo,
    Images.vineLogo
  ];

  const jobiGuidesArticles = [
    {
      imageUrl:"image url",
      categories:"developer,code",
      title:"Print, publishing qui visual layout mockups.",
      author:"Rashed Kabir"
    },
    {
      imageUrl:"image url",
      categories:"developer,code",
      title:"Print, publishing qui visual layout mockups.",
      author:"Rashed Kabir"
    },
    {
      imageUrl:"image url",
      categories:"developer,code",
      title:"Print, publishing qui visual layout mockups.",
      author:"Rashed Kabir"
    }
  ];

  return (
    <div>
      <NavbarComponent />
      <section className="homePageHeader">
      <div className="wrapper">
        <h1>
            <span className='findAndHire'>Find & Hire</span>
            <span className='top3'>Top 3% of experts</span>
            <span className='onJobi'>on jobi.</span>
        </h1>
        <h2>We delivered blazing fast & working solution</h2>
        <JobSearchBarComponent />
        <div className='belowSearchBar'><span className='popular'>Popular:</span> Design, Art, Business, Video Editing</div>
        <div className="absoluteShapeContainer">
          <img src={Images.headerbackgroundShape} alt="shape for decoration" />
        </div>
      </div>
      </section>
      <section className='mostDemanding' id='mostDemanding' ref={mostDemandingRef}>
        <div className="wrapper">
        <div className="mostDemandingHeader">
        <h3>Most Demanding<br/> Categories.
          <picture className='threeLines'>
            <img src={Images.threeLines} alt="" />
          </picture>
        </h3>
        <h4>
          <span>Together with useful notifications,collaboration  insights, <br/> and improvement tip, etc.

          </span>
          <Link to='/jobs'> Explore All Fields  </Link>
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
        
        <picture className="placeHolderImage">
              <img src={Images.wholeGroup} alt="" className="getOver50Group" />
        </picture>
        <div className="getOver50Content">
          <h3>Get Over 50,000+<br/> talented experts <br/>on jobi.</h3>
          <h4>A full hybrid workforce management tools are yours to<br/>
              use, as well as access our top 1% of talent.
          </h4>
          <ul className="getOver50Checklist">
            <li>&nbsp; Seamless searching</li>
            <li>&nbsp; Get top 3% experts for your project</li>
            <li>&nbsp; Protected payments system</li>
          </ul>
          <a href="#">Post a Job</a>
        </div>
        
        </div>
      </section>
      <section className="howItWorks">
        <div className="wrapper">
          <h3>How it Works?
            <picture>
              <img src={Images.threeLinesSvg} alt="" className="threeLines" />
            </picture>
          </h3>
          <ul className='howItWorksList'>
            <li>
              <picture className="placeHolderIcon create">
                
              </picture>
              <h4>Create Account</h4>
              <h5>Its very easy to open an account and start your journey.</h5>
              
            </li>
            <picture className='arrowPath'>
            <img src={Images.arrowPath} alt="" className="threeLines" />
            </picture>
            
            <li>
              <picture className="placeHolderIcon complete"></picture>
                <h4>Complete your profile</h4>
                <h5>Complete your profile with all the info to get client's attention.</h5>
            </li>
            <picture className='arrowPath'>
            <img src={Images.arrowPath} alt="" className="threeLines" />
            </picture>
            <li>
              <picture className="placeHolderIcon apply"></picture>
                <h4>Apply job or hire</h4>
                <h5>Apply & get your preferable jobs with all the requirements and get it. </h5>
            </li>
          </ul>
        </div>
      </section>
      <section className="bestTalentedExpert" id="bestTalented" ref={bestTalentedRef}>
        <div className="wrapper">
          <div className="bestTalentedHeader">
            <h3>Find the best talented<br/>expert in jobi.
            <picture >
            <img src={Images.threeLines} alt="" />
            </picture>
          </h3>
            <div className="talentButtonWidget">
              <button className="leftArrow">&larr; </button><button className="rightArrow">&rarr;</button>
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
            
              <button className="leftArrow">&larr; </button><button className="rightArrow">&rarr;</button>
            
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
              return(<li>
                <picture className='logoHolder'>
                  <img src={company} alt="" />
                </picture>
              </li>)
            })
          }
        </ul>
        </div>
      </section>
      <section className="collaboration">
        <div className="wrapper">
        
        <picture className="placeHolderImage">
              <img src={Images.collaborationLeft} alt="" className="getOver50Group" />
        </picture>
        <div className="collaborationContent">
          <h3>Collaboration with <br/> Top Brands.</h3>
          <h4>We collaborate with  a number of top tier<br/> companies on imagining the future of work,<br/> have a look.</h4>
          <a href='#' className='learnMore'>Learn More &nbsp; &rarr;</a>
        </div>
        
        </div>
      </section>
      <section className="jobiGuides">
        <div className="wrapper">
        <div className="jobiGuidesHeader">
          <h3>Jobi Guides</h3>
          <a href='#' className='exploreMore'>Explore More</a>
        </div>
        <ul className='jobiGuidesArticles'>
          {jobiGuidesArticles.map((article)=>{
            return(
              <JobiGuidesArticleComponent data={article} />
            )
          })}
        </ul>
        </div>
      </section>
      <section className='matchedJobs'>
      <div className="wrapper">
        <div className="placeHolderImage">
            
        </div>
        <div className="matchedJobsContent">
          <h3>Get your <br/> <span>Matched Jobs</span> in a <br/> few minutes.</h3>
          <h4>Find your dream job & earn more from world leading brands. Upload your CV now.</h4>
          <Link to='/inConstruction' className='uploadCV'>
            <FontAwesomeIcon icon={faUpload}/>&emsp;
            Upload your CV</Link>
        </div>
        
        </div>
      </section>
      <FooterComponent />
    </div>
  )
}

export default HomePage;