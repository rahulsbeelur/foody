import { CDN_URL } from '../utils/constants';
import VEG from '../../static/veg-icon.png';
import NONVEG from '../../static/non-veg-icon.png';

const MenuCard = ({ info }) => {
    {
        info?.itemAttribute?.vegClassifier;
    }
    return (
        <div className="menu-card-body">
            <div className="item-info">
                <div>
                    <img
                        className="veg-icon"
                        src={info?.itemAttribute?.vegClassifier === 'VEG' ? VEG : NONVEG}
                        alt={info?.itemAttribute?.vegClassifier}
                    />
                    <div className="item-name">{info?.name}</div>
                    <div className="item-price">₹{info?.price / 100}</div>
                </div>
                <div className="item-description">{info?.description}</div>
            </div>
            <div className="res-menu-item-logo-container">
                <img
                    className="res-menu-item-logo"
                    src={CDN_URL + info?.imageId}
                    alt="No Image"></img>
            </div>
        </div>
    );
};

export default MenuCard;
