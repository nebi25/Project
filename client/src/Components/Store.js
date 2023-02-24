import React, {useState} from 'react'
import axios from 'axios'

const Store = (props) => {
    const {store,setStore} = props;
    const [productInfo,setProductInfo] = useState({
        title: "",
        category: "",
        description: "",
        image: "",
        stock: "",
        price: ""
    })

    const onChangeHandler = (e) => {
        setProductInfo({
            ...productInfo,[e.target.name]:e.target.value
        })
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/CreateProduct',{...productInfo},{withCredentials: true})
        .then((results) => {
            console.log(results)
            setStore(false)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div>
            {/* Store */}
            <div className="store" id={
                (!store)
                ? "close-store"
                : ""
            }>
                <i className="bx bx-x login-close" id="login-close" onClick={() => setStore(false)}></i>

                <h2 className="store-title-center">My Store</h2>

                <form className="store-form grid" onSubmit={onSubmitHandler}>
                    <div className="store-content">
                        <label className="store-label">Title</label>
                        <input type="text" className="store-input" name="title" onChange={onChangeHandler}/>
                    </div>

                    <div className="store-content" name="category">
                        <label className="store-label">Category</label>
                        <select className='store-input' name="category" onChange={onChangeHandler}>
                            <option>Electronics</option>
                            <option>Cosmetics & Body Care</option>
                            <option>Furniture & Decor</option>
                            <option>Office Equipment</option>
                            <option>Pet Care</option>
                        </select>
                    </div>

                    <div className="store-content">
                        <label className="store-label">Description:</label>
                        <input type="text" className="store-input" name="description" onChange={onChangeHandler}/>
                    </div>

                    <div className="store-content">
                        <label className="store-label">Image of product:</label>
                        <input type="url" className="store-input" name="image" onChange={onChangeHandler}/>
                    </div>

                    <div className="store-content">
                        <label className="store-label">Stock:</label>
                        <input type="number" className="store-input" name="stock" onChange={onChangeHandler}/>
                    </div>

                    <div className="store-content">
                        <label className="store-label">Price:</label>
                        <input type="text" className="store-input" name="price" min="00.01" step="0.01" onChange={onChangeHandler}/>
                    </div>

                    <button type="submit" className="button">Add!</button>
                </form>
            </div> 
            
        </div>
    )
}

export default Store