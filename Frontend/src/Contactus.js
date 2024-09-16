import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/post.css";
import Header from "./Header";
import Footer from "./Footer";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

    
const Contactus = () => {

  const [fname,Setfname]=useState(null)
  const [lname,Setlname]=useState(null)
  const [email,Setemail]=useState(null)
  const [phno,Setphno]=useState(null)
  const [tob,Settob]=useState(null)
  const [bid,Setbid]=useState(null)
  const [bquery,Setbquery]=useState(null)
  const [uid,Setuid]=useState(null)


  const Querysubmit = async () => {
    const data = new FormData()
    data.append("firstname",fname)
    data.append("lastname",lname)
    data.append("email",email)
    data.append("phone_No",phno)
    data.append("type_of_business",tob)
    data.append("business_id",bid)
    data.append("business_query",bquery)
    data.append("user_id",uid)

    try {
      const response = await axios.post("https://localsphere.onrender.com/Contact_us", data, {
        headers: {
          'Content-Type': 'application/json'}
        });
      
      console.log(response);
      if (response.data.status === "success") {
        // Safely access and log the business ID
        if (response.data.data && response.data.data.insertedId) {
          toast.success("Query Submitted Successfully");
          setTimeout(() => {
            window.location.replace("/");
          }, 2000);
        } else {
          console.error("No _id found in result:", response.data.data);
          toast.warn("Query Submitted, but no ID was returned.");
        }
      } else {
        toast.error("Cannot Submit Your Query: " + response.data.message);
      }
    } catch (error) {
      console.error("Error during Query Submission:", error);
      alert("There was an error submitting the query.");
    }
  };


  return (
    <div>
        <Header/>
        <div className="postbody">
        <div className="container pt-5">
          <div className="row">
            
              <div className="postcard">
                <div className="postcard-header text-white text-center">
                  <h2>Connect With Us</h2>
                </div>
                <div className="card-body d-flex">
                    <div className="postleft">
                        <h3>Business User</h3>
                  <form>
                    <div className="form-row">
                      <div className="form-group ">
                        <p className="pb-0 mb-0 mt-3" htmlFor="firstName">First Name</p>
                        <input type="text" className="form-control" id="firstName" placeholder="First Name" onChange={(event)=>Setfname(event.target.value)}/>
                      </div>
                      <div className="form-group ">
                        <p className="pb-0 mb-0 mt-3" htmlFor="lastName">Last Name</p>
                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={(event)=>Setlname(event.target.value)}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <p className="pb-0 mb-0 mt-3" htmlFor="email">Email</p>
                      <input type="email" className="form-control" id="email" placeholder="Email" onChange={(event)=>Setemail(event.target.value)}/>
                    </div>
                    <div className="form-group">
                      <p className="pb-0 mb-0 mt-3" htmlFor="phone">Phone</p>
                      <input type="tel" className="form-control" id="phone" placeholder="Phone" onChange={(event)=>Setphno(event.target.value)}/>
                    </div>
                    <div className="form-group">
                      <p className="pb-0 mb-0 mt-3" htmlFor="businessID">Business ID</p>
                      <input type="text" className="form-control" id="businessID" placeholder="Business ID" onChange={(event)=>Setbid(event.target.value)}/>
                    </div>
                    <div className="form-group">
                      <p className="pb-0 mb-0 mt-3" htmlFor="businessCategory">Reason for Contact</p>
                      <select className="form-control" id="businessCategory" onChange={(event)=>Settob(event.target.value)}>
                        <option>Technical Issue</option>
                        <option>Business Related Query</option>
                        <option>Customer Related Issue</option>
                        <option>Advertising Issue</option>
                        <option>Others</option>
                      </select>
                    </div>
                    <textarea cols="20" rows="5" placeholder='Describe your Query' className='mt-4 rounded-2' onChange={(event)=>Setbquery(event.target.value)}></textarea>
                  </form>
                  </div>
                  <div className="postright">
                    <h3>User</h3>
                  <form>
                  <div className="form-row">
                      <div className="form-group ">
                        <p className="pb-0 mb-0 mt-3" htmlFor="firstName">First Name</p>
                        <input type="text" className="form-control" id="firstName" placeholder="First Name" onChange={(event)=>Setfname(event.target.value)}/>
                      </div>
                      <div className="form-group ">
                        <p className="pb-0 mb-0 mt-3" htmlFor="lastName">Last Name</p>
                        <input type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={(event)=>Setlname(event.target.value)}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <p className="pb-0 mb-0 mt-3" htmlFor="email">Email</p>
                      <input type="email" className="form-control" id="email" placeholder="Email" onChange={(event)=>Setemail(event.target.value)}/>
                    </div>
                    <div className="form-group">
                      <p className="pb-0 mb-0 mt-3" htmlFor="phone">Phone</p>
                      <input type="tel" className="form-control" id="phone" placeholder="Phone" onChange={(event)=>Setphno(event.target.value)}/>
                    </div>
                    <div className="form-group">
                      <p className="pb-0 mb-0 mt-3" htmlFor="User ID">User ID</p>
                      <input type="text" className="form-control" id="User ID" placeholder="User ID" onChange={(event)=>Setuid(event.target.value)}/>
                    </div>
                    <div className="form-group">
                      <p className="pb-0 mb-0 mt-3" htmlFor="businessCategory">Reason for Contact</p>
                      <select className="form-control" id="businessCategory" onChange={(event)=>Settob(event.target.value)}>
                        <option>Technical Issue</option>
                        <option>Business Related Query</option>
                        <option>Customer Related Issue</option>
                        <option>Advertising Issue</option>
                        <option>Others</option>
                      </select>
                    </div>  
                    <textarea cols="20" rows="5" placeholder='Describe your Query' className='mt-4 rounded-2' onChange={(event)=>Setbquery(event.target.value)}></textarea>                  
                  </form>
                  </div>
                  
                </div>
                <button type="submit" className="postbutton btn btn-primary btn-block" onClick={()=>Querysubmit()}>Submit</button>
    
    {/* ToastContainer to render the notifications */}
      <ToastContainer />
              </div>
           
              </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contactus