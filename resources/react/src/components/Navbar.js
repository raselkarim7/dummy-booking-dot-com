import React from 'react';
import {Link} from 'react-router-dom'
import * as auth_service from '../service/auth_service'
import storage from '../utils/storage'

import http_service from '../service/http_service'
import { useHistory } from "react-router-dom";

const Navbar = () => {
    let history = useHistory()
    const handleLogout = async () => {
        try {
            const response = await http_service.get('/auth/logout')
            console.log('response === ', response)
            
            storage.token.removeToken(); 
            storage.user.removeUser(); 
            history.push('/')
            history.go(0)

        } catch (error) {
            
        }
    }
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
                        <li> <Link to="/search" > <span>Experience</span>  </Link> </li>
                        <li> <Link to="/search" > <span>Places</span>  </Link> </li>        
                    </ul>
                </div>
            </div>
            <div className="right-side">
                <ul>
                    <li> <Link to="/property-add"> Become a host </Link> </li>
                    <li> <Link to="#"> Help </Link> </li>
                    <li> <Link to="/register"> SignUp </Link> </li>
                    {
                        (auth_service.isLoggedIn() === false) && <li> <Link to="/login"> Log In </Link> </li>
                    }

                    {
                        (auth_service.isLoggedIn() === true) && <li onClick={handleLogout}> <Link to="/#"> Logout </Link> </li>
                    }
                </ul>

            </div>
        </nav>
    )
}

export default Navbar