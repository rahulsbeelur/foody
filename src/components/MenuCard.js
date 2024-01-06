import { CDN_URL } from '../utils/constants';
import VEG from '../../static/veg-icon.png';
import NONVEG from '../../static/non-veg-icon.png';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, deleteItem } from '../utils/cartSlice';

const MenuCard = ({ info }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item));
    }
    const handleDeleteItem = (item) => {
        dispatch(deleteItem(item));
    }
    const itemInCard = useSelector((store) => store.cart.items);
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
                    <div className="item-price">₹{info?.price? info?.price / 100 : info?.defaultPrice / 100}</div>
                </div>
                <div className="item-description">{info?.description}</div>
            </div>
            <div className="res-menu-item-logo-container">
                <img
                    className="res-menu-item-logo"
                    src={CDN_URL + info?.imageId}
                    alt=""></img>
                {!itemInCard[info?.id] && <button className='h-9 p-1 px-3 text-sm rounded-md font-medium bg-white mt-[-12px] bottom-0 ml-[14px] text-green-600' onClick={() => handleAddItem(info)}>Add +</button>}
                {itemInCard[info?.id] && (
                <div className='flex justify-between w-[64px] p-1 text-sm rounded-md font-medium bg-white mt-[-12px] bottom-0 ml-[14px]'>
                    <button className='w-5 text-xl text-green-600' onClick={() => handleDeleteItem(info)}>-</button>
                    <div className='font-bold text-md my-auto'>{itemInCard[info?.id]? itemInCard[info?.id][0]: ''}</div>
                    <button className='w-5 text-lg text-green-600' onClick={() => handleAddItem(info)}>+</button>
                </div>)}
                </div>
        </div>
    );
};

export default MenuCard;
