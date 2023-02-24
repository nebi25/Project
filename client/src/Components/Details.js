import React, {useEffect, useState} from 'react';
import Footer from './Footer';
import NewArrivals from './NewArrivals';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';


const Details = () => {
    const [productData, setProductData] = useState({});
    const {id} = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        axios.get(`http://localhost:8000/api/OneProduct/${id}`,{withCredentials: true})
        .then((res) => {
            setProductData(res.data)
            console.log(res.data.createdAt)
        })
        .catch((error) => {
            console.log(error)
        })
    // eslint-disable-next-line
    },[])

    const onSubmitHandler = (e) => {
        e.preventDefault()

        axios.post(`http://localhost:8000/api/CreateCartProduct`,{...productData},{withCredentials: true})
        .then((res) => {
            console.log(productData._id)
            navigate("/home")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div>
            <form className="details section container" onSubmit={onSubmitHandler}>
                <h2 className="breadcrumb-title">Detail's Page</h2>
                <h3 className="breadcrumb-subtitle">Home {">"} <span>Details</span></h3>

                <div className="details-container grid">
                    <div className="product-images grid">
                        <div className="product-img">
                            <div className="details-img-tag">{productData.status}</div>
                            <img src={productData.image} alt=""/>
                        </div>
                        <div className="product-img">
                            <img src={productData.image} alt=""/>
                        </div>
                        <div className="product-img">
                            <img src={productData.image} alt=""/>
                        </div>
                        <div className="product-img">
                            <img src={productData.image} alt=""/>
                        </div>
                        <div className="product-img-hover">
                            <img src={productData.image} alt=""/>
                        </div>
                    </div>
                    <div className="product-info">
                        <p className="details-subtitle">Shop {">"} {productData.category}</p>
                        <h3 className="details-title">{productData.title}</h3>

                        <div className="rating">
                            <div className="stars">
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                                <i className="bx bxs-star"></i>
                            </div>
                            <span className="reviews-count">40 + Reviews</span>
                        </div>
                        <div className="details-prices">
                            <span className={
                                (productData.discount === undefined)
                                ? "hide"
                                : "details-price"
                            }>${productData.discount}</span>
                            <span className={
                                (productData.discount === undefined)
                                ? "details-price"
                                : "details-discount"
                            }>${productData.price}</span>
                            <span className={
                                (productData.discount === undefined)
                                ? "hide"
                                : "discount-percentage"
                            }>{
                                Math.floor(((productData.discount / productData.price) * 100) - 100)
                            }%</span>
                        </div>
                        <div className="details-description">
                            <h3 className="description-title">{productData.description}</h3>
                        </div>
                        <div className="cart-amount">
                            <div className="cart-amount-content">
                                <span className="cart-amount-box">
                                    <i className="bx bx-minus"></i>
                                </span>
                                <span className="cart-amount-number">{productData.stock}</span>
                                <span className="cart-amount-box">
                                    <i className="bx bx-plus"></i>
                                </span>
                            </div>
                            <i className="bx bx-heart cart-amount-heart"></i>
                        </div>
                        <button type="submit" className="button">Add To Cart</button>
                    </div>
                </div>
            </form> 
            <NewArrivals/>
            <Footer/>
        </div>
    )
}

export default Details