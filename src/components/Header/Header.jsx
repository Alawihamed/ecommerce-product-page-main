import React, { useState } from 'react';
import Cart from '../Cart/Cart';
import './Header.css';
import { useSelector } from "react-redux";

export default function Header() {
    const [cartShow,setCartShow] = useState(false);
    const [toggleMobile,setToggleMobile] = useState(false);
    const { cartItems } = useSelector((state) => state.cart);
    return (
        <div className='header'>
            <div className='container m-auto lg:px-48 md:px-20 px-5'>
                <div className='flex flex-row items-center justify-between py-6'>
                    <div className='nav'>
                    <div className='menu-icon'>
                        <img src='./images/icon-menu.svg' alt='menu-icon' onClick={()=>setToggleMobile(!toggleMobile)}/>
                    </div>
                    <div className='logo'>
                        <img src='./images/logo.svg' alt='logo' />
                    </div>
                    <div className={`mobile-nav-wrapper ${toggleMobile && 'show'}`}>
                        <div className={`mobile-nav ${toggleMobile && 'show'}`}>
                            <div className='close-icon'>
                                <img src='./images/icon-close.svg' alt='close-icon' onClick={()=>setToggleMobile(!toggleMobile)}/>
                            </div>
                            <ul>
                                <li>Collections</li>
                                <li>Men</li>
                                <li className='active'>Women</li>
                                <li>About</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                        <ul>
                            <li>Collections</li>
                            <li>Men</li>
                            <li className='active'>Women</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='flex flex-row items-center'>
                    <div className='cart-wrapper'>
                        <div className='cart-icon'>
                            {cartItems <= 0 ? '' : <span>{cartItems.map((item)=>item.quntity)}</span>}
                            <img src='./images/icon-cart.svg' alt='cart-icon' onClick={()=>setCartShow(!cartShow)} />
                        </div>
                        {cartShow && (<Cart />)}
                    </div>
                    <div className='profile-icon'>
                        <img src='./images/image-avatar.png' alt='profile-icon' />
                    </div>
                    </div>
                </div>
                <div className='line'></div>
            </div>
        </div>
    )
}