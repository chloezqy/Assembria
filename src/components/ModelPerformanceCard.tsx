import { TrendingUp, Award, Zap } from 'lucide-react';

export function ModelPerformanceCard() {
  const models = [
    {
      version: 'v1.3',
      accuracy: 91,
      status: 'current',
      deployedDate: 'Oct 2025',
      improvement: '+4%',
      color: 'from-[#4A77D4] to-[#6BD5C4]',
    },
    {
      version: 'v1.2',
      accuracy: 87,
      status: 'previous',
      deployedDate: 'Jul 2025',
      improvement: '+5%',
      color: 'from-slate-500 to-slate-400',
    },
    {
      version: 'v1.1',
      accuracy: 82,
      status: 'archived',
      deployedDate: 'Apr 2025',
      improvement: 'baseline',
      color: 'from-slate-400 to-slate-300',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-[#1C3D5A] mb-1">Model Performance Evolution</h3>
          <p className="text-xs text-slate-500">AI accuracy improvement over time</p>
        </div>
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A77D4]/10 to-[#6BD5C4]/10 flex items-center justify-center">
          <Award className="w-6 h-6 text-[#4A77D4]" />
        </div>
      </div>

      <div className="space-y-3">
        {models.map((model, index) => (
          <div
            key={index}
            className={`rounded-xl p-4 border transition-all ${
              model.status === 'current'
                ? 'bg-gradient-to-r from-[#4A77D4]/5 to-[#6BD5C4]/5 border-[#4A77D4]/30 shadow-sm'
                : 'bg-white/40 border-slate-200/60'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-3">
                <div className={`text-sm text-[#1C3D5A] px-2 py-1 rounded-lg ${
                  model.status === 'current' ? 'bg-[#4A77D4]/10' : 'bg-slate-100'
                }`}>
                  Model {model.version}
                </div>
                {model.status === 'current' && (
                  <span className="flex items-center gap-1 text-xs bg-emerald-500/10 text-emerald-600 px-2 py-1 rounded-lg">
                    <Zap className="w-3 h-3" />
                    Active
                  </span>
                )}
              </div>
              <div className={`text-2xl bg-gradient-to-r ${model.color} bg-clip-text text-transparent`}>
                {model.accuracy}%
              </div>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500">Deployed: {model.deployedDate}</span>
              {model.improvement !== 'baseline' && (
                <span className="flex items-center gap-1 text-emerald-600">
                  <TrendingUp className="w-3 h-3" />
                  {model.improvement}
                </span>
              )}
              {model.improvement === 'baseline' && (
                <span className="text-slate-400">Baseline</span>
              )}
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-1.5 bg-slate-200 rounded-full overflow-hidden">
              <div
                className={`h-full bg-gradient-to-r ${model.color} rounded-full transition-all`}
                style={{ width: `${model.accuracy}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-200/60">
        <div className="flex items-center justify-between text-sm">
          <div className="text-slate-500">Total Improvement</div>
          <div className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span className="text-[#1C3D5A]">+9 percentage points</span>
          </div>
        </div>
      </div>
    </div>
  );
}
