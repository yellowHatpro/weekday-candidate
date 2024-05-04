import './App.css'
import MultiSelectDropdown from "./components/dropdown.tsx";
import JobCard from "./components/card.tsx";
import InputField from "./components/input.tsx";
import {useAppDispatch, useAppSelector} from "./store/store.ts";
import {useEffect} from "react";
import {fetchJobs} from "./api/fetchJobs.ts";
import {MinExperienceFilter, MinimumBasePayFilter, RemoteFilter, RolesFilter} from "./utils/filters.ts";
import {ExpFilter, PayFilter, RemoteLocationFilter, RoleFilter} from "./types.ts";

function App() {
    const dispatch = useAppDispatch()

    const jobs = useAppSelector((state) => state.jobReducer.data)
    const filters = useAppSelector((state)=> state.filterReducer)
    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch]);

    useEffect(() => {
        console.log("whj",filters)
    }, [filters]);

    return (
        <>
            <section className={"light filters"}>

                <MultiSelectDropdown<RoleFilter> items={RolesFilter} title={"Roles"}/>
                <MultiSelectDropdown<ExpFilter> items={MinExperienceFilter} title={"Min Experience"}/>
                <MultiSelectDropdown<RemoteLocationFilter> items={RemoteFilter} title={"Remote"}/>
                <MultiSelectDropdown<PayFilter> items={MinimumBasePayFilter} title={"Minimum Base Pay"}/>

                <InputField title={"Search Company Name"}/>
                <InputField title={"Location"}/>
            </section>
            <section style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "20px 0 0 0"
            }}>
                {jobs && jobs.filter((job)=>{
                    if (!job.jobRole || filters.roles.length===0) return jobs
                    return filters.roles.includes(job.jobRole as string)
                }).map((job) => {
                    return (
                        <JobCard job={job}/>
                    )
                })}
            </section>
        </>
    )
}

export default App
