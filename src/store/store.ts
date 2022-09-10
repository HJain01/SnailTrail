import {configureStore} from "@reduxjs/toolkit";
import originsReducer from './slices/originsSlice';

export default configureStore({
    reducer: {
        origins: originsReducer
    }
})
