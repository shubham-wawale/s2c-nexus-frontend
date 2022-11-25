import Login from "./components/company/Login";
import Signup from "./components/company/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import CompanyDash from "./components/company/dashboard/companyDashboard";
import StudentTable from "./components/company/dashboard/table";
import DriveForm from "./components/company/dashboard/CreateDriveForm";

import Navbar from "./components/company/dashboard/navBar";
import CompanyProf from "./components/company/dashboard/companyProfile";
import CompanyUpdate from "./components/company/dashboard/comoanyUpdate";

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
          <Route path="/studentTable" element={<StudentTable />}></Route>
          <Route path="/companyprofile" element={<CompanyProf/>}></Route>
          <Route path="/companyupdate" element={<CompanyUpdate />}></Route>




        </Routes>
      </Router>
      {/* <Navbar/> */}
    </div>
    </>
  );
}

export default App;
