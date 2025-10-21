import { MaintenanceCalendar } from "./MaintenanceCalendar";
import { ActiveWorkOrders } from "./ActiveWorkOrders";
import { MaintenanceKPIs } from "./MaintenanceKPIs";

export function MaintenancePage() {
  return (
    <div className="p-6 w-full max-w-full">
      {/* Page Header */}
      {/* <div className="mb-6">
        <h1 className="text-[#1C3D5A] mb-1">
          Maintenance Dashboard
        </h1>
        <p className="text-slate-500">
          Smart scheduling & resource management for predictive
          maintenance
        </p>
      </div> */}

      {/* Main Content - Calendar and Work Orders */}
      <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6 mb-6">
        {/* Left Column - Calendar + KPIs */}
        <div className="space-y-6">
          {/* Calendar Section */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <MaintenanceCalendar />
          </div>

          {/* KPI Section */}
          <div className="bg-white rounded-xl shadow-sm p-4">
            <MaintenanceKPIs />
          </div>
        </div>

        {/* Right Column - Active Work Orders */}
        <div className="min-h-[600px]">
          <ActiveWorkOrders />
        </div>
      </div>

      {/* Bottom Section - KPI Analytics */}
      {/* <MaintenanceKPIs /> */}
    </div>
  );
}