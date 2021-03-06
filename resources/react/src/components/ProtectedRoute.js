import React from 'react';

import { Redirect, Route } from 'react-router-dom'
import * as auth from '../service/auth_service'; 


const ProtectedRoute = ({ component: Component, ...rest }) => {
    return (
        <Route 
            {...rest} 
            render={
                (props) => {
                    if (auth.isLoggedIn()) {
                        return <Component {...props} />
                    } else {
                        return <Redirect to={
                            {
                                pathname: '/login', 
                                state: {
                                    from: props.location
                                }
                            }
                        } />
                    }

                }
            }
        />
    )
}

export default ProtectedRoute