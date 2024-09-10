import React from 'react';
import './sample.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function DomesticWithCommercial() {
    const navigate = useNavigate();
    return (
        <div>
            <div className="domestic-container">

                <div className="image-container">
                    <img src="domestic.webp" alt="domestic" height={700} width={400} />
                </div>
                <div className="text-container">
                    <h1>Domestic Cleaning Services in Birmingham</h1>
                    <p>
                        Are you tired of coming home to a messy house?
                        <br /><br />
                        At Forefront All Cleaning, we offer a full suite of cleaning solutions to meet all of your residential needs. Whether you require regularly scheduled <Link to="/domestic-cleaning">home cleaners</Link> or an occasional deep clean, our experienced team takes great pride in consistently delivering for Forefront All Cleaning, one of the enduring cleaning agencies in Birmingham. Do you find yourself with less time available for household chores? Allow our professional cleaners to assume responsibility for cleaning duties.
                        <br /><br />
                        As the premier cleaning services in Birmingham, we come highly recommended by our satisfied customers, cost-effective, and reliable cleaning services. With over a decade of expertise in the industry, our cleaning services in Birmingham have earned wide acclaim for exceptional performance.
                        <br /><br />
                        Among the many cleaning companies in Birmingham, Forefront All Cleaning stands out as the premier choice. Regarding pricing, our rates remain highly competitive relative to industry averages in Birmingham. Choose Forefront All Cleaning to experience superior house cleaning service at an excellent value.
                    </p>
                    <button className="btn btn-primary" onClick={()=>navigate("/domestic-cleaning")}>Book Domestic Cleaning</button>
                </div>
            </div>
            <div className="domestic-container">
                <div className="text-container">
                    <h1>Commercial Cleaners You Can Rely on</h1>
                    <p>
                        Are you tired of coming home to a messy house?
                        <br /><br />
                        At Forefront All Cleaning, we offer a full suite of cleaning solutions to meet all of your residential needs. Whether you require regularly scheduled home cleaners or an occasional deep clean, our experienced team takes great pride in consistently delivering for Forefront All Cleaning, one of the enduring cleaning agencies in Birmingham. Do you find yourself with less time available for household chores? Allow our professional cleaners to assume responsibility for cleaning duties.
                        <br /><br />
                        As the premier cleaning services in Birmingham, we come highly recommended by our satisfied customers, cost-effective, and reliable cleaning services. With over a decade of expertise in the industry, our cleaning services in Birmingham have earned wide acclaim for exceptional performance.
                        <br /><br />
                        Among the many cleaning companies in Birmingham, Forefront All Cleaning stands out as the premier choice. Regarding pricing, our rates remain highly competitive relative to industry averages in Birmingham. <Link to='/book-cleaner'>Choose Forefront All Cleaning</Link> to experience superior house cleaning service at an excellent value.
                    </p>
                    <button className="btn btn-primary" onClick={()=>navigate("/commercial-cleaning")}>Book commercial Cleaning</button>
                </div>
                <div className="image-container">
                    <img src="commercial.webp" alt="domestic" height={700} width={400} />
                </div>
            </div>
        </div>
    );
}

export default DomesticWithCommercial;
