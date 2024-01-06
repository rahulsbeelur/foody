import { useDispatch, useSelector } from "react-redux";
import MenuCard from "./MenuCard";
import Wrapper from "./Wrapper";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
       <Wrapper>
        <div className="text-2xl font-bold text-center">
            Cart
        </div>
        {Object.values(cartItems).length === 0 && <div className="flex flex-col text-[54px] font-bold text-center mt-[100px]">
            Oh No! It is so empty here. Aren't you hungry?
            <Link to="/" className="custom-link font-semibold mt-10 text-2xl">
                <button className="font-none p-4 w-fit bg-green-500 hover:bg-green-700 shadow-2xl hover:shadow-none rounded-lg text-gray-700 hover:text-white">Order Now</button>
            </Link>
        </div>}
        {Object.values(cartItems).length > 0  && 
            <div className="w-full mt-10">
               <div className="mx-auto flex justify-between w-[800px]">
               <div className="text-lg">
                    <div>Total Cart Items: {Object.values(cartItems).reduce((accumulator, current) => accumulator + current[0], 0)}</div>
                    <div className="flex gap-2">Total Amount: <div className="font-bold">
                    ₹{Object.values(cartItems).reduce((accumulator, current) => (accumulator + current[0] * (current[1]?.price? current[1]?.price / 100 : current[1]?.defaultPrice / 100)), 0).toFixed(2)}</div></div>
                </div>
                <button className="p-2 text-white bg-red-600 rounded-md w-fit" onClick={handleClearCart}>Clear Cart</button>
               </div>
            </div> 
        }
        <div className="flex flex-col mt-10 justify-center align-middle w-[800px] mx-auto">
            {Object.values(cartItems).map((item) => <MenuCard info={item[1]} key={item[1]?.id}/>)}
        </div>
       </Wrapper>
    );
}

export default Cart;
