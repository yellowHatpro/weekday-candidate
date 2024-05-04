import './App.css'
import MultiSelectDropdown from "./components/dropdown.tsx";
import JobCard from "./components/card.tsx";
import InputField from "./components/input.tsx";
import {useAppDispatch, useAppSelector} from "./store/store.ts";
import {useEffect} from "react";
import {fetchJobs} from "./api/fetchJobs.ts";

function App() {
    const dispatch = useAppDispatch()
    const jobs = useAppSelector((state) => state.jobReducer.data)
    useEffect(() => {
        dispatch(fetchJobs())
    }, [dispatch]);

    return (
        <>
            <section className={"light filters"}>
                <MultiSelectDropdown items={["ashu", "aswal", "wow", "cool"]} title={"Roles"}/>
                <MultiSelectDropdown items={["ashu", "aswal", "wow", "cool"]} title={"No of Employees"}/>
                <MultiSelectDropdown items={["ashu", "aswal", "wow", "cool"]} title={"Experience"}/>
                <MultiSelectDropdown items={["ashu", "aswal", "wow", "cool"]} title={"Remote"}/>
                <MultiSelectDropdown items={["ashu", "aswal", "wow", "cool"]} title={"Tech Stack"}/>
                <MultiSelectDropdown items={["ashu", "aswal", "wow", "cool"]} title={"Minimum Base Pay Salary"}/>
                <InputField title={"Search Company Name"}/>
            </section>
            <section style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-evenly",
                padding: "20px 0 0 0"
            }}>
                {jobs && jobs.map((job) => {
                    return (
                        <JobCard job={job}/>
                    )
                })}
            </section>
        </>
    )
}

export default App
