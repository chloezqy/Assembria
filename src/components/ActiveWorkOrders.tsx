import { useState } from 'react';
import { Clock, Users, Wrench, CheckCircle, Eye } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import { Badge } from './ui/badge';

interface WorkOrder {
  id: string;
  machineId: string;
  issueType: string;
  assignedTeam: string;
  repairWindow: string;
  status: 'scheduled' | 'in-progress' | 'completed';
  priority: 'critical' | 'high' | 'medium';
}

export function ActiveWorkOrders() {
  const [filter, setFilter] = useState<'all' | 'scheduled' | 'in-progress' | 'completed'>('all');

  const workOrders: WorkOrder[] = [
    {
      id: 'WO-2025-001',
      machineId: 'G3000-GL',
      issueType: 'Thermal Sensor Anomaly',
      assignedTeam: 'Crew B',
      repairWindow: '13:00–15:30 Tomorrow',
      status: 'scheduled',
      priority: 'critical'
    },
    {
      id: 'WO-2025-002',
      machineId: 'MD-0303F-10',
      issueType: 'Acoustic Vibration',
      assignedTeam: 'Crew A',
      repairWindow: '14:00–15:30 Oct 23',
      status: 'scheduled',
      priority: 'high'
    },
    {
      id: 'WO-2025-003',
      machineId: 'GR150-2',
      issueType: 'Belt Replacement',
      assignedTeam: 'Crew C',
      repairWindow: '11:00–14:00 Oct 24',
      status: 'scheduled',
      priority: 'medium'
    },
    {
      id: 'WO-2025-004',
      machineId: 'G3000-DX',
      issueType: 'Airflow Sensor Calibration',
      assignedTeam: 'Crew B',
      repairWindow: '08:30–09:30 Oct 25',
      status: 'scheduled',
      priority: 'high'
    },
    {
      id: 'WO-2024-156',
      machineId: 'GR150-1',
      issueType: 'Routine Maintenance',
      assignedTeam: 'Crew A',
      repairWindow: '10:00–12:00 Today',
      status: 'in-progress',
      priority: 'medium'
    },
    {
      id: 'WO-2024-155',
      machineId: 'AS-400X',
      issueType: 'Hydraulic System Check',
      assignedTeam: 'Crew C',
      repairWindow: '09:00–11:00 Oct 20',
      status: 'completed',
      priority: 'medium'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'scheduled':
        return 'bg-blue-500/10 text-blue-600 border-blue-500/20';
      case 'in-progress':
        return 'bg-orange-500/10 text-orange-600 border-orange-500/20';
      case 'completed':
        return 'bg-emerald-500/10 text-emerald-600 border-emerald-500/20';
      default:
        return 'bg-slate-500/10 text-slate-600 border-slate-500/20';
    }
  };

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

  const filteredOrders = filter === 'all' 
    ? workOrders 
    : workOrders.filter(order => order.status === filter);

  return (
    <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-200/60">
        <h3 className="text-[#1C3D5A] mb-3">Active Work Orders</h3>
        
        {/* Filters */}
        <div className="flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all ${
              filter === 'all'
                ? 'bg-[#4A77D4] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setFilter('scheduled')}
            className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all ${
              filter === 'scheduled'
                ? 'bg-[#4A77D4] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Scheduled
          </button>
          <button
            onClick={() => setFilter('in-progress')}
            className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all ${
              filter === 'in-progress'
                ? 'bg-[#4A77D4] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            In Progress
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-3 py-1.5 rounded-lg text-sm whitespace-nowrap transition-all ${
              filter === 'completed'
                ? 'bg-[#4A77D4] text-white shadow-sm'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Completed
          </button>
        </div>
      </div>

      {/* Work Orders List */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-3">
          {filteredOrders.map((order) => (
            <div
              key={order.id}
              className="bg-white/60 rounded-xl p-4 border border-slate-200/60 hover:shadow-md transition-all"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-[#1C3D5A]">{order.machineId}</span>
                    <span className={`px-2 py-0.5 rounded-md border text-xs ${getPriorityColor(order.priority)}`}>
                      {order.priority}
                    </span>
                  </div>
                  <div className="text-sm text-slate-600 mb-2">{order.issueType}</div>
                </div>
                <span className={`px-2 py-1 rounded-lg border text-xs ${getStatusColor(order.status)}`}>
                  {order.status === 'in-progress' ? 'In Progress' : order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>

              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Users className="w-3.5 h-3.5" />
                  <span>{order.assignedTeam}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{order.repairWindow}</span>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-slate-200/60">
                <button className="flex-1 bg-gradient-to-r from-[#4A77D4] to-[#6BD5C4] text-white rounded-lg py-2 text-xs hover:shadow-md transition-all flex items-center justify-center gap-1">
                  <Eye className="w-3.5 h-3.5" />
                  View Detail
                </button>
                {order.status !== 'completed' && (
                  <button className="flex-1 bg-white border border-[#6BD5C4] text-[#6BD5C4] rounded-lg py-2 text-xs hover:bg-[#6BD5C4]/5 transition-all flex items-center justify-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Mark Complete
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Footer */}
      <div className="p-4 border-t border-slate-200/60">
        <div className="text-xs text-slate-500 text-center">
          Showing {filteredOrders.length} of {workOrders.length} work orders
        </div>
      </div>
    </div>
  );
}
