import MenuCard from './MenuCard';

const RestaurantMenucategory = ({data}) => {
    return (
        <div className='w-full my-10'>
            <h1 className='text-[20px] font-bold'>
                {data.title}
            </h1>
            <div className="res-menu">
                {data.itemCards.map((item) => {
                    return (
                        <MenuCard key={item?.card?.info?.id} info={item?.card?.info}></MenuCard>
                    )
                })}
            </div>
        </div>
    );
}

export default RestaurantMenucategory;
