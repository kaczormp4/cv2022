// consts
const TYPE_TEXT = 'TYPE_TEXT_IN_SEARCH_ENGINE';


// actions
export const typeTextInSearchEngine = (text: string) => ({
    type: TYPE_TEXT,
    payload: text
})

export const selectSearchEngine = (rootState: any) => rootState.searchEngine;

//reducer

const searchEngineReducer = (state: string = '', action: any) => {
    switch (action.type) {
        case TYPE_TEXT:
            state = action.payload
            return state;
        default:
            return state;
    }
}

export default searchEngineReducer;