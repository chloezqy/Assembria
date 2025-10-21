import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

export function DonutChartPanel() {
  const data = [
    { name: 'Thermal', value: 35, color: '#4A77D4' },
    { name: 'Acoustic', value: 28, color: '#6BD5C4' },
    { name: 'Airflow', value: 22, color: '#7B92D6' },
    { name: 'Optical', value: 15, color: '#A5C9E8' }
  ];

  return (
    <div className="bg-gradient-to-br from-white/90 to-[#D9E0E7]/30 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
      <div className="text-sm text-[#1C3D5A] mb-2 opacity-70">Issue Distribution</div>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={45}
            outerRadius={75}
            paddingAngle={3}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Legend 
            verticalAlign="middle" 
            align="right"
            layout="vertical"
            iconType="circle"
            iconSize={8}
            formatter={(value, entry: any) => (
              <span className="text-xs text-[#1C3D5A]">{value}</span>
            )}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
