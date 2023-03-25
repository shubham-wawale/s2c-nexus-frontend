import React from 'react';
import AdminNavbar from './AdminNavbar';
import Search from './SearchBar';
import WelcomeBanner from './WelcomeBanner';
import AdminSideNav from './AdminSideNav';
import DashboardCard01 from './DashboardCard01';
import DashboardCard02 from './DashboardCard02';
import DashboardCard03 from './DashboardCard03';


function AdminDashboard() {
  return (
    
    <div className="flex h-screen overflow-hidden">
        <AdminNavbar/>
        <AdminSideNav/>
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Search/>
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">     
          <WelcomeBanner />
            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              <DashboardCard01 />
              <DashboardCard02 />
              <DashboardCard03 />
              
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}

export default AdminDashboard;