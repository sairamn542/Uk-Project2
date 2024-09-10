import React from 'react';
import './common.css'; 

function CommonContent({ heading }) {
  return (
    <div>
      <div className="heading-container">
        <h1>{heading}</h1>
      </div>
      <div className="container">
        <div className="item">
          <i className="fa-regular fa-handshake"></i>
          <h3>Trusted Staff</h3>
          <p>All our cleaners have previous experience and have passed necessary checks.</p>
        </div>
        <div className="item">
          <i className="fa-regular fa-calendar"></i>
          <h3>Flexible slots</h3>
          <p>Including late nights, weekends, and bank holidays.</p>
        </div>
        <div className="item">
          <i className="fa-solid fa-coins"></i>
          <h3>Flat hourly rates</h3>
          <p>No surprise charges – what we quote is what you’ll pay.</p>
        </div>
        <div className="item">
          <i className="fa-brands fa-wpforms"></i>
          <h3>Free quotation</h3>
          <p>Fill in the contact form or call us on the phone for a free quote.</p>
        </div>
      </div>
    </div>
  );
}

export default CommonContent;
