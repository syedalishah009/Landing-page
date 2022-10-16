import React from 'react'
import './home.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import MidSec from '../../components/midSection/MidSec'

const Home = () => {
  return (
   
    <div className='backimg'>

    <Navbar/>
    <Header/>
    <MidSec/>
    
    </div>
  )
}

export default Home