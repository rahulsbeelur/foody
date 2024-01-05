import MenuCard from './MenuCard';

const ItemList = ({ items }) => {
    return (
        <div className="res-menu mt-10">
            {items.map((item) => {
                return <MenuCard key={item?.card?.info?.id} info={item?.card?.info}></MenuCard>;
            })}
        </div>
    );
};

export default ItemList;
