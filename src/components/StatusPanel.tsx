export function StatusPanel() {
  const statuses = [
    { label: 'Operation', status: 'active', color: 'bg-emerald-400' },
    { label: 'Shipping', status: 'active', color: 'bg-emerald-400' },
    { label: 'Maintenance', status: 'alert', color: 'bg-red-400' }
  ];

  return (
    <div className="bg-gradient-to-br from-white/90 to-[#D9E0E7]/30 backdrop-blur-sm rounded-2xl p-6 border border-white/60 shadow-lg">
      <div className="text-sm text-[#1C3D5A] mb-4 opacity-70">System Status</div>
      <div className="space-y-3">
        {statuses.map((item) => (
          <div key={item.label} className="flex items-center justify-between p-3 bg-white/50 rounded-xl">
            <span className="text-[#1C3D5A] text-sm">{item.label}</span>
            <div className="flex items-center gap-2">
              <div className={`w-2 h-2 rounded-full ${item.color} animate-pulse shadow-lg`}></div>
              <span className="text-xs text-slate-500">{item.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
