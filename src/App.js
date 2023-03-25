import Login from "./components/company/Login";
import Signup from "./components/company/Signup";
// import Link from "react-scroll/modules/components/Link";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import CompanyDash from "./components/company/dashboard/companyDashboard";
import StudentTable from "./components/company/dashboard/table";
import DriveForm from "./components/company/dashboard/CreateDriveForm";
import CompanyProf from "./components/company/dashboard/companyProfile";
import CompanyUpdate from "./components/company/dashboard/companyUpdate";
import StudentHome from "./components/student/StudentHome";
import StudentLogin from "./components/student/Authentication/StudentLogin";
import StudentSignup from "./components/student/Authentication/StudentSignup";
import StudentDriveInfo from "./components/student/StudentDriveInfo";
// import "../node_modules/bootstrap/dist/css/bootstrap.css";
import AdminSignup from "./components/admin/AdminSignup";
import AdminLogin from "./components/admin/AdminLogin";

function App() {
  return (
    <>
    
    <div className="App">
      
      
      <Router>
        
        <Routes>

          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/compdashboard" element={<CompanyDash />}></Route>
          <Route path="/createDrive" element={<DriveForm />}></Route>
          <Route path="/companyDrive" element={<StudentTable />}></Route>
          <Route path="/companyprofile" element={<CompanyProf/>}></Route>
          <Route path="/companyupdate" element={<CompanyUpdate />}></Route>
          <Route path="/studentDashboard" element={<StudentHome />}></Route>
          <Route path="/studentLogin" element={<StudentLogin />}></Route>
          <Route path="/studentSignup" element={<StudentSignup />}></Route>
          <Route path="/studentDriveInfo" element={<StudentDriveInfo />}></Route>
          <Route path="/adminLogin" element={<AdminLogin />}></Route>
          <Route path="/adminSignup" element={<AdminSignup />}></Route>

          {/* <Route path="/landing" element={<LandingPage/>}></Route> */}

         

        </Routes>
       
      </Router>
     
    </div>
    </>
  );
}

export default App;
