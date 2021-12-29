// consts
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// actions
export const addToCart = () => ({
    type: ADD_TO_CART,
})
export const removeFromCart = () => ({
    type: REMOVE_FROM_CART,
})

export const selectUserCart = (rootState: any) => rootState.userCart;

//reducer
const initialState = {
    inCart: [
        {
            productID: 1,
            amount: 0,
        },
        {
            productID: 3,
            amount: 10,
        }
    ],
    totalPrice: 0,
    counter: 0
}
const userCartReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case ADD_TO_CART:
            return { ...state, counter: state.counter + 1 };
        case REMOVE_FROM_CART:
            return { ...state, counter: state.counter - 1 }
        default:
            return state;
    }
}

export default userCartReducer;