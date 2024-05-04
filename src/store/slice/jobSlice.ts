import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {Job} from "../../types.ts";
import {RootState} from "../store.ts";
import {fetchJobs} from "../../api/fetchJobs.ts";

interface JobState {
    isLoading: boolean,
    data: Array<Job>,
    isError: boolean
}

const initialState : JobState = {
    isLoading: false,
    data: [],
    isError: false
}

const jobSlice = createSlice({
    name: "job",
    initialState,
    reducers: {
        addJobs: (state, action: PayloadAction<Job>) => {
            state.isLoading = false
            state.data.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchJobs.pending, (state) => {
            state.isLoading = true
            state.isError = false
        })
        builder.addCase(fetchJobs.fulfilled, (state, {payload}) => {
            state.data.push(...payload.jdList)
            state.isLoading = false
            state.isError = false
        })
        builder.addCase(fetchJobs.rejected, (state) => {
            state.isError = true
        })
    }
})

export const {addJobs} = jobSlice.actions

export const jobSelector = (state: RootState) => state.jobReducer
export default jobSlice.reducer
