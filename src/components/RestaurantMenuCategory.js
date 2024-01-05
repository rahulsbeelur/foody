import Accordian from '../../static/accordian.png';
import ItemList from './ItemList';

const RestaurantMenucategory = ({ data, showItems, setShowItems }) => {
    const handleClick = () => {
        setShowItems();
    }
    return (
        <div className="w-full my-2">
            <div className="p-4 bg-gray-100 rounded-md shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <h1 className="text-[20px] font-bold">
                        {data.title} ({data.itemCards.length})
                    </h1>
                    {!showItems && <img className="w-5 h-5" src={Accordian} alt="^"></img>}
                    {showItems && <img className="w-5 h-5 rotate-180" src={Accordian} alt="^"></img>}
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantMenucategory;
