import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id="navbar"> 
            <div className="left-side">
                <div id="top-left-block"> 
                    <div> 
                        <i className="fas fa-search"></i>
                        Anywhere
                    </div>
                    <div> 
                        <i className="far fa-calendar"></i>
                        AnyTime
                    </div>
                    <div> 
                        <i className="far fa-user"></i>
                        1 guest 
                    </div>
                </div>
                <div>
                    <ul>
                        <li> <Link to="#" className="selected"> <span>For You</span> </Link> </li>
                        <li> <Link to="/" > <span>Home</span>  </Link> </li>
                        <li> <Link to="#" > <span>Experience</span>  </Link> </li>
                        <li> <Link to="#" > <span>Places</span>  </Link> </li>        
                    </ul>
                </div>
            </div>
            <div className="right-side">
                <ul>
                    <li> <Link to="/property-add"> Become a host </Link> </li>
                    <li> <Link to="#"> Help </Link> </li>
                    <li> <Link to="/register"> SignUp </Link> </li>
                    <li> <Link to="/login"> Log In </Link> </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar