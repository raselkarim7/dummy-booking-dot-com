import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route  } from "react-router-dom";

import '../css/App.css'
import Navbar from './Navbar'
import Footer from './Footer'

import LandingPage from './LandingPage'
import DetailPage from './DetailPage'
import SearchPage from './SearchPage'

import Login from './Login'
import Register from './Register'


import ProtectedRoute from './ProtectedRoute'


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                    <Switch> 
                        <Route path="/" component={LandingPage} exact={true} />
                        <Route path="/detail/:id" exact component={DetailPage} />
                        <ProtectedRoute path="/search" component={SearchPage}  />
                        <Route path="/login" component={Login}  />
                        <Route path="/register" component={Register}  />

                    </Switch>
                <Footer />
            </div>
        </Router>
        
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
