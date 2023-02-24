import { useState } from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';

import Home from './Components/Home';
import ShowNavbar from './Components/ShowNavbar';
import Shop from './Components/Shop';
import Contact from './Components/Contact';
import Details from './Components/Details';
import AboutUs from './Components/AboutUs';


function App() {
  const [store,setStore] = useState(false)
  const [login,setLogin] = useState(false)
  const [cart,setCart] = useState(false)
  const [newProduct,setNewProduct] = useState(false)

  return (
    <div className="App">
      {/* <CheckDate/> */}
      <BrowserRouter>
        <ShowNavbar cart={cart} setCart={setCart} login={login} setLogin={setLogin} store={store} setStore={setStore}/>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/home/shop" element={<Shop/>}/>
          <Route path="/contactUs" element={<Contact/>}/>
          <Route path="/details/:id" element={<Details newProduct={newProduct} setNewProduct={setNewProduct}/>}/>
          <Route path="/aboutUs" element={<AboutUs/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
