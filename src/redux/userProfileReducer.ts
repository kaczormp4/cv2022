// consts
const EDIT_RECORD = 'EDIT_RECORD';


// actions
export const editRecordInUserProfile = (text: string, datatype: string) => ({
    type: EDIT_RECORD,
    payload: { text, datatype }
})

export const selectUserProfile = (rootState: any) => rootState.userProfile;

//reducer
const InitState = {
    id: 1,
    name: 'Jan',
    surname: 'Kowalski',
    photoUrl: 'https://www.sweetdecor.pl/oplatek-na-tort-nosacz-janusz-00584a-21-cm.1.jpg',
    username: 'Janek',
    email: 'Jan@mail.com',
    street: 'CityStreet',
    suite: 'Apt. 556',
    city: 'Warsaw',
    zipcode: '33 - 312',
    phone: '244 232 232',
    website: 'My Shop.pl',
}

const userProfileReducer = (state: any = InitState, action: any) => {
    switch (action.type) {
        case EDIT_RECORD:
            const key = action.payload.datatype
            return { ...state, [key]: state[key] = action.payload.text }
        default:
            return state;
    }
}

export default userProfileReducer;