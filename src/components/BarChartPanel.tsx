import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

export function BarChartPanel() {
  const data = [
    { time: '2:00', value: 280 },
    { time: '4:00', value: 320 },
    { time: '6:00', value: 310 },
    { time: '8:00', value: 380 },
    { time: '10:00', value: 420 },
    { time: '12:00', value: 460 },
    { time: '14:00', value: 490 },
    { time: '16:00', value: 330 },
    { time: '18:00', value: 360 },
    { time: '20:00', value: 400 },
    { time: '22:00', value: 380 },
    { time: '24:00', value: 350 }
  ];

  return (
    <div className="bg-gradient-to-br from-white/90 to-[#D9E0E7]/30 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
      <div className="text-sm text-[#1C3D5A] mb-4 opacity-70">Predictive Maintenance Activity (24h)</div>
      <ResponsiveContainer width="100%" height={200}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#D9E0E7" vertical={false} />
          <XAxis 
            dataKey="time" 
            tick={{ fill: '#1C3D5A', fontSize: 11 }}
            axisLine={{ stroke: '#D9E0E7' }}
          />
          <YAxis 
            tick={{ fill: '#1C3D5A', fontSize: 11 }}
            axisLine={{ stroke: '#D9E0E7' }}
          />
          <Bar 
            dataKey="value" 
            fill="url(#barGradient)" 
            radius={[8, 8, 0, 0]}
          />
          <defs>
            <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6BD5C4" />
              <stop offset="100%" stopColor="#4A77D4" />
            </linearGradient>
          </defs>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
