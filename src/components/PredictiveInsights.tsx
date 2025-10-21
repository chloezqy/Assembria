import { Brain, Package, Clock, TrendingDown } from 'lucide-react';

export function PredictiveInsights() {
  const insights = [
    { icon: Brain, label: 'Upcoming repairs detected', value: '3' },
    { icon: Package, label: 'Parts pre-ordered', value: '2' },
    { icon: TrendingDown, label: 'Downtime saved', value: '8.5 hrs' }
  ];

  const upcomingRepairs = [
    { machine: 'MD-0303F-10', time: '2 days', priority: 'high' },
    { machine: 'G3000-GL', time: '1 day', priority: 'critical' },
    { machine: 'GR150-2', time: '3 days', priority: 'medium' }
  ];

  return (
    <div className="space-y-4">
      {/* Predictive Insights Panel */}
      <div className="bg-gradient-to-br from-white/90 to-[#D9E0E7]/30 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
        <div className="flex items-center gap-2 mb-6">
          <Brain className="w-5 h-5 text-[#4A77D4]" />
          <span className="text-[#1C3D5A]">Predictive Insights</span>
        </div>

        <div className="space-y-4">
          {insights.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-4 bg-white/60 rounded-xl">
              <div className="p-3 bg-gradient-to-br from-[#4A77D4]/10 to-[#6BD5C4]/10 rounded-lg">
                <item.icon className="w-5 h-5 text-[#4A77D4]" />
              </div>
              <div className="flex-1">
                <div className="text-xs text-slate-500 mb-1">{item.label}</div>
                <div className="text-xl text-[#1C3D5A]">{item.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Repairs */}
      <div className="bg-gradient-to-br from-white/90 to-[#D9E0E7]/30 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-4 h-4 text-[#4A77D4]" />
          <span className="text-sm text-[#1C3D5A]">Scheduled Repairs</span>
        </div>

        <div className="space-y-3">
          {upcomingRepairs.map((repair, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-white/60 rounded-lg">
              <div>
                <div className="text-sm text-[#1C3D5A] mb-1">{repair.machine}</div>
                <div className="text-xs text-slate-500">{repair.time}</div>
              </div>
              <div className={`px-2 py-1 rounded text-xs ${
                repair.priority === 'critical' ? 'bg-red-100 text-red-600' :
                repair.priority === 'high' ? 'bg-orange-100 text-orange-600' :
                'bg-yellow-100 text-yellow-600'
              }`}>
                {repair.priority}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
