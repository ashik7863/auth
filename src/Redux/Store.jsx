import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./AuthSlice";

const Store=configureStore({
    reducer:{
        login:loginSlice
    }
})
export default Store;