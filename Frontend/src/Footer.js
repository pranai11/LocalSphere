import React from 'react'
import instagram from './images/instagram.png'
import twitter from './images/twitter.png'
import facebook from './images/facebook.png'
import { Link } from 'react-router-dom'


const Footer = () => {

  // const divStyle = {
   
  //   backgroundImage: 'url(./images/footerbg.png)',
  //style={divStyle}
  // };


  return (
    <>
    <div className='foot'>
      <div className='d-flex ms-5 pt-3'>
        <div className='d-block me-3'>
        <h2>Local Sphere</h2>
        <img src={twitter} className='public'/>
        <img src={facebook} className='public'/>
        <img src={instagram} className='public'/>

        </div>
        <div className='d-flex'>
        <div className='col-3 ms-5'>
          <h4>Local Sphere</h4>
    <p>Contact Us</p>
    <p>About Us</p>
    <p>Reviews</p>
    <p>Careers</p>
    <p>Terms & Conditions</p>
    <p>Privacy Policy</p>
        </div>
        <div className='col-3 ms-3'>
          <h4>Services</h4>
          <p>Digital Marketing Services</p>
<p>SEO Services</p>
<p>Local SEO</p>
<p>National SEO</p>
<p>Listings Management</p>
<p>All-in-One Business Management Software</p>
<p>Display Ads</p>
<p>PPC Consulting</p>
<p>Website Creatio</p>
        </div>
        <div className='col-3 ms-5'>
          <h4>Resources</h4>
          <p>Blog</p>
<p>SEO FAQ</p>
<p>Ecommerce SEO Guide</p>
<p>Construction SEO Guide</p>
<p>HVAC SEO Guide</p>
        </div>
        <div className='col-3 ms-3'>
          <h4>Already a member</h4>
          <div className='elogm'>
          <Link to="/Login"><button className='elog'>Login</button></Link>
          </div>
          <br/>
          <h4>Choose Language</h4>
          <select className='elog'>
            <option className='elogpop'>English</option>
            <option className='elogpop'>Telugu</option>
            <option className='elogpop'>Hindi</option>
          </select>
        </div>
        </div>
      </div>
      <hr/>
      <div className='copyr'>
        <p>Copyrights 2024 Local Sphere Inc.</p>
        <p className='ms-5'>All rights reserved.</p>
      </div>
    </div>
    </>
  )
}

export default Footer