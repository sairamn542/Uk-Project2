import React from 'react';
import './section.css';
import { useNavigate } from 'react-router-dom';

function Section() {
    let navigate = useNavigate();
    return (
        <div className="section-container">
            <section className="section-content">
                <div className="video-container">
                    <video src="cleanmain.mp4" autoPlay muted loop controls={false} className="video-bg" />
                    <div className="full-width-overlay"></div>
                    <div className="overlay-content">
                        <h1 className="main-heading">Professional House Cleaning Services in Birmingham</h1>
                        <p className="subtext">We offer top-notch cleaning services to keep your home spotless and welcoming.</p>
                        <div className="buttons-container">
                            <button className="action-button" onClick={() => navigate('/book-cleaner')}>
                                Book a cleaner online
                            </button>
                            <button className="call-button">
                                <a href="tel:+1234567890">Call us</a>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Section;
