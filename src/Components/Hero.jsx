import React from 'react'
import model from '../assets/model.png'
import arrow from '../assets/arrow.png'
import carts from '../assets/carts.png'
import love from '../assets/love.png'
import dots from '../assets/dots.png'

export default function Hero() {
  return (
    <div style={{backgroundImage: `url(${model})`}} className='w-full h-[60%] bg-cover relative bg-center'>
        <img src={arrow} alt="" className='absolute top-10 left-5 '/>
        <img src={carts} alt="" className='absolute top-10 right-5'/>
        <img src={dots} alt="" className='absolute top-[82%] left-[45%]'/>
        <img src={love} alt="" className='absolute top-[78%] right-[5%]'/>
    </div>
  )
}
