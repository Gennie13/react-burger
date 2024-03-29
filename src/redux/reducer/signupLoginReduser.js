const initialState = {
    saving: false,
    logginIn: false,
    firebaseError: null,
    token: null,
    userId: null
};
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "SIGNUP_USER_START" : return {
            ...state,
            saving: true
        };
        case "SIGNUP_USER_ERROR" : return {
            ...state,
            saving: false,
            firebaseError: action.error.response.data.error.message
        };
        case "SIGNUP_USER_SUCCESS" : return {
            ...state,
            saving: false,
            //token,localId - state-d save hih,
            token: action.data.idToken,              
            userId: action.data.localId              
        };
        //login
        case "LOGIN_USER_START" : return {
            ...state,
            logginIn: true
        };
        case "LOGIN_USER_ERROR" : return {
            ...state,
            logginIn: false,
            firebaseError: action.error.response.data.error.message
        };
        case "LOGIN_USER_SUCCESS" : return {
            ...state,
            logginIn: false,
            //token,localId - state-d save hih,
            token: action.token,              
            userId: action.userId              
        };
        case "LOGOUT" : return {
            ...state,
            logginIn: false,
            token: null ,     
            userId: null ,
            firebaseError: null            
        };

        default : return state;
    }
};

export default reducer;