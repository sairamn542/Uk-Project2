import React, { useState } from 'react';
import './faq.css';

function Faq() {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    const faqs = [
        { question: "What does the cleaning service include?", answer: "Our cleaning service includes dusting, vacuuming, mopping, and general tidying up." },
        { question: "How often should I schedule a cleaning?", answer: "It depends on your needs. We offer weekly, bi-weekly, and monthly cleaning options." },
        { question: "Do I need to be home during the cleaning?", answer: "No, you do not need to be home. Our team is fully trusted and will ensure your home is cleaned to your satisfaction." }
    ];

    return (
        <div className="faq-container">
            <h1 style={{color:' #007bb3',fontSize : '2rem'}}>Frequently Asked Questions</h1>
            {faqs.map((faq, index) => (
                <div key={index} className="accordion-item">
                    <div className="accordion-header" onClick={() => toggleAccordion(index)}>
                        {faq.question}
                        <span className={`icon ${activeIndex === index ? 'rotate' : ''}`}>▼</span>
                    </div>
                    <div className={`accordion-content ${activeIndex === index ? 'open' : ''}`}>
                        <p>{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Faq;
