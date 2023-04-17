import React from 'react'
import {Link} from 'react-router-dom';
//import react bootstrap
import './Page.css';

const HomePage=()=>(
    <div className="d-flex justify-content-center text-white">
    <div className="page" id='background' >
       
        <div className="filter" id="gradient">


            {/* <!-- Content --> */}
            <div className="h-100 w-100 align-items-center">
                <div className="mt-5 p-4 text-center">
                    <div className="form-outline form-white my-4">
                        <input type="email" id="typeEmail" className="form-control form-control-lg" />
                        <label className="form-label text-white" >E-mail</label>
                    </div>

                    <div className="form-outline form-white my-4">
                        <input type="password" id="typePassword" className="form-control form-control-lg" />
                        <label className="form-label text-white">Password</label>
                    </div>

                    <a href="#" className="text-white my-4">Forgot password?</a>

                    <div className="d-grid my-4">
                      {/* <!-- Sign in button --> */}
                    <button className="btn btn-lg btn-outline-white btn-block mb-3" type="submit">Sign in</button>

                  </div>

                    {/* <!-- Register --> */}
                    <p>
                        Not registered?

                        {/* link create page to register button */}
                        <Link to="/create" className="text-white"><strong>Register</strong> </Link>
                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
)
 
export default HomePage;
 

