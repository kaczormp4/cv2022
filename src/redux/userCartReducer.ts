const initialState = {
    inCart: [
        {
            productID: null,
            amount: 0,
        }
    ],
    totalPrice: 0
}
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addToCart = () => ({
    type: ADD_TO_CART,
})
export const removeFromCart = () => ({
    type: REMOVE_FROM_CART,
})

export const selectDateStart = (rootState: any) => rootState.userEvents;


const userCartReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, totalPrice: state.totalPrice + 1 };
        case REMOVE_FROM_CART:
            return { ...state, totalPrice: 99 }
        default:
            return state;
    }
}

export default userCartReducer;