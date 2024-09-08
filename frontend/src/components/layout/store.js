import {combineReducers,configureStore} from '@reduxjs/toolkit';
import authReducer from '../../slice/authSlice';
import {thunk} from 'redux-thunk';
const reducer=combineReducers({
     authState:authReducer
});
const store=configureStore({
    reducer,
    middleware:(getDefaultMiddleWare=>getDefaultMiddleWare().concat(thunk))
});

export default store;