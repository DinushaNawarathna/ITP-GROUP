import React from 'react'
import './OnlineShop.css'
import Popular from '../Components/popular/popular'
import Banner from '../assets/img_3.jpg'
import Offers from '../Components/Offers/Offers'

const OnlineShop = () => {
  return (
    <div>
        <img className='banner' src={Banner} alt="logo" />
        <Popular/>
        <Offers/>
    </div>
  )
}

export default OnlineShop;