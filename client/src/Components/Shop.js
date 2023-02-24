import React, {useEffect,useState} from 'react';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filterType,setFilterType] = useState("Empty");


  const onChangeHandler = (e) =>{
    setFilterType(e.target.value)
  }

  useEffect(() => {
    axios.get("http://localhost:8000/api/AllProducts")
    .then((results) => {
      setProducts(results.data)
    })
    .catch((error) =>{
      console.log(error)
    })
  },[])

  return (
    <div className="shop section container">
      <h2 className="breadcrumb-title">Shop Page</h2>
      <h3 className="breadcrumb-subtitle">Home {">"} <span>Shop</span></h3>

      <div className="shop-container grid">
        <div className="sidebar">
          <h3 className="filter-title">Select Filters</h3>
          <div className="filter-content">
            <h3 className="filter-subtitle">Condition</h3>
            
            <fieldset onChange={onChangeHandler}>

              <div className="filter">
                <input type="radio" name="filters" value="Electronics" id=""/>
                <p>Electronics</p>
              </div>
              <div className="filter">
                <input type="radio" name="filters" value="Cosmetics & Body Care" id=""/>
                <p>Cosmetics & Body Care</p>
              </div>
              <div className="filter">
                <input type="radio" name="filters" value="Furniture & Decor" id=""/>
                <p>Furniture & Decor</p>
              </div>
              <div className="filter">
                <input type="radio" name="filters" value="Office Equipment" id=""/>
                <p>Office Equipment</p>
              </div>
              <div className="filter">
                <input type="radio" name="filters" value="Pet Care" id=""/>
                <p>Pet Care</p>
              </div>
            </fieldset>
          </div>

        </div>
          <div className="shop-items grid">
            {// eslint-disable-next-line
              products.map((product,idx) => {
                if(filterType === "Empty" || product.category === filterType){
                  return(
                    <div className="shop-content" key={idx}>
                      <div className={
                        (product.status === "outDated")
                        ? "hide"
                        : "shop-tag"
                      }>{product.status}</div>
                      <img src={product.image} alt={product.title} className="shop-image"></img>
                      <h3 className="shop-title">{product.title}</h3>
                      <span className="shop-subtitle">{product.category}</span>
                      <div className="shop-prices">
                      <span className={
                        (product.discount === undefined)
                        ? "hide"
                        : ""
                      } id="new-price">${product.discount}</span>
                      <span className={
                        (product.discount === undefined)
                        ? "new-price"
                        : "new-discount"
                      }>${product.price}</span>
                      </div>
                      <Link to={`/details/${product._id}`}><button className="button shop-button">
                        <i className="bx bx-cart-alt shop-icon"></i>
                      </button></Link>
                    </div>
                  )
                }
              }) 
            }
            {/* {
              products.filter(product => {
                if(product.category == filterType){
                  return (
                    <div className="shop-content">
                    <div className="shop-tag">New</div>
                    <img src={products.image} alt={products.title} className="shop-image"></img>
                    <h3 className="shop-title">{products.title}</h3>
                    <span className="shop-subtitle">{products.category}</span>
                    <div className="shop-prices">
                      <span className="shop-price">{products.price}</span>
                    </div>
                    <Link to={`/details/${products._id}`}><button className="button shop-button">
                      <i className="bx bx-cart-alt shop-icon"></i>
                    </button></Link>
                  </div>
                  )
                }
              })
            } */}
          </div>
      </div>
      <Footer/>
      {/* Scroll Up Button */}
      <div>
        <button href="#" className="scrollup" id="scroll-up">
          <i className="bx bx-up-arrow-alt scrollup-icon"></i> 
        </button>
      </div>
    </div>
  )
}

export default Shop