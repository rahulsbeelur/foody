import { useState, useEffect } from 'react';
import { getRestaurantMenu } from '../services/url-giver';

const useRestaurantMenu = (resId) => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const data = await fetch(getRestaurantMenu() + resId);
        const jsonData = await data.json();
        setRestaurantMenu(jsonData.data);
    };

    return restaurantMenu;
};

export default useRestaurantMenu;
