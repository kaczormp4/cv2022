// consts
const EDIT_RECORD = 'EDIT_RECORD';


// actions
export const editRecordInUserProfile = (text: string) => ({
    type: EDIT_RECORD,
    payload: text
})

export const selectUserProfile = (rootState: any) => rootState.userProfile;

//reducer
const InitState = {
    name: 'Jan',
    surname: 'Kowalski',
    photoUrl: 'https://www.sweetdecor.pl/oplatek-na-tort-nosacz-janusz-00584a-21-cm.1.jpg',
}

const userProfileReducer = (state: any = InitState, action: any) => {
    switch (action.type) {
        case EDIT_RECORD:
            return { ...state, name: state.name = action.payload }
        default:
            return state;
    }
}

export default userProfileReducer;