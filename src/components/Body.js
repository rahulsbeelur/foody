import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import { getAllRestaurants } from '../services/url-giver';
import Shimmer from './Shimmer';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(getAllRestaurants());
        const jsonAllRestaurants = await data.json();
        setListOfRestaurants(
            jsonAllRestaurants.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
        );
    };

    return listOfRestaurants.length === 0 ? (
        <div className="body">
            <div>Search</div>
            <div className="filter">
                <div>
                    <button disabled>All Restaurants</button>
                </div>
                <div>
                    <button disabled>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="res-container">
                <Shimmer />
            </div>
        </div>
    ) : (
        <div className="body">
            <div>Search</div>
            <div className="filter">
                <div>
                    <button
                        onClick={() => {
                            setListOfRestaurants([]);
                            fetchData();
                        }}>
                        All Restaurants
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            setListOfRestaurants([]);
                            const filteredSetOfRestaurants = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.3
                            );
                            setListOfRestaurants(filteredSetOfRestaurants);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} restData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
