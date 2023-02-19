import React from 'react';
import StudentSideNav from './StudentSideNav';
import Navbar from '../company/dashboard/navBar';

const StudentDriveInfo = () => {
    return (
        

        <div>
            <Navbar/>
            <StudentSideNav/>

            <header class="card-header ">
                <p class="card-header-title text-3xl font-semibold mt-5">
                    <span class="icon"><i class="mdi mdi-account-multiple"></i></span>
                    Drive Information
                </p>
            </header>
        </div>

    );
};

export default StudentDriveInfo;