import { configureStore } from "@reduxjs/toolkit";
import crudSlice  from './features/crudSlice'

const store = configureStore({
    reducer:{
        app:crudSlice
    }
})

export default store;



