import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: {}
    },
    reducers: {
        addItem: (state, action) => {
            if(state.items[action.payload?.id]) {
                state.items[action.payload?.id] = [state.items[action.payload?.id][0] + 1, action.payload];
            } else {
                state.items[action.payload?.id] = [1, action.payload];
            }
        },
        deleteItem: (state, action) => {
            if(state.items[action?.payload?.id] && state.items[action?.payload?.id][0] > 1) {
                state.items[action?.payload?.id] = [state.items[action.payload?.id][0] - 1, action.payload];
            } else {
                delete state.items[action?.payload?.id]
            }
        },
        clearCart: (state, action) => {
            state.items = {};
        }
    }
});


export const {addItem, deleteItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;
