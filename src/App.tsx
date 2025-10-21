import { useState } from 'react';
import { Settings, User } from 'lucide-react';
import { NavigationBar } from './components/NavigationBar';
import { OverviewPage } from './components/OverviewPage';
import { MachinesPage } from './components/MachinesPage';
import { MaintenancePage } from './components/MaintenancePage';
import { AnalyticsPage } from './components/AnalyticsPage';

export default function App() {
  const [activeTab, setActiveTab] = useState('Overview');

  const renderPage = () => {
    switch (activeTab) {
      case 'Overview':
        return <OverviewPage />;
      case 'Machines':
        return <MachinesPage />;
      case 'Maintenance':
        return <MaintenancePage />;
      case 'Analytics':
        return <AnalyticsPage />;
      default:
        return <OverviewPage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-slate-50 to-blue-50">
      {/* Navigation Bar */}
      <NavigationBar activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Main Content */}
      {renderPage()}
    </div>
  );
}