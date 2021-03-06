import React from 'react';
import ReactDOM from 'react-dom';
import '../css/App.css'

import Navbar from './Navbar'
import Footer from './Footer'

function App() {
    return (
        <div className="container">
           <Navbar />
           <h1> I am App Component . </h1>
           <Footer />
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
