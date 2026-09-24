import { Bell, Boxes, LayoutDashboard, Wrench, ChartNoAxesCombined, ChevronDown } from 'lucide-react';
interface NavigationBarProps { activeTab: string; onTabChange: (tab: string) => void; }
export function NavigationBar({ activeTab, onTabChange }: NavigationBarProps) {
  const tabs = [{ label: 'Overview', icon: LayoutDashboard }, { label: 'Machines', icon: Boxes }, { label: 'Maintenance', icon: Wrench }, { label: 'Analytics', icon: ChartNoAxesCombined }];
  return (
    <nav className="topbar" aria-label="Primary navigation">
      <button className="brand" onClick={() => onTabChange('Overview')} aria-label="Assembria overview"><span className="brand-mark"><i /><i /><i /></span><span><strong>ASSEMBRIA</strong><small>Predictive operations</small></span></button>
      <div className="nav-tabs">{tabs.map(({ label, icon: Icon }) => <button key={label} onClick={() => onTabChange(label)} className={activeTab === label ? 'active' : ''} aria-current={activeTab === label ? 'page' : undefined}><Icon size={16} strokeWidth={1.8} /><span>{label}</span></button>)}</div>
      <div className="nav-actions">
        <button className="plant-select"><span className="plant-status" /><span>Detroit · Plant 01</span><ChevronDown size={14} /></button>
        <button className="icon-button" aria-label="Notifications"><Bell size={18} /><span className="notification-count">3</span></button>
        <button className="profile" aria-label="Open account menu"><span>JH</span><div><strong>Jordan Hale</strong><small>Operations lead</small></div><ChevronDown size={14} /></button>
      </div>
    </nav>
  );
}
