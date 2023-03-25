import React from "react";

export default function AdminSideNav() {
  
    return (
     <div id="main-div" >
        
        <aside class="aside bg-[#0f172a] is-placed-left is-expanded  mt-16">
      <div class="menu text-lg is-menu-main">
        <p class="menu-label ">General</p>
        <ul class="menu-list">
          <li class="active">
            <a href="/compdashboard">
              <span class="icon"><i class="mdi mdi-desktop-mac"></i></span>
              <span class="menu-item-label">Dashboard</span>
            </a>
          </li>
        </ul>
        
        <ul class="menu-list">
          <li class="--set-active-tables-html">
            <a href="/createDrive">
              <span class="icon"><i class="mdi mdi-table"></i></span>
              <span class="menu-item-label">Something</span>
            </a>
          </li>
          
          <li class="--set-active-profile-html">
            <a href="/companyprofile">
              <span class="icon"><i class="mdi mdi-account-circle"></i></span>
              <span class="menu-item-label">Admin Profile</span>
            </a>
          </li>
          <li>
            <a href="/">
              <span class="icon"><i class="mdi mdi-lock"></i></span>
              <span class="menu-item-label">Log Out</span>
            </a>
          </li>
          </ul>

      </div>
    </aside>
    
    
    
  
    </div>


   
  );
}
