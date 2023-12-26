import RestaurantCard from './RestaurantCard';
import { mockData } from '../utils/mockData';
import { useState } from 'react';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(mockData);
    return (
        <div className="body">
            <div>Search</div>
            <div className="filter">
                <div>
                    <button onClick={() => setListOfRestaurants(mockData)}>All Restaurants</button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            const filteredSetOfRestaurants = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.5
                            );
                            console.log(filteredSetOfRestaurants);
                            setListOfRestaurants(filteredSetOfRestaurants);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info?.id} restData={restaurant.info} />
                ))}
            </div>
        </div>
    );
};

export default Body;
