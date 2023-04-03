import React from 'react'
import Images from './Images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <footer>
        <div className="wrapper">
           <div className="footerHeader">
                <div className="titleText">
                    <h3>Most Complete Job Portal</h3>
                    <h4>Signup and start find your job or talents.</h4>
                </div>
                <div className="buttons">
                    <button className='lookingForJob'>Looking for job?</button>
                    <button className='postAJob'>Post a job</button>
                </div>
           </div>
           <div className="footerLists">
            <div className="jobiLogo">
                <Link to='/'>
                    <img src={Images.jobiLogoBlack} alt='jobi logo' />
                </Link>
            </div>
            <ul className='footerList'>
                <h5>Products</h5>
                <li>Take the tour</li>
                <li>Live chat</li>
                <li>Self-service</li>
                <li>Mobile</li>
                <li>Collaboration</li>
                <li>Reviews</li>
            </ul>
            <ul className='footerList'>
                <h5>Links</h5>
                <li>Pricing</li>
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
            </ul>
            <ul className='footerList'>
                <h5>Legal</h5>
                <li>Terms of Use</li>
                <li>Terms & conditions</li>
                <li>Privacy</li>
                <li>Cookie Policy</li>
            </ul>
            <form className='newsletterForm'>
                <h5>Newsletter</h5>
                <p>Join & get important news regularly</p>
                <div className="emailFieldContainer">

                    <label htmlFor="emailField">Enter your email</label>
                    <input type="text" className='emailField'/>
                    <button formAction='submit'>Send</button>
                </div>
                <p className='interestingAndRelevant'>We only send interesting and relevant emails</p>
            </form>
           </div>
           <div className="copyRightSection">
            <ul className='privacyAndContact'>
                <li>Privacy & Terms</li>
                <li>Contact Us</li>
            </ul>
            <p className="copyright">Copyright @ 2022 jobi inc</p>
            <ul className='iconList'>
                <li>
                    <FontAwesomeIcon icon={faFacebookF}/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faInstagram}/>
                </li>
                <li>
                    <FontAwesomeIcon icon={faPinterest}/>
                </li>
                
            </ul>
           </div>
        </div>
    </footer>
  )
}

export default FooterComponent;