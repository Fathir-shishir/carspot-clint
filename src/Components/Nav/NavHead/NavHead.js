import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../../CustomLink/CustomLink';
import './NavHead.css'
const NavHead = () => {
    return (
        <div>
            <nav>
        <div className="nav-head bg-black">
          <div className="row col-md-12 ">
          
            <div className="col-md-6  ">
            <ul className='d-flex gap-4 justify-content-center align-items-center mb-0 p-2'>
              <li className='list-unstyled'>
              <i className="fa fa-heart-o text-decoration-none" aria-hidden="true"/> About
              </li>
              <li className='list-unstyled'>
              <i className="fa fa-folder-open-o" aria-hidden="true"></i> FAQS
              </li>
            </ul>
            </div>
            <div className="col-md-6">
                <ul className='d-flex gap-4 justify-content-center align-items-center mb-0 p-2'>
                <Link className='list-unstyled' to="/login"> <i className="fa fa-sign-in"></i> Log in</Link>
                <Link className='list-unstyled' to="/register"> <i className="fa fa-unlock"></i> Register</Link>
                
                </ul>
            </div>
          </div>
        </div>
      </nav>
        </div>
    );
};


export default NavHead;