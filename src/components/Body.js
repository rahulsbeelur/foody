import RestaurantCard from './RestaurantCard';
import { mockData } from '../utils/mockData';

const Body = () => {
    return (
        <div className="body">
            <div>Search</div>
            <div className="res-container">
                {mockData.restaurants.map((restaurant) => (
                    <RestaurantCard key={restaurant.info?.id} restData={restaurant.info} />
                ))}
            </div>
        </div>
    );
};

export default Body;
