import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import CustomLink from '../../CustomLink/CustomLink';
import './NavHead.css'
const NavHead = () => {
  const [user, loading, error] = useAuthState(auth);
  
  const handelSignOut = ()=>{
    signOut(auth);
  }
    return (
        <div>
            <nav>
        <div className="nav-head bg-black">
          <div className="row col-md-12 ">
          
            <div className="col-md-6  ">
            <ul className='d-flex gap-4 justify-content-center align-items-center mb-0 p-2'>
              <Link to="/about" className='list-unstyled'>
              <i className="fa fa-heart-o text-decoration-none" aria-hidden="true"/> About
              </Link>
              <Link className='list-unstyled text-white' to="/blogs"> <i className="fa fa-folder-open-o"></i> Blogs</Link>
            </ul>
            </div>
            <div className="col-md-6">
                <ul className='d-flex gap-4 justify-content-center align-items-center mb-0 p-2'>
                
                {  user? 
                  <button className='btn btn-link text-white text-decoration-none' onClick={handelSignOut}>
                  <i className="fa fa-sign-out"></i>
                  SignOut <span className='ml-2'>({user.displayName})</span>
                  </button>
                :
                  <Link className='list-unstyled text-white' to="/login"> <i className="fa fa-sign-in"></i> Log in</Link>
                  }
                <Link className='list-unstyled text-white text-decoration-none'  to="/register"> <i className="fa fa-unlock"></i> Register</Link>
                
                </ul>
            </div>
          </div>
        </div>
      </nav>
        </div>
    );
};


export default NavHead;