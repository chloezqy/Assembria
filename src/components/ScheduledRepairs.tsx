import { Clock, Wrench, AlertCircle } from 'lucide-react';

interface Repair {
  id: string;
  machineId: string;
  issue: string;
  scheduledDate: string;
  priority: 'high' | 'critical' | 'medium';
  estimatedDuration: string;
}

export function ScheduledRepairs() {
  const repairs: Repair[] = [
    {
      id: 'R-001',
      machineId: 'G3000-GL',
      issue: 'Thermal sensor anomaly detected',
      scheduledDate: 'Oct 22, 09:00',
      priority: 'critical',
      estimatedDuration: '2.5h'
    },
    {
      id: 'R-002',
      machineId: 'MD-0303F-10',
      issue: 'Acoustic vibration pattern shift',
      scheduledDate: 'Oct 23, 14:00',
      priority: 'high',
      estimatedDuration: '1.5h'
    },
    {
      id: 'R-003',
      machineId: 'GR150-2',
      issue: 'Preventive maintenance - belt replacement',
      scheduledDate: 'Oct 24, 11:00',
      priority: 'medium',
      estimatedDuration: '3h'
    },
    {
      id: 'R-004',
      machineId: 'G3000-DX',
      issue: 'Airflow sensor calibration needed',
      scheduledDate: 'Oct 25, 08:30',
      priority: 'high',
      estimatedDuration: '1h'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-500/10 text-red-600 border-red-500/20';
      case 'high':
        return 'bg-orange-500/10 text-orange-600 border-orange-500/20';
      case 'medium':
        return 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 border-slate-500/20';
    }
  };

  const getPriorityIcon = (priority: string) => {
    if (priority === 'critical') {
      return <AlertCircle className="w-3.5 h-3.5" />;
    }
    return <Wrench className="w-3.5 h-3.5" />;
  };

  return (
    <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
      <div className="flex items-center justify-between mb-5">
        <h3 className="text-[#1C3D5A]">Scheduled Repairs</h3>
        <div className="text-xs text-slate-500">{repairs.length} upcoming</div>
      </div>

      <div className="space-y-3">
        {repairs.map((repair) => (
          <div
            key={repair.id}
            className="bg-white/60 rounded-xl p-4 border border-slate-200/60 hover:shadow-md transition-all group"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-sm text-[#1C3D5A]">{repair.machineId}</span>
                  <span
                    className={`px-2 py-0.5 rounded-md border text-xs flex items-center gap-1 ${getPriorityColor(
                      repair.priority
                    )}`}
                  >
                    {getPriorityIcon(repair.priority)}
                    {repair.priority}
                  </span>
                </div>
                <p className="text-sm text-slate-600">{repair.issue}</p>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 mt-3">
              <div className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{repair.scheduledDate}</span>
              </div>
              <span className="text-[#4A77D4]">{repair.estimatedDuration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
