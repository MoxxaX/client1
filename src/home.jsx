import React from 'react';
import './styles/home.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {
  const navigate = useNavigate();
  const handleClick = (containerNumber) => {
  if (containerNumber === 1) {
    navigate('/contact');
  } else if (containerNumber === 2) {
    navigate('/product');
  } else if (containerNumber === 3) {
    navigate('/location');
  }


    // alert(`Container ${containerNumber} clicked`);
  };

  return (
    <div className="main-container">
      <div className="border-block left-border"></div>
      <div className="content">
        <header className="header">
          <h1>Peony</h1>
        </header>
        <div className="container-wrapper">
          <div className="container" onClick={() => handleClick(1)}>Contact</div>
          <div className="container" onClick={() => handleClick(2)}>Product</div>
          <div className="container" onClick={() => handleClick(3)}>Location</div>
        </div>
      </div>
      <div className="border-block right-border"></div>
    </div>
  );
};

export default Home;
