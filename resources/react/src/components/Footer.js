import React from 'react';
import airbnbIcon from '../assets/airbnb.svg'
const Footer = () => {
    return (
        <footer> 
            <div>
                <div className="top">
                    <div>
                        <div> 
                            <span> English </span> <span> <i class="arrow-down"></i> </span> 
                        </div>
                        <div> 
                            <span> INR </span> <span> <i class="arrow-down"></i> </span> 
                        </div>
                    </div>

                    <div> 
                        <ul>
                            <li>Airbnb</li>
                            <li>About us</li>
                            <li>Careers</li>
                            <li>Press</li>
                            <li>Policies</li>
                            <li>Help</li>
                            <li>Diversity & Belonging</li>
                        </ul>
                    </div>

                    <div> 
                        <ul>
                            <li>Discover</li>
                            <li>Trust & Safety</li>
                            <li>Travel Credit</li>
                            <li>Gidt Cards</li>
                            <li>Airbnb Citizen</li>
                            <li>Business Travel</li>
                            <li>Guidebooks</li>
                            <li>Airbnbmag</li>
                        </ul>
                    </div>

                    <div> 
                        <ul>
                            <li>Hosting</li>
                            <li>Why Host</li>
                            <li>Hospitality</li>
                            <li>Responsible Hosting</li>
                            <li>Community Center</li>
                        </ul>
                    </div>
                </div>
                <div className="bottom">
                    <div>
                        <ul>
                            <li> <img src={airbnbIcon} width="20px" /> </li>
                            <li> Airbnb, Inc. </li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li> Terms </li>
                            <li> Privacy </li>
                            <li> Site Map </li>
                            <li> <i class="fab fa-facebook-f"></i> </li>
                            <li> <i class="fab fa-twitter"></i> </li>
                            <li> <i class="fab fa-instagram"></i> </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer