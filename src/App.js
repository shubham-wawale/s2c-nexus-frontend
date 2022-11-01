import Login from "./components/company/Login";
import Signup from "./components/company/Signup";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom"
import Dashboard from "./components/company/dashboard/companyDashboard";
import Navbar from "./components/company/dashboard/navBar";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>

          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>

          


        </Routes>
      </Router>
      <Navbar/>
    </div>
  );
}

export default App;
