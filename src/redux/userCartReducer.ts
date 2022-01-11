import { SVGAttributes } from "react";

// consts
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// actions
export const addToCart = (id: number) => ({
    type: ADD_TO_CART,
    payload: { id: id }
})
export const removeFromCart = (id: number) => ({
    type: REMOVE_FROM_CART,
    payload: { id: id }
})

interface rootState {
    userCart: any;
}

export const selectUserCart = (rootState: rootState) => rootState.userCart;

//reducer
interface initState {
    inCart: [],
    counter: number
}
interface actionInterface {
    type: string;
    payload: { id: number }
}
interface stateInterface {
    counter: number,
    inCart: {
        amount: number,
        productID: number,
    }[],
}

const initialState: initState = {
    inCart: [],
    counter: 0
}
const userCartReducer = (state: stateInterface = initialState, action: actionInterface) => {
    console.log(state);
    console.log('action', action);

    switch (action.type) {
        case ADD_TO_CART:
            let newState: object = {};
            if (state.inCart.some((p: { productID: number; }) => p.productID === action.payload.id)) {
                // in card View
                state.inCart.map((p: { productID: number, amount: number }) => p.productID === action.payload.id && ++p.amount)
                newState = { ...state }
            } else {
                state.inCart.push({ productID: action.payload.id, amount: 1 })
                newState = { ...state }
            }

            return { ...newState, counter: state.counter + 1 };
        case REMOVE_FROM_CART:
            let newStateRFC: object = {};
            if (state.inCart.some((p: { productID: number, amount: number }) => p.productID === action.payload.id && p.amount > 0)) {
                state.inCart.map((p: { productID: number, amount: number }) => p.productID === action.payload.id && --p.amount)
                newStateRFC = { ...state }
            } else {
                const updates = state.inCart.filter(
                    (p: { productID: number }) => (p.productID !== action.payload.id))
                newStateRFC = { ...state, inCart: updates }
            }

            return { ...newStateRFC, counter: state.counter - 1 };
        default:
            return state;
    }
}

export default userCartReducer;