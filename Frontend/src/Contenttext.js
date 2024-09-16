import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
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
import { EmailShareButton, FacebookShareButton, WhatsappShareButton, TwitterShareButton } from "react-share";
import { EmailIcon, FacebookIcon, WhatsappIcon, TwitterIcon } from "react-share";
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { saveAs } from 'file-saver';
import './css/ShareModal.css';

function Contenttext() {

    const [show,setShow]=useState(false);
    const handleModalClose = () => setShow(false);
    const handleModalShow = () => setShow(true);
    const [blogitem,Setblogitem] = useState(null)

    const blogs = async ()=>{

      const bdata = new FormData()
      const bresponse = await axios.get("https://localsphere.onrender.com/Blogs",bdata)
      if(bresponse){
        console.log(bresponse.data)
        if(bresponse.data.status==="success"){
          Setblogitem(bresponse.data.Blogs)
        }
      }
    }


    const navigate = useNavigate();

    const handleEdit = (blog) => {
      navigate('/Blog', { state: { blog } });
    };

    const handleDownload = (blog) => {
      const blogContent = `
Title: ${blog.h3}
Author: ${blog.author}
Date: ${blog.date}
Category: ${blog.h1} | ${blog.h2}

Content:
${blog.matter}
      `;

      const blob = new Blob([blogContent], { type: 'text/plain;charset=utf-8' });
      saveAs(blob, `${blog.h3.replace(/\s+/g, '_')}.txt`);
    };

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
                    <ShareButton url={`https://yourdomain.com/blog/1`} title="Parcel delivery scams to watch out for all year round" />
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
                    <ShareButton url={`https://yourdomain.com/blog/2`} title="Romance scams: Spot the signs" />
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
                    <ShareButton url={`https://yourdomain.com/blog/3`} title="Holiday hoaxes: How scammers take advantage of the holiday season" />
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
                    <ShareButton url={`https://yourdomain.com/blog/4`} title="Gift card scams: What to look out for and how to avoid them" />
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
                    <ShareButton url={`https://yourdomain.com/blog/5`} title="4 tips for sharing perfect product review photos" />
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
                    <ShareButton url={`https://yourdomain.com/blog/6`} title="A critical analysis of the five-star experience" />
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
                    <ShareButton url={`https://yourdomain.com/blog/7`} title="The case for leaving 2, 3, and 4-star reviews" />
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
                    <ShareButton url={`https://yourdomain.com/blog/8`} title="How companies use your reviews to get better" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        

        </div>
        <hr/>
        <div>
        </div>
        <div>
        <h2 className='ccdd ps-4'>Buy with Confidence</h2>
        <div className='d-flex'>
            <Container fluid>
                <Row>
                    <Col className='trendscol'>
                    <img alt="contentimg" className='trendimage' src={trend8}/>
                    <b className='trendcol-bold'>Buy with Confidence</b>
                    <h4 className='trendcol-h4'>Personal liability insurance: Coverage when you're held responsible</h4>
                    <p className='trendcol-p'>May 20, 2024</p>
                    <div className='d-flex'>
                    <Link to="/Blog"><EditIcon className='me-3 mt-1 text-dark'/></Link>1
                    <DownloadIcon className='me-3 mt-1 text-dark'/>
                    <ShareButton url={`https://yourdomain.com/blog/9`} title="Personal liability insurance: Coverage when you're held responsible" />
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
                    <ShareButton url={`https://yourdomain.com/blog/10`} title="Understanding auto insurance: Comprehensive, full coverage, and liability explained" />
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
                    <ShareButton url={`https://yourdomain.com/blog/11`} title="Disability insurance: Short-term, long-term, and everything in between" />
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
                    <ShareButton url={`https://yourdomain.com/blog/12`} title="Life insurance: Understanding term, whole, and supplemental policies" />
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
                    <ShareButton url={`https://yourdomain.com/blog/13`} title="Local Sphere Pride & Allies: Our recommended resources" />
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
                    <ShareButton url={`https://yourdomain.com/blog/14`} title="Local Sphere is sponsoring Pride Copenhagen 2022 🏳️‍🌈🎉" />
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
                    <ShareButton url={`https://yourdomain.com/blog/15`} title="Meet the pets of Local Sphere: 2021 Edition" />
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
                    <ShareButton url={`https://yourdomain.com/blog/16`} title="Introducing Local Sphere Pride & Allies" />
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
        

        </div>

<hr/>


        <div>
        <h2 className='ccdd ps-4'>Blogs on Local Sphere</h2>
        <div className='d-flex'>
            <Container fluid>
                <div className='d-flex flex-wrap'>
                {blogitem ? (
    <>
      {blogitem.map((bitem) => (
        <div className='blogcol' key={bitem._id}>
          <div className='blogmat'>
            <img alt="contentimg" className='blogimg' src={bitem.images}/>
            <p className='trendcol-p'>{bitem.h1} | {bitem.h2}</p>
            <h4 className='trendcol-h4'>{bitem.h3}</h4>
            <p className='trendcol-p'>by {bitem.author} | {bitem.date}</p>
            <p className='fs-5 text-dark'>{bitem.matter}</p>
            <div className='d-flex'>
              <button onClick={() => handleEdit(bitem)} className="btn p-0 m-0">
                <EditIcon className='me-3 mt-1 text-dark'/>
              </button>
              <button onClick={() => handleDownload(bitem)} className="btn p-0 m-0">
                <DownloadIcon className='me-3 mt-1 text-dark'/>
              </button>
              <ShareButton title={bitem.h3} />
            </div>
          </div>
        </div>
      ))}
    </>
  ) : null}
                </div>
            </Container>
        </div>
        

        </div>











      <Footer/>
    </div>
  )
}

function ShareButton({ url, title }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button onClick={handleShow} className="btn p-0 m-0 share-icon-button">
        <ShareIcon className='text-dark' />
      </button>

      <Modal show={show} onHide={handleClose} centered className="share-modal">
        <Modal.Header closeButton>
          <Modal.Title>Share this article</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="share-buttons">
            <WhatsappShareButton title={title}>
              <WhatsappIcon size={40} round />
            </WhatsappShareButton>
            <TwitterShareButton title={title}>
              <TwitterIcon size={40} round />
            </TwitterShareButton>
            <FacebookShareButton quote={title}>
              <FacebookIcon size={40} round />
            </FacebookShareButton>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}


export default Contenttext;