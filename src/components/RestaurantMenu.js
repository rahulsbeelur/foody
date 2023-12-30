import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { getRestaurantMenu } from '../services/url-giver';
import { CDN_URL } from '../utils/constants';
import MenuCard from './MenuCard';
import star from '../../static/rating.png';
import MenuShimmer from './MenuShimmer';
import { Navigate } from 'react-router-dom';

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

    if (restaurantMenu === null) return <MenuShimmer />;

    const {
        name,
        avgRating,
        areaName,
        costForTwoMessage,
        cuisines,
        cloudinaryImageId,
        expectationNotifiers,
        sla
    } = restaurantMenu?.cards[0]?.card?.card?.info;

    const { itemCards } =
        restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    if (!itemCards) {
        return <Navigate to="/empty-menu"></Navigate>;
    }

    return (
        <div className="menu-body">
            <img className="res-menu-logo" src={CDN_URL + cloudinaryImageId}></img>
            <div className="res-name-container">
                <div>
                    <div className="res-name">{name}</div>
                    <div className="res-menu-cuisines">{cuisines.join(', ')}</div>
                    <div className="res-area-container">
                        <div className="res-area">{areaName},</div>
                        <div className="res-distance">{sla.lastMileTravelString}</div>
                    </div>
                </div>
                <div className="rating">
                    <img className="rating-icon" src={star} alt="" />
                    <div>{avgRating} Stars</div>
                </div>
            </div>
            <div className="res-expectations">
                <div>{expectationNotifiers[0].enrichedText.replace(/<\/?b>/g, '')}</div>
                <div className="cost-for-two">{costForTwoMessage}</div>
            </div>
            <h2 className="menu">Menu</h2>
            <div className="res-menu">
                {itemCards.map((res) => {
                    return <MenuCard key={res?.card?.info?.id} info={res?.card?.info}></MenuCard>;
                })}
            </div>
        </div>
    );
};

export default RestaurantMenu;
