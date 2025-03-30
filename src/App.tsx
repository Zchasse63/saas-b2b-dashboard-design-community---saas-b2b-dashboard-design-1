import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { SaasDashboard } from './screens/SaasDashboard/SaasDashboard';
import { UsersPage } from './screens/UsersPage/UsersPage';
import { SalesPage } from './screens/SalesPage/SalesPage';
import { HomeIcon, UsersIcon, BarChart3Icon, FolderIcon, ShoppingCartIcon, MailIcon, SettingsIcon } from 'lucide-react';
import { Button } from './components/ui/button';

const NavbarButton = ({ icon, to, label }) => (
  <Link to={to}>
    <Button
      variant="ghost"
      size="icon"
      className="w-12 h-12 text-gray-600 hover:bg-purple-100"
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Button>
  </Link>
);

const App: React.FC = () => {
  return (
    <Router>
      <div className="bg-gray-100 flex flex-row justify-center w-full">
        <div className="w-full min-h-screen p-6 flex">
          {/* Sidebar */}
          <aside className="w-20 bg-white rounded-lg mr-6 flex flex-col items-center py-6 space-y-6 shadow-md">
            <NavbarButton icon={<HomeIcon className="h-6 w-6" />} to="/" label="Dashboard" />
            <NavbarButton icon={<UsersIcon className="h-6 w-6" />} to="/users" label="Users" />
            <NavbarButton icon={<BarChart3Icon className="h-6 w-6" />} to="/sales" label="Sales" />
            <NavbarButton icon={<FolderIcon className="h-6 w-6" />} to="/files" label="Files" />
            <NavbarButton icon={<ShoppingCartIcon className="h-6 w-6" />} to="/orders" label="Orders" />
            <NavbarButton icon={<MailIcon className="h-6 w-6" />} to="/messages" label="Messages" />
            <NavbarButton icon={<SettingsIcon className="h-6 w-6" />} to="/settings" label="Settings" />
          </aside>

          {/* Main Content */}
          <div className="flex-1 bg-white rounded-lg overflow-hidden shadow-md">
            <Routes>
              <Route path="/" element={<SaasDashboard />} />
              <Route path="/users" element={<UsersPage />} />
              <Route path="/sales" element={<SalesPage />} />
              {/* Add more routes as needed */}
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
