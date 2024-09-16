import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import './css/blog.css';
import { FaImage, FaVideo, FaFile, FaTable, FaPlus, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';



const Body3 = () => {

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



    const response=await axios.get("https://localsphere.onrender.com/Blogs?images="+bimglink+"&h1="+categ+"&h2="+scateg+"&h3="+btitle+"&author="+bath+"&date="+bdate+"&matter="+bmat,data)
    
    if(response){
      if(response.data.status==="success"){
        window.location.replace("/Contenttext")
      }
      else{
        alert("Error. Try again")
      }
    }
    
  }

return (
  <div>



  <div className="blogcontainer">
    <header className="blogheader">
      <div className="bloglogo">LocalSphere</div>
      <div className="blogheader-right">
        <div className="blogoptions">
        <Link to="/"><button>Home</button></Link>
          <Link to="/Contenttext"><button>Blogs</button></Link>
          <button className="blogupgrade">Upgrade</button>
        </div>
          <button className='bg-secondary text-white p-2 pb-1 me-3' onClick={()=>{alert("Successfully published");CreateBlog()}}>Publish</button>
        
      </div>
    </header>
    <div className="blogbody">
      <aside className="blogsidebar">
        
        <div className="blogadd">
          <h3>Add</h3>
          <div className="blogmedia">
            <button><FaImage /> Image</button>
            <button><FaImage /> Gallery</button>
            <button><FaVideo /> Video</button>
            <button><FaImage /> GIF</button>
            <Link to="https://pixabay.com" className='text-white text-decoration-none'><button ><FaFile/>File </button></Link>
          </div>
          <div className="blogelements">
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

export default Body3;