import React from 'react'
import Footer from './Footer'

const AboutUs = () => {
  return (
    <div className="about section container">
        <h2 className="breadcrumb-title">About Page</h2>
        <h3 className="breadcrumb-subtitle">Home {">"} <span>About Us</span></h3>
    
        <div className="about-container grid">
            <img src="https://th.bing.com/th/id/OIP.H-vy_fodNqkFMEroHAn5VQHaFj?pid=ImgDet&rs=1" alt="" className="about-img"/>

            <div className="about-data">
                <h2 className="section-title about-title">
                    Who we really are & <br/> why choose us
                </h2>

                <p className="about-description">
                    We have over 4000+ reviews and 
                    our customers trust our products
                    and delivery service everytime.   
                </p>
                <div className="about-details">
                    <p className="about-details-description">
                        <i className="bx bxs-check-square about-details-icon"/>
                        We always deliver on time.
                    </p>
                    <p className="about-details-description">
                        <i className="bx bxs-check-square about-details-icon"/>
                        We give you guides to protect and care for your products.
                    </p>
                    <p className="about-details-description">
                        <i className="bx bxs-check-square about-details-icon"/>
                        100% money back guaranted.
                    </p>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default AboutUs