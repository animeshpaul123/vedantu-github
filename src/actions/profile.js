import * as actionTypes from './types';
import axios from 'axios';

export const profileStart = () => {
    return {
        type: actionTypes.GET_PROFILE_DATA,
    }
}
const setProfile = (data) => {
    return {
        type: actionTypes.SET_PROFILE_DATA,
        data
    }
}
export const getProfile = () => {
    return dispatch => {
        dispatch(profileStart())
        axios.get('https://api.github.com/users/supreetsingh247')
            .then(res => {
                dispatch(setProfile(res.data))
                console.log(res.data)
            })
            .catch(err => {
                // dispatch(setProfileFailed())
            })
    }
}