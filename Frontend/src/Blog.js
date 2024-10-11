import React, { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './css/blog.css';
import { FaImage, FaVideo, FaFile, FaTable } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [blogId, setBlogId] = useState(null);

  const [bath, setBath] = useState('');
  const [categ, setCateg] = useState('');
  const [scateg, setScateg] = useState('');
  const [btitle, setBtitle] = useState('');
  const [bdate, setBdate] = useState('');
  const [bmat, setBmat] = useState('');
  const [bimglink, setBimglink] = useState('');
  const [isAddMenuOpen, setIsAddMenuOpen] = useState(false); // State for toggle

  useEffect(() => {
    if (location.state && location.state.blog) {
      const blog = location.state.blog;
      setIsEditing(true);
      setBlogId(blog._id);
      setBath(blog.author || '');
      setCateg(blog.h1 || '');
      setScateg(blog.h2 || '');
      setBtitle(blog.h3 || '');
      setBdate(blog.date || '');
      setBmat(blog.matter || '');
      setBimglink(blog.images || '');
    }
  }, [location]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = {
        images: bimglink,
        h1: categ,
        h2: scateg,
        h3: btitle,
        author: bath,
        date: bdate,
        matter: bmat,
      };

      let response;
      if (isEditing) {
        response = await axios.put(`https://localsphere.onrender.com/Blogs/${blogId}`, data);
      } else {
        response = await axios.post("https://localsphere.onrender.com/Blogs", data);
      }

      if (response.data.status === "success") {
        toast.success(isEditing ? "Blog updated successfully!" : "New blog created successfully!");
        setTimeout(() => {
          navigate("/Blogs");
        }, 2000);
      } else {
        toast.error(response.data.message || "Error. Try again.");
      }
    } catch (error) {
      console.error('Error details:', error.response?.data);
      console.error('Error status:', error.response?.status);
      console.error('Error headers:', error.response?.headers);
      // Handle the error (e.g., show an error message to the user)
    }
  };

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
            <button className='bg-secondary text-white p-2 pb-1 me-3' onClick={handleSubmit}>
              {isEditing ? 'Update' : 'Publish'}
            </button>
          </div>
        </header>
        <ToastContainer />
        <div className="blogbody text-black">
          <aside className="blogsidebar">
            {/* Toggle button for mobile view */}
            <button 
              onClick={() => setIsAddMenuOpen(!isAddMenuOpen)} 
              className="menu-toggle d-md-none" // Hide on medium and larger screens
            >
              {isAddMenuOpen ? 'Hide Add Options' : 'Show Add Options'}
            </button>
            {/* Always show the add menu on larger devices */}
            <div className={`blogadd ${isAddMenuOpen ? '' : 'd-none d-md-block'}`}>
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
                <Link to="https://pixabay.com" className='text-white text-decoration-none'>
                  <button><FaFile /> File </button>
                </Link>
              </div>
              <div className="blogelements text-black" onClick={() => toast.info("Please upgrade to use this feature.", {
                  position: "top-right",
                  autoClose: 3000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                })}>
                <button>Divider</button>
                <button>Button</button>
                <button>Table</button>
                <button>List</button>
                <button>Poll</button>
              </div>
            </div>
          </aside>
          <main className="blogcontent">
            <div className='d-flex flex-wrap'>
              <input
                placeholder="Author Name"
                className='m-2 ms-0'
                value={bath}
                onChange={(event) => setBath(event.target.value)}
                required
              />
              <input
                placeholder='Category'
                className='m-2'
                value={categ}
                onChange={(event) => setCateg(event.target.value)}
                required
              />
              <input
                placeholder='Sub-Category'
                className='m-2'
                value={scateg}
                onChange={(event) => setScateg(event.target.value)}
                required
              />
              <input
                placeholder="Title"
                className='m-2'
                value={btitle}
                onChange={(event) => setBtitle(event.target.value)}
                required
              />
              <input
                placeholder="Date(Month DD, YYYY)"
                className='m-2'
                value={bdate}
                onChange={(event) => setBdate(event.target.value)}
                required
              />
              <input
                placeholder="Image Link"
                className='m-2 ms-0'
                value={bimglink}
                onChange={(event) => setBimglink(event.target.value)}
                required
              />
            </div>
            <textarea
              rows="20"
              cols="150"
              placeholder='Enter Blog Description'
              value={bmat}
              onChange={(event) => setBmat(event.target.value)}
              required
            />
          </main>
        </div>
      </div>
    </div>
  );
}

export default Blog;