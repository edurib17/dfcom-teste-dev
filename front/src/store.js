//Utils Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

//Reducers
import { userLoginReducer, userRegisterReducer} from './reducers/UserReducer';
import { productListReducer } from './reducers/ProductReducer';
import { favoriteCreatedReducer,favoriteListMyReducer } from './reducers/FavoritesReducer';



//Consts
const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister: userRegisterReducer,
    productList: productListReducer,
    favoriteCreate: favoriteCreatedReducer,
    favoriteListMy: favoriteListMyReducer,
})


const userInfoFromStorage = localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null


const initialState = {
    userLogin: { userInfo: userInfoFromStorage }
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store