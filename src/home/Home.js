import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h2>Home Page</h2>
            <Link to="/restaurants">View Restaurants</Link>
        </div>
    );
}

export default Home;
