import { CORS_PROXY } from '../utils/constants';

export const getAllRestaurants = () => {
    return (
        CORS_PROXY +
        encodeURIComponent(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9783692&lng=77.6408356&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        )
    );
};

export const getRestaurantMenu = () => {
    return (
        CORS_PROXY +
        encodeURIComponent(
            'https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9783692&lng=77.6408356&restaurantId='
        )
    );
};
