// consts
const ADD_ITEM = 'ADD_ITEM_TO_HISTORY';


// actions
export const addItemToHistory = (id: number,) => ({
    type: ADD_ITEM,
    payload: { id }
})

interface rootState {
    viewHistory: number[],
}
export const selectViewHistory = (rootState: rootState) => rootState.viewHistory;

//reducer

const viewHistoryReducer = (state: any = [], action: any) => {
    console.log(`viewHistoryReducer`, action)
    console.log(`viewHistoryReducer`, state)
    switch (action.type) {
        case ADD_ITEM:
            state.push(action.payload.id)
            return state
        default:
            return state;
    }
}

export default viewHistoryReducer;