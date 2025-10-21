import { TrendingUp, Clock, Users, DollarSign, Quote } from 'lucide-react';

export function ROISummaryCard() {
  const metrics = [
    {
      label: 'Average repair time',
      before: '2.8h',
      after: '1.9h',
      improvement: '-32%',
      icon: Clock,
    },
    {
      label: 'Labor utilization',
      before: '68%',
      after: '82%',
      improvement: '+14%',
      icon: Users,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-[#1C3D5A] mb-1">System ROI & Operational Value</h3>
          <p className="text-xs text-slate-500">Quantified impact of predictive maintenance</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#4A77D4] to-[#6BD5C4] text-white rounded-lg text-sm hover:shadow-lg transition-all">
          <DollarSign className="w-4 h-4" />
          Share Report
        </button>
      </div>

      {/* Main ROI */}
      <div className="bg-gradient-to-r from-[#4A77D4]/10 to-[#6BD5C4]/10 rounded-2xl p-6 mb-6 border border-[#4A77D4]/20">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sm text-slate-600 mb-2">Total ROI</div>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl bg-gradient-to-r from-[#4A77D4] to-[#6BD5C4] bg-clip-text text-transparent">
                +285%
              </span>
              <TrendingUp className="w-8 h-8 text-emerald-600" />
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-slate-500 mb-1">Investment</div>
            <div className="text-2xl text-slate-700">$120K</div>
            <div className="text-xs text-slate-500 mt-2">Return</div>
            <div className="text-2xl text-[#6BD5C4]">$342K</div>
          </div>
        </div>
      </div>

      {/* Before vs After Comparison */}
      <div className="mb-6">
        <div className="text-sm text-slate-600 mb-3">Before Assembria vs After Assembria</div>
        <div className="space-y-3">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-white/60 rounded-xl p-4 border border-slate-200/60">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-[#4A77D4]" />
                  </div>
                  <div className="flex-1 text-sm text-[#1C3D5A]">{metric.label}</div>
                  <div className="text-xs bg-emerald-500/10 text-emerald-600 px-2 py-1 rounded-lg">
                    {metric.improvement}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-slate-500 mb-1">Before</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-slate-200 rounded-full">
                        <div className="h-full bg-slate-400 rounded-full" style={{ width: '60%' }} />
                      </div>
                      <span className="text-sm text-slate-600">{metric.before}</span>
                    </div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 mb-1">After</div>
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-[#6BD5C4]/20 rounded-full">
                        <div className="h-full bg-[#6BD5C4] rounded-full" style={{ width: '85%' }} />
                      </div>
                      <span className="text-sm text-[#6BD5C4]">{metric.after}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Quote Block */}
      <div className="bg-gradient-to-r from-slate-50 to-blue-50/50 rounded-xl p-5 border-l-4 border-[#4A77D4] relative">
        <Quote className="absolute top-4 right-4 w-8 h-8 text-[#4A77D4]/20" />
        <p className="text-sm text-slate-700 italic mb-3">
          "Predictive insights have saved over <span className="text-[#4A77D4]">180 hours</span> of cumulative downtime this quarter."
        </p>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4A77D4] to-[#6BD5C4]" />
          <div>
            <div className="text-xs text-[#1C3D5A]">Operations Manager</div>
            <div className="text-xs text-slate-500">Manufacturing Division</div>
          </div>
        </div>
      </div>
    </div>
  );
}
