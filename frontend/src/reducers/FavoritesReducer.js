import {
    FAVORITE_CREATE_REQUEST,
    FAVORITE_CREATE_SUCCESS,
    FAVORITE_CREATE_FAIL,
    FAVORITE_CREATE_RESET,
    FAVORITE_LIST_MY_REQUEST,
    FAVORITE_LIST_MY_SUCCESS,
    FAVORITE_LIST_MY_FAIL,
    FAVORITE_LIST_MY_RESET,
} from '../constants/FavoritesConstants';

export const favoriteCreatedReducer = (state = {}, action) => {
    switch (action.type) {
        case FAVORITE_CREATE_REQUEST:
            return {
                loading: true,
            }
        case FAVORITE_CREATE_SUCCESS:
            return {
                loading: false,
                success: true,
                favorite: action.payload
            }
        case FAVORITE_CREATE_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case FAVORITE_CREATE_RESET:
            return {}
        default:
            return state
    }
}


export const favoriteListMyReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case FAVORITE_LIST_MY_REQUEST:
            return {
                loading: true,
            }
        case FAVORITE_LIST_MY_SUCCESS:
            return {
                loading: false,
                products: action.payload
            }
        case FAVORITE_LIST_MY_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case FAVORITE_LIST_MY_RESET:
            return { products: [] }
        default:
            return state
    }
}

