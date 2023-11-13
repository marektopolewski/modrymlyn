import { configureStore, createSlice, createSelector } from '@reduxjs/toolkit';

import OrderData from './order-data.json'

export const OrderItemsMap = OrderData.reduce(
    (sectionAcc, sectionIt) => {
        const sectionItemsMap = sectionIt.items.reduce(
            (itemAcc, itemIt) => Object.assign(itemAcc, {[itemIt.id]: itemIt}),
            {},
        );
        return Object.assign(sectionAcc, sectionItemsMap)
    },
    {},
);

export const _clamp_count = (count) => {
    return Math.max(Math.min(count, 99), 0);
};

const initialState = JSON.parse(localStorage.getItem('cart') || "{}");
const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        updateCount: (state, action) => {
            const { id, count } = action.payload;
            const newCount = _clamp_count(count);
            if (newCount === 0)
                delete state[id];
            else
                state[id] = newCount;
        },
        clear: (state,) => {
            for (const key in state)
                delete state[key]
        }
    }
});

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    }
});
store.subscribe(() => {
    localStorage.setItem('cart', JSON.stringify(store.getState().cart));
});

export const getCart = createSelector(
    (state) => state.cart || {},
    (cart) => cart
);

export const getCartCount = createSelector(
    [
        (state) => state.cart || {},
        (state, cartItemId) => cartItemId,
    ],
    (cart, cartItemId) => cart.hasOwnProperty(cartItemId) ? cart[cartItemId] : 0
);

export const getCartCountTotal = createSelector(
    (state) => state.cart || {},
    (cart) => Object.keys(cart).reduce(
        (acc, itemId) => acc + cart[itemId],
        0,
    )
);

export const getCartValueTotal = createSelector(
    (state) => state.cart || {},
    (cart) => Object.keys(cart).reduce(
        (acc, itemId) => acc + cart[itemId] * OrderItemsMap[itemId].price,
        0,
    )
);

export const setCartCount = (cartItemId, newCount) => {
    return (dispatch) => {
        dispatch(cartSlice.actions.updateCount({ id: cartItemId, count: newCount }));
    };
};

export const clearCart = cartSlice.actions.clear;


export default store;
