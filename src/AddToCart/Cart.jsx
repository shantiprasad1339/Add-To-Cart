import React,{useState,useEffect} from 'react'
import { NavLink } from 'react-router-dom';

function Cart(props) {
    const [price, setPrice] = useState(0);

    const { cart ,setCart,handleChange} = props;
    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        //  handlePrice();
    }
    
    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item,index)=>(
            
            
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }
    useEffect(()=>{
        handlePrice();
    })

    return (
        <>

            {cart && cart.map((item) => {
                // console.log(item);
                return (
                    <>
                    <div className="cart-item" key={item.id}>
                        <div className="cartimg">

                            <img src={item.img} />
                        </div>
                        <div className="cartdetails">
                            <p className="carttitle">Book: {item.title}</p>
                            <div className="cartinfo">
                            <button onClick={()=>handleChange(item, +1)} className='btn2'> + </button>
                            <p className="cartsprice">Quantity:{item.amount}</p>
                            <button onClick={()=>handleChange(item, -1)} className='btn2'> - </button>
                            </div>
                            <button onClick={()=>handleRemove(item.id)} className='btn3'>Remove</button>
                        </div>
                       
                    </div>
                   
                    </>
                )
            })}
 <div className='total'>
            <span>Total Price of your Cart</span>
            <span>Rs - {price}</span>
        </div>
        </>
    )
}

export default Cart