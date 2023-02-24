import React, {useEffect,useState} from 'react'
import axios from 'axios'

const EditProduct = (props) => {
    const {editButton,setEditButton} = props;
    const {productID} = props;
    const [oldProductInformation,setOldProductInformation] = useState({
        title: "",
        category: "",
        description: "",
        image: "",
        stock: "",
        price: "",
        discount: ""
    })
    function onChangeHandler(e){
        setOldProductInformation({
            ...oldProductInformation,[e.target.name]:e.target.value
        })
    }

    function prodcutStatus(){
        if(oldProductInformation.discount === undefined){
            oldProductInformation.status = "outDated"
        }else if(oldProductInformation.price > oldProductInformation.discount){
            oldProductInformation.status = "sale"
        }
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/OneProduct/${productID}`,{withCredentials: true})
        .then((results) => {
            setOldProductInformation(results.data)
            console.log(results.data)
            setEditButton(false)
            console.log(results.data.discount)
        })
        .catch((error) => {
            console.log(error)
        })
    // eslint-disable-next-line
    },[productID])

    const onSubmitHandler = (e) =>{
        e.preventDefault();

        axios.put(`http://localhost:8000/api/EditProduct/${productID}`,{...oldProductInformation},{withCredentials: true})
        .then((results) => {
            console.log(results)
            setEditButton(false)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    return (
        <div>
            {/* Store */}
            <div className="store" id={
                (!editButton)
                ? "close-edit"
                : ""
            }>
                <i className="bx bx-x login-close" id="login-close" onClick={() => setEditButton(false)}></i>

                <h2 className="store-title-center">Edit Product Information</h2>

                <form className="store-form grid" onSubmit={onSubmitHandler}>
                    <div className="store-content">
                        <label className="store-label">Title</label>
                        <input type='text' className='store-input' name='title' value={oldProductInformation.title} onChange={onChangeHandler}/>
                    </div>

                    <div className="store-content">
                        <label className="store-label">Category</label>
                        <select className='store-input' name="category" value={oldProductInformation.category} onChange={onChangeHandler} >
                            <option>Electronics</option>
                            <option>Smartphones & Tablets</option>
                            <option>Cosmetics & Body Care</option>
                            <option>Furniture & Decor</option>
                            <option>Office Equipment</option>
                            <option>Pet Care</option>
                        </select>
                    </div>

                    <div className="store-content">
                        <label className="store-label">Description:</label>
                        <input type="text" className="store-input" name="description" value={oldProductInformation.description} onChange={onChangeHandler}/>
                    </div>

                    <div className="store-content">
                        <label className="store-label">Image:</label>
                        <input type="url" className="store-input" name="image" value={oldProductInformation.image} onChange={onChangeHandler}/>
                    </div>

                    <div className="store-content">
                        <label className="store-label">Stock:</label>
                        <input type="number" className="store-input" name="stock" value={oldProductInformation.stock} onChange={onChangeHandler}/>
                    </div>

                    <div className="store-content">
                        <label className="store-label">Actual Price:</label>
                        <input type="number" className="store-input" name="price" value={oldProductInformation.price} min="00.01" step="0.01" onChange={onChangeHandler}/>
                    </div>

                    <div className="store-content">
                        <label className="store-label">New Price:</label>
                        <input type="number" className="store-input" name="discount" value={oldProductInformation.discount} min="00.01" step="0.01" onChange={onChangeHandler}/>
                    </div>
                    <button type="submit" className="button" onClick={prodcutStatus}>Add</button>
                </form>
            </div> 
            
        </div>
    )
}

export default EditProduct