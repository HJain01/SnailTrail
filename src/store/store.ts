import {configureStore} from "@reduxjs/toolkit";
import originsReducer from './slices/originsSlice';
import destinationsReducer from './slices/destinationsSlice';

export default configureStore({
    reducer: {
        origins: originsReducer,
        destinations: destinationsReducer
    }
})
