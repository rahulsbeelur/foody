import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            'https://5777d66a-17ba-4c51-a4b0-8d6b031406a0.mock.pstmn.io/all-restaurants'
        );
        const jsonAllRestaurants = await data.json();
        setListOfRestaurants(jsonAllRestaurants.response);
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
                                (res) => res.avgRating > 4.5
                            );
                            setListOfRestaurants(filteredSetOfRestaurants);
                        }}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="res-container">
                {listOfRestaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} restData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;
