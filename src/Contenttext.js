import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './css/body.css';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import local from "./images/local.webp"
import trend from "./images/trend.webp"
import trend1 from "./images/trend1.webp"
import trend2 from "./images/trend2.webp"
import trend3 from "./images/trend3.webp"
import trend4 from "./images/trend4.webp"
import trend5 from "./images/trend5.webp"
import trend6 from "./images/trend6.webp"
import trend7 from "./images/trend7.webp"
import trend8 from "./images/trend8.webp"
import trend9 from "./images/trend9.webp"
import trend10 from "./images/trend10.webp"
import trend11 from "./images/trend11.webp"
import trend12 from "./images/trend12.webp"
import trend13 from "./images/trend13.webp"
import trend14 from "./images/trend14.webp"
import trend15 from "./images/trend15.webp"
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import ShareIcon from '@mui/icons-material/Share';
import {  EmailIcon, EmailShareButton,
    FacebookIcon,
    FacebookShareButton, WhatsappIcon, WhatsappShareButton} from "react-share";
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';


function Contenttext() {

    const [show,setShow]=useState(false);
    const handleModalClose = () => setShow(false);
    const handleModalShow = () => setShow(true);
    const [blogitem,Setblogitem] = useState(null)

    const blogs = async ()=>{

      const bdata = new FormData()
      const bresponse = await axios.get("http://localhost:8008/Blogs",bdata)
      if(bresponse){
        console.log(bresponse.data)
        if(bresponse.data.status==="success"){
          Setblogitem(bresponse.data.Blogs)
        }
      }
    }

    useEffect(()=>{

      blogs()
    
    },[])

  return (
    <div>
        <Header/>
        <div className='n navbar d-flex'>
            <b className='headnav'>The LocalSphere Blog</b>
           
            <p className='headsub'>Featured</p>
            <p className='headsub'>Trends in Trust</p>
            <p className='headsub'>Reviews Matter</p>
            <p className='headsub'>Buy with confidence</p>
            <p className='headsub'>LocalSphere Stories</p>
        </div>
        <div>
            <h2 className='ccdd ms-4 mt-2'>Featured</h2>
            <Container fluid>
                <Row>
                    <Col className='cole'>
                    <p className='ccdd'>January 31, 2024</p>
                    <h1 className='ccdd'>Smart Spring Cleaning: Getting rid of unwanted household items, ethically</h1>
                    <Button className='featuredbutton' variant='primary'>Read more</Button>
                    </Col>
                    <Col className='cole'>
                    <img alt="contentimg" className='colimage' src={local}></img>
                    </Col>
                </Row>
            </Container>
            <hr className='mt-5'/>
        </div>
        <div>
        <h2 className='ccdd ps-4 ps-4'>Trends in Local Sphere</h2>
        <div className='d-flex'>
            <Container fluid>
                <Row>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend}/>
                    <b className='trendcol-bold'>Trends in Trust</b>
                    <h4 className='trendcol-h4'>Parcel delivery scams to watch out for all year round</h4>
                    <p className='trendcol-p'>January 31, 2024</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header  closeButton>
  <Button>Share via</Button>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </Col>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend1}/>
                    <b className='trendcol-bold'>Trends in Trust</b>
                    <h4 className='trendcol-h4'>Romance scams: Spot the signs</h4>
                    <p className='trendcol-p'>January 14, 2024</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>1
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <Button>Share via</Button>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>                                
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </Col>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend2}/>
                    <b className='trendcol-bold'>Trends in Trust</b>
                    <h4 className='trendcol-h4'>Holiday hoaxes: How scammers take advantage of the holiday season</h4>
                    <p className='trendcol-p'>November 10, 2023</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>1
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <h2>Share via</h2>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>                                
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </Col>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend3}/>
                    <b className='trendcol-bold'>Trends in Trust</b>
                    <h4 className='trendcol-h4'>Gift card scams: What to look out for and how to avoid them</h4>
                    <p className='trendcol-p'>November 1, 2023</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>1
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <h2>Share via</h2>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>                                
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        

        </div>
        <hr/>
        <div>
        <h2 className='ccdd ps-4'>Reviews in Matter</h2>
        <div className='d-flex'>
            <Container fluid>
                <Row>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend4}/>
                    <b className='trendcol-bold'>Reviews Matter</b>
                    <h4 className='trendcol-h4'>4 tips for sharing perfect product review photos</h4>
                    <p className='trendcol-p'>March 4, 2024</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>1
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <h2>Share via</h2>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>                                
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                   
                    </div>
                    </Col>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend5}/>
                    <b className='trendcol-bold'>Reviews Matter</b>
                    <h4 className='trendcol-h4'>A critical analysis of the five-star experience</h4>
                    <p className='trendcol-p'>September 12, 2023</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>1
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <h2>Share via</h2>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>                                
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </Col>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend6}/>
                    <b className='trendcol-bold'>Reviews Matter</b>
                    <h4 className='trendcol-h4'>The case for leaving 2, 3, and 4-star reviews</h4>
                    <p className='trendcol-p'>September 4, 2023</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>1
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <h2>Share via</h2>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>                                
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </Col>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend7}/>
                    <b className='trendcol-bold'>Reviews Matter</b>
                    <h4 className='trendcol-h4'>How companies use your reviews to get better</h4>
                    <p className='trendcol-p'>September 1, 2023</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>1
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <h2>Share via</h2>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>                                
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        

        </div>
        <hr/>
        <div>
        <h2 className='ccdd ps-4'>Buy with Confidence</h2>
        <div className='d-flex'>
            <Container fluid>
                <Row>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend8}/>
                    <b className='trendcol-bold'>Buy with Confidence</b>
                    <h4 className='trendcol-h4'>Personal liability insurance: Coverage when you’re held responsible</h4>
                    <p className='trendcol-p'>May 20, 2024</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>1
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <h2>Share via</h2>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>                                
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </Col>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend9}/>
                    <b className='trendcol-bold'>Buy with Confidence</b>
                    <h4 className='trendcol-h4'>Understanding auto insurance: Comprehensive, full coverage, and liability explained</h4>
                    <p className='trendcol-p'>May 17, 2024</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>1
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <h2>Share via</h2>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>                                
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </Col>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend10}/>
                    <b className='trendcol-bold'>Buy with Confidence</b>
                    <h4 className='trendcol-h4'>Disability insurance: Short-term, long-term, and everything in between</h4>
                    <p className='trendcol-p'>May 15, 2024</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>1
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <h2>Share via</h2>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>                                
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </Col>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend11}/>
                    <b className='trendcol-bold'>Buy with Confidence</b>
                    <h4 className='trendcol-h4'>Life insurance: Understanding term, whole, and supplemental policies</h4>
                    <p className='trendcol-p'>May 15, 2024</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>1
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <h2>Share via</h2>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        </div>
        
        <hr/>
        <div>
        <h2 className='ccdd ps-4'>Local Sphere Stories</h2>
        <div className='d-flex'>
            <Container fluid>
                <Row>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend12}/>
                    <b className='trendcol-bold'>Local Sphere Stories</b>
                    <h4 className='trendcol-h4'>Local Sphere Pride & Allies: Our recommended resources</h4>
                    <p className='trendcol-p'>August 12, 2022</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>1
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <h2>Share via</h2>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>                                
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </Col>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend13}/>
                    <b className='trendcol-bold'>Local Sphere Stories</b>
                    <h4 className='trendcol-h4'>Local Sphere is sponsoring Pride Copenhagen 2022 🏳️‍🌈🎉</h4>
                    <p className='trendcol-p'>July 15, 2022</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>1
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <h2>Share via</h2>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>                                
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </Col>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend14}/>
                    <b className='trendcol-bold'>Local Sphere Stories</b>
                    <h4 className='trendcol-h4'>Meet the pets of Local Sphere: 2021 Edition</h4>
                    <p className='trendcol-p'>November 8, 2021</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>1
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <h2>Share via</h2>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>                                
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </Col>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend15}/>
                    <b className='trendcol-bold'>Local Sphere Stories</b>
                    <h4 className='trendcol-h4'>Introducing Local Sphere Pride & Allies</h4>
                    <p className='trendcol-p'>August 20,2021</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <h2>Share via</h2>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>                                
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        

        </div>











        <div>
        <h2 className='ccdd ps-4'>Blogs on Local Sphere</h2>
        <div className='d-flex'>
            <Container fluid>
                <div className='d-flex flex-wrap'>
                {blogitem?<>
       
       
       {blogitem.map((bitem)=>(
                    <div className='blogcol'>
                    <div className='blogmat'>
                    <img alt="contentimg" className='blogimg' src={bitem.images}/>
                    <p className='trendcol-p'>{bitem.h1} | {bitem.h2}</p>
                  <h4 className='trendcol-h4'>{bitem.h3}</h4>
                    <p className='trendcol-p'>by {bitem.author} | {bitem.date}</p>
                    <p className='fs-5 text-dark'>{bitem.matter}</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <button className="btn p-0 m-0" variant='white' onClick={handleModalShow}> <ShareIcon className='me-3 mt-1'/></button>
<Modal show={show} onHide={handleModalClose}>
  <Modal.Header closeButton>
    <h2>Share via</h2>
  </Modal.Header>
  <Modal.Body>
<div className='d-flex'>
<EmailShareButton url='https://gmail.com'><EmailIcon/></EmailShareButton>
  <FacebookShareButton url='https://facebook.com'><FacebookIcon/></FacebookShareButton>                                
  <WhatsappShareButton url='https://whatsapp.com'><WhatsappIcon/></WhatsappShareButton>
</div>
  </Modal.Body>
  </Modal>
                    </div>
                    </div>
                    </div>

                    ))}

       
       </>:null}
                </div>
            </Container>
        </div>
        

        </div>











      <Footer/>
    </div>
  )
}

export default Contenttext;