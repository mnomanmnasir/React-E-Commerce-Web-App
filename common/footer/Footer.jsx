import React from "react"
import "./style.css"
import logo from '../assests/logo.png'

const Footer = () => {
  return (
    <>
      <footer>
        <div className='container grid2'>
          <div className='box'>
            <div className="logo width">
              <img src={logo} alt='' />
            </div>
            {/* <h1>
              Ecommerce
            </h1> */}
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='icon d_flex'>
              <div className='img d_flex'>
                <i class='fa fa-google'></i>
                <span>Google Play</span>
              </div>
              <div className='img d_flex'>
                <i class='fa fa-apple'></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className='box'>
            <h2>About Us</h2>
            <ul>
              <li>Careers</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className='box'>
            <h2>Customer Care</h2>
            <ul>
              <li>Help Center </li>
              <li>How to Buy </li>
              <li>Track Your Order </li>
              <li>Corporate & Bulk Purchasing </li>
              <li>Returns & Refunds </li>
            </ul>
          </div>
          <div className='box'>
            <h2>Contact Us</h2>
            <ul>
              <li>4 Minar Chowrangi, near Bahadurabad at karachi</li>
              <li>Email: abc@gmail.com</li>
              <li>Phone: +92331-XXXXXX</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
