import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'

const Contact = () => {
  const navigate = useNavigate()


  const onSubmitHandler = (e) => {
    e.preventDefault()
    navigate("/home")
  }
  return (
    <div className='main'>
      <div className="contact section container">
        <h2 className="breadcrumb-title">Contact Page</h2>
        <h3 className="breadcrumb-subtitle">Home {">"} <span>Contact Us</span></h3>

        <div className="contact-container grid">
          <div>
            <div className="contact-information">
              <i className="bx bx-phone contact-icon"></i>

              <div>
                <h3 className="contact-title">Call Us</h3>
                <span className="contact-subtitle">+12068133616</span>
              </div>
            </div>

            <div className="contact-information">
              <i className="bx bx-envelope contact-icon"></i>
                <div>
                  <h3 className="contact-title">Email</h3>
                  <span className="contact-subtitle">support@loris.com</span>
                </div>
            </div>

            <div className="contact-information">
              <i className="bx bx-map contact-icon"></i>
              <div>
                <h3 className="contact-title">Location</h3>
                <span className="contact-subtitle">Chicago - Illinios</span>
              </div>
            </div>
          </div>

            <form className="contact-form grid" onSubmit={onSubmitHandler}>
              <div className="contact-inputs grid">
                <div className="contact-content">
                  <label className="contact-label">Enter your name:</label>
                  <input type="text" className="contact-input"/>
                </div>
                <div className="contact-content">
                  <label className="contact-label">Enter your email:</label>
                  <input type="email" className="contact-input"/>
                </div>
              </div>

              <div className="contact-content">
                <label className="contact-label">Subject</label>
                <input type="text" className="contact-input"/>
              </div>

              <div className="contact-content">
                <label className="contact-label">Message</label>
                <textarea name="" id="" cols="0" rows="7" className="contact-input"/>
              </div>
              <div>
                <button type="submit" className="button">Send Message</button>
              </div>
            </form>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Contact