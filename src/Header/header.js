import React from 'react';
import "./header.css"

export const Header=()=>{
    return(
        <section className="header">
            <div className="header-container">
                <div className="header-name">
                    <h1><i className="bi bi-camera"></i>PhotoFolio</h1>
                </div>
                <div className="header-nav">
                    <nav>
                        <a>HOME</a>
                        <a>ABOUT</a>
                        <a>GALLERY</a>
                        <a>SERVICES</a>
                        <a>CONTACT</a>
                    </nav>
                </div>
                <div className="header-icons">
                    <div className='header-icon'>
                        <i className='bi bi-twitter'></i>
                        <i className='bi bi-facebook'></i>
                        <i className='bi bi-instagram'></i>
                        <i className='bi bi-linkedin' ></i>
                        <div className='header-list'>
                            <i className='bi bi-list'></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}