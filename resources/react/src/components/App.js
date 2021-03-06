import React from 'react';
import ReactDOM from 'react-dom';
import './css/App.css'
function App() {
    return (
        <div className="container">
           <h1> I am App Component . </h1>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
