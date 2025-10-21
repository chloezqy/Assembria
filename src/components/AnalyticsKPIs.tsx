import { TrendingDown, DollarSign, Wrench, Target, TrendingUp } from 'lucide-react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';

export function AnalyticsKPIs() {
  // Sample sparkline data
  const downtimeData = [
    { value: 45 },
    { value: 42 },
    { value: 38 },
    { value: 35 },
    { value: 32 },
    { value: 30 },
  ];

  const costData = [
    { value: 100 },
    { value: 120 },
    { value: 140 },
    { value: 160 },
    { value: 170 },
    { value: 180 },
  ];

  const repairsData = [
    { value: 8 },
    { value: 10 },
    { value: 12 },
    { value: 13 },
    { value: 14 },
    { value: 15 },
  ];

  const accuracyData = [
    { value: 82 },
    { value: 84 },
    { value: 87 },
    { value: 88 },
    { value: 90 },
    { value: 91 },
  ];

  const kpis = [
    {
      label: 'Downtime Reduced',
      value: '32',
      unit: '%',
      trend: '↓ vs last quarter',
      icon: TrendingDown,
      color: 'from-[#6BD5C4] to-teal-400',
      bgColor: 'bg-teal-500/10',
      iconColor: 'text-[#6BD5C4]',
      trendPositive: true,
      sparklineData: downtimeData,
      sparklineColor: '#6BD5C4',
    },
    {
      label: 'Maintenance Cost Savings',
      value: '$180K',
      unit: 'saved',
      trend: '+28% increase',
      icon: DollarSign,
      color: 'from-emerald-500 to-emerald-400',
      bgColor: 'bg-emerald-500/10',
      iconColor: 'text-emerald-600',
      trendPositive: true,
      sparklineData: costData,
      sparklineColor: '#10b981',
    },
    {
      label: 'Repairs Prevented',
      value: '15',
      unit: 'this quarter',
      trend: '+25% improvement',
      icon: Wrench,
      color: 'from-[#4A77D4] to-[#6BD5C4]',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-[#4A77D4]',
      trendPositive: true,
      sparklineData: repairsData,
      sparklineColor: '#4A77D4',
    },
    {
      label: 'Model Accuracy',
      value: '91',
      unit: '%',
      trend: 'predictive success',
      icon: Target,
      color: 'from-orange-500 to-orange-400',
      bgColor: 'bg-orange-500/10',
      iconColor: 'text-orange-500',
      trendPositive: true,
      sparklineData: accuracyData,
      sparklineColor: '#f97316',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              {kpi.trendPositive && (
                <div className="flex items-center gap-1 text-emerald-600">
                  <TrendingUp className="w-4 h-4" />
                </div>
              )}
            </div>

            <div className="mb-3">
              <div className={`text-4xl bg-gradient-to-r ${kpi.color} bg-clip-text text-transparent mb-1`}>
                {kpi.value}
                {kpi.label === 'Model Accuracy' && <span className="text-2xl">%</span>}
              </div>
              <div className="text-xs text-slate-500">{kpi.unit}</div>
            </div>

            <div className="mb-3">
              <div className="text-sm text-slate-600">{kpi.label}</div>
              <div className="text-xs text-[#6BD5C4] mt-1">{kpi.trend}</div>
            </div>

            {/* Sparkline */}
            <div className="h-12 -mx-2">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={kpi.sparklineData}>
                  <Line
                    type="monotone"
                    dataKey="value"
                    stroke={kpi.sparklineColor}
                    strokeWidth={2}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        );
      })}
    </div>
  );
}
