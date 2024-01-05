import { CDN_URL } from '../utils/constants';
import VEG from '../../static/veg-icon.png';
import NONVEG from '../../static/non-veg-icon.png';

const MenuCard = ({ info }) => {
    return (
        <div className="menu-card-body shadow-lg hover:shadow-none hover:bg-[#dcdcdc]">
            <div className="item-info">
                <div>
                    <img
                        className="veg-icon"
                        src={info?.itemAttribute?.vegClassifier === 'VEG' ? VEG : NONVEG}
                        alt={info?.itemAttribute?.vegClassifier}
                    />
                    <div className="item-name">{info?.name}</div>
                    <div className="item-price">₹{info.price? info?.price / 100 : info.defaultPrice / 100}</div>
                </div>
                <div className="item-description">{info?.description}</div>
            </div>
            <div className="res-menu-item-logo-container">
                <img
                    className="res-menu-item-logo"
                    src={CDN_URL + info?.imageId}
                    alt=""></img>
                    <button className='p-1 px-3 text-sm rounded-md font-medium bg-white mt-[-12px] bottom-0 ml-[14px] text-green-600'>Add +</button>
            </div>
        </div>
    );
};

export default MenuCard;
