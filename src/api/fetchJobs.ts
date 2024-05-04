import {createAsyncThunk} from "@reduxjs/toolkit";
import {Job} from "../types.ts";

const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const body = JSON.stringify({
    "limit": 10,
    "offset": 0
});

const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body
};

type APIResponse = {
    jdList: Array<Job>
}

export const fetchJobs = createAsyncThunk(
    "jobs/fetch",
    async ()=>{
    const res = await fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
    return await res?.json() as APIResponse
})
