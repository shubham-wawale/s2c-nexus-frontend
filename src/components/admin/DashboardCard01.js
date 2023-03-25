import React from 'react';
import Icon from '../../images/icon-01.svg';

function DashboardCard01() {


  return (
    <div className="flex flex-col col-span-full h-44 sm:col-span-6 xl:col-span-4 bg-white shadow-lg rounded-sm border border-slate-200">
      <div className="px-5 pt-5">
        <header className="flex justify-between items-start mb-2">
          <img src={Icon} width="32" height="32" alt="Icon 01" />
        </header>
        <h2 className="text-lg font-semibold text-slate-800 mb-2">Students Applied</h2>
        <div className="text-xs font-semibold text-slate-400 uppercase mb-1">Count</div>
        <div className="flex items-start">
          <div className="text-3xl font-bold text-slate-800 mr-2">24,780</div>
          <div className="text-sm font-semibold text-white px-1.5 bg-green-500 rounded-full">+49%</div>
        </div>
      </div>
      
    </div>
  );
}

export default DashboardCard01;