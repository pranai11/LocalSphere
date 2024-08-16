import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/post.css";
import Header from "./Header";
import Footer from "./Footer";

function Post() {
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
                    <input type="text" className="form-control" id="firstName" placeholder="First Name" />
                  </div>
                  <div className="form-group ">
                    <p className="pb-0 mb-0 mt-3" htmlFor="lastName">Last Name</p>
                    <input type="text" className="form-control" id="lastName" placeholder="Last Name" />
                  </div>
                </div>
                <div className="form-group">
                  <p className="pb-0 mb-0 mt-3" htmlFor="email">Email</p>
                  <input type="email" className="form-control" id="email" placeholder="Email" />
                </div>
                <div className="form-group">
                  <p className="pb-0 mb-0 mt-3" htmlFor="phone">Phone</p>
                  <input type="tel" className="form-control" id="phone" placeholder="Phone" />
                </div>
                <div className="form-group">
                  <p className="pb-0 mb-0 mt-3" htmlFor="businessAddress">Business Address</p>
                  <input type="text" className="form-control" id="businessAddress" placeholder="Business Address" />
                </div>
                <div className="form-group">
                  <p className="pb-0 mb-0 mt-3" htmlFor="businessCategory">Type of Business</p>
                  <select className="form-control" id="businessCategory">
                    <option>Retail</option>
                    <option>Services</option>
                    <option>Manufacturing</option>
                    <option>Finance</option>
                    <option>Healthcare</option>
                  </select>
                </div>
                <div className="form-group">
                  <p className="pb-0 mb-0 mt-3" htmlFor="businessName">Business Name</p>
                  <input type="text" className="form-control" id="businessName" placeholder="Business Name" />
                </div>
                
                
              </form>
              </div>
              <div className="postright">
              <form>
                <div className="form-group">
                  <p className="mb-0 pb-1 mt-3" htmlFor="businessInfo">Business Info</p>
                  <textarea className="form-control" id="businessInfo" rows="3" placeholder="Business Info"></textarea>
                </div>
                <div className="form-group">
                  <p className="mb-0 pb-1 mt-3" htmlFor="jobVacancies">Job Vacancies</p>
                  <textarea className="form-control" id="jobVacancies" rows="3" placeholder="Job Vacancies"></textarea>
                </div>
                <div className="form-group">
                  <p className="mb-0 pb-1 mt-3" htmlFor="businessMotto">Business Motto</p>
                  <input type="text" className="form-control" id="businessMotto" placeholder="Business Motto" />
                </div>
                <div className="form-group">
                  <p className="mb-0 pb-1 mt-3" htmlFor="yearOfEstablishment">Year of Establishment</p>
                  <input type="number" className="form-control" id="yearOfEstablishment" placeholder="Year of Establishment" />
                </div>
                <div className="form-group">
                  <p className="mb-0 pb-1 mt-3" htmlFor="additionalInfo">Additional Info</p>
                  <textarea className="form-control" id="additionalInfo" rows="3" placeholder="Any other information"></textarea>
                </div>
                
              </form>
              </div>
              
            </div>
            <button type="submit" className="postbutton btn btn-primary btn-block" onClick={()=>{alert("Successfully created")}}>Submit</button>
          </div>
       
          </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default Post;
