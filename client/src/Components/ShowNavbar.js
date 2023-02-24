import React, { useEffect,useState } from 'react';
import {Link} from 'react-router-dom';
import Login from './Login';
import Cart from './Cart';
import Store from './Store';

const ShowNavbar = (props) => {
    const {login,setLogin} = props
    const {cart,setCart} = props
    const {store,setStore} = props;
    const [userData, setUserData] = useState({})

    const [locationY , setLocationY] = useState("")

    function getPosition(data){
        setLocationY(data.target.defaultView.scrollY)
    }
    useEffect(() => {
        window.addEventListener("scroll",getPosition)
    },[])

  return (
    <div className="header" id={
        (locationY >= 20)
        ? "scroll-header"
        : "header"
    } >
        <div className="nav container">
            <div className="nav-logo">
                <i className="bx bxs-shopping-bags nav-logo-icon"></i>Loris
            </div>
            <div className="nav-menu" id="nav-menu">
                <ul className="nav-list">
                    <Link to="/home"><li className="nav-item nav-link active-link">Home</li></Link>

                    <Link to="/home/shop"><li className="nav-item nav-link active-link">Shop</li></Link>

                    <Link to="/contactUs"><li className="nav-item nav-link active-link">Contact</li></Link>
                </ul>

                <div className="nav-close" id="nav-close">
                    <i className="bx bx-x"></i>
                </div>
            </div>
            
            <div className="nav-btns">
                <div className="nav-store" id="nav-store" onClick={() => setStore(true)}>
                    <i className="bx bx-store"></i>
                </div>
                <div className="login-toggle" id="login-button">
                    <i className="bx bx-user" onClick={() => setLogin(true)} id=""></i>
                </div>

                <div className="nav-shop" id="cart-shop">
                    <i className="bx bx-shopping-bag" onClick={() => setCart(true)}></i>
                </div>

                <div className="nav-toggle" id="nav-toggle">
                    <i className="bx bx-grid-alt"></i>
                </div>
            </div>
        </div>
        <Store store={store} setStore={setStore}/>
        <Login login={login} setLogin={setLogin} userData={userData} setUserData={setUserData}/>
        <Cart cart={cart} setCart={setCart}/>
    </div>
    )
}

export default ShowNavbar