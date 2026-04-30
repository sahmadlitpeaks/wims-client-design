import React from 'react';
import { Icon } from './Icons.jsx';

// Health snapshot - vitals at a glance with friendly visuals
export default function HealthSnapshot() {
  const stats = [
    { id: 'steps', label: 'Steps today', value: '7,420', target: 'of 10,000', icon: 'footprints', color: '#1FA785', pct: 74 },
    { id: 'sleep', label: 'Last night', value: '7h 12m', target: 'of 8h', icon: 'moon', color: '#7C6FE8', pct: 90 },
    { id: 'hydration', label: 'Water', value: '5', target: 'of 8 glasses', icon: 'droplet', color: '#3FA9D5', pct: 62 },
    { id: 'energy', label: 'Energy score', value: '82', target: '/ 100', icon: 'leaf', color: '#E8A33F', pct: 82 },
  ];

  return (
    <section className="ph-card ph-snapshot">
      <div className="ph-card-head">
        <div>
          <h2 className="ph-card-title">How you're doing</h2>
          <p className="ph-card-sub">Last 24 hours</p>
        </div>
        <button className="ph-link">View trends →</button>
      </div>

      <div className="ph-snap-grid">
        {stats.map(stat => (
          <div key={stat.id} className="ph-snap-tile" style={{ '--c': stat.color }}>
            <div className="ph-snap-icon" style={{ background: `${stat.color}18`, color: stat.color }}>
              <Icon name={stat.icon} size={18} color={stat.color} />
            </div>
            <div className="ph-snap-value">{stat.value}</div>
            <div className="ph-snap-label">{stat.label}</div>
            <div className="ph-snap-bar">
              <div className="ph-snap-bar-fill" style={{ width: `${stat.pct}%`, background: stat.color }}></div>
            </div>
            <div className="ph-snap-target">{stat.target}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
