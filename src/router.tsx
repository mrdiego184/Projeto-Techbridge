import { Routes, Route,  } from "react-router-dom"
import Choice from "./pages/choicepage"
import StudentRegform from "./pages/studentregister"
import StudentLogform from "./pages/studentlogin"
import StudentDashboard from "./pages/studentdashboard"
import StudentCourses from "./pages/studentcourses"
import StudentCertificates from "./pages/studentcertificates"
import StudentProfile from "./pages/studentprofile"

export  function Router() {
  return (
    <Routes>
        <Route path="/" element={<Choice/>} />
        {/* <Route path="/company" element={<Comp} /> */}
        <Route path="/studentRegister" element={<StudentRegform/>} />
        <Route path="/studentLogin" element={<StudentLogform/>} />
        <Route path="/studentDashboard" element={<StudentDashboard/>} />
        <Route path="/myCourses" element={<StudentCourses/>} />
        <Route path="/myCertificates" element={<StudentCertificates/>} />
        <Route path="/myProfile" element={<StudentProfile/>} />
    </Routes>
)
}
