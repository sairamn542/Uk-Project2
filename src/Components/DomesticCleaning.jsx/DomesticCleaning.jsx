import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function DomesticCleaning() {
  const navigate = useNavigate();
  return (
    <div>
        <div className="domestic-container">
          <div className="text-container">
            <h1 style={{fontSize : '2rem'}}>One-off or Regular Domestic Cleaning Service in Birmingham</h1>
            <p>
              Are you interested in optimizing your home environment into a perfect retreat? Choose the top-rated domestic cleaning service in Birmingham to achieve a fresh, heavenly home. Our highly professional team of residential cleaners is here for you. Through a diligent approach to housekeeping, we ensure that all areas of the property are maintained to the highest standards of cleanliness.<br />

              As a leading provider of home cleaning services in Birmingham, we take great pride in ensuring each client receives customized solutions meeting their unique requirements. We offer a comprehensive range of cleaning services to meet all of your needs.<br />

              From routine home maintenance to <Link to='/carpet-cleaning'>carpet clean</Link> and mold cleanup, our team can handle any task. Whether you require an extensive one-time deep clean or rely on us for private cleaning services and upkeep, our dedicated professionals are available to assist.<br />

              Experience the quality service provided by our housekeeping staff and see why we are the preferred solution of domestic cleaning companies in the area of Birmingham. Contact us for a customized proposal and discover our competitive home cleaning rates.
            </p>
            <div>
              <div><i class="fa-solid fa-check"></i><span>Oven and microwave cleaning</span></div>
              <div><i class="fa-solid fa-check"></i><span>Leave your carpets looking and smelling brand new</span></div>
              <div><i class="fa-solid fa-check"></i><span>Leave your carpets looking and smelling brand new</span></div>
              <div><i class="fa-solid fa-check"></i><span>Leave your carpets looking and smelling brand new</span></div>
              <div><i class="fa-solid fa-check"></i><span>Any carpet size and thickness</span></div>
              <div></div>
            </div>
            <button className="btn btn-primary mt-5" onClick={()=>navigate("/book-cleaner")}>Book now</button>
          </div>
          <div className="image-container">
            <img src="domestic.webp" alt="domestic" height={700} width={400} />
          </div>
        </div>
    </div>
  )
}

export default DomesticCleaning