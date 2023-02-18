import React from "react";
import Navbar from "./navBar";
import SideNav from "./sideNav";
import AboutDrive from "./aboutDrive";
import StudentTable from "./table";

class DriveInfo extends React.Component {
    render(){
        return(
        <>
            <Navbar />
            <SideNav />
            <AboutDrive />
            <StudentTable />
        </>
        
    )}

}
export default DriveInfo;