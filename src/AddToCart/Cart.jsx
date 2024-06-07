import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity, clearCart } from '../Redux/Slice';

function Cart() {
    const [price, setPrice] = useState(0);
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    const handleRemoveItem = (name) => {
        dispatch(removeItem(name));
    };

    const handleUpdateQuantity = (name, quantityChange) => {
        const existingItem = cartItems.find(item => item.name === name);
        if (existingItem) {
            const newQuantity = existingItem.quantity + quantityChange;
            if (newQuantity > 0) {
                dispatch(updateQuantity({ name, quantity: newQuantity }));
            } else {
                dispatch(removeItem(name));
            }
        }
    };

    useEffect(() => {
        const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setPrice(totalPrice);
    }, [cartItems]);

    return (
        <>
            {cartItems && cartItems.map((item) => (
                <div className="cart-item" key={item.name}>
                    <div className="cartimg">
                        <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cartdetails">
                        <p className="carttitle">Book: {item.name}</p>
                        <p className="carttitle">Price: {item.price * item.quantity}</p>
                        <div className="cartinfo">
                            <button onClick={() => handleUpdateQuantity(item.name, 1)} className='btn2'> + </button>
                            <p className="cartsprice">Quantity: {item.quantity}</p>
                            <button onClick={() => handleUpdateQuantity(item.name, -1)} className='btn2'> - </button>
                        </div>
                        <button onClick={() => handleRemoveItem(item.name)} className='btn3'>Remove</button>
                    </div>
                </div>
            ))}
            <div className='total'>
                <span>Total Price of your Cart</span>
                <span>Rs - {price}</span>
            </div>
        </>
    );
}

export default Cart;
