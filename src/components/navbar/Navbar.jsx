import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {
  const [show, setShow] = useState(false)
  return (
    <nav>
        <img src="images/logo.png" alt="" id='img1'/>
        <div className='navCOnt' id={show ? 'hidde' : ''}>
        <div class="left">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Litepaper</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Apply for IDO</a></li>
                </ul>
            </div>
            <div class="right">
                <button>Connect wallet</button>
            </div>

        </div>
    
        <img src="images/Menu.png" alt="" id='img2' onClick={()=> setShow(!show)}/>
    </nav>

  )
}

export default Navbar