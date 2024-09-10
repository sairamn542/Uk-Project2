import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './cleaning.css';

function Clining() {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="heading">
        <h2>Our Cleaning Services</h2>
        <h5>Committed to providing professional, reliable cleaning services to both residential and commercial customers throughout the Birmingham metropolitan region.</h5>
      </div>

      <div className="card-container">
        <div className="card">
          <div className="card-image">
            <img src="DomesticMain.webp" alt="Domestic Cleaning 1" />
          </div>
          <div className="card-content">
            <Link to="/domestic-cleaning" className="card-title">Domestic Cleaning Service 1</Link>
            <p>Provide comprehensive home cleaning solutions through skilled home cleaners.</p>
          </div>
          <button className="button" onClick={() => navigate('/domestic-cleaning')}>
            Check Details
            <i className="bi bi-arrow-right-circle"></i>
          </button>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="CommercialMain.webp" alt="Commercial Cleaning" />
          </div>
          <div className="card-content">
            <Link to="/commercial-cleaning" className="card-title">Commercial Cleaning Service</Link>
            <p>Comprehensive commercial cleaning solutions for businesses.</p>
          </div>
          <button className="button" onClick={() => navigate('/commercial-cleaning')}>
            Check Details
            <i className="bi bi-arrow-right-circle"></i>
          </button>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="carpet.webp" alt="Carpet Cleaning" />
          </div>
          <div className="card-content">
            <Link to="/carpet-cleaning" className="card-title">Carpet Cleaning Service</Link>
            <p>Professional carpet cleaning services with expert care.</p>
          </div>
          <button className="button" onClick={() => navigate('/carpet-cleaning')}>
            Check Details
            <i className="bi bi-arrow-right-circle"></i>
          </button>
        </div>

        <div className="card">
          <div className="card-image">
            <img src="EndOfTenancyMain.webp" alt="End of Tenancy Cleaning" />
          </div>
          <div className="card-content">
            <Link to="/end-of-tenancy-cleaning" className="card-title">End of Tenancy Cleaning Service</Link>
            <p>End-of-tenancy cleaning for property managers and tenants.</p>
          </div>
          <button className="button" onClick={() => navigate('/end-of-tenancy-cleaning')}>
            Check Details
            <i className="bi bi-arrow-right-circle"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Clining;
