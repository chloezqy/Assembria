import { Clock, ShieldCheck, DollarSign, Timer } from 'lucide-react';

export function PredictiveOutcomesCard() {
  const metrics = [
    {
      label: 'Downtime Saved',
      value: '8.5',
      unit: 'hrs',
      icon: Clock,
      color: 'from-[#4A77D4] to-[#6BD5C4]',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-[#4A77D4]'
    },
    {
      label: 'Repairs Prevented',
      value: '3',
      unit: 'repairs',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-emerald-400',
      bgColor: 'bg-emerald-500/10',
      iconColor: 'text-emerald-600'
    },
    {
      label: 'Cost Reduced',
      value: '12',
      unit: '%',
      icon: DollarSign,
      color: 'from-[#6BD5C4] to-teal-400',
      bgColor: 'bg-teal-500/10',
      iconColor: 'text-[#6BD5C4]'
    },
    {
      label: 'Avg Repair Time',
      value: '2.3',
      unit: 'hrs',
      icon: Timer,
      color: 'from-orange-500 to-orange-400',
      bgColor: 'bg-orange-500/10',
      iconColor: 'text-orange-500'
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
      <div className="mb-4">
        <h3 className="text-[#1C3D5A] mb-1">Predictive Outcomes</h3>
        {/* <p className="text-xs text-slate-500">AI-driven efficiency gains this month</p> */}
      </div>

      <div className="space-y-3">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;
          return (
            <div key={index} className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-lg ${metric.bgColor} flex items-center justify-center flex-shrink-0`}>
                <Icon className={`w-5 h-5 ${metric.iconColor}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-slate-500 mb-0.5">{metric.label}</div>
                <div className="flex items-baseline gap-1">
                  <span className={`text-xl bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                    {metric.value}
                  </span>
                  <span className="text-xs text-slate-400">{metric.unit}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
