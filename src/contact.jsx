import React from 'react';
import './styles/contact.css';
import {Link} from 'react-router-dom';
function Contact() {
  
    return (
      <>
        <div className='main-container'>
          <div className="border-block left-border"></div>
            
            <div className="content">
              <Link to="/">
                <i className='bx bx-home icon-top-left'></i>
              </Link>
              <header className="header">
                <h1>Peony</h1>
              </header>
                <a href="https://api.whatsapp.com/send?phone=628973003281">order here</a>
                <a href="https://www.instagram.com/peonyflorist.plm/">this is our social media</a>
              

            </div>

          <div className="border-block right-border"></div>

        </div>
      </>
    );
  }

export default Contact;
