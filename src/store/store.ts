import {configureStore} from "@reduxjs/toolkit";
import jobReducer from "../store/slice/jobSlice.ts"
import filterReducer from "../store/slice/filterSlices.ts"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
export const store = configureStore({
    reducer: {
        jobReducer,
        filterReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<
    RootState
> = useSelector;
