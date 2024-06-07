import React from 'react'
import Navbar from './AddToCart/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Addtocart from './Pagination/Pagination';
import { store } from './Redux/Store'
import { Provider } from 'react-redux'

function App() {
  return (
     <div>
     <Provider store={store}>
 <Navbar/>
 
 </Provider>,
{/* <Addtocart/> */}
    </div>
 

  )
}

export default App