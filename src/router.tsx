import { Routes, Route,  } from "react-router-dom"
import Choice from "./pages/choicepage"
import StudentRegform from "./pages/studentregister"
import StudentLogform from "./pages/studentlogin"

export  function Router() {
  return (
    <Routes>
        <Route path="/" element={<Choice/>} />
        {/* <Route path="/company" element={<Comp} /> */}
        <Route path="/studentRegister" element={<StudentRegform/>} />
        <Route path="/studentLogin" element={<StudentLogform/>} />
    </Routes>
)
}
