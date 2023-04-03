import React from 'react'
import NavbarComponent from '../Components/NavbarComponent';
NavbarComponent
const Page404 = () => {
  return (
    <div>
        <NavbarComponent/>
        <section className="content404Container">
            <div className="wrapper">
            <div className="placeHolderImage">
               
            </div>
            <div className="content404">
                <h1>
                    <span className='number'>404</span> 
                    <span className='text'>Page Not Found</span>
                </h1>
                <h2>
                    Publishing industries for previewing layouts & visual mockups used.
                </h2>
                <a href="#" className='goBack'>Go back</a>
            </div>
            </div>
        </section>
    </div>
  )
}

export default Page404;