const SET_INFO = "SET_INFO";




let initialState = {
    userInfo: [],
}

const infoReducer = (state = initialState, action) => {

    switch(action.type){
        case SET_INFO:
            return {
                ...state,
                userInfo: action.userInfo
            }
        default:
            return state;
    }
}

    export const infoReducerAC = (userInfo) => ({type: SET_INFO, userInfo: userInfo});

export default infoReducer;
