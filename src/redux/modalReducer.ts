// consts
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';


// actions
export const openModalByProductId = (bool: boolean, id: number) => ({
    type: OPEN_MODAL,
    payload: { bool, id }
})

export const closeModal = (bool: boolean) => ({
    type: CLOSE_MODAL,
    payload: { bool }
})
export const selectmodalReducer = (rootState: any) => rootState.modalReducer;

//reducer
interface initState {
    bool: boolean,
    id: number | null
}
const initialState: initState = {
    bool: false,
    id: null
}
const modalReducer = (state: initState = initialState, action: any) => {
    switch (action.type) {
        case OPEN_MODAL:
            state = action.payload
            return state;
        case CLOSE_MODAL:
            state = action.payload
            return state;
        default:
            return state;
    }
}

export default modalReducer;