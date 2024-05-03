import './App.css'
import MultiSelectDropdown from "./components/dropdown.tsx";

function App() {
  return (
    <>
        <section className={"light"}>
            <MultiSelectDropdown items={["ashu","aswal", "wow", "cool"]} title={"Roles"}/>
        </section>
    </>
  )
}

export default App
