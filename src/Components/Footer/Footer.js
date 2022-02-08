import React from 'react';
import logo from "./img/white.svg"
import flag from "./img/flag.jpg"

import './Footer.css'

const Footer = () => {
    return (
        <div className='Footer-main'>
            <div className='Footer-body'>
            
                <div className="Footer-wrapper">
                <div className='Footer-container'>
                            <img className='logo-dukaan' src={logo} alt="" />
                        </div>
                    
                        
                        <div className='Footer-container'>
                        <ul  className='list-1'>
                            <li>
                                Contact
                            </li>
                            <li>
                                FAQ's
                            </li>
                        </ul>
                        </div>
                        <div className='Footer-container'>
                        <ul>
                            <li  className='list-2'>
                                Tutorials
                            </li>
                            <li>
                               Blog
                            </li>
                        </ul>
                        </div>
                        <div className='Footer-container'>
                        <ul className='list-3'>
                            <li>
                                Privacy
                            </li>
                            <li >
                                Banned items
                            </li>
                        </ul>
                        </div>
                        <div className='Footer-container'>
                        <ul  className='list-4'>
                            <li>
                                About
                            </li>
                            <li>
                                Jobs <a className='job' href="">3</a>
                            </li>
                        </ul>
                        </div>
                        <div className='Footer-container'>
                        <ul  className='list-5'>
                            <li>
                              Facebook
                            </li>
                            <li>
                            Twitter
                            </li>
                            <li>
                                LinkedIn
                            </li>
                        </ul>
                        </div>
                   
                
                </div>
               
                <hr />
                <div className='copright'> 
                    <p>Dukaan 2020, All rights reserved.</p>
                    <p>Made in  <img className="flag" src={flag} alt="" /></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
