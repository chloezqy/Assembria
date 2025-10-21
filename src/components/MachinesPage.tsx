import { useState } from 'react';
import { MachineListSidebar } from './MachineListSidebar';
import { MachineDetailPanel } from './MachineDetailPanel';

export function MachinesPage() {
  const machines = [
    { id: 'MD-0303F-10', name: 'Welding Robot Assembly Unit', status: 'warning' as const },
    { id: 'G3000-DX', name: 'Paint Spray Automation System', status: 'caution' as const },
    { id: 'G3000-GL', name: 'Quality Inspection Scanner', status: 'critical' as const },
    { id: 'GR150-1', name: 'Conveyor Belt System A', status: 'normal' as const },
    { id: 'GR150-2', name: 'Hydraulic Press Station', status: 'warning' as const },
    { id: 'AS-400X', name: 'Component Assembly Robot', status: 'normal' as const },
  ];

  const [selectedMachineId, setSelectedMachineId] = useState(machines[0].id);

  const selectedMachine = machines.find((m) => m.id === selectedMachineId);

  return (
    <div className="p-6 w-full max-w-full">
      {/* <div className="mb-6">
        <h1 className="text-[#1C3D5A] mb-1">Machine Health Monitor</h1>
        <p className="text-slate-500">Detailed diagnostics and predictive analysis for each machine</p>
      </div> */}

      <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-6 h-[calc(100vh-220px)]">
        {/* Left Sidebar */}
        <MachineListSidebar
          machines={machines}
          selectedMachineId={selectedMachineId}
          onSelectMachine={setSelectedMachineId}
        />

        {/* Main Panel */}
        <div className="overflow-y-auto">
          {selectedMachine && (
            <MachineDetailPanel
              machineId={selectedMachine.id}
              machineName={selectedMachine.name}
              status={selectedMachine.status}
              lastUpdated="2 min ago"
            />
          )}
        </div>
      </div>
    </div>
  );
}
