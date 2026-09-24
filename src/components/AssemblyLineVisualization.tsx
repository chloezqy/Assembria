import { useState } from 'react';
import { Activity, AlertTriangle, ArrowUpRight, Check, Radio, ScanLine, Sparkles, Zap } from 'lucide-react';

const stations = [
  { id: 'ST-01', name: 'Body & weld', machine: 'Welding Unit A', risk: 12, state: 'healthy', cycle: '84s', signal: 'Thermal', value: '74°C' },
  { id: 'ST-02', name: 'General assembly', machine: 'Assembly Robot B', risk: 87, state: 'critical', cycle: '91s', signal: 'Acoustic', value: '+18%' },
  { id: 'ST-03', name: 'Vision quality', machine: 'Quality Check C', risk: 45, state: 'watch', cycle: '79s', signal: 'Optical', value: '96.2%' },
  { id: 'ST-04', name: 'Paint finish', machine: 'Paint Booth D', risk: 28, state: 'warning', cycle: '88s', signal: 'Airflow', value: '4.8 m/s' },
  { id: 'ST-05', name: 'End of line', machine: 'Final Inspection', risk: 8, state: 'healthy', cycle: '76s', signal: 'Optical', value: '99.1%' },
];

export function AssemblyLineVisualization({ onOpenMachines }: { onOpenMachines?: () => void }) {
  const [selected, setSelected] = useState(1);
  const active = stations[selected];
  return <section className="line-panel">
    <header className="panel-header">
      <div><span className="kicker"><Radio size={10} /> Live production map</span><h2>Assembly line pulse</h2><p>Digital twin · Detroit final assembly</p></div>
      <div className="line-kpis"><div><small>Throughput</small><strong>142 <i>u/hr</i></strong></div><div><small>First-pass yield</small><strong>96.8<i>%</i></strong></div><div><small>OEE</small><strong>89.4<i>%</i></strong></div></div>
      <div className="line-actions"><span><i />Line running</span><button onClick={onOpenMachines}>Inspect assets <ArrowUpRight size={15} /></button></div>
    </header>
    <div className="factory-stage">
      <div className="ambient-orb orb-one" /><div className="ambient-orb orb-two" /><div className="ceiling-rail"><i /><i /><i /><i /><i /><i /></div>
      <div className="scan-beam" /><div className="factory-grid" />
      <div className="active-readout"><span><Activity size={12} /> Focus / {active.id}</span><strong>{active.signal}</strong><b>{active.value}</b><em>{active.risk}% failure risk</em></div>
      <div className="conveyor"><div className="belt-lines" /><div className="flow-dots" /><span className="car-body"><i /><i /></span><span className="car-body second"><i /><i /></span></div>
      <div className="stations">{stations.map((station, index) => <button type="button" onClick={() => setSelected(index)} aria-label={`Inspect ${station.name}`} aria-pressed={selected === index} className={`station ${station.state} ${selected === index ? 'selected' : ''}`} key={station.id}>
        <div className="station-callout"><div className="station-top"><span>{station.id}</span><b>{station.risk}% risk</b></div><strong>{station.name}</strong><small>{station.machine}</small><div className="signal-bar"><i style={{ width: `${Math.max(12, station.risk)}%` }} /></div></div>
        <div className="robot-cell"><div className="robot-base" /><div className="robot-arm one" /><div className="robot-joint" /><div className="robot-arm two" /><div className="robot-tool">{station.state === 'critical' && <Sparkles size={9} />}</div></div>
        <div className="machine-model"><div className="machine-light" /><div className="machine-screen"><ScanLine size={12} /></div><div className="machine-door" /><div className="machine-base" /></div>
        <div className="station-state">{station.state === 'critical' ? <AlertTriangle size={13} /> : <Check size={13} />}<span>{station.cycle} cycle</span></div>{index < stations.length - 1 && <div className="flow-arrow"><i />›</div>}
      </button>)}</div>
      <div className="stage-caption"><Zap size={11} /><span>Predictive layer active</span><i>5,240 signals / sec</i></div>
    </div>
    <footer className="line-footer"><div><span className="legend healthy" />Healthy <b>2</b></div><div><span className="legend warning" />Monitor <b>2</b></div><div><span className="legend critical" />Intervention <b>1</b></div><p><strong>AI insight</strong> Acoustic variance at ST-02 is 18% above baseline and rising.</p></footer>
  </section>;
}
