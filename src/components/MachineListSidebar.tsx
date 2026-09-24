import { useMemo, useState } from 'react';
import { Search, X } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

interface Machine {
  id: string;
  name: string;
  status: 'normal' | 'warning' | 'caution' | 'critical';
}

interface MachineListSidebarProps {
  machines: Machine[];
  selectedMachineId: string;
  onSelectMachine: (id: string) => void;
}

export function MachineListSidebar({
  machines,
  selectedMachineId,
  onSelectMachine,
}: MachineListSidebarProps) {
  const [query, setQuery] = useState('');
  const filteredMachines = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return machines;
    return machines.filter((machine) => `${machine.id} ${machine.name} ${machine.status}`.toLowerCase().includes(normalized));
  }, [machines, query]);
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'bg-emerald-500';
      case 'warning':
        return 'bg-yellow-500';
      case 'caution':
        return 'bg-orange-500';
      case 'critical':
        return 'bg-red-500';
      default:
        return 'bg-slate-400';
    }
  };

  const getStatusLabel = (status: string) => {
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-200/60">
        <h3 className="text-[#1C3D5A] mb-3">Machine Fleet</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search machines..."
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label="Search machines"
            className="w-full pl-9 pr-3 py-2 bg-white/60 border border-slate-200 rounded-lg text-sm text-[#1C3D5A] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#6BD5C4]/50"
          />
          {query && <button onClick={() => setQuery('')} className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-slate-700" aria-label="Clear search"><X className="w-3.5 h-3.5" /></button>}
        </div>
      </div>

      {/* Machine List */}
      <ScrollArea className="flex-1 p-2">
        <div className="space-y-1">
          {filteredMachines.map((machine) => (
            <button
              key={machine.id}
              onClick={() => onSelectMachine(machine.id)}
              className={`w-full text-left p-3 rounded-xl transition-all ${
                selectedMachineId === machine.id
                  ? 'bg-[#4A77D4]/10 border border-[#4A77D4]/30 shadow-sm'
                  : 'hover:bg-white/60 border border-transparent'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-2 h-2 rounded-full mt-1.5 ${getStatusColor(machine.status)} shadow-lg`} />
                <div className="flex-1 min-w-0">
                  <div className="text-sm text-[#1C3D5A] mb-0.5">{machine.id}</div>
                  <div className="text-xs text-slate-500 truncate">{machine.name}</div>
                  <div className="text-xs text-slate-400 mt-1">{getStatusLabel(machine.status)}</div>
                </div>
              </div>
            </button>
          ))}
          {filteredMachines.length === 0 && <div className="p-6 text-center text-xs text-slate-500">No machines match “{query}”.</div>}
        </div>
      </ScrollArea>

      {/* Footer Stats */}
      <div className="p-4 border-t border-slate-200/60">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="bg-emerald-500/10 rounded-lg p-2 text-center">
            <div className="text-emerald-600">2</div>
            <div className="text-slate-500">Normal</div>
          </div>
          <div className="bg-yellow-500/10 rounded-lg p-2 text-center">
            <div className="text-yellow-600">2</div>
            <div className="text-slate-500">Warning</div>
          </div>
          <div className="bg-orange-500/10 rounded-lg p-2 text-center">
            <div className="text-orange-600">1</div>
            <div className="text-slate-500">Caution</div>
          </div>
          <div className="bg-red-500/10 rounded-lg p-2 text-center">
            <div className="text-red-600">1</div>
            <div className="text-slate-500">Critical</div>
          </div>
        </div>
      </div>
    </div>
  );
}
