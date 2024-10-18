import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/restaurants')
            .then(response => {
                console.log(response.data);
                setRestaurants(response.data);
            })
            .catch(error => {
                console.error('There was an error!', error);
            });
    }, []);


    return (
        <div>
            <h2>Restaurants</h2>
            {restaurants.map(restaurant => (
                <div key={restaurant.id}>
                    <h3>{restaurant.name}</h3>
                    <p>{restaurant.address}</p>
                    <Link to={`/restaurants/edit/${restaurant.id}`}>Edit</Link>
                </div>
            ))}
            <Link to="/restaurants/add">Add New Restaurant</Link>
        </div>
    );
}

export default RestaurantList;
