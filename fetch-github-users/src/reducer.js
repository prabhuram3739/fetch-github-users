export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after finished developing
    token: 'ee9693a3061dc28bf0fa'
};

//Reducer -> Listens to the data layer
const reducer = (state, action) => {
    console.log(action);

    //Dispatch the action and listens to the action
    //Action -> type, [payload]
    switch (action.type) {
        case 'SET_USER':
            //Listener
            return {
                ...state,
                user: action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            };
        default:
            return state;
    }
}

export default reducer;