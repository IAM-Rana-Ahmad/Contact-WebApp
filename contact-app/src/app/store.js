import {configureStore} from "@reduxjs/toolkit"
import contact from "../feature/contact"


export const store=configureStore({
    reducer:{
        app:contact,
    }
})