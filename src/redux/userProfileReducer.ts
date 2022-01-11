// consts
const EDIT_RECORD = 'EDIT_RECORD';


// actions
export const editRecordInUserProfile = (text: string, datatype: string) => ({
    type: EDIT_RECORD,
    payload: { text, datatype }
})

interface rootState {
    userProfile: any,
}
export const selectUserProfile = (rootState: rootState) => rootState.userProfile;

//reducer
interface initState {
    id: number,
    name: string,
    surname: string,
    photoUrl: string,
    username: string,
    email: string,
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    phone: string,
    website: string,
}
interface actionInterface {
    type: string,
    payload: {
        datatype: string,
        text: string,
    }
}
const InitState: initState = {
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

const userProfileReducer = (state: any = InitState, action: actionInterface) => {
    switch (action.type) {
        case EDIT_RECORD:
            const key = action.payload.datatype
            return { ...state, [key]: state[key] = action.payload.text }
        default:
            return state;
    }
}

export default userProfileReducer;