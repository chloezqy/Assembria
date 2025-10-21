import { Progress } from './ui/progress';
import { Activity, Clock, Target, TrendingUp } from 'lucide-react';

interface MachineCardProps {
  id: string;
  health: number;
  forecast: string;
  probability: number;
  status: 'normal' | 'warning' | 'caution' | 'critical';
}

export function MachineCard({ id, health, forecast, probability, status }: MachineCardProps) {
  const getStatusColor = (status: string) => {
    switch(status) {
      case 'normal': return 'text-emerald-500';
      case 'warning': return 'text-yellow-500';
      case 'caution': return 'text-orange-500';
      case 'critical': return 'text-red-500';
      default: return 'text-slate-500';
    }
  };

  const getProgressColor = (health: number) => {
    if (health >= 80) return 'bg-emerald-400';
    if (health >= 60) return 'bg-yellow-400';
    if (health >= 40) return 'bg-orange-400';
    return 'bg-red-400';
  };

  return (
    <div className="w-full h-full bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all group relative overflow-hidden">
      {/* Hover overlay with additional details */}
      <div className="absolute inset-0 z-20 bg-gradient-to-br from-[#4A77D4]/95 to-[#6BD5C4]/95 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl p-6 flex flex-col justify-between">
        <div>
          <div className="text-white mb-4">{id}</div>
          
          <div className="space-y-4">
            <div>
              <div className="text-white/70 text-xs mb-1">Estimated Time</div>
              <div className="text-white flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{forecast === 'Optimal' ? 'No repair needed' : forecast.replace('Repair in ', '')}</span>
              </div>
            </div>

            <div>
              <div className="text-white/70 text-xs mb-1">AI Confidence</div>
              <div className="text-white flex items-center gap-2">
                <Target className="w-4 h-4" />
                <span>{95 - Math.floor(Math.random() * 10)}%</span>
              </div>
            </div>

            <div>
              <div className="text-white/70 text-xs mb-1">Recommended Action</div>
              <div className="text-white flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">
                  {status === 'critical' ? 'Immediate repair' : status === 'warning' ? 'Schedule soon' : status === 'caution' ? 'Monitor closely' : 'Routine check'}
                </span>
              </div>
            </div>
          </div>
        </div>

        <button
          className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white border border-white/30 rounded-md px-3 py-1.5 text-xs font-medium transition-all translate-y-[-10px] opacity-0 group-hover:opacity-100 group-hover:translate-y-0 duration-300"
        >
          Details →
        </button>
      </div>

      {/* Original card content */}
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="text-[#1C3D5A]">{id}</div>
        <Activity className={`w-4 h-4 ${getStatusColor(status)}`} />
      </div>

      {/* Health Bar */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-slate-500">Health</span>
          <span className="text-xs text-[#1C3D5A]">{health}%</span>
        </div>
        <div className="relative h-2 bg-slate-200 rounded-full overflow-hidden">
          <div 
            className={`absolute h-full ${getProgressColor(health)} rounded-full transition-all`}
            style={{ width: `${health}%` }}
          ></div>
        </div>
      </div>

      {/* Forecast */}
      <div className="mb-3">
        <div className="text-xs text-slate-500 mb-1">Forecast</div>
        <div className="text-sm text-[#1C3D5A]">{forecast}</div>
      </div>

      {/* Failure Probability */}
      <div className="pt-3 border-t border-slate-200">
        <div className="text-xs text-slate-500 mb-1">Failure Probability</div>
        <div className={`text-2xl ${getStatusColor(status)}`}>{probability}%</div>
      </div>
    </div>
  );
}