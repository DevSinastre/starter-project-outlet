import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div>
            <h2>About Page</h2>
            <main>
                <p>This section contains information about...</p>
                <Link to="/starter-project-outlet">back to home</Link>
            </main>
        </div>
    )
}

export default About;