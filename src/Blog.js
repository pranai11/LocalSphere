import React, { useRef, useState } from 'react';
import './css/blog.css';
import { FaImage, FaVideo, FaFile, FaTable, FaPlus, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {

    const [bath,Setbath]=useState(null)
    const [categ,Setcateg]=useState(null)
    const [scateg,Setscateg]=useState(null)
    const [btitle,Setbtitle]=useState(null)
    const [bdate,Setbdate]=useState(null)
    const [bmat,Setbmat]=useState(null)
    const [bimglink,Setbimglink]=useState(null)


    const CreateBlog = async()=>{
      const data=new FormData()
      data.append("images",bimglink)
      data.append("h1",categ)
      data.append("h2",scateg)
      data.append("h3",btitle)
      data.append("author",bath)
      data.append("date",bdate)
      data.append("matter",bmat)

  
  
      const response=await axios.get("http://localhost:8008/Blogs?images="+bimglink+"&h1="+categ+"&h2="+scateg+"&h3="+btitle+"&author="+bath+"&date="+bdate+"&matter="+bmat,data)
      
      if(response){
        if(response.data.status==="success"){
         toast.success("Success! Redirecting...");
          setTimeout(() => {
            window.location.replace("/Blogs");
          }, 2000); // Delay redirection to allow toast to show
        } else {
          toast.error("Error. Try again.");
        }
      }
      
    }

    const imageInputRef = useRef(null);
  const galleryInputRef = useRef(null);
  const videoInputRef = useRef(null);
  const gifInputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // Handle the file upload logic here
    }
  };

  return (
    <div>
    <div className="blogcontainer">
      <header className="blogheader">
        <div className="bloglogo">LocalSphere</div>
        <div className="blogheader-right">
          <div className="blogoptions">
          <Link to="/"><button className='text-black'>Home</button></Link>
            <Link to="/Blogs"><button className='text-black'>Blogs</button></Link>
            <button className="blogupgrade text-black">Upgrade</button>
          </div>
            <button className='bg-secondary text-white p-2 pb-1 me-3' onClick={()=>{CreateBlog()}}>Publish</button>
        </div>
        
      </header>
       {/* ToastContainer to render the notifications */}
       <ToastContainer />
      <div className="blogbody text-black">
        <aside className="blogsidebar">
          
          <div className="blogadd">
            <h3>Add</h3>
            <div className="blogmedia text-black">
              {/* Image Upload */}
      <input
        type="file"
        accept="image/*"
        ref={imageInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button onClick={() => imageInputRef.current.click()}>
        <FaImage /> Image
      </button>

      {/* Gallery Upload (Multiple Images) */}
      <input
        type="file"
        accept="image/*"
        ref={galleryInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
        multiple
      />
      <button onClick={() => galleryInputRef.current.click()}>
        <FaImage /> Gallery
      </button>

      {/* Video Upload */}
      <input
        type="file"
        accept="video/*"
        ref={videoInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button onClick={() => videoInputRef.current.click()}>
        <FaVideo /> Video
      </button>

      {/* GIF Upload */}
      <input
        type="file"
        accept=".gif"
        ref={gifInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <button onClick={() => gifInputRef.current.click()}>
        <FaImage /> GIF
      </button>
              <Link to="https://pixabay.com" className='text-white text-decoration-none'><button ><FaFile/>File </button></Link>
            </div>
            <div className="blogelements text-black">
              <button>Divider</button>
              <button>Button</button>
              <button><FaTable /> Table</button>
              <button>Expandable List</button>
              <button>Poll</button>
            </div>
          </div>
        </aside>
        <main  className="blogcontent">
          <div className='d-flex flex-wrap'>
            <input placeholder="Author Name" className='m-2 ms-0' onChange={(event)=>Setbath(event.target.value)} required></input>
            <input placeholder='Category' className='m-2' onChange={(event)=>Setcateg(event.target.value)} required></input>
            <input placeholder='Sub-Category' className='m-2' onChange={(event)=>Setscateg(event.target.value)} required></input>
            <input placeholder="Title" className='m-2' onChange={(event)=>Setbtitle(event.target.value)} required></input>
            
            <input placeholder="Date(Month DD, YYYY)" className='m-2' onChange={(event)=>Setbdate(event.target.value)} required></input>
            <input placeholder="Image Link" className='m-2 ms-0' onChange={(event)=>Setbimglink(event.target.value)} required></input>
          </div>
          <textarea rows="20" cols="150" placeholder='Enter Blog Description' onChange={(event)=>Setbmat(event.target.value)} required />
        </main>
      </div>
</div>
    </div>
  )
}

export default Blog