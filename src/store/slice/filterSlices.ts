import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store.ts";
import {ExpFilter, Filter, PayFilter, RemoteLocationFilter, RoleFilter} from "../../types.ts";
import {MinExperienceFilter, RemoteFilter, RolesFilter} from "../../utils/filters.ts";

interface FilterState {
    roles: RoleFilter[],
    experience: ExpFilter[],
    remote: RemoteLocationFilter[],
    pay: PayFilter[]
}

const initialState: FilterState = {
    roles: [],
    experience: [],
    remote: [],
    pay: []
}


//TODO: I very well know the way I am executing the checks for actions types, and the way I am adding payload to respective filter category, It's just I made a mistake while  creating types,
// and since I don't have much time to rectify it, I have to use the naive way here
// TODO: The way I will fix is by using classes for type checking, instead of "types", coz types gets erased in run time
export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        addFilter: (state, action: PayloadAction<Filter[]>) => {
            if (action.payload.every(val => RolesFilter.includes(val))) {
                state.roles = [...action.payload]
            } else if (action.payload.every(val => MinExperienceFilter.includes(val))) {
                state.experience = [...action.payload]
            } else if (action.payload.every(val => RemoteFilter.includes(val))) {
                state.remote = [...action.payload]
            } else {
                state.pay = [...action.payload]
            }
        },
        removeFilter: (state, action: PayloadAction<Filter>) => {
            if (RolesFilter.includes(action.payload)) {
                 state.roles =  state.roles.filter((item) => item !== action.payload)
            } else if (MinExperienceFilter.includes(action.payload)) {
                state.experience =  state.experience.filter((item) => item !== action.payload)
            } else if (RemoteFilter.includes(action.payload)) {
                state.remote =  state.remote.filter((item) => item !== action.payload)
            } else {
                state.pay = state.pay.filter((item) => item !== action.payload)
            }
        }
    }
})

export const {addFilter, removeFilter} = filterSlice.actions
export const filterSelector = (state: RootState) => state.filterReducer

export default filterSlice.reducer
