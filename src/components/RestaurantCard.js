import { CDN_URL } from '../utils/constants';

const RestaurantCard = ({ restData }) => {
    return (
        <div className="res-card">
            <img className="res-logo" src={CDN_URL + restData?.cloudinaryImageId}></img>
            <h3>{restData?.name}</h3>
            <h4>{restData?.avgRatingString} stars</h4>
            <h4>{restData?.areaName}</h4>
            <h4>{restData?.costForTwo}</h4>
        </div>
    );
};

export default RestaurantCard;
