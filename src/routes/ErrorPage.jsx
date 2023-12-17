import '../App.css';
import React from 'react';
import logo from '../logo.svg';
import { Link } from 'react-router-dom';

const ErrorPage = () => {

    return (
        <div>
            <h1>Error Page</h1>
            <Link to="/starter-project-outlet">Go to Home</Link>
        </div>

    );
}

export default ErrorPage;