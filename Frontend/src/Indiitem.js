import React from 'react'
import rest1 from "./images/rest1.png"
import rest3 from "./images/rest3.jpg"
import rest4 from "./images/rest4.jpg"
import location from "./images/location.png"
import phone from "./images/phone.png"
import globe from "./images/globe2.png"
import { Rating } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
const Indiitem = () => {
  return (
    <>
    <Header></Header>
    <div className='indimainbody'>
        <div className='d-block indiitem1'>
    <div className='color-black d-flex'>
    <img alt="indiitemimg" className="eeitemnadi" src={rest1}></img>
    <div className='d-block indiitemmatter'>
        <h3>Sanford & son barbecue LLC</h3>
        <Rating name="read-only" value={5} readOnly/>
        <p><img alt="indiitemimg" src={location} className='me-2'/>318 Read way<br></br><span className='ms-4'></span>Monroe,USA</p>
        <p><img alt="indiitemimg" src={phone} className='iimage1'/>+1 654 646 581</p>
        <p><img alt="indiitemimg" src={globe} className='iimage1'/>Visit Website</p>
    </div>
    <div className='indirp'><button className='lcv'><CheckCircleIcon/>LS Verified</button>
    <div className='mt-2 '><h5>Barbecue Restaurant</h5></div>
    <p>Job Vacencies: 10</p>
    <p  className='lh-0 p-0 m-0'>Job Roles: </p>
    <ul><li>Cleaner</li><li>Chef</li><li>Manager</li></ul></div>
    </div>
    <hr></hr>
    <div className='d-flex justify-content-between'>
        <p>We are a privately held company in Monroe, GA proudly doing business for 6 years.</p>
        <Link to="https://www.tripadvisor.com/Restaurant_Review-g35122-d21264333-Reviews-Sanford_and_son_barbecue-Monroe_Georgia.html"> <button type='submit' className='mt-0 pb-2 pt-2 bg-secondary text-white'>Apply Now</button></Link>
    </div>
</div>

<div className='d-block indiitem1'>
    <div className='color-black d-flex'>
    <img alt="indiitemimg" className="eeitemnadi" src={rest3}></img>
    <div className='d-block indiitemmatter'>
        <h3>New Hoa Dang</h3>
        <Rating name="read-only" value={5} readOnly/>
        <p><img alt="indiitemimg" src={location} className='me-2'/>3005 Silver Creek Rd STE 136
        <br></br><span className='ms-4'></span>San Jose, CA</p>
        <p><img alt="indiitemimg" src={phone} className='iimage1'/>+1 620-1276</p>
        <p><img alt="indiitemimg" src={globe} className='iimage1'/>Visit Website</p>
    </div>
    <div className='indirp'><button className='lcv'><CheckCircleIcon/>LS Verified</button>
    <div className='mt-2 '><h5>Hoa Dang Restaurant</h5></div>
    <p>Job Vacencies: 10</p>
    <p  className='lh-0 p-0 m-0'>Job Roles: </p>
    <ul><li>Cleaner</li><li>Chef</li><li>Manager</li></ul></div>
    </div>
    <hr></hr>
    <div className='d-flex justify-content-between'>
        <p>We are a privately held company in Monroe, GA proudly doing business for 6 years.</p>
        <Link to="https://www.tripadvisor.in/Restaurant_Review-g33020-d19600317-Reviews-New_Hoa_Dang-San_Jose_California.html"> <button type='submit' className='mt-0 pb-2 pt-2 bg-secondary text-white'>Apply Now</button></Link>
    </div>
</div>




<div className='d-block indiitem1'>
    <div className='color-black d-flex'>
    <img alt="indiitemimg" className="eeitemnadi" src={rest4}></img>
    <div className='d-block indiitemmatter'>
        <h3>Eppies Restaurant</h3>
        <Rating name="read-only" value={5} readOnly/>
        <p><img alt="indiitemimg" src={location} className='me-2'/>4025 Lake Road<br></br><span className='ms-4'></span>West Sacramento, CA</p>
        <p><img alt="indiitemimg" src={phone} className='iimage1'/>+1 371-7767</p>
        <p><img alt="indiitemimg" src={globe} className='iimage1'/>Visit Website</p>
    </div>
    <div className='indirp'><button className='lcv'><CheckCircleIcon/>LS Verified</button>
    <div className='mt-2 '><h5>Restaurant</h5></div>
    <p>Job Vacencies: 2</p>
    <p  className='lh-0 p-0 m-0'>Job Roles: </p>
    <ul><li>Cleaner</li><li>Chef</li><li>Manager</li></ul></div>
    </div>
    <hr></hr>
    <div className='d-flex justify-content-between'>
        <p>We are a privately held company in Monroe, GA proudly doing business for 6 years.</p>
        <Link to="https://www.tripadvisor.com/Restaurant_Review-g33255-d11954078-Reviews-Eppies_Restaurant-West_Sacramento_California.html"> <button type='submit' className='mt-0 pb-2 pt-2 bg-secondary text-white'>Apply Now</button></Link>
    </div>
</div>

<div className='d-block indiitem1'>
    <div className='color-black d-flex'>
    <img alt="indiitemimg" className="eeitemnadi" src={rest1}></img>
    <div className='d-block indiitemmatter'>
        <h3>Sanford & son barbecue LLC</h3>
        <Rating name="read-only" value={5} readOnly/>
        <p><img alt="indiitemimg" src={location} className='me-2'/>318 Read way<br></br><span className='ms-4'></span>Monroe,USA</p>
        <p><img alt="indiitemimg" src={phone} className='iimage1'/>+1 654 646 581</p>
        <p><img alt="indiitemimg" src={globe} className='iimage1'/>Visit Website</p>
    </div>
    <div className='indirp'><button className='lcv'><CheckCircleIcon/>LS Verified</button>
    <div className='mt-2 '><h5>Barbecue Restaurant</h5></div>
    <p>Job Vacencies: 10</p>
    <p  className='lh-0 p-0 m-0'>Job Roles: </p>
    <ul><li>Cleaner</li><li>Chef</li><li>Manager</li></ul></div>
    </div>
    <hr></hr>
    <div className='d-flex justify-content-between'>
        <p>We are a privately held company in Monroe, GA proudly doing business for 6 years.</p>
        <button type='submit' className='mt-0 pb-0 pt-0 bg-secondary text-white'>Apply Now</button>
    </div>
</div>


<div className='d-block indiitem1'>
    <div className='color-black d-flex'>
    <img alt="indiitemimg" className="eeitemnadi" src={rest3}></img>
    <div className='d-block indiitemmatter'>
        <h3>Sanford & son barbecue LLC</h3>
        <Rating name="read-only" value={5} readOnly/>
        <p><img alt="indiitemimg" src={location} className='me-2'/>318 Read way<br></br><span className='ms-4'></span>Monroe,USA</p>
        <p><img alt="indiitemimg" src={phone} className='iimage1'/>+1 654 646 581</p>
        <p><img alt="indiitemimg" src={globe} className='iimage1'/>Visit Website</p>
    </div>
    <div className='indirp'><button className='lcv'><CheckCircleIcon/>LS Verified</button>
    <div className='mt-2 '><h5>Barbecue Restaurant</h5></div>
    <p>Job Vacencies: 10</p>
    <p  className='lh-0 p-0 m-0'>Job Roles: </p>
    <ul><li>Cleaner</li><li>Chef</li><li>Manager</li></ul></div>
    </div>
    <hr></hr>
    <div className='d-flex justify-content-between'>
        <p>We are a privately held company in Monroe, GA proudly doing business for 6 years.</p>
        <button type='submit' className='mt-0 pb-0 pt-0 bg-secondary text-white'>Apply Now</button>
    </div>
</div>

<div className='d-block indiitem1'>
    <div className='color-black d-flex'>
    <img alt="indiitemimg" className="eeitemnadi" src={rest4}></img>
    <div className='d-block indiitemmatter'>
        <h3>Sanford & son barbecue LLC</h3>
        <Rating name="read-only" value={5} readOnly/>
        <p><img alt="indiitemimg" src={location} className='me-2'/>318 Read way<br></br><span className='ms-4'></span>Monroe,USA</p>
        <p><img alt="indiitemimg" src={phone} className='iimage1'/>+1 654 646 581</p>
        <p><img alt="indiitemimg" src={globe} className='iimage1'/>Visit Website</p>
    </div>
    <div className='indirp'><button className='lcv'><CheckCircleIcon/>LS Verified</button>
    <div className='mt-2 '><h5>Barbecue Restaurant</h5></div>
    <p>Job Vacencies: 10</p>
    <p  className='lh-0 p-0 m-0'>Job Roles: </p>
    <ul><li>Cleaner</li><li>Chef</li><li>Manager</li></ul></div>
    </div>
    <hr></hr>
    <div className='d-flex justify-content-between'>
        <p>We are a privately held company in Monroe, GA proudly doing business for 6 years.</p>
        <button type='submit' className='mt-0 pb-0 pt-0 bg-secondary text-white'>Apply Now</button>
    </div>
</div>
<Footer></Footer>
</div>

</>
  )
}

export default Indiitem