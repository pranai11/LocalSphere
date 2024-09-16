import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Signup = () => {

  const [email,Setemail]=useState(null)
  const [password,Setpassword]=useState(null)
  const [name,Setname]=useState(null)
  const navigate = useNavigate();


  useEffect(() => {
    const initializeGoogleSignIn = () => {
      if (window.google && window.google.accounts && window.google.accounts.id) {
        console.log("Google Sign-In API loaded successfully");
        try {
          window.google.accounts.id.initialize({
            client_id: "178915392982-etho3k3irum2lfrjs563rsebdcao5elp.apps.googleusercontent.com",
            callback: handleGoogleSignIn,
            auto_select: false,
          });
          console.log("Google Sign-In initialized");
          
          const button = document.getElementById("googleSignInButton");
          if (button) {
            window.google.accounts.id.renderButton(
              button,
              { theme: "outline", size: "large", text: "signup_with" }
            );
            console.log("Google Sign-In button rendered");
          } else {
            console.error("Google Sign-In button element not found");
          }
        } catch (error) {
          console.error("Error initializing Google Sign-In:", error);
        }
      } else {
        console.error("Google Sign-In API not loaded, retrying...");
        setTimeout(initializeGoogleSignIn, 100); // Retry after 100ms
      }
    };

    initializeGoogleSignIn();
  }, []);

  const CreateAccount = async()=>{
    const data=new FormData()
    data.append("email",email)
    data.append("password",password)
    data.append("name",name)



    const response=await axios.get("https://localsphere.onrender.com/Signup?name="+name+"&email="+email+"&password="+password,data)
    
    if(response){
      if(response.data.status==="success"){
        toast.success("Successful Signup!");
          setTimeout(() => {
            window.location.replace("/");
          }, 2000);
        } else {
          toast.error("Invalid details. Please try again.");
        }
      }
  };

  const handleGoogleSignIn = async (response) => {
    console.log("Google Sign-In response:", response);
    try {
      const res = await axios.post("https://localsphere.onrender.com/google-signin", {
        token: response.credential
      });
      console.log("Server response:", res.data);
      if (res.data.status === "success") {
        toast.success("Successful Google Sign-In!");
        localStorage.setItem("userdata", JSON.stringify(res.data.data));
        localStorage.setItem("loginstatus", true);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        toast.error("Google Sign-In failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div>


<head>

  <title>Local Sphere</title>
  <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous"/>
</head>
<body className='signuppage'>
  <div class="wrapper">
    
      <h2>Sign Up</h2>
      <div class="input-field">
        <input type="text" name="name" onChange={(event)=>Setname(event.target.value)} required/>
        <label>Enter your name</label>
      </div>
      <div class="input-field">
        <input type="text" name="email" onChange={(event)=>Setemail(event.target.value)}  required/>
        <label>Enter your email</label>
      </div>
      <div class="input-field">
        <input type="password" name="password" onChange={(event)=>Setpassword(event.target.value)}  required/>
        <label>Enter your password</label>
      </div>
      <div class="input-field">
        <input type="password" required/>
        <label>Confirm your password</label>
      </div>
      <button onClick={() => CreateAccount()} className='w-100'>Sign Up</button>
      <div id="googleSignInButton" style={{width:"100%",height:"40px",marginBottom:"10px",marginTop:"10px"}}></div>
      <ToastContainer />


      <div class="signupalready">
        <p>Already have an account? <Link to="/Login">Log In</Link></p>
      </div>
      <div className="form-group">
        <Link to="/" className="home-link">Go to Home</Link>
      </div>
      <div >
        <span>
          <hr className='mediaacc'/>
          <p className='mediaacc'>Sign Up with Social Media Account</p>
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

export default Signup