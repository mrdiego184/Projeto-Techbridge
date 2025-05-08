import { Routes, Route,  } from "react-router-dom"
import Choice from "./pages/choicepage"
import StudentRegform from "./pages/studentregister"

export  function Router() {
  return (
    <Routes>
        <Route path="/" element={<Choice/>} />
        {/* <Route path="/company" element={<Comp} /> */}
        <Route path="/student" element={<StudentRegform/>} />
    </Routes>
)
}
