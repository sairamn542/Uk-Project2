import React from 'react';
import { useNavigate } from 'react-router-dom';
import './header.css';

function Header() {
    const navigate = useNavigate();

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <header>
            <nav>
                <div>
                    <img src="Logo-02.svg" alt="Logo" height={90} width={180} />
                </div>
                <input type="checkbox" id="menu-toggle" className="menu-toggle" />
                <label htmlFor="menu-toggle" className="hamburger">
                    <span className='bi bi-list'></span>
                </label>
                <label htmlFor="menu-toggle" className="close">
                    <span className='bi bi-x'></span>
                </label>
                <div className='content'>
                    <div className='service'>
                        Service <span className='bi bi-caret-down-fill'></span>
                        <ul>
                            <li onClick={() => handleNavigation('/carpet-cleaning')}>CARPET CLEANING</li>
                            <li onClick={() => handleNavigation('/commercial-cleaning')}>COMMERCIAL CLEANING</li>
                            <li onClick={() => handleNavigation('/domestic-cleaning')}>DOMESTIC CLEANING</li>
                            <li onClick={() => handleNavigation('/end-of-tenancy-cleaning')}>END OF TENANCY CLEANING</li>
                        </ul>
                    </div>
                    <div onClick={() => handleNavigation('/book-cleaner')} className='service'>Book a cleaner</div>
                    <div onClick={() => handleNavigation('/book-page')} className='service'>Contact</div>
                </div>
            </nav>
        </header>
    );
}

export default Header;
