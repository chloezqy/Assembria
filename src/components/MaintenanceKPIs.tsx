import { Clock, TrendingDown, Users, Wrench } from 'lucide-react';

export function MaintenanceKPIs() {
  const kpis = [
    {
      label: 'Downtime Prevented',
      value: '8.5',
      unit: 'hrs',
      icon: Clock,
      color: 'from-[#4A77D4] to-[#6BD5C4]',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-[#4A77D4]',
      trend: '+12%',
      trendUp: true
    },
    {
      label: 'Average Repair Duration',
      value: '2.3',
      unit: 'hrs',
      icon: Wrench,
      color: 'from-orange-500 to-orange-400',
      bgColor: 'bg-orange-500/10',
      iconColor: 'text-orange-500',
      trend: '-8%',
      trendUp: false
    },
    {
      label: 'Labor Utilization',
      value: '82',
      unit: '%',
      icon: Users,
      color: 'from-[#6BD5C4] to-teal-400',
      bgColor: 'bg-teal-500/10',
      iconColor: 'text-[#6BD5C4]',
      trend: '+5%',
      trendUp: true
    },
    {
      label: 'Upcoming Repairs',
      value: '3',
      unit: 'scheduled',
      icon: TrendingDown,
      color: 'from-emerald-500 to-emerald-400',
      bgColor: 'bg-emerald-500/10',
      iconColor: 'text-emerald-600',
      trend: 'Next 48h',
      trendUp: null
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi, index) => {
        const Icon = kpi.icon;
        return (
          <div
            key={index}
            className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg hover:shadow-xl transition-all"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 rounded-xl ${kpi.bgColor} flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${kpi.iconColor}`} />
              </div>
              {kpi.trendUp !== null && (
                <span
                  className={`text-xs px-2 py-1 rounded-lg ${
                    kpi.trendUp
                      ? 'bg-emerald-500/10 text-emerald-600'
                      : 'bg-blue-500/10 text-blue-600'
                  }`}
                >
                  {kpi.trend}
                </span>
              )}
              {kpi.trendUp === null && (
                <span className="text-xs px-1 py-1 rounded-lg bg-slate-100 text-slate-600">
                  {kpi.trend}
                </span>
              )}
            </div>

            <div className="mb-1">
              <div className="flex items-baseline gap-1">
                <span className={`text-3xl bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent`}>
                  {kpi.value}
                </span>
                <span className="text-sm text-slate-400">{kpi.unit}</span>
              </div>
            </div>

            <div className="text-sm text-slate-500">{kpi.label}</div>
          </div>
        );
      })}
    </div>
  );
}
