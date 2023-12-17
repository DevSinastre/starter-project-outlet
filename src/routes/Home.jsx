import '../App.css';
import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <header>
                <img src={logo} className="App-logo" alt="logo" />
                <Link to="/about">Go to about</Link>
            </header>
        </div>

    );
}

export default Home;