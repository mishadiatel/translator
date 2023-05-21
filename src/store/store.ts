import {combineReducers, configureStore} from "@reduxjs/toolkit"
import translatorReducer from "@/store/reducers/TranslatorSlice";


const rootReducer = combineReducers({
    translatorReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        // middleware: (getDefaultMiddleware) =>
        //     getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];