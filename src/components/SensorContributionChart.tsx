import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Thermometer, Volume2, Wind, Eye } from 'lucide-react';

export function SensorContributionChart() {
  const data = [
    { name: 'Temperature', value: 35, color: '#ef4444', icon: Thermometer },
    { name: 'Acoustic', value: 25, color: '#f59e0b', icon: Volume2 },
    { name: 'Airflow', value: 20, color: '#4A77D4', icon: Wind },
    { name: 'Optical', value: 20, color: '#6BD5C4', icon: Eye },
  ];

  const COLORS = data.map(d => d.color);

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white/95 border border-slate-200 rounded-lg p-3 shadow-lg">
          <div className="text-sm text-[#1C3D5A] mb-1">{payload[0].name}</div>
          <div className="text-xs text-slate-600">{payload[0].value}% contribution</div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
      <div className="mb-4">
        <h3 className="text-[#1C3D5A] mb-1">Sensor Contribution Breakdown</h3>
        <p className="text-xs text-slate-500">Detection rate by sensor type</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Donut Chart */}
        <div className="flex items-center justify-center">
          <ResponsiveContainer width="100%" height={240}>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={90}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Legend with Icons */}
        <div className="flex flex-col justify-center space-y-3">
          {data.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${item.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-[#1C3D5A]">{item.name}</div>
                  <div className="text-xs text-slate-500">Sensors</div>
                </div>
                <div className="text-right">
                  <div className="text-xl" style={{ color: item.color }}>
                    {item.value}%
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-slate-200/60">
        <div className="text-xs text-slate-500 text-center">
          Multi-sensor fusion provides comprehensive machine health monitoring
        </div>
      </div>
    </div>
  );
}
