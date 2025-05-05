
import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-muted py-4 text-center text-sm">
        <div className="container mx-auto">
          &copy; {new Date().getFullYear()} Loan Calculator App. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
