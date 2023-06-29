import React, { useState } from 'react'
import Items from './Items'
import './Style.css'
import Cart from './Cart';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';

import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
function Navbar() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);
  const [warning, setWarning] = useState(false);

  const handleclick = (item) => {

    // console.log(cart.length);
    let isPresent = false;
    cart.forEach((product) => {
      if (item.id === product.id)
        isPresent = true;
    })
    if (isPresent) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 2000);
      return;
    }
    setCart([...cart, item]);
  }

  const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}
  return (
    <>
      <div className="MainNav">
        <div className="logo">
          <StorefrontOutlinedIcon />
        </div>
        {
          warning && <div className='warning'>Item is already added to your cart</div>
        }
        <div className="cart">
          <div className="cartRoot" onClick={()=>setShow(!show)}>
            <div className="number">{cart.length}</div>
            <AddShoppingCartOutlinedIcon className='icon'/>
          </div>
        
        </div>
      </div>
      {show == false ? <Cart cart={cart} setCart={setCart} handleChange={handleChange}/> : <Items handleclick={handleclick} /> }
     
    </>
  )
}

export default Navbar