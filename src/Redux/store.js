import { legacy_createStore,applyMiddleware,combineReducers } from "redux";
import thunk from "redux-thunk";
import { reducer as AuthReducer} from "./AuthReucer/reducer";
import {reducer as AppReducer} from './AppReducer/reducer'

const rootReducer =  combineReducers({AppReducer,AuthReducer})

const store = legacy_createStore(rootReducer,applyMiddleware(thunk))

export {store}