import { useParams } from 'react-router';
import { CDN_URL } from '../utils/constants';
import star from '../../static/rating.png';
import MenuShimmer from './MenuShimmer';
import { Navigate } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import RestaurantMenucategory from './RestaurantMenuCategory';

const RestaurantMenu = () => {
    const { resId } = useParams();

    const restaurantMenu = useRestaurantMenu(resId);

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

    const categories = restaurantMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item) => item.card.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

    if (!categories) {
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
                {expectationNotifiers? <div>{expectationNotifiers[0]?.enrichedText.replace(/<\/?b>/g, '')}</div> : ''}
                <div className="cost-for-two">{costForTwoMessage}</div>
            </div>
            <h2 className="menu">Menu</h2>
            {categories.map((category) => <RestaurantMenucategory key={category?.card?.card?.type} data={category?.card?.card}/>)}
        </div>
    );
};

export default RestaurantMenu;
