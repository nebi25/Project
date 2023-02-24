import React, {useEffect,useState} from 'react'
import {Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import EditProduct from './EditProduct'

const NewArrivals = () => {
    const [editButton,setEditButton] = useState(false);
    const [productID,setProductID] = useState("");
    const [newArrivals,setNewArrivals] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8000/api/AllProducts')
        .then((results) => {
            console.log(results.data)
            setNewArrivals(results.data)
        })
        .catch((errors) => {
            console.log(errors)
        })
    },[])


    return (
        <div className="container">
            {/* New Arrivals */}
            <div className="new section">
                <h2 className="section-title">New Arrivals!</h2>
                <Swiper 
                    spaceBetween={20}
                    slidesPerView={3}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    
                    <div className="new-container container">
                        <div className="swiper new-swiper">
                            <div className="swipper-wrapper">
                                {// eslint-disable-next-line
                                    newArrivals.map((products,idx) => {
                                        if(products.status === "new" || products.status === "sale"){
                                            return (
                                                <SwiperSlide className="new-content swiper-slide" key={idx}>
                                                    <div className="new-tag">{products.status}</div>
                                                    <img src={products.image} alt="" className="new-img"/>
                                                    <h3 className="new-title">{products.title}</h3>
                                                    <span className="new-subtitle">{products.category}</span>
    
                                                    <div className="new-prices">
                                                        <span className={
                                                            (products.discount === undefined)
                                                            ? "hide"
                                                            : ""
                                                        } id="new-price">${products.discount}</span>
                                                        <span className={
                                                            (products.discount === undefined)
                                                            ? "new-price"
                                                            : "new-discount"
                                                        }>${products.price}</span>
                                                    </div>
                                                    <button className="edit-button new-edit-button" onClick={() => {
                                                            setProductID(products._id)
                                                            setEditButton(true)
                                                        }}>
                                                        <i className="bx bx-edit-alt new-icon" ></i>
                                                    </button>
                                                    <Link to={`/details/${products._id}`}><button className="button new-button">
                                                        <i className="bx bx-cart-alt new-icon"></i>
                                                    </button></Link>
                                                </SwiperSlide>
                                            )
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </Swiper>
            </div>
            <EditProduct editButton={editButton} setEditButton={setEditButton} productID={productID} />
        </div>
    )
}

export default NewArrivals