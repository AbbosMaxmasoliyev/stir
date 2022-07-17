import React from 'react'


// Logo 
import Logo from "../images/logo.png"
const Header = () => {
  return (
    <div className='header'>
        <div className="nav">
            <img src={Logo} alt="" />
            <a href="./">Join our team</a>
        </div>
        <div className="showcase">
            <h1>Where creators run their business.</h1>
            <p>Meet Stir. The financial studio for collaborating, splitting revenue, money management and metrics—all in one place</p>
            <div className="join">
                <input type="text"  placeholder='Enter your email'/>
                <button>Get started</button>
            </div>
        </div>
    </div>
  )
}

export default Header