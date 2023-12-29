import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getRestaurantMenu } from '../services/url-giver';
import Shimmer from './Shimmer';
import { CDN_URL } from '../utils/constants';

const RestaurantMenu = () => {
    const [restaurantMenu, setRestaurantMenu] = useState(null);
    const { resId } = useParams();

    useEffect(() => {
        fetchMenuData();
    }, []);

    const fetchMenuData = async () => {
        const data = await fetch(getRestaurantMenu() + resId);
        const jsonData = await data.json();
        setRestaurantMenu(jsonData.data);
    };

    if (restaurantMenu === null) return <Shimmer />;

    const {
        name,
        avgRating,
        areaName,
        costForTwoMessage,
        cuisines,
        totalRatingsString,
        cloudinaryImageId,
        veg,
        expectationNotifiers,
        sla
    } = restaurantMenu?.cards[0]?.card?.card?.info;

    const { itemCards } =
        restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="menu-body">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <div className="res-name">{name}</div>
            <div className="res-menu-cuisines">{cuisines.join(', ')}</div>
            <div>
                <div className="res-area">{areaName},</div>
                <div>{sla.lastMileTravelString}</div>
            </div>
            <div>
                <div>{expectationNotifiers[0].enrichedText.replace(/<\/?b>/g, '')}</div>
            </div>
            <div className="res-menu">
                {itemCards.map((res) => {
                    return <div key={res?.card?.info?.id}>{res?.card?.info?.name}</div>;
                })}
            </div>
        </div>
    );
};

export default RestaurantMenu;
