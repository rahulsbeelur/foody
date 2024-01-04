import RestaurantCard, { withRestaurantCardTopRestaurant } from './RestaurantCard';
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

    const PromotedRestaurantCard = withRestaurantCardTopRestaurant(RestaurantCard);

    if (!onlineStatus)
        return <h1>OH OH!! You are offline. Please check your internet connection.</h1>;
    return (
        <div className="body">
            <div className="filter flex  items-center gap-20">
                <div>
                    <div className="search flex items-center">
                        <input
                            type="text"
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            disabled={listOfRestaurants.length === 0}
                            className="border px-4 py-2 rounded-md focus:outline-none focus:border-blue-500 transition"
                            placeholder="Search Restaurants"
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
                            disabled={listOfRestaurants.length === 0}
                            className="bg-[#faebd7] text-black px-4 py-2 rounded-md focus:outline-none hover:bg-[#dcdcdc] transition shadow-md hover:shadow-none">
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
                        disabled={listOfRestaurants.length === 0}
                        className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md focus:outline-none hover:bg-gray-400 transition shadow-md hover:shadow-none">
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
                            filteredSetOfRestaurants.length === 0
                                ? setNoRestaurants(true)
                                : setNoRestaurants(false);
                        }}
                        disabled={listOfRestaurants.length === 0}
                        className="bg-gray-300 text-gray-700 px-6 py-2 rounded-md focus:outline-none hover:bg-gray-400 transition shadow-md hover:shadow-none">
                        Top Rated Restaurants
                    </button>
                </div>
            </div>

            <div className="res-container max-w-[1200px] mt-10 mx-auto">
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
                                        {restaurant.info.avgRating > 4.3 ? (
                                            <PromotedRestaurantCard restData={restaurant} />
                                        ) : (
                                            <RestaurantCard restData={restaurant} />
                                        )}
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
