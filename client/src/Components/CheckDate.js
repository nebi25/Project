import React, {useState, useEffect} from 'react'
import axios from 'axios'
const CheckDate = () => {
    const date = new Date()
    const year = date.getFullYear()
    const day = date.getDate()
    const month = date.getMonth()
    const [products, setProducts] = useState("")

    useEffect(() => {
        axios.get("http://localhost:8000/api/AllProducts")
        .then((res) => {
            console.log(`${year}-${month}-${day}`)
            console.log(res.data)
            setProducts(res.data)
        }) 
        .catch((error) => {
            console.log(error)
        })
    },[])

    // for(var i = 0;i < products.length;i++){
        // console.log(products[i])
    // }
  return (
    <div></div>
  )
}

export default CheckDate