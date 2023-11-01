import {applyMiddleware, combineReducers, createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import moviesReducer from "./reducer/moviesReducer";
import discoverReducer from "./reducer/discoverReducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import resultDiscoverReducer from "./reducer/resultDiscoverReducer";
import genreListReducer from "./reducer/genreListReducer";



const rootReducer = combineReducers({
        moviesReducer : moviesReducer,
        discoverReducer : discoverReducer,
        resultDiscoverReducer : resultDiscoverReducer,
        genreListReducer: genreListReducer
    });

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['discoverReducer'],
    blacklist: ['resultDiscoverReducer']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
)


export default store;
export const persistor = persistStore(store)








// export const RootState = {
//     moviesReducer : moviesReducer,
//     discoverReducer : discoverReducer
// }


// export const RootState = createStore(
//     combineReducers({
//         moviesReducer : moviesReducer,
//         discoverReducer : discoverReducer
//     }),
//     composeWithDevTools(applyMiddleware(thunk))
// )
//
// const reducers = combineReducers({
//     moviesReducer: moviesReducer,
//     discoverReducer: discoverReducer
// })
//
//
//
// const persistConfig = {
//     key: 'root',
//     storage,
//     // discoverReducer,
//     // whitelist: ['discoverReducer']
// }
//
//
// const persistedReducer = persistReducer(persistConfig, reducers)
// const store = createStore({
//     reducer: persistedReducer
// })
//
// const middlewareEnhancer = applyMiddleware(thunk);
// const composedEnhancer = compose(middlewareEnhancer);
// // export const store = createStore(reducers, composeWithDevTools(composedEnhancer))
//
// export const persistor = persistStore(store)
// export default store

