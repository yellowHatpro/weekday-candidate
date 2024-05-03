import './App.css'
import MultiSelectDropdown from "./components/dropdown.tsx";

function App() {
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
    </>
  )
}

export default App
