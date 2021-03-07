import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route  } from "react-router-dom";

import '../css/App.css'
import Navbar from './Navbar'
import Footer from './Footer'

import LandingPage from './pages/LandingPage'
import DetailPage from './pages/DetailPage'
import SearchPage from './pages/SearchPage'

import Login from './pages/Login'
import Register from './pages/Register'
import PropertyAdd from './pages/PropertyAdd'
import PropertyDetail from './pages/PropertyDetail'


import ProtectedRoute from './ProtectedRoute'


function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                    <div className="app-container">
                    <Switch> 
                        <Route path="/" component={LandingPage} exact={true} />
                        <Route path="/detail/:id" exact component={DetailPage} />
                        <Route path="/search" component={SearchPage}  />
                        <Route path="/login" component={Login}  />
                        <Route path="/register" component={Register}  />
                        <ProtectedRoute path="/property-add" component={PropertyAdd}  />
                        <Route path="/property/:id" component={PropertyDetail}  />
                    </Switch>
                    </div>
                <Footer />
            </div>
        </Router>
        
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
