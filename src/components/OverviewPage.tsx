import { DashboardHeader } from "./DashboardHeader";
import { StatusPanel } from "./StatusPanel";
import { BarChartPanel } from "./BarChartPanel";
import { DonutChartPanel } from "./DonutChartPanel";
import { AssemblyLineVisualization } from "./AssemblyLineVisualization";
import { MachineCard } from "./MachineCard";
import { PredictiveInsights } from "./PredictiveInsights";
import { ScheduledRepairs } from "./ScheduledRepairs";
import { PredictiveOutcomesCard } from "./PredictiveOutcomesCard";

export function OverviewPage({ onNavigate }: { onNavigate?: (tab: string) => void }) {
  const machineData = [
    {
      id: "MD-0303F-10",
      health: 92,
      forecast: "Repair in 2 days",
      probability: 87,
      status: "warning" as const,
    },
    {
      id: "G3000-DX",
      health: 78,
      forecast: "Repair in 5 days",
      probability: 62,
      status: "caution" as const,
    },
    {
      id: "G3000-GL",
      health: 45,
      forecast: "Repair in 1 day",
      probability: 94,
      status: "critical" as const,
    },
    {
      id: "GR150-1",
      health: 96,
      forecast: "Optimal",
      probability: 12,
      status: "normal" as const,
    },
    {
      id: "GR150-2",
      health: 88,
      forecast: "Repair in 3 days",
      probability: 71,
      status: "warning" as const,
    },
  ];

  return (
    <div className="page-content overview-page">
      {/* Dashboard Header */}
      {/* <DashboardHeader /> */}

      <div className="grid grid-cols-1 gap-6">
        {/* Left Column - Main Dashboard */}
        <div className="space-y-6">
          {/* Top Section - Statistics */}
          <div className="overview-metrics">
            <StatusPanel />
            <BarChartPanel />
            <DonutChartPanel />
          </div>

          {/* Middle Section - Assembly Line */}
          <AssemblyLineVisualization onOpenMachines={() => onNavigate?.('Machines')} />

          {/* Bottom Section - Analytics Cards */}
          <div className="section-heading"><div><span>Priority assets</span><h2>Machine risk queue</h2></div><button onClick={() => onNavigate?.('Machines')}>View all machines <b>→</b></button></div>
          <div className="machine-grid">
            {machineData.map((machine) => (
              <MachineCard key={machine.id} {...machine} />
            ))}
            {/* <PredictiveOutcomesCard /> */}
          </div>

          {/* Scheduled Repairs Section */}
          <ScheduledRepairs />
        </div>

        {/* Right Column - Predictive Insights */}
        {/* <PredictiveInsights /> */}
      </div>
    </div>
  );
}
