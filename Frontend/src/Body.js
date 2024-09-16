import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './css/style.css';
// import business1 from "./images/business1.jpg"
// import electronics from "./images/electronics.jpeg"
// import mengym from "./images/mengym.jpg"
// import energy from "./images/energy.webp"
// import insurance from "./images/insurance.jpg"
// import petstore from "./images/petstore.jpg"
// import telehealth from "./images/telehealth.jpg"
// import ecommerce from "./images/ecommerce.jpg"
// import real from "./images/real.jpg"
// import bank from "./images/bank.png"
// import tra from "./images/tra.png"
// import car from "./images/car.png"
// import diamond from "./images/diamond.png"
// import cloth from "./images/cloth.png"
// import elec from "./images/elec.png"
// import gym from "./images/gym.png"
// import power from "./images/power.png"
// import furnit from "./images/furnit.png"
// import pet from "./images/pet.png"
// import home from "./images/home.png"
// import umbrella from "./images/umbrella.png"
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Body() {
  const [bt,Setbt]=useState(null)
  const [ctgr,Setcat]=useState(null)

  const bts = async ()=>{

    const data = new FormData()
    const response = await axios.get("https://localsphere.onrender.com/business-trends",data)
    if(response){
      console.log(response.data)
      if(response.data.status==="success"){
        Setbt(response.data.business_trends)
      }
    }
  }
  
  const cat = async ()=>{

    const catdata = new FormData()
    const catresponse = await axios.get("https://localsphere.onrender.com/categories",catdata)
    if(catresponse){
      console.log(catresponse.data)
      if(catresponse.data.status==="success"){
        Setcat(catresponse.data.categories)
      }
    }
  }

  useEffect(()=>{

    bts()
    cat()

  },[])

  
return (
  <>
  <div className='totalbody'>
    <div className='body ms-5 ps-5 pt-5'>
    <h3>Explore the Categories</h3>
    <div className='d-flex flex-wrap'>

    {ctgr?<>
     {ctgr.map((itemcat)=>(
     
      <div>
              <div className='col d-flex shadow'>
              <img className='image text-white' src={itemcat.images}/>
              <p className='matter'>
                <Link 
                  to="/Indiitem" 
                  className='text-decoration-none text-light'
                  onClick={() => window.scrollTo(0, 0)}
                >
                  {itemcat.name}
                </Link>
              </p>
              </div>
</div>
))}

</>:null}
</div>

      </div>
      <hr/>
     <div  className='body ms-5 ps-5'>
      <h3>Businesses in Trending</h3>
     <div className='d-flex flex-wrap mt-3'>

     {bt?<>

     {bt.map((itemtr)=>(

<Card className='totalcard shadow mb-3' style={{ width: '17rem' }} >
<Card.Img className="trendimage" variant="top" src={itemtr.images} />
<Card.Body>
<Card.Title>{itemtr.Heading}</Card.Title>
<Card.Text>
{itemtr.Matter}
</Card.Text>
<Button 
  className='button' 
  variant="primary" 
  as={Link} 
  to="/Indiitem"
  onClick={() => {
    window.scrollTo(0, 0);
  }}
>
  Visit
</Button>
</Card.Body>
</Card>

))}
     </>:null}

  </div>
  </div>
  </div>
  </>
)
}

export default Body;