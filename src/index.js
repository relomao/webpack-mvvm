import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/home';

class App extends Component {
    render() {
        return (
            <div>
                <div className="home-text">hello, react</div>
                <Home />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)