import { DashboardHeader } from "./DashboardHeader";
import { StatusPanel } from "./StatusPanel";
import { BarChartPanel } from "./BarChartPanel";
import { DonutChartPanel } from "./DonutChartPanel";
import { AssemblyLineVisualization } from "./AssemblyLineVisualization";
import { MachineCard } from "./MachineCard";
import { PredictiveInsights } from "./PredictiveInsights";
import { ScheduledRepairs } from "./ScheduledRepairs";
import { PredictiveOutcomesCard } from "./PredictiveOutcomesCard";

export function OverviewPage() {
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
    <div className="p-6 w-full max-w-full">
      {/* Dashboard Header */}
      {/* <DashboardHeader /> */}

      <div className="grid grid-cols-1 gap-6">
        {/* Left Column - Main Dashboard */}
        <div className="space-y-6">
          {/* Top Section - Statistics */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <StatusPanel />
            <BarChartPanel />
            <DonutChartPanel />
          </div>

          {/* Middle Section - Assembly Line */}
          <AssemblyLineVisualization />

          {/* Bottom Section - Analytics Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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