import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export function CostSavingsChart() {
  const data = [
    { week: 'Week 1', cost: 28, saved: 8 },
    { week: 'Week 2', cost: 26, saved: 10 },
    { week: 'Week 3', cost: 25, saved: 11 },
    { week: 'Week 4', cost: 24, saved: 12 },
    { week: 'Week 5', cost: 23, saved: 13 },
    { week: 'Week 6', cost: 22, saved: 14 },
    { week: 'Week 7', cost: 23, saved: 12 },
    { week: 'Week 8', cost: 21, saved: 15 },
    { week: 'Week 9', cost: 20, saved: 16 },
    { week: 'Week 10', cost: 19, saved: 17 },
    { week: 'Week 11', cost: 20, saved: 16 },
    { week: 'Week 12', cost: 18, saved: 18 },
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const cost = payload.find((p: any) => p.dataKey === 'cost')?.value || 0;
      const saved = payload.find((p: any) => p.dataKey === 'saved')?.value || 0;
      const week = payload[0]?.payload?.week || '';
      const downtime = Math.floor(Math.random() * 10) + 12; // Mock downtime

      return (
        <div className="bg-white/95 border border-slate-200 rounded-lg p-3 shadow-lg">
          <div className="text-sm text-[#1C3D5A] mb-2">{week}</div>
          <div className="space-y-1 text-xs">
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-500">Cost:</span>
              <span className="text-slate-700">${cost}K</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-500">Saved:</span>
              <span className="text-[#6BD5C4]">${saved}K</span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <span className="text-slate-500">Downtime:</span>
              <span className="text-slate-700">-{downtime}%</span>
            </div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
      <div className="mb-4">
        <h3 className="text-[#1C3D5A] mb-1">Maintenance Cost vs Savings</h3>
        <p className="text-xs text-slate-500">Weekly cost comparison (in thousands)</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
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
            label={{ value: 'Cost ($K)', angle: -90, position: 'insideLeft', style: { fontSize: 12, fill: '#64748b' } }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            wrapperStyle={{ fontSize: '14px' }}
            formatter={(value) => value === 'cost' ? 'Maintenance Cost' : 'Cost Savings'}
          />
          <Bar dataKey="cost" fill="#D9E0E7" radius={[4, 4, 0, 0]} />
          <Bar dataKey="saved" fill="#6BD5C4" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>

      <div className="mt-4 pt-4 border-t border-slate-200/60">
        <div className="flex items-center justify-between text-sm">
          <div className="text-slate-500">Total Savings (Q4)</div>
          <div className="flex items-center gap-2">
            <span className="text-2xl bg-gradient-to-r from-[#6BD5C4] to-teal-400 bg-clip-text text-transparent">
              $180K
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
