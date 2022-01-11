// consts
const TYPE_TEXT = 'TYPE_TEXT_IN_SEARCH_ENGINE';


// actions
export const typeTextInSearchEngine = (text: string) => ({
    type: TYPE_TEXT,
    payload: text
})

interface rootState {
    searchEngine: string
}
export const selectSearchEngine = (rootState: rootState) => rootState.searchEngine;

//reducer
interface actionInterface {
    type: string,
    payload: string
}

const searchEngineReducer = (state: string = '', action: actionInterface) => {
    switch (action.type) {
        case TYPE_TEXT:
            state = action.payload
            return state;
        default:
            return state;
    }
}

export default searchEngineReducer;