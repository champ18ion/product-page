import React from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Product from './pages/Product'
import Home from './pages/Home'
import Payment from './pages/Payment'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/pay" element={<Payment/>}/>
    </Routes>
    </BrowserRouter>
  )
}
