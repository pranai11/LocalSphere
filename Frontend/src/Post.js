import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/post.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Post() {


  const [fname,Setfname]=useState(null)
  const [lname,Setlname]=useState(null)
  const [email,Setemail]=useState(null)
  const [phno,Setphno]=useState(null)
  const [badd,Setbadd]=useState(null)
  const [tob,Settob]=useState(null)
  const [bname,Setbname]=useState(null)
  const [bi,Setbi]=useState(null)
  const [jobv,Setjobv]=useState(null)
  const [bm,Setbm]=useState(null)
  const [yoe,Setyoe]=useState(null)
  const [addi,Setaddi]=useState(null)


  const PostBusiness = async () => {
    const data = new FormData()
    data.append("firstname",fname)
    data.append("lastname",lname)
    data.append("email",email)
    data.append("phone_No",phno)
    data.append("business_Address",badd)
    data.append("type_of_business",tob)
    data.append("business_name",bname)
    data.append("business_info",bi)
    data.append("job_vacancies",jobv)
    data.append("business_motto",bm)
    data.append("year_of_establish",yoe)
    data.append("additional_info",addi)

    try {
      const response = await axios.post("https://localsphere.onrender.com/register-business", data, {
        headers: {
          'Content-Type': 'application/json'}
        });
      
      console.log(response);
      if (response.data.status === "success") {
        // Safely access and log the business ID
        if (response.data.data && response.data.data.insertedId) {
          console.log("Business ID:", response.data.data.insertedId);
          toast.success("Business registered successfully");
        } else {
          console.error("No _id found in result:", response.data.data);
          toast.warn("Business registered, but no ID was returned.");
        }
      } else {
        toast.error("Error registering business: " + response.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("There was an error registering the business.");
    }
  };

  return (
    <>
    <Header/>
    <div className="postbody">
    <div className="container pt-5">
      <div className="row">
        
          <div className="postcard">
            <div className="postcard-header text-white text-center">
              <h4>Register your Business</h4>
            </div>
            <div className="card-body d-flex">
                <div className="postleft">
              <form>
                <div className="form-row">
                  <div className="form-group ">
                    <p className="pb-0 mb-0 mt-3" htmlFor="firstName">First Name</p>
                    <input type="text" className="form-control" id="firstName" placeholder="First Name" onChange={(event)=>Setfname(event.target.value)} required/>
                  </div>
                  <div className="form-group ">
                    <p className="pb-0 mb-0 mt-3" htmlFor="lastName">Last Name</p>
                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={(event)=>Setlname(event.target.value)} required/>
                  </div>
                </div>
                <div className="form-group">
                  <p className="pb-0 mb-0 mt-3" htmlFor="email">Email</p>
                  <input type="email" className="form-control" id="email" placeholder="Email" onChange={(event)=>Setemail(event.target.value)}  required/>
                </div>
                <div className="form-group">
                  <p className="pb-0 mb-0 mt-3" htmlFor="phone">Phone</p>
                  <input type="tel" className="form-control" id="phone" placeholder="Phone" onChange={(event)=>Setphno(event.target.value)}  required/>
                </div>
                <div className="form-group">
                  <p className="pb-0 mb-0 mt-3" htmlFor="businessAddress">Business Address</p>
                  <input type="text" className="form-control" id="businessAddress" placeholder="Business Address" onChange={(event)=>Setbadd(event.target.value)}  required/>
                </div>
                <div className="form-group">
                  <p className="pb-0 mb-0 mt-3" htmlFor="businessCategory">Type of Business</p>
                  <select className="form-control" id="businessCategory" onChange={(event)=>Settob(event.target.value)}  required>
                    <option>Retail</option>
                    <option>Services</option>
                    <option>Manufacturing</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                  </select>
                </div>
                <div className="form-group">
                  <p className="pb-0 mb-0 mt-3" htmlFor="businessName">Business Name</p>
                  <input type="text" className="form-control" id="businessName" placeholder="Business Name" onChange={(event)=>Setbname(event.target.value)}  required/>
                </div>
                
                
              </form>
              </div>
              <div className="postright">
              <form>
                <div className="form-group">
                  <p className="mb-0 pb-1 mt-3" htmlFor="businessInfo">Business Info</p>
                  <textarea className="form-control" id="businessInfo" rows="3" placeholder="Business Info" onChange={(event)=>Setbi(event.target.value)}  required></textarea>
                </div>
                <div className="form-group">
                  <p className="mb-0 pb-1 mt-3" htmlFor="jobVacancies">Job Vacancies</p>
                  <textarea className="form-control" id="jobVacancies" rows="3" placeholder="Job Vacancies" onChange={(event)=>Setjobv(event.target.value)}  required></textarea>
                </div>
                <div className="form-group">
                  <p className="mb-0 pb-1 mt-3" htmlFor="businessMotto">Business Motto</p>
                  <input type="text" className="form-control" id="businessMotto" placeholder="Business Motto" onChange={(event)=>Setbm(event.target.value)}  required/>
                </div>
                <div className="form-group">
                  <p className="mb-0 pb-1 mt-3" htmlFor="yearOfEstablishment">Year of Establishment</p>
                  <input type="number" className="form-control" id="yearOfEstablishment" placeholder="Year of Establishment" onChange={(event)=>Setyoe(event.target.value)}  required/>
                </div>
                <div className="form-group">
                  <p className="mb-0 pb-1 mt-3" htmlFor="additionalInfo">Additional Info</p>
                  <textarea className="form-control" id="additionalInfo" rows="3" placeholder="Any other information" onChange={(event)=>Setaddi(event.target.value)}  required></textarea>
                </div>
                
              </form>
              </div>
              
            </div>
            <button type="submit" className="postbutton btn btn-primary btn-block" onClick={()=>PostBusiness()}>Submit</button>
             {/* ToastContainer to render the notifications */}
      <ToastContainer />
          </div>
       
          </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Post;
