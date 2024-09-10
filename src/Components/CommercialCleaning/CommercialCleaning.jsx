import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function CommercialCleaning() {
  const navigate = useNavigate();
  return (
    <div>
        <div className="domestic-container">
          <div className="text-container">
            <h1 style={{fontSize : '2rem'}}>Professional Commercial Cleaning Service in Birmingham</h1>
            <p>
            Looking for a commercial cleaning service company in Birmingham or office cleaners who deliver exceptional results? Look no further! Our commercial cleaning service in Birmingham offers the most comprehensive solutions tailored to your needs, whether you require routine office cleaning services or specialized tasks like commercial window cleaning or <Link to="/end-of-tenancy-cleaning">move-out cleaning service.</Link> <br /><br />

Our experienced team ensures your workspace shines, from cleaning vinyl floors to rejuvenating office carpets. Trust our commercial cleaning company to keep your workplace pristine and inviting, so you can focus on what you do best.
            </p>
            <div>
              <div><i class="fa-solid fa-check"></i><span>Disinfection and sanitisation</span></div>
              <div><i class="fa-solid fa-check"></i><span>Vacuum cleaning, dusting, mopping</span></div>
              <div><i class="fa-solid fa-check"></i><span>Kitchen cleaning</span></div>
              <div><i class="fa-solid fa-check"></i><span>Bin bag replacement</span></div>
              <div><i class="fa-solid fa-check"></i><span>Office equipment dusting and cleaning</span></div>
              <div><i class="fa-solid fa-check"></i><span>Watering the plants (on request)</span></div>
              <div></div>
            </div>
            <button className="btn btn-primary mt-5" onClick={()=>navigate("/book-cleaner")}>Book now</button>
          </div>
          <div className="image-container">
            <img src="commercial.webp" alt="domestic" height={700} width={400} />
          </div>
        </div>
    </div>
  )
}

export default CommercialCleaning