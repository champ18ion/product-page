import React from 'react'
import home from '../assets/home.png'
import notification from '../assets/notification.png'
import profile from '../assets/profile.png'
import cart from '../assets/cart.png'

export default function nav() {

  return (
    <div className='flex flex-row justify-around  align-middle p-4 pb-6'>
        <img src={home} alt="" />
        <img src={cart} alt="" className='h-5 w-4 mt-1.5'/>
        <img src={notification} alt="" className='h-5 w-4 mt-1.5' />
        <img src={profile} alt="" className='h-5 w-4 mt-1.5'/>
    </div>
  )
}
