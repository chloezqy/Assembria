import { AlertTriangle, CheckCircle, AlertCircle } from 'lucide-react';

export function AssemblyLineVisualization() {
  const stations = [
    { id: 1, name: 'Welding Unit A', eta: '2.3h', risk: 12, status: 'normal' },
    { id: 2, name: 'Assembly Robot B', eta: '1.8h', risk: 87, status: 'critical' },
    { id: 3, name: 'Quality Check C', eta: '3.1h', risk: 45, status: 'caution' },
    { id: 4, name: 'Paint Booth D', eta: '4.2h', risk: 28, status: 'warning' },
    { id: 5, name: 'Final Inspection', eta: '5.0h', risk: 8, status: 'normal' }
  ];

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'normal': return { bg: 'bg-emerald-50', border: 'border-emerald-400', text: 'text-emerald-600', icon: CheckCircle };
      case 'warning': return { bg: 'bg-yellow-50', border: 'border-yellow-400', text: 'text-yellow-600', icon: AlertCircle };
      case 'caution': return { bg: 'bg-orange-50', border: 'border-orange-400', text: 'text-orange-600', icon: AlertTriangle };
      case 'critical': return { bg: 'bg-red-50', border: 'border-red-400', text: 'text-red-600', icon: AlertTriangle };
      default: return { bg: 'bg-slate-50', border: 'border-slate-400', text: 'text-slate-600', icon: AlertCircle };
    }
  };

  return (
    <div className="bg-gradient-to-br from-white/90 to-[#D9E0E7]/30 backdrop-blur-sm rounded-2xl p-8 border border-white/60 shadow-lg">
      <div className="text-sm text-[#1C3D5A] mb-6 opacity-70">Assembly Line Overview</div>
      
      {/* 2.5D Assembly Line Visualization */}
      <div className="relative h-64 mb-8">
        {/* Grid background for blueprint effect */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(#4A77D4 1px, transparent 1px), linear-gradient(90deg, #4A77D4 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }}></div>

        {/* Conveyor belt */}
        <div className="absolute bottom-20 left-0 right-0 h-12 bg-gradient-to-b from-slate-300/40 to-slate-400/40 rounded-lg border-t-2 border-slate-300/60"></div>

        {/* Assembly stations */}
        <div className="relative h-full flex items-end justify-around px-4">
          {stations.map((station, index) => {
            const statusConfig = getStatusColor(station.status);
            const Icon = statusConfig.icon;
            
            return (
              <div key={station.id} className="relative flex flex-col items-center" style={{ 
                transform: `perspective(600px) rotateX(5deg) translateY(${index % 2 === 0 ? '0' : '-10px'})`
              }}>
                {/* Machine unit - simplified 3D box */}
                <div className="relative mb-4">
                  {/* Top face */}
                  <div className="w-16 h-3 bg-gradient-to-br from-slate-400 to-slate-500 rounded-t-sm transform -skew-y-12 origin-bottom-left"></div>
                  {/* Front face */}
                  <div className="w-16 h-24 bg-gradient-to-br from-slate-300 to-slate-400 rounded-sm border border-slate-300/60 flex items-center justify-center relative">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#4A77D4]/20 to-[#6BD5C4]/20 rounded-md border border-[#6BD5C4]/40"></div>
                    {/* Indicator light */}
                    <div className={`absolute top-2 right-2 w-2 h-2 rounded-full ${statusConfig.border.replace('border', 'bg')} animate-pulse`}></div>
                  </div>
                  {/* Side face */}
                  <div className="absolute top-3 -right-2 w-2 h-24 bg-gradient-to-br from-slate-500 to-slate-600 transform skew-y-12 origin-top-left"></div>
                </div>

                {/* Floating info card */}
                <div className={`absolute -top-2 left-1/2 -translate-x-1/2 ${statusConfig.bg} ${statusConfig.border} border-2 rounded-lg p-3 min-w-[160px] shadow-xl backdrop-blur-sm`}>
                  <div className="flex items-start gap-2 mb-2">
                    <Icon className={`w-4 h-4 ${statusConfig.text} mt-0.5`} />
                    <div className="flex-1">
                      <div className="text-xs text-[#1C3D5A] mb-1">{station.name}</div>
                      <div className="text-xs text-slate-500">ETA: {station.eta}</div>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs text-slate-500">Risk:</span>
                    <span className={`${statusConfig.text}`}>{station.risk}%</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center gap-6 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
          <span>Normal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
          <span>Minor Risk</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-orange-400 rounded-full"></div>
          <span>Predicted Repair</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
          <span>Critical</span>
        </div>
      </div>
    </div>
  );
}
