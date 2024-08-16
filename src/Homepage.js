import React, { useEffect, useRef, useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import man from './images/man.png';
import Rating from '@mui/material/Rating';
import { Col, Container, Row } from 'react-bootstrap';
import Body from './Body';
import { LocationCity, Search } from '@mui/icons-material';
import axios from 'axios';
import { Link } from 'react-router-dom';
import location from "./images/location.png"
import phone from "./images/phone.png"
import globe from "./images/globe2.png"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Homepage = () => {
  const countersRef = useRef([]);
  const [testi,Settesti]=useState(null)
  const [result,Setresult]=useState(null)

  const testimonal = async ()=>{

    const testidata = new FormData()
    const testiresponse = await axios.get("http://localhost:8008/Reviews",testidata)
    if(testiresponse){
      console.log(testiresponse.data)
      if(testiresponse.data.status==="success"){
        Settesti(testiresponse.data.Reviews)
      }
    }
  }


  const Setsearchitem = async(keyword)=>{
    const data=new FormData()
    Setresult(null)
    data.append("keyword",keyword)
    if(keyword){
      const response=await axios.get("http://localhost:8008/search-items/?keyword="+keyword,data)
      if(response.data.status==="success"){
        Setresult(response.data.items)
      }
    }
  }


  useEffect(() => {

    testimonal()


    const counters = countersRef.current;
    const speed = 200; // Adjust this value to control the speed of the counter animation

    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    const runCounter = (counter) => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target.toLocaleString();
        }
      };

      updateCount();
    };

    const checkCounters = () => {
      counters.forEach(counter => {
        if (isInViewport(counter)) {
          runCounter(counter);
        }
      });
    };

    window.addEventListener('scroll', checkCounters);
    window.addEventListener('load', checkCounters); // For initial load

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener('scroll', checkCounters);
      window.removeEventListener('load', checkCounters);
    };
  }, []);

  return (
    <div>
      <Header />

      <body className='boddy'>
        <div className="local"> 
        <h2 className='name'>LOCAL SPHERE</h2>
        <p className='sname'>Discovering your Neighbourhood Gem's</p>
        <div class="searchbusi d-flex bg-light">
                <Search className='search1'/>
                <input placeholder="Search Business" class="border border-1 p-0" type="text" onChange={(event)=>{Setsearchitem(event.target.value)}}/>
               
                  <LocationCity className="search1"/><input placeholder="Enter Location" class=" border border-1 p-0" type="text"/><Search className='search1 bg-dark text-white'/>
                
            </div></div>

{result?
<div className='totalbody pt-5'>

{result.map((item)=>(    <div className='d-block indiitem1'>
    <div className='color-black d-flex'>
    <img alt="indiitemimg" className="eeitemnadi" src={item.images}></img>
    <div className='d-block indiitemmatter'>
        <h3>{item.name}</h3>
        <Rating name="read-only" value={5} readOnly/>
        <p><img alt="indiitemimg" src={location} className='me-2'/>318 Read way<br></br><span className='ms-4'></span>Monroe,USA</p>
        <p><img alt="indiitemimg" src={phone} className='iimage1'/>+1 654 646 581</p>
        <p><img alt="indiitemimg" src={globe} className='iimage1'/>Visit Website</p>
    </div>
    <div className='indirp'><button className='lcv'><CheckCircleIcon/>LS Verified</button>
    <div className='mt-2 '><h5>{item.category}</h5></div>
    <p>Job Vacencies: 10</p>
    <p  className='lh-0 p-0 m-0'>Job Roles: </p>
    <ul><li>Cleaner</li><li>Chef</li><li>Manager</li></ul></div>
    </div>
    <hr></hr>
    <div className='d-flex justify-content-between'>
        <p>We are a privately held company in Monroe, GA proudly doing business for 6 years.</p>
        <Link to="https://www.tripadvisor.com/Restaurant_Review-g35122-d21264333-Reviews-Sanford_and_son_barbecue-Monroe_Georgia.html"> <button type='submit' className='mt-0 pb-2 pt-2 bg-secondary text-white'>Apply Now</button></Link>
    </div>
</div>))}


</div>:<></>}

<Body></Body>
        <div className='demot'>
          <div className='d-flex'>
            <div className='demo '>
              <span ref={el => countersRef.current[0] = el} className='counter' data-target="500000">0</span>+<br />
              <span className='fs-6'><p className='m-0 ms-4 p-0'>Total weekly Active customers</p></span>
            </div>
            <div className='demo '>
              <span ref={el => countersRef.current[1] = el} className='counter' data-target="150000">0</span>+<br />
              <span className='fs-6'><p className='m-0 ms-5 p-0 ps-2'>Businesses Registered</p></span>
            </div>
            <div className='demo'>
              <span ref={el => countersRef.current[2] = el} className='counter' data-target="1000000">0</span>+<br />
              <span className='fs-6'><p className='m-0 ms-5 p-0 ps-4'>Cumulative Views</p></span>
            </div>
          </div>
        
       
    <p className='testi'>Testimonals</p>
        <hr className='color-white'></hr>
        <div className='car'>
          <div className='d-flex'>
             
              {testi?<>
       
       {testi.map((itemtesti)=>(
 <div className='testimonal' >
                <div>
                  <img className='test' alt='images' src={man} />
                  <h3>{itemtesti.Name}</h3>
                  <h5>{itemtesti.Business}</h5>
                  <Rating name="read-only" value={itemtesti.Rating} readOnly />
                  <p>{itemtesti.Matter}</p>
                </div>              </div>

                ))}

                </>:null}
           
          </div>
        </div>
        </div>

      </body>

      <Footer />
    </div>
  );
};

export default Homepage;
