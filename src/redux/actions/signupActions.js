import axios from "axios";
// import {loginUserSuccess} from "./loginActions";

export const signupUser = (email, password) => {
    return function(dispatch) {
        dispatch(signupUserStart());

        const data = {
            email,
            password,
            returnSecureToken: true
        };
        axios
            .post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBMtUqWeXp8i3-nT3eNkdvHNhpihiGMPFI", data)
            .then(
                result => {
                    dispatch(signupUserSuccess(result.data))
                }
            )
            .catch(err => {
                dispatch(signupUserError(err))
            })
    };
};
export const signupUserStart = () => {
    return {
      type: "SIGNUP_USER_START",
    
    };
};
export const signupUserSuccess = data => {
    return {
      type: "SIGNUP_USER_SUCCESS",
      data
    };
};
export const signupUserError = (error) => {
    return {
      type: "SIGNUP_USER_ERROR",
      error
    };
};

export const logout = () => {
    //localstorage deer hadaglasan medeellee ustgah
    localStorage.removeItem('token');
    localStorage.removeItem('userId');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('expiredDate');
    
    return {
        type: "LOGOUT"
    };
};
//auto logout
export const autoLogout = (ms) => {
    return function(dispatch) {
        //token shinechleh
        // axios
        //     .post("https://securetoken.googleapis.com/v1/token?key=AIzaSyBMtUqWeXp8i3-nT3eNkdvHNhpihiGMPFI", {
        //         grant_type: "refresh_token",
        //         refresh_token: localStorage.get(
        //             "refresh_token"
        //         )
        //     })
        //     .then(
        //         result => {
        //             const token = result.data.id_token;
        //             const userId = result.data.user_id;


        //             const token = result.data.idToken;
        //             const userId = result.data.localId;
        //             const expiresIn = result.data.expiresIn;
        //             const expireDate = new Date(new Date().getTime() + expiresIn * 1000);
        //             const refreshToken = result.data.refreshToken;
        //             localStorage.setItem('token', token);
        //             localStorage.setItem('userId', userId);
        //             localStorage.setItem('expireDate', expireDate);
        //             localStorage.setItem('refreshToken', refreshToken);



        //             dispatch(loginUserSuccess(token, userId));
        //         }
        //     )
        //     .catch(err => {
        //         dispatch(signupUserError(err))
        //     })
        setTimeout(() => {
            dispatch(logout());
        }, ms);
    };
};