import { useState } from 'react';
import { Calendar, Download } from 'lucide-react';
import { AnalyticsKPIs } from './AnalyticsKPIs';
import { DowntimeChart } from './DowntimeChart';
import { CostSavingsChart } from './CostSavingsChart';
import { SensorContributionChart } from './SensorContributionChart';
import { ModelPerformanceCard } from './ModelPerformanceCard';
import { ROISummaryCard } from './ROISummaryCard';

export function AnalyticsPage() {
  const [timeRange, setTimeRange] = useState<'quarter' | 'year' | 'custom'>('quarter');

  return (
    <div className="p-6 w-full max-w-full">
      {/* Page Header */}
      <div className="relative flex items-center justify-center mb-6">
        {/* <div>
          <h1 className="text-[#1C3D5A] mb-1">Analytics — Impact & System Performance</h1>
          <p className="text-slate-500">Quantifying efficiency gains and predictive AI accuracy</p>
        </div> */}

        {/* Time Range Selector */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 bg-white/60 rounded-xl p-1 border border-slate-200/60">
            <button
              onClick={() => setTimeRange('quarter')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                timeRange === 'quarter'
                  ? 'bg-gradient-to-r from-[#4A77D4] to-[#6BD5C4] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#1C3D5A]'
              }`}
            >
              Quarter
            </button>
            <button
              onClick={() => setTimeRange('year')}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                timeRange === 'year'
                  ? 'bg-gradient-to-r from-[#4A77D4] to-[#6BD5C4] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#1C3D5A]'
              }`}
            >
              Year
            </button>
            <button
              onClick={() => setTimeRange('custom')}
              className={`px-4 py-2 rounded-lg text-sm transition-all flex items-center gap-2 ${
                timeRange === 'custom'
                  ? 'bg-gradient-to-r from-[#4A77D4] to-[#6BD5C4] text-white shadow-sm'
                  : 'text-slate-600 hover:text-[#1C3D5A]'
              }`}
            >
              <Calendar className="w-4 h-4" />
              Custom
            </button>
          </div>

          {/* Export Button - Right Aligned */}
          <button className="absolute right-0 flex items-center gap-2 px-4 py-2 bg-white/60 border border-slate-200/60 text-slate-700 rounded-lg text-sm hover:shadow-md transition-all">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* KPI Overview Section */}
      <div className="mb-6">
        <AnalyticsKPIs />
      </div>

      {/* Charts Section - Trends & Analysis */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <DowntimeChart />
        <CostSavingsChart />
      </div>

      {/* Sensor & Model Insights Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <SensorContributionChart />
        <ModelPerformanceCard />
      </div>

      {/* ROI & Summary Section */}
      <ROISummaryCard />
    </div>
  );
}
