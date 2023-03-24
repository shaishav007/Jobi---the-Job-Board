import React from 'react'

const NavbarComponent = () => {
  return (
        <section className="wrapper">
        <nav>
            <ul>
                <li>jobi logo</li>
                <li>category</li>
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
            <ul>
                <li>scribble</li>
            </ul>

            <ul class="loginMenu">
                <li>Post Job</li>
                <li>Login</li>
                <li><a href='#'>Hire top Talents</a></li>
            </ul>

        </nav>
    </section>
    
  )
}

export default NavbarComponent