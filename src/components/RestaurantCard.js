import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ restData }) => {
    const { cloudinaryImageId, name, avgRating, cuisines, costForTwo, sla, areaName } =
        restData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
            <h3>{name}</h3>
            <h4>{avgRating} stars</h4>
            <h4>{areaName}</h4>
            <h4>{costForTwo}</h4>
            <div className="delivery">
                <h3>{sla.slaString}</h3>
                <h4>{sla.lastMileTravelString}</h4>
            </div>
        </div>
    );
};

export default RestaurantCard;
