import {
    FAVORITE_CREATE_REQUEST,
    FAVORITE_CREATE_SUCCESS,
    FAVORITE_CREATE_FAIL,
    FAVORITE_LIST_MY_REQUEST,
    FAVORITE_LIST_MY_SUCCESS,
    FAVORITE_LIST_MY_FAIL,
} from '../constants/FavoritesConstants';
import axios from 'axios';



export const createdFavorite = (favorite) => async (dispatch, getState) => {
    try {
        dispatch({
            type: FAVORITE_CREATE_REQUEST,
        })

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }
        const { data } = await axios.post(`/api/favorites`, favorite, config)
        dispatch({
            type: FAVORITE_CREATE_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FAVORITE_CREATE_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}





export const listMyFavorites = () => async (dispatch, getState) => {
    try {
        dispatch({
            type: FAVORITE_LIST_MY_REQUEST,
        })

        const { userLogin: { userInfo } } = getState()
        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.get(`/api/favorites/myfavorites`, config)

        dispatch({
            type: FAVORITE_LIST_MY_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: FAVORITE_LIST_MY_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        })
    }
}







