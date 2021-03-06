import React from 'react';
import {Link} from 'react-router-dom'

const Navbar = () => {
    return (
        <nav id="navbar"> 
            <div className="left-side">
                <div id="top-left-block"> 
                    <div> 
                        <i class="fas fa-search"></i>
                        Anywhere
                    </div>
                    <div> 
                        <i class="far fa-calendar"></i>
                        AnyTime
                    </div>
                    <div> 
                        <i class="far fa-user"></i>
                        1 guest 
                    </div>
                </div>
                <div>
                    <ul>
                        <li> <Link to="#" className="selected"> <span>For You</span> </Link> </li>
                        <li> <Link> <span>Home</span>  </Link> </li>
                        <li> <Link> <span>Experience</span>  </Link> </li>
                        <li> <Link> <span>Places</span>  </Link> </li>        
                    </ul>
                </div>
            </div>
            <div className="right-side">
                <ul>
                    <li> <Link> Become a host </Link> </li>
                    <li> <Link> Help </Link> </li>
                    <li> <Link> SignUp </Link> </li>
                    <li> <Link> Log In </Link> </li>
                </ul>

            </div>
        </nav>
    )
}

export default Navbar