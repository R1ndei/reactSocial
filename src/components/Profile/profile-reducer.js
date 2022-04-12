import {userAPI} from "../../api/api";

export const SET_USER_PROFILE = "SET_USER_PROFILE "

//state userReducer reducer
let initialState = {
    posts: [],
    profile: null,
};

//REDUCER
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state;
    }
}

//ACTION CREATORS
export const setUserProfile   = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile   = (userId) => (dispatch) => {
    userAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data));
        });
}

export default profileReducer;