import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from './ui/tooltip';

interface RepairTask {
  id: string;
  machineId: string;
  issue: string;
  priority: 'critical' | 'high' | 'medium' | 'completed';
  dayIndex: number;
  startHour: number;
  duration: number;
  assignedCrew: string;
  eta: string;
}

export function MaintenanceCalendar() {
  const [viewType, setViewType] = useState<'week' | 'month'>('week');

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const dates = ['Oct 21', 'Oct 22', 'Oct 23', 'Oct 24', 'Oct 25', 'Oct 26', 'Oct 27'];

  const tasks: RepairTask[] = [
    {
      id: 'T1',
      machineId: 'G3000-GL',
      issue: 'Thermal sensor anomaly',
      priority: 'critical',
      dayIndex: 1,
      startHour: 9,
      duration: 2.5,
      assignedCrew: 'Crew B',
      eta: '2.5h'
    },
    {
      id: 'T2',
      machineId: 'MD-0303F-10',
      issue: 'Acoustic vibration pattern shift',
      priority: 'high',
      dayIndex: 2,
      startHour: 14,
      duration: 1.5,
      assignedCrew: 'Crew A',
      eta: '1.5h'
    },
    {
      id: 'T3',
      machineId: 'GR150-2',
      issue: 'Belt replacement',
      priority: 'medium',
      dayIndex: 3,
      startHour: 11,
      duration: 3,
      assignedCrew: 'Crew C',
      eta: '3h'
    },
    {
      id: 'T4',
      machineId: 'G3000-DX',
      issue: 'Airflow sensor calibration',
      priority: 'high',
      dayIndex: 4,
      startHour: 8.5,
      duration: 1,
      assignedCrew: 'Crew B',
      eta: '1h'
    },
    {
      id: 'T5',
      machineId: 'GR150-1',
      issue: 'Routine maintenance',
      priority: 'completed',
      dayIndex: 0,
      startHour: 10,
      duration: 2,
      assignedCrew: 'Crew A',
      eta: '2h'
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'critical':
        return 'bg-red-500 hover:bg-red-600 border-red-600';
      case 'high':
        return 'bg-orange-500 hover:bg-orange-600 border-orange-600';
      case 'medium':
        return 'bg-yellow-500 hover:bg-yellow-600 border-yellow-600';
      case 'completed':
        return 'bg-emerald-500 hover:bg-emerald-600 border-emerald-600';
      default:
        return 'bg-slate-400 hover:bg-slate-500 border-slate-500';
    }
  };

  const timeSlots = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="bg-gradient-to-br from-white/80 to-blue-50/50 backdrop-blur-sm rounded-2xl border border-white/60 shadow-lg h-full flex flex-col">
      {/* Header */}
      <div className="p-4 border-b border-slate-200/60">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-[#1C3D5A]">Maintenance Calendar</h3>
          <div className="flex items-center gap-2">
            <div className="bg-slate-100 rounded-lg p-1 flex gap-1">
              <button
                onClick={() => setViewType('week')}
                className={`px-3 py-1 rounded-md text-sm transition-all ${
                  viewType === 'week'
                    ? 'bg-white text-[#4A77D4] shadow-sm'
                    : 'text-slate-500 hover:text-[#1C3D5A]'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setViewType('month')}
                className={`px-3 py-1 rounded-md text-sm transition-all ${
                  viewType === 'month'
                    ? 'bg-white text-[#4A77D4] shadow-sm'
                    : 'text-slate-500 hover:text-[#1C3D5A]'
                }`}
              >
                Month
              </button>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <button className="p-1 hover:bg-slate-100 rounded-lg transition-colors">
            <ChevronLeft className="w-5 h-5 text-slate-600" />
          </button>
          <span className="text-sm text-[#1C3D5A]">Week of Oct 21 - Oct 27, 2025</span>
          <button className="p-1 hover:bg-slate-100 rounded-lg transition-colors">
            <ChevronRight className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="flex-1 overflow-auto p-4">
        <div className="grid grid-cols-8 gap-2 min-w-[800px]">
          {/* Time column header */}
          <div className="text-xs text-slate-500"></div>
          
          {/* Day headers */}
          {weekDays.map((day, index) => (
            <div key={day} className="text-center">
              <div className="text-xs text-slate-500 mb-1">{day}</div>
              <div className="text-sm text-[#1C3D5A]">{dates[index]}</div>
            </div>
          ))}

          {/* Time slots */}
          {[8, 10, 12, 14, 16, 18].map((hour) => (
            <div key={hour} className="col-span-8 grid grid-cols-8 gap-2 mb-2">
              {/* Time label */}
              <div className="text-xs text-slate-500 pr-2 text-right">{hour}:00</div>
              
              {/* Day cells */}
              {weekDays.map((_, dayIndex) => {
                const dayTasks = tasks.filter(
                  (task) => task.dayIndex === dayIndex && task.startHour >= hour && task.startHour < hour + 2
                );

                return (
                  <div key={dayIndex} className="relative bg-slate-50/50 rounded-lg min-h-[60px] border border-slate-200/40">
                    {dayTasks.map((task) => {
                      const topOffset = ((task.startHour - hour) / 2) * 100;
                      const height = (task.duration / 2) * 100;

                      return (
                        <TooltipProvider key={task.id}>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <div
                                className={`absolute left-1 right-1 rounded-md border-2 shadow-sm transition-all cursor-pointer ${getPriorityColor(
                                  task.priority
                                )}`}
                                style={{
                                  top: `${topOffset}%`,
                                  height: `${Math.min(height, 100 - topOffset)}%`,
                                }}
                              >
                                <div className="p-1 text-white text-xs overflow-hidden">
                                  <div className="truncate">{task.machineId}</div>
                                </div>
                              </div>
                            </TooltipTrigger>
                            <TooltipContent side="right" className="bg-white border border-slate-200 shadow-lg">
                              <div className="space-y-1">
                                <div className="text-sm text-[#1C3D5A]">{task.machineId}</div>
                                <div className="text-xs text-slate-600">{task.issue}</div>
                                <div className="text-xs text-slate-500">ETA: {task.eta}</div>
                                <div className="text-xs text-slate-500">Assigned: {task.assignedCrew}</div>
                              </div>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      );
                    })}
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="p-4 border-t border-slate-200/60">
        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-red-500 rounded"></div>
            <span className="text-slate-600">Critical</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-orange-500 rounded"></div>
            <span className="text-slate-600">High</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-yellow-500 rounded"></div>
            <span className="text-slate-600">Medium</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-emerald-500 rounded"></div>
            <span className="text-slate-600">Completed</span>
          </div>
        </div>
      </div>
    </div>
  );
}
