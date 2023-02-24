import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Cart = (props) => {
    const {cart,setCart} = props;
    const [cartProducts,setCartProducts] = useState([])
    
    useEffect(() => {
        axios.get("http://localhost:8000/api/CartProducts",{withCredentials: true})
        .then((res) => {
            setCartProducts(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
    },[cart])
    
    function deleteButton(id){
        axios.delete(`http://localhost:8000/api/DeleteCartProduct/${id}`,{withCredentials: true})
        .then((res) => {
            console.log(res)
            const newCartList = cartProducts.filter((cart,index) => cart._id !== id)
            setCartProducts(newCartList)
        })
        .catch((error) => console.log(error))
    }
    function deleteAll(){
        axios.delete("http://localhost:8000/api/DeleteCartProduct",{withCredentials: true})
        .then((res) => {
            console.log(res)
            setCartProducts(false)
            // const newCartList = cartProducts.filter((cart,index) => cart._id !== id)
            // setCartProducts(newCartList)
        })
        .catch((error) => console.log(error))
    }
    
    return (
        <div  >
            {/* Cart */}
            <div className="cart" id={
                (!cart)
                ? "close-cart"
                : ""
            }>
                <i className="bx bx-x cart-close" id="cart-close" onClick={() => setCart(false)}></i>
                
                <h2 className="cart-title-center">My Cart</h2>
                {
                    cartProducts.map((cart,idx) => {
                        return (
                            <div className="cart-container" key={idx}>
                                <div className="cart-card">
                                    <div className="cart-box">
                                        <img src={`${cart.image}`} className="cart-img" alt=""></img>
                                    </div>
                                    <div className="cart-details">
                                        <h3 className="cart-title">{cart.title}</h3>
                                        <span className={
                                            (cart.discount === undefined)
                                            ? "cart-price"
                                            : "hide"
                                        }>${cart.price}</span>
                                        <span className={
                                            (cart.discount)
                                            ? "cart-price"
                                            : "hide"
                                        }>${cart.discount}</span>
                                        
                                        <div className="cart-amount">
                                            <div className="cart-amount-content">
                                                <span className="cart-amount-box">
                                                    <i className="bx bx-minus"></i>
                                                </span>
                                                <span className="cart-amount-number">{cart.stock}</span>
                                                <span className="cart-amount-box">
                                                    <i className="bx bx-plus"></i>
                                                </span>
                                            </div>
                                            <i className="bx bx-trash-alt cart-amount-trash" onClick={() => deleteButton(cart._id)}></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                <div className="cart-prices">
                    <span className="cart-prices-item">{cartProducts.length} item</span>
                    <button type="submit" className="button" onClick={() => deleteAll()}>Buy All</button>
                </div>
            </div>
        </div>
    )
}

export default Cart