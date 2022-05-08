import React from 'react';
import CustomLink from '../../CustomLink/CustomLink';
import './NavBar.css'
const NavBar = () => {
    return (
        <div>
            <nav>
                <div className="row col-md-12 p-4 d-flex  justify-content-between">
                    <div className="col-md-6 ">
                       <img src="https://templates.scriptsbundle.com/carspot/demos/images/logo.png" alt="" /> 
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <ul className='d-flex gap-4  align-items-center'>
                            <CustomLink className=' list-unstyled' to="/home">Home</CustomLink>
                            <CustomLink className='list-unstyled' to="/cars">CARS</CustomLink>
                            <CustomLink className=' list-unstyled' to="/addItems">ADD ITEMS</CustomLink>
                            <CustomLink className=' list-unstyled' to="/about">ABOUT</CustomLink>
                            <CustomLink className=' list-unstyled' to="/myitems">MyItems</CustomLink>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavBar;