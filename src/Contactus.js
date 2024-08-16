import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/post.css";
import Header from "./Header";
import Footer from "./Footer";
    
const Contactus = () => {
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
                      <p className="pb-0 mb-0 mt-3" htmlFor="businessID">Business ID</p>
                      <input type="text" className="form-control" id="businessID" placeholder="Business ID" />
                    </div>
                    <div className="form-group">
                      <p className="pb-0 mb-0 mt-3" htmlFor="businessCategory">Reason for Contact</p>
                      <select className="form-control" id="businessCategory">
                        <option>Technical Issue</option>
                        <option>Business Related Query</option>
                        <option>Customer Related Issue</option>
                        <option>Advertising Issue</option>
                        <option>Others</option>
                      </select>
                    </div>
                    <textarea cols="20" rows="5" placeholder='Describe your Query' className='mt-4 rounded-2'></textarea>
                  </form>
                  </div>
                  <div className="postright">
                    <h3>User</h3>
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
                      <p className="pb-0 mb-0 mt-3" htmlFor="User ID">User ID</p>
                      <input type="text" className="form-control" id="User ID" placeholder="User ID" />
                    </div>
                    <div className="form-group">
                      <p className="pb-0 mb-0 mt-3" htmlFor="businessCategory">Reason for Contact</p>
                      <select className="form-control" id="businessCategory">
                        <option>Technical Issue</option>
                        <option>Business Related Query</option>
                        <option>Customer Related Issue</option>
                        <option>Advertising Issue</option>
                        <option>Others</option>
                      </select>
                    </div>  
                    <textarea cols="20" rows="5" placeholder='Describe your Query' className='mt-4 rounded-2'></textarea>                  
                  </form>
                  </div>
                  
                </div>
                <button type="submit" className="postbutton btn btn-primary btn-block" onClick={()=>{alert("Query Request Submitted")}}>Submit</button>
              </div>
           
              </div>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contactus