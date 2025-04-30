
import React from 'react';
import DashboardSidebar from './DashboardSidebar';
import MobileDashboardNav from './MobileDashboardNav';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <DashboardSidebar />
      <div className="flex-grow">
        <MobileDashboardNav />
        <main className="p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
