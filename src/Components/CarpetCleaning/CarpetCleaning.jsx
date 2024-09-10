import React from 'react'
import  './carpet.css'
import { Link, useNavigate } from 'react-router-dom'
function CarpetCleaning() {
  const navigate = useNavigate();
  return (
    <div>
        <div className="domestic-container">
                <div className="text-container">
                    <h1 style={{fontSize : '2rem'}}>Commercial Cleaners You Can Rely on</h1>
                    <p>
                        For immaculate house carpet cleaning service in Birmingham, look no further than our team of professional carpet cleaners. Specializing in deep cleaning carpets, we employ state-of-the-art steam cleaning methods to ensure a thorough and effective service. Our local carpet cleaners are dedicated to revitalizing your home’s carpets, leaving them fresh, sanitized, and looking like new. Trust us for all your <Link to='/domestic-cleaning'>domestic cleaning</Link> needs, and experience the difference of our expert touch.
                    </p>
                    <div>
                    <div><i class="fa-solid fa-check"></i><span>We use high quality equipment</span></div>
                    <div><i class="fa-solid fa-check"></i><span>Leave your carpets looking and smelling brand new</span></div>
                    <div><i class="fa-solid fa-check"></i><span>Any carpet size and thickness</span></div>
                    <div></div>
                    </div>
                    <button className="btn btn-primary mt-5" onClick={()=>navigate("/book-cleaner")}>Book now</button>
                </div>
                <div className="image-container">
                    <img src="carpet.webp" alt="domestic" height={700} width={400} />
                </div>
            </div>
    </div>
  )
}

export default CarpetCleaning