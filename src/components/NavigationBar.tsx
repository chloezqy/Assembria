import { Settings, Bell } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

interface NavigationBarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function NavigationBar({ activeTab, onTabChange }: NavigationBarProps) {
  const tabs = ['Overview', 'Machines', 'Maintenance', 'Analytics'];
  
  return (
    <div className="bg-white/70 backdrop-blur-md border-b border-slate-200/60 shadow-sm">
      <div className="max-w-[1920px] mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-[#4A77D4] to-[#6BD5C4] rounded-lg flex items-center justify-center shadow-md">
              <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
            </div>
            <span className="text-[#1C3D5A] tracking-tight" style={{ fontSize: '20px' }}>Assembria</span>
          </div>

          {/* Center Tabs */}
          <div className="hidden md:flex items-center gap-1 bg-slate-50/80 rounded-xl p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => onTabChange(tab)}
                className={`px-6 py-2 rounded-lg transition-all ${
                  activeTab === tab
                    ? 'bg-white text-[#4A77D4] shadow-sm'
                    : 'text-slate-500 hover:text-[#1C3D5A]'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Bell className="w-5 h-5 text-slate-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            <button className="p-2 rounded-lg hover:bg-slate-100 transition-colors">
              <Settings className="w-5 h-5 text-slate-600" />
            </button>
            <Avatar className="w-9 h-9 border-2 border-[#6BD5C4]">
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=user" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  );
}