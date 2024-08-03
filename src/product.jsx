import React from 'react';
import {Link} from 'react-router-dom';
import "./styles/product.css"


const Product = () => {
  return(
    <div className='main-container'>
          <div className="border-block left-border"></div>
            
            <div className="content">
              <Link to="/">
                <i className='bx bx-home icon-top-left'></i>
              </Link>
              <header className="header">
                <h1>Peony</h1>
              </header>
              <h2>
                here's the sample product
              </h2>
              <div className="container-wrapper">
                <div className="container" onClick={() => handleClick(1)}>product 1</div>
                <div className="container" onClick={() => handleClick(2)}>Product 2</div>
                <div className="container" onClick={() => handleClick(3)}>Product 3</div>
                <div className="container" onClick={() => handleClick(4)}>Product 4</div>
                <div className="container" onClick={() => handleClick(5)}>Product 5</div>
                <div className="container" onClick={() => handleClick(6)}>Product 6</div>

              </div>
            </div>
            

          <div className="border-block right-border"></div>

        </div>
  );
};

export default Product;
