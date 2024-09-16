import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

  const navigate = useNavigate();


  const [email,Setemail]=useState(null)
  const [password,Setpassword]=useState(null)
  const [name,Setname]=useState(null)
  const [username,Setusername]=useState(null)

  const FindAccount = async()=>{
    const data=new FormData()
    data.append("email",email)
    data.append("password",password)
    data.append("name",name)


    const response=await axios.get("https://localsphere.onrender.com/Login?name="+name+"&email="+email+"&password="+password,data)
    
    if(response){
      if(response.data.status==="success"){
        localStorage.setItem("userdata",JSON.stringify(response.data))
        localStorage.setItem("loginstatus",true)
        toast.success("Successful Login");
      setTimeout(() => {
        window.location.replace("/");
      }, 2000); // Delay to allow toast to be visible
    } else {
      toast.error("Invalid details");
    }
  }

    
  }
  return (
    <div>

<head>
  
  <title>Local Sphere</title>

  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
</head>
<body className='loginpage'>
  <div class="wrapper">
      <h2>Login</h2>
      <div class="input-field">
        <input type="name" name="name" onChange={(event)=>Setname(event.target.value)} required/>
        <label>Enter your name</label>
      </div>
        <div class="input-field">
        <input type="text" name="email" onChange={(event)=>Setemail(event.target.value)} required/>
        <label>Enter your email</label> 
      </div>
      <div class="input-field">
        <input type="password" name="password" onChange={(event)=>Setpassword(event.target.value)} required/>
        <label>Enter your password</label>
      </div>
      <div class="forget">
        <label for="remember">
          <input type="checkbox" id="remember"/>
          <p className='rem'>Remember me</p>
        </label>
        <a href="#">Forgot password?</a>
      </div>
     <button className='w-100' onClick={()=>FindAccount()}>Log In</button>
      {/* ToastContainer to render the notifications */}
      <ToastContainer />
      <div class="register">
        <p>Don't have an account? <Link to="/Signup">Register</Link></p>
      </div>
      <div className="form-group">
        <Link to="/" className="home-link">Go to Home</Link>
      </div>
      <div >
        <span>
          <hr className='mediaacc'/>
          <p className='mediaacc'>Login with Social Media Account</p>
          <a href="#" className='me-4'><i class="fa fa-facebook" aria-hidden="true"></i></a>
          <a href="#" className='me-4'><i class="fa fa-google" aria-hidden="true"></i></a>
          <a href="#" className='me-4'><i class="fa fa-twitter" aria-hidden="true"></i></a>
      </span>
      </div>
  </div>
</body>
</div>
  )
}

export default Login