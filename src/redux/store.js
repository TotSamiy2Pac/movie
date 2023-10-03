import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import moviesReducer from "./reducer/moviesReducer";


const store = createStore(
    combineReducers({
        moviesReducer : moviesReducer
    }),
    composeWithDevTools(applyMiddleware(thunk))
)

export default store;