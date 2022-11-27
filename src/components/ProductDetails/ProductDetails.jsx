import React, { useState } from 'react';
import './ProductDetails.css';
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cart";

export default function ProductDetails() {

    const [imageUrl,setImageUrl] = useState('./images/image-product-1.jpg');
    const [quantity,setQuantity] = useState(0);
    const [showSlider,setShowSlider] = useState(false);
    const dispatch = useDispatch();

    function changeImage(number){
        const url = images.filter((item)=>item.id === number);
        setImageUrl(url[0].imageUrl);
    }

    function nextImage(){
        const url = images.filter((item)=>item.imageUrl === imageUrl);
        const currrntIndex = images.findIndex(x => x.id === url[0].id);
        const arrLengthg = images.length -1;
        setImageUrl(arrLengthg === currrntIndex ? images[0]?.imageUrl : images[currrntIndex+1]?.imageUrl);
    }
    function prevImage(){
        const url = images.filter((item)=>item.imageUrl === imageUrl);
        const currrntIndex = images.findIndex(x => x.id === url[0].id);
        const arrLengthg = images.length -1;
        setImageUrl(currrntIndex === 0 ? images[arrLengthg]?.imageUrl : images[currrntIndex-1]?.imageUrl);
    }
    const images =[
        {
            id:1,
            imageUrl:'./images/image-product-1.jpg',
            thumbnailImage:'./images/image-product-1-thumbnail.jpg',
        },
        {
            id:2,
            imageUrl:'./images/image-product-2.jpg',
            thumbnailImage:'./images/image-product-2-thumbnail.jpg',
        },
        {
            id:3,
            imageUrl:'./images/image-product-3.jpg',
            thumbnailImage:'./images/image-product-3-thumbnail.jpg',
        },
        {
            id:4,
            imageUrl:'./images/image-product-4.jpg',
            thumbnailImage:'./images/image-product-4-thumbnail.jpg',
        },
    ]

  return (
    <>
    <div className='product-details'>
        <div className='container m-auto lg:px-48 md:px-20 px-0'>
            <div className='lg:columns-2 columns-1'>
                <div className='image-mobile'>
                    <img src={imageUrl} alt='main-img' />
                    <div className='nav-buttons'>
                        <div className='prev' onClick={()=>prevImage()}>
                            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                        </div>
                        <div className='next' onClick={() => nextImage()}>
                            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                        </div>
                    </div>
                </div>
                <div className='image px-10'>
                    <img src={imageUrl} alt='main-img' onClick={()=>setShowSlider(!showSlider)} />
                    <div className='thumbnails'>
                        {images.map((item,index)=>(
                            <div className={`thumbnail ${item.imageUrl===imageUrl ? 'active' : ''}`} key={index}>
                                <img src={item.thumbnailImage} alt='thumbnail-img' onClick={()=>changeImage(item.id)} />
                            </div>
                        ))}                  
                    </div>
                </div>
                <div className='content md:px-10 px-6'>
                    <p className='product-brand'>  Sneaker Company</p>
                    <h1 className="product-name">
                        Fall Limited Edition Sneakers
                    </h1>
                    <p className='product-desc'>
                        These low-profile sneakers are your perfect casual wear companion. Featuring a 
                        durable rubber outer sole, they’ll withstand everything the weather can offer.
                    </p>
                    <div className='product-price'>
                        <div className='flex flex-row items-center'>
                            <h6>$125.00</h6>
                            <span>50%</span>
                        </div>
                        <p>$250.00</p>
                    </div>
                    <div className='flex md:flex-row flex-col items-center mt-7'>
                        <div className='product-quantity'>
                            <button onClick={()=>{quantity > 0 && setQuantity(quantity-1)}}><img src='./images/icon-minus.svg' alt='icon-minus'/></button>
                            <p>{quantity}</p>
                            <button onClick={()=>setQuantity(quantity+1)}><img src='./images/icon-plus.svg' alt='icon-plus'/></button>
                        </div>
                        <button className='add-to-cart' onClick={()=>
                            dispatch(
                                addToCart({
                                name: 'Fall Limited Edition Sneakers',
                                price: 125.00,
                                image: './images/image-product-1.jpg',
                                quntity: quantity,
                                }))}>
                            <img src='./images/icon-cart-button.svg' alt='icon-cart' />
                            Add to cart
                        </button>
                    </div>
                </div>
            </div>
            
        </div> 
    </div>
    <div className={`slider-modal ${showSlider && 'active'}`}>
            <div className='image-slider'>
                <div className='main-image'>
                    <div className='close-icon' onClick={()=>setShowSlider(!showSlider)}>
                        <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                            <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#FFFFFF" fillRule="evenodd"/>
                        </svg>
                    </div>
                    <img src={imageUrl} alt='main-img' />
                    <div className='nav-buttons'>
                        <div className='prev' onClick={()=>prevImage()}>
                            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                        </div>
                        <div className='next' onClick={() => nextImage()}>
                            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
                        </div>
                    </div>
                </div>
                <div className='thumbnails'>
                        {images.map((item,index)=>(
                            <div className={`thumbnail ${item.imageUrl===imageUrl ? 'active' : ''}`} key={index}>
                                <img src={item.thumbnailImage} alt='thumbnail-img' onClick={()=>changeImage(item.id)} />
                            </div>
                        ))}               
                </div>
            </div>
    </div>
     </>
  );
}
