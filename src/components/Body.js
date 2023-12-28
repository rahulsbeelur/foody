import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import { getAllRestaurants } from '../services/url-giver';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(getAllRestaurants());
        const jsonAllRestaurants = await data.json();
        setListOfRestaurants(
            jsonAllRestaurants.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants
        );
    };

    return (
        <div className="body">
            <div>Search</div>
            <div className="filter">
                <div>
                    <button onClick={() => fetchData()}>All Restaurants</button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            const filteredSetOfRestaurants = listOfRestaurants.filter(
                                (res) => res.avgRating > 4.0
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
                    <RestaurantCard key={restaurant.info.id} restData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
