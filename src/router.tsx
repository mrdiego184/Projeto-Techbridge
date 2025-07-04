import { Routes, Route,  } from "react-router-dom"
import Choice from "./pages/choicepage"
import StudentRegform from "./pages/studentregister"
import StudentLogform from "./pages/studentlogin"
import StudentDashboard from "./pages/studentdashboard"
import StudentCourses from "./pages/studentcourses"
import StudentCertificates from "./pages/studentcertificates"
import StudentProfile from "./pages/studentprofile"
import CompanyRegform from "./pages/companyregister"
import CompanyLogform from "./pages/companylogin"
import CoursePage from "./pages/coursepage"
import StudyPage from "./pages/studypage"
import CompanyDashboard from "./pages/companydashboard"
import CompanyCourse from "./pages/companyaddcourse"
import CompanyParticipantsList from "./pages/companyparticipantslist"
import CompanyEdit from "./pages/companyedit"

export  function Router() {
  return (
    <Routes>
        <Route path="/" element={<Choice/>} />
        <Route path="/studentRegister" element={<StudentRegform/>} />
        <Route path="/studentLogin" element={<StudentLogform/>} />
        <Route path="/studentDashboard" element={<StudentDashboard/>} />
        <Route path="/myCourses" element={<StudentCourses/>} />
        <Route path="/myCertificates" element={<StudentCertificates/>} />
        <Route path="/myProfile" element={<StudentProfile/>} />
        <Route path="/studyPage" element={<StudyPage/>} />

        <Route path="/coursePage/:id" element={<CoursePage />} />

        <Route path="/companyRegister" element={<CompanyRegform/> } />
        <Route path="/companyLogin" element={<CompanyLogform/> } />
        <Route path="/companyDashboard" element={<CompanyDashboard/> } />
        <Route path="/companyParticipantsList" element={<CompanyParticipantsList/> } />
        <Route path="/companyCourse" element={<CompanyCourse/>}/>
        <Route path="/companyEdit" element={<CompanyEdit/>}/>
    </Routes>
)
}
