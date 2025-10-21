import { Activity, Clock, AlertTriangle, Thermometer, Wind, Eye, Volume2 } from 'lucide-react';
import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

interface MachineDetailPanelProps {
  machineId: string;
  machineName: string;
  status: 'normal' | 'warning' | 'caution' | 'critical';
  lastUpdated: string;
}

export function MachineDetailPanel({
  machineId,
  machineName,
  status,
  lastUpdated,
}: MachineDetailPanelProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'normal':
        return 'text-emerald-500 bg-emerald-500/10';
      case 'warning':
        return 'text-yellow-500 bg-yellow-500/10';
      case 'caution':
        return 'text-orange-500 bg-orange-500/10';
      case 'critical':
        return 'text-red-500 bg-red-500/10';
      default:
        return 'text-slate-500 bg-slate-500/10';
    }
  };

  // Sample sensor data for the chart
  const sensorData = [
    { time: '00:00', temperature: 72, sound: 45, airflow: 88, optical: 92 },
    { time: '04:00', temperature: 74, sound: 48, airflow: 86, optical: 90 },
    { time: '08:00', temperature: 78, sound: 52, airflow: 84, optical: 88 },
    { time: '12:00', temperature: 82, sound: 58, airflow: 82, optical: 85 },
    { time: '16:00', temperature: 85, sound: 64, airflow: 79, optical: 82 },
    { time: '20:00', temperature: 88, sound: 71, airflow: 76, optical: 78 },
    { time: '24:00', temperature: 91, sound: 78, airflow: 72, optical: 75 },
  ];

  const historicalRepairs = [
    { date: 'Oct 15, 2025', issue: 'Thermal sensor replacement', outcome: 'Success', downtime: '2.5h' },
    { date: 'Sep 28, 2025', issue: 'Belt tension adjustment', outcome: 'Success', downtime: '1h' },
    { date: 'Sep 10, 2025', issue: 'Preventive maintenance', outcome: 'Success', downtime: '3h' },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-[#1C3D5A]">{machineId}</h2>
              <span className={`px-3 py-1 rounded-lg text-sm ${getStatusColor(status)}`}>
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </span>
            </div>
            <p className="text-slate-500">{machineName}</p>
          </div>
          <div className="text-right text-sm text-slate-500">
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>Last updated</span>
            </div>
            <div className="text-[#1C3D5A] mt-1">{lastUpdated}</div>
          </div>
        </div>
      </div>

      {/* Sensor Trends Chart */}
      <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
        <h3 className="text-[#1C3D5A] mb-4">Sensor Data Trends (24h)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={sensorData}>
            <defs>
              <linearGradient id="colorTemp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorSound" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#f59e0b" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorAirflow" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4A77D4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4A77D4" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorOptical" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#6BD5C4" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#6BD5C4" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="time" stroke="#64748b" />
            <YAxis stroke="#64748b" />
            <Tooltip
              contentStyle={{
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Area
              type="monotone"
              dataKey="temperature"
              stroke="#ef4444"
              fillOpacity={1}
              fill="url(#colorTemp)"
              name="Temperature"
            />
            <Area
              type="monotone"
              dataKey="sound"
              stroke="#f59e0b"
              fillOpacity={1}
              fill="url(#colorSound)"
              name="Sound"
            />
            <Area
              type="monotone"
              dataKey="airflow"
              stroke="#4A77D4"
              fillOpacity={1}
              fill="url(#colorAirflow)"
              name="Airflow"
            />
            <Area
              type="monotone"
              dataKey="optical"
              stroke="#6BD5C4"
              fillOpacity={1}
              fill="url(#colorOptical)"
              name="Optical"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* AI Forecast & Actions Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* AI Forecast */}
        <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-[#4A77D4]" />
            <h3 className="text-[#1C3D5A]">AI Forecast</h3>
          </div>

          <div className="space-y-4">
            <div>
              <div className="text-sm text-slate-500 mb-1">Failure Probability</div>
              <div className="flex items-baseline gap-2">
                <span className="text-4xl text-red-500">87%</span>
                <span className="text-slate-500">High Risk</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="text-sm text-slate-500 mb-1">Time to Failure</div>
                <div className="text-2xl text-[#1C3D5A]">48h</div>
              </div>
              <div>
                <div className="text-sm text-slate-500 mb-1">Confidence</div>
                <div className="text-2xl text-[#6BD5C4]">92%</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200">
              <div className="text-sm text-slate-500 mb-2">Primary Issue</div>
              <div className="flex items-center gap-2 text-sm text-[#1C3D5A]">
                <Thermometer className="w-4 h-4 text-red-500" />
                <span>Thermal sensor anomaly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Actions */}
        <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
          <h3 className="text-[#1C3D5A] mb-4">Recommended Actions</h3>

          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-[#4A77D4] to-[#6BD5C4] text-white rounded-xl p-4 text-left hover:shadow-lg transition-all group">
              <div className="flex items-center justify-between">
                <div>
                  <div className="mb-1">Order Part #T-217</div>
                  <div className="text-sm opacity-90">Thermal sensor replacement</div>
                </div>
                <div className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">→</div>
              </div>
            </button>

            <button className="w-full bg-white/60 border border-[#4A77D4]/30 text-[#4A77D4] rounded-xl p-4 text-left hover:bg-[#4A77D4]/5 transition-all group">
              <div className="flex items-center justify-between">
                <div>
                  <div className="mb-1">Schedule Maintenance</div>
                  <div className="text-sm text-slate-500">Next available: Oct 22, 09:00</div>
                </div>
                <div className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">→</div>
              </div>
            </button>

            <button className="w-full bg-white/60 border border-slate-200 text-slate-600 rounded-xl p-4 text-left hover:bg-white/80 transition-all group">
              <div className="flex items-center justify-between">
                <div>
                  <div className="mb-1">View Maintenance Manual</div>
                  <div className="text-sm text-slate-500">Troubleshooting guide</div>
                </div>
                <div className="text-2xl opacity-50 group-hover:opacity-100 transition-opacity">→</div>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Historical Repairs */}
      <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
        <h3 className="text-[#1C3D5A] mb-4">Last 3 Repairs</h3>

        <div className="space-y-3">
          {historicalRepairs.map((repair, index) => (
            <div key={index} className="bg-white/60 rounded-xl p-4 border border-slate-200/60">
              <div className="flex items-start justify-between mb-2">
                <div className="flex-1">
                  <div className="text-sm text-[#1C3D5A] mb-1">{repair.issue}</div>
                  <div className="text-xs text-slate-500">{repair.date}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-emerald-500/10 text-emerald-600 text-xs rounded-md">
                    {repair.outcome}
                  </span>
                  <span className="text-xs text-slate-500">{repair.downtime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
