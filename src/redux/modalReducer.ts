// consts
const MODAL_STATE = 'OPEN_CLOSE_MODAL';


// actions
export const openModalByProductId = (id: number) => ({
    type: MODAL_STATE,
    payload: id
})

export const selectmodalReducer = (rootState: any) => rootState.modalReducer;

//reducer

const modalReducer = (state: boolean = false, action: any) => {
    switch (action.type) {
        case MODAL_STATE:
            console.log(`action`, action)
            state = action.payload
            return state;
        default:
            return state;
    }
}

export default modalReducer;