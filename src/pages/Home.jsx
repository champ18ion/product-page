import React from 'react'
import Welcome from '../Components/Welcome'
import Footer from '../Components/Footer'
import Nav from '../Components/nav'

export default function Home() {
  return (
    <div style={{background:'#fff',height:'100vh',}} className='overflow-hidden md:overflow-y-auto'>
      <Welcome/>
      <Footer Children={<Nav/>}/>
    </div>
  )
}
