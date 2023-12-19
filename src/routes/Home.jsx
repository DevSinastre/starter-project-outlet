import '../App.css';
import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const Home = () => {

    return (
        <div>
            <header>
                <img src={logo} className="App-logo" alt="logo" />
                {/* <Link to="/starter-project-outlet/about">Go to about</Link> */}
                <Link to="/starter-project-outlet">Go to Pokemons</Link>
            </header>
        </div>

    );
}

export default Home;