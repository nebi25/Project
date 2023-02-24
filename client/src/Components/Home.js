import React, {useState,useEffect} from 'react'
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import NewArrivals from './NewArrivals'

const Home = () => {
    
    return (
        <div className="home container"> 
            {/* Carousel */}
            <Carousel className="swiper home-swiper">
                {/* Carousel Item 1 */}
                <Carousel.Item className="carousel-margin">
                    <img
                        className="d-block w-100"
                        src="https://th.bing.com/th/id/R.615e90cd919f534dca5ff8013a277d45?rik=tEsMGjCQmehKhg&pid=ImgRaw&r=0"
                        alt="First slide"
                    />
                    <Carousel.Caption className='text-position'>
                        {/* <h3 id="text">Shop Computers <br /> & ccessories</h3> */}
                    </Carousel.Caption>
                </Carousel.Item>
                
                {/* Carousel Item 2 */}
                <Carousel.Item className="carousel-margin">
                    <img
                        className="d-block w-100"
                        src="https://th.bing.com/th/id/OIP.tKq41_tLMLCWWj52tQMm6AHaFr?pid=ImgDet&rs=1"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Carousel Item 3 */}
                <Carousel.Item className="carousel-margin">
                    <img
                        className="d-block w-100"
                        src="https://th.bing.com/th/id/OIP.vSG6UXAL4nSvVDQ7_3aeuAHaEC?w=323&h=180&c=7&r=0&o=5&pid=1.7"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            
                {/* Carousel Item 4 */}
                <Carousel.Item className="carousel-margin">
                    <img
                        className="d-block w-100"
                        src="https://www.bing.com/th?id=OIP.CfTr-LwBGZ05NfoENC3Q6wHaFL&w=157&h=185&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Fourth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            
                {/* Carousel Item 5 */}
                <Carousel.Item className="carousel-margin">
                    <img
                        className="d-block w-100"
                        src="https://th.bing.com/th/id/OIP.tJRH3AxEbqQm3T8kkfW-dAHaFj?w=259&h=194&c=7&r=0&o=5&pid=1.7"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3>Fifth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p> */}
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            

    

            {/* Discount Section */}
            <div className='discount section'>
                <div className="discount-container container grid">
                    <img src="https://www.asus.com/event/pcdiy/global/assets/img/rewards/1080x960%20-PBA.jpg" alt="" className="discount-image"/>

                    <div className="discount-data">
                        <h2 className="discount-title">50% Discount <br/> On New Products</h2>
                        <Link to="/home/shop"><a className="button">Go to new Product</a></Link> 
                    </div>
                </div>
            </div>

            <NewArrivals/>

            {/* Steps To Buy Online Section */}
            <div className="steps section container">
                <div className='steps-bg'>
                    <h1 className="section-title">How to order products <br/> from Shopify</h1>
                <div className='steps-container grid'>
                    <div className='steps-card'>
                        <h1 className="steps-card-number">01</h1>
                        <h3 className="steps-card-title">Choose Products</h3>
                        <p className="steps-card-description"> We have several varieties products you can choose from.</p>
                    </div>
                    <div className='steps-card'>
                        <h1 className='steps-card-number'>02</h1>
                        <h3 className="steps-card-title">Place an order</h3>
                        <p className="steps-card-description"> Once your order is set, we move to the next step which is the shipping.</p>
                    </div>
                    <div className="steps-card">
                        <h1 className="steps-card-number">03</h1>
                        <h3 className="steps-card-title">Get order delivered</h3>
                        <p className='steps-card-description'> Our delivery process is easy, you recieve the order direct to your home..</p>
                    </div>
                </div>
            </div>
            </div>
            {/* Newsletter Section */}
            <div className="newsletter section">
                <div className='newsletter-container container'>
                    <h2 className='newsletter-description'>Our newsletter</h2>
                    <p className="newsletter-description">
                        Promotion new prodcuts and sales. Directly to your inbox
                    </p>
                    <form className="newsletter-form">
                        <input type="email"  placeholder='Enter your email' className="newsletter-input"></input>
                        <button className="button" type="submit">Subscribe</button>
                    </form>
                </div>
            </div>        

            {/* Scroll Up Button
            <div>
                <a className="scrollup" id="scroll-up">
                    <i className="bx bx-up-arrow-alt scrollup-icon"></i> 
                </a>
            </div> */}
            <Footer/>
        </div>
    )
}

export default Home