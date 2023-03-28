import React, { useState } from 'react'
import Images from './Images'

const NavbarComponent = () => {
    const [leftMenuOpen,toggleLeftMenuOpen] = useState(false);
    const [loginMenuOpen,toggleLoginMenuOpen] = useState(false);

  return (
        <section className="navbarParent">
            <div className="wrapper">
        <nav className='bigScreenMenu'>
            <ul>
                <li>
                    <picture>
                        <img src={Images.jobiLogo} alt='jobi logo' />
                    </picture>
                </li>
                <li className='categoryButton'><img src={Images.categoryIcon} alt=' '/> category</li>
                <li>
                    <ul class="menu">
                        <li>Home</li>
                        <li>Job</li>
                        <li>explore</li>
                        <li>contact</li>
                        <li>pages</li>
                    </ul>
                </li>
            </ul>
            <ul className='scribble'>
                <li><img src={Images.scribble} alt='meaningless scribble' /></li>
            </ul>

            <ul className="loginMenuBigScreen">
                <li>Post Job</li>
                <li className="loginText">Login</li>
                <li><a href='#' className="hireTopTalent">Hire top Talents</a></li>
            </ul>

        </nav>
        <nav className='smallScreenMenu'>
            <div className="leftMenuContainer">
            <button onClick={()=>{
                toggleLeftMenuOpen(!leftMenuOpen);
            }}>
                <img src={Images.jobiLogo} alt='jobi logo' />
            </button>
            <ul className={
                leftMenuOpen?
                'leftMenu ':
                'leftMenu closed'
            }>
                <li className='categoryButton'><img src={Images.categoryIcon} alt=' '/> category</li>
                <li>
                    <ul class="menu">
                        <li>Home</li>
                        <li>Job</li>
                        <li>explore</li>
                        <li>contact</li>
                        <li>pages</li>
                    </ul>
                </li>
                </ul>
            </div>
            <ul className='scribble'>
                <li><img src={Images.scribble} alt='meaningless scribble' /></li>
            </ul>
            <div className="rightMenu">
            <button className="hamburgerButton" onClick={()=>{
                toggleLoginMenuOpen(!loginMenuOpen);
            }}>
                <img src={Images.hamburgerButton} alt="hamburger menu" />
            </button>
            <ul className={
                loginMenuOpen?
                'loginMenu ':
                'loginMenu closed'
            }>
                <li>Post Job</li>
                <li className="loginText">Login</li>
                <li><a href='#' className="hireTopTalent">Hire top Talents</a></li>
                
            </ul>
            </div>

        </nav>
        </div>
    </section>
    
  )
}

export default NavbarComponent