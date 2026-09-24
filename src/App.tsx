import { useState } from 'react';
import { NavigationBar } from './components/NavigationBar';
import { OverviewPage } from './components/OverviewPage';
import { MachinesPage } from './components/MachinesPage';
import { MaintenancePage } from './components/MaintenancePage';
import { AnalyticsPage } from './components/AnalyticsPage';

const pageMeta: Record<string, { eyebrow: string; title: string; description: string }> = {
  Overview: { eyebrow: 'Plant 01  /  Final Assembly', title: 'Good morning, Jordan', description: 'The line is stable. One high-risk intervention needs attention in the next 48 hours.' },
  Machines: { eyebrow: 'Asset intelligence  /  6 connected', title: 'Machine health', description: 'Inspect live sensor behavior, failure forecasts, and recommended interventions.' },
  Maintenance: { eyebrow: 'Maintenance operations  /  Week 43', title: 'Plan the work before the stop', description: 'Balance predicted risk, crew capacity, and production windows in one schedule.' },
  Analytics: { eyebrow: 'Performance intelligence  /  Q4 2025', title: 'Operational impact', description: 'Measure how predictive maintenance changes downtime, cost, and model performance.' },
};

export default function App() {
  const [activeTab, setActiveTab] = useState('Overview');
  const meta = pageMeta[activeTab];
  const renderPage = () => {
    switch (activeTab) {
      case 'Machines': return <MachinesPage />;
      case 'Maintenance': return <MaintenancePage />;
      case 'Analytics': return <AnalyticsPage />;
      default: return <OverviewPage onNavigate={setActiveTab} />;
    }
  };
  return (
    <div className="app-shell">
      <NavigationBar activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="app-main">
        <header className="page-intro">
          <div><div className="page-eyebrow"><span className="live-dot" />{meta.eyebrow}</div><h1>{meta.title}</h1><p>{meta.description}</p></div>
          <div className="sync-state"><span className="sync-icon">↻</span><div><strong>Live telemetry</strong><small>Updated 24 sec ago</small></div></div>
        </header>
        {renderPage()}
      </main>
    </div>
  );
}
