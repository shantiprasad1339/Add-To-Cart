import React, { useState } from 'react'
import Items from './Items'
import './Style.css'
import Cart from './Cart';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import { useSelector, useDispatch } from 'react-redux';

import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
function Navbar() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const cartItems = useSelector((state) => state.cart.items);
  
  return (
    <>
      <div className="MainNav">
        <div className="logo" onClick={()=>setShow(true)}>
          <StorefrontOutlinedIcon />
        </div>
        {
          warning && <div className='warning'>Item is already added to your cart</div>
        }
        <div className="cart">
          <div className="cartRoot" onClick={()=>setShow(!show)}>
            <div className="number">{cartItems.length}</div>
            <AddShoppingCartOutlinedIcon className='icon'/>
          </div>
        
        </div>
      </div>
      {show == false ? <Cart  /> : <Items  /> }
     
    </>
  )
}

export default Navbar