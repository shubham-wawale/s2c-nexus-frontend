import Login from "./components/company/Login";
import Signup from "./components/company/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import CompanyDash from "./components/company/dashboard/companyDashboard";
import Drive from "./components/company/dashboard/Drive";

import Navbar from "./components/company/dashboard/navBar";

function App() {
  return (
    <>
    
    <div className="App">
      
      <Router>
        <Routes>

          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/compdashboard" element={<CompanyDash />}></Route>
          <Route path="/company/drive" element={<Drive />}></Route>
          


        </Routes>
      </Router>
      {/* <Navbar/> */}
    </div>
    </>
  );
}

export default App;
