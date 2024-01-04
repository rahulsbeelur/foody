import RestaurantCard from './RestaurantCard';
import { useEffect, useState } from 'react';
import { getAllRestaurants } from '../services/url-giver';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const [noRestaurants, setNoRestaurants] = useState(false);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(getAllRestaurants());
        const jsonAllRestaurants = await data.json();
        setListOfRestaurants(
            jsonAllRestaurants.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
        );
        setFilteredRestaurants(
            jsonAllRestaurants.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle.restaurants
        );
    };

    const onlineStatus = useOnlineStatus();

    if (!onlineStatus)
        return <h1>OH OH!! You are offline. Please check your internet connection.</h1>;

    return (
        <div className="body">
            <div className="filter">
                <div>
                    <div className="search">
                        <input
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            disabled={listOfRestaurants.length === 0}
                        />
                        <button
                            onClick={() => {
                                const searchedRestaurants = listOfRestaurants.filter((res) =>
                                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                                );
                                setFilteredRestaurants(searchedRestaurants);
                                searchedRestaurants.length === 0
                                    ? setNoRestaurants(true)
                                    : setNoRestaurants(false);
                            }}
                            disabled={listOfRestaurants.length === 0}>
                            Search
                        </button>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => {
                            setFilteredRestaurants(listOfRestaurants);
                            setNoRestaurants(false);
                        }}
                        disabled={listOfRestaurants.length === 0}>
                        All Restaurants
                    </button>
                </div>
                <div>
                    <button
                        onClick={() => {
                            setFilteredRestaurants([]);
                            const filteredSetOfRestaurants = listOfRestaurants.filter(
                                (res) => res.info.avgRating > 4.3
                            );
                            setFilteredRestaurants(filteredSetOfRestaurants);
                            filteredRestaurants.length === 0
                                ? setNoRestaurants(true)
                                : setNoRestaurants(false);
                        }}
                        disabled={listOfRestaurants.length === 0}>
                        Top Rated Restaurants
                    </button>
                </div>
            </div>
            <div className="res-container">
                {noRestaurants ? (
                    <div className="no-restaurants-container">
                        <h2 className="no-restaurants-data">
                            Oops!! There are no restaurants for this search or filter.
                        </h2>
                    </div>
                ) : (
                    <>
                        {listOfRestaurants.length === 0 ? (
                            <Shimmer />
                        ) : (
                            <>
                                {filteredRestaurants.map((restaurant) => (
                                    <Link
                                        key={restaurant.info.id}
                                        to={'/restaurant/' + restaurant.info.id}
                                        className="custom-link">
                                        <RestaurantCard restData={restaurant} />
                                    </Link>
                                ))}
                            </>
                        )}
                    </>
                )}
            </div>
        </div>
    );
};

export default Body;
