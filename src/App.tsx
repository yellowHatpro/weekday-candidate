import './App.css'
import MultiSelectDropdown from "./components/dropdown.tsx";
import {Job} from "./types.ts";
import JobCard from "./components/card.tsx";

function App() {
    const job : Job = {
        "jdUid": "cfff35ac-053c-11ef-83d3-06301d0a7178-92010",
        "jdLink": "https://weekday.works",
        "jobDetailsFromCompany": "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment.",
        "maxJdSalary": 61,
        "minJdSalary": 3,
        "salaryCurrencyCode": "USD",
        "location": "delhi ncr",
        "minExp": 3,
        "maxExp": 6,
        "jobRole": "frontend",
        "companyName": "Dropbox",
        "logoUrl": "https://logo.clearbit.com/dropbox.com"
        }
  return (
    <>
        <section className={"light filters"}>
            <MultiSelectDropdown items={["ashu","aswal", "wow", "cool"]} title={"Roles"}/>
            <MultiSelectDropdown items={["ashu","aswal", "wow", "cool"]} title={"No of Employees"}/>
            <MultiSelectDropdown items={["ashu","aswal", "wow", "cool"]} title={"Experience"}/>
            <MultiSelectDropdown items={["ashu","aswal", "wow", "cool"]} title={"Remote"}/>
            <MultiSelectDropdown items={["ashu","aswal", "wow", "cool"]} title={"Tech Stack"}/>
            <MultiSelectDropdown items={["ashu","aswal", "wow", "cool"]} title={"Minimum Base Pay Salary"}/>
        </section>
        <section>
            <JobCard job={job}/>
        </section>
    </>
  )
}

export default App
