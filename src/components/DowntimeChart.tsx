import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';

export function DowntimeChart() {
  const data = [
    { week: 'Week 1', downtime: 45 },
    { week: 'Week 2', downtime: 42 },
    { week: 'Week 3', downtime: 38 },
    { week: 'Week 4', downtime: 35 },
    { week: 'Week 5', downtime: 32 },
    { week: 'Week 6', downtime: 30 },
    { week: 'Week 7', downtime: 28 },
    { week: 'Week 8', downtime: 26 },
    { week: 'Week 9', downtime: 25 },
    { week: 'Week 10', downtime: 23 },
    { week: 'Week 11', downtime: 22 },
    { week: 'Week 12', downtime: 20 },
  ];

  return (
    <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
      <div className="mb-4">
        <h3 className="text-[#1C3D5A] mb-1">Downtime Reduction Over Time</h3>
        <p className="text-xs text-slate-500">Weekly downtime percentage trend</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="downtimeGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#4A77D4" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#4A77D4" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="week" 
            stroke="#64748b" 
            tick={{ fontSize: 12 }}
            angle={-45}
            textAnchor="end"
            height={60}
          />
          <YAxis 
            stroke="#64748b" 
            tick={{ fontSize: 12 }}
            label={{ value: 'Downtime %', angle: -90, position: 'insideLeft', style: { fontSize: 12, fill: '#64748b' } }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.95)',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              fontSize: '14px',
            }}
            formatter={(value: number) => [`${value}%`, 'Downtime']}
          />
          <Area
            type="monotone"
            dataKey="downtime"
            stroke="#4A77D4"
            strokeWidth={3}
            fillOpacity={1}
            fill="url(#downtimeGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="mt-4 pt-4 border-t border-slate-200/60">
        <div className="flex items-center justify-between text-sm">
          <div className="text-slate-500">Total Reduction</div>
          <div className="flex items-center gap-2">
            <span className="text-[#1C3D5A]">56%</span>
            <span className="text-xs text-emerald-600 bg-emerald-500/10 px-2 py-1 rounded-lg">
              ↓ 25 percentage points
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
