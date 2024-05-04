import {configureStore} from "@reduxjs/toolkit";
import jobReducer from "../store/slice/jobSlice.ts"
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux";
export const store = configureStore({
    reducer: {
        jobReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
export const useAppDispatch: () => typeof store.dispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<
    RootState
> = useSelector;
