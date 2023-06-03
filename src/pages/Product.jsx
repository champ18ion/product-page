import React from 'react'
import Footer from '../Components/Footer'
import Info from '../Components/Info'
import Hero from '../Components/Hero'

export default function product() {
  return (
    <div style={{background:'#fff',height:'100vh',}} className='overflow-hidden md:overflow-y-auto'>
        <Hero/>
        <Footer Children={<Info/>}/>
    </div>
  )
}
