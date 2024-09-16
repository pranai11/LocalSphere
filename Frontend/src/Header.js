import React, { useEffect, useState } from 'react'
import logo from './images/logo2.png'
import AddIcon from '@mui/icons-material/Add';
import LockIcon from '@mui/icons-material/Lock';
import { Link } from 'react-router-dom';
const Header = () => {


    const [loginof,Setloginof]=useState(true)
    const [data, setData] = useState(null);
    const [userdata,Setuserdata] = useState(null)
    
    useEffect(() => {
        if(localStorage.getItem("loginstatus")!==false && localStorage.getItem("loginstatus")!=="false" && localStorage.getItem("loginstatus")){
            Setuserdata(JSON.parse(localStorage.getItem("userdata")).data)
        console.log(JSON.parse(localStorage.getItem("userdata")).data.name)}
      }, []);
  return (
    <>
    <div className='page'>
        <div className='Head1'>
        <div>
        <Link to="/"><img alt='logoimage' className="logo ms-3" src={logo} ></img></Link>
        </div>

            
                <Link to="/" className='text-decoration-none text-white'><p class="mt-2 ">Home</p></Link>
                <Link to="/About" className='text-decoration-none text-white'><p class="mt-2">About</p></Link>
                <Link to="/Blogs" className='text-decoration-none text-white'><p class="mt-2">Blog</p></Link>
                <Link to="/Contactus" className='text-decoration-none text-white'><p class="mt-2" >Contact</p></Link>
                <div class="search d-flex h-75  mt-2 bg-light">
                
            </div>
       
            <Link to="/Blog" className='text-white text-decoration-none'><div className='postub'>
            <AddIcon className='add'/>
            <a className='m-0 text-decoration-none text-white pt-0 pb-2'>Write a Blog</a>
        </div></Link>
        <Link to="/Post" className='text-white text-decoration-none'><div className='postub'>
            <AddIcon className='add'/>
            <a className='m-0 text-decoration-none text-white pt-0 pb-2'>Post your Business</a>
        </div></Link>
        <div className='log'>
        {userdata?<p>{userdata.name}</p>:<Link to='/Login' className='text-white text-decoration-none'>Login</Link>}
        </div>
        <div className='log'>
        {!userdata?<Link to='/Signup' className='text-white text-decoration-none'>Signup</Link>:<p onClick={()=>{Setuserdata(null);localStorage.setItem("userdata","null");localStorage.setItem("loginstatus",false)}}>Signout</p>}
        </div>
            
        </div>
   </div>
   </>
  )
}

export default Header