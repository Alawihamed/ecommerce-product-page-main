import React from 'react';
import './Cart.css';
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/cart";

export default function Cart() {
    const { cartItems, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    return (
        <div className='cart'>
            <h6>Cart</h6>
            <div className='line'></div>
            <div className='body'>
                {cartItems.length === 0 ?
                    (
                        <p className='empty'>Your cart is empty</p>
                    )
                    :
                    (
                        <>
                            {cartItems.map((item, index) => (
                                <div key={index} className='flex flex-row items-center'>
                                    <div className='image'>
                                        <img src='./images/image-product-1.jpg' alt='product-img' />
                                    </div>
                                    <div className='content'>
                                        <h6>{item.name}</h6>
                                        <div className='price'>
                                            <p>${item.price} x</p>
                                            <p>{item.quntity}</p>
                                            <p className='total'>${total}</p>
                                        </div>
                                    </div>
                                    <div className='delete-icon' onClick={()=> dispatch(removeFromCart(item))}>
                                        <img src='./images/icon-delete.svg' alt='delete-icon' />
                                    </div>
                                </div>
                            ))}
                            <button>Checkout</button>
                        </>
                    )}


            </div>
        </div>
    );
}
