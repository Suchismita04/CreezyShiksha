import React from 'react';
import '../styles/Footer.css'

const Footer = () => {
    return (
        <footer className="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
            <div className="container py-4 py-md-5 px-4 px-md-3 text-body-secondary">
                <div className="row">
                    <div className='col-lg-3 mb-3'>
                        <ul>
                            <li>Empowering Minds, Illuminating Futures. © CreezyShiksha 2024</li>
                            <li>Inspiring Curiosity, Fueling Education. © CreezyShiksha 2024</li>
                            <li>Unlocking Potential, Shaping Futures. © CreezyShiksha 2024</li>
                            <li>Dedicated to Lifelong Learning. © CreezyShiksha 2024</li>
                            <li>Igniting Minds, Enriching Souls. © CreezyShiksha 2024</li>
                        </ul>
                    </div>
                    {/* Add more columns if needed */}
                </div>
            </div>
        </footer>
    );
}

export default Footer;
