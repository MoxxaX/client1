import React from 'react';
import './styles/location.css';
import {Link} from 'react-router-dom';

function Location() {
  
    return (
      <div className="main-container">
        <div className="border-block left-border"></div>
        <div className="content">
          <header className="header">
            <Link to="/">
              <i className='bx bx-home icon-top-left'></i>
            </Link>
            <h1>Peony</h1>
          </header>
          <div className="">
          <h1>Find us at!</h1>
          <h3>Jl. Mayor Salim Batubara</h3>
          </div>
        </div>
        <div className="border-block right-border"></div>
      </div>
    );
  }

export default Location;
