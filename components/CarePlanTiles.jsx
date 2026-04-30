import React from 'react';
import { Icon } from './Icons.jsx';

// Care plan tiles - the main sections from the original (Investigation/Healing/Communication)
// renamed in plain language
export default function CarePlanTiles({ onOpen, labels }) {
  const tiles = [
    {
      id: 'meds',
      title: labels.meds,
      sub: '4 active prescriptions',
      icon: 'pill',
      color: '#1FA785',
      bg: '#E8F7EF',
      stat: '4',
      statLabel: 'active',
      next: 'Next refill in 12 days'
    },
    {
      id: 'tests',
      title: labels.tests,
      sub: 'Labs, imaging & vitals',
      icon: 'flask',
      color: '#3FA9D5',
      bg: '#E8F4FB',
      stat: '2',
      statLabel: 'new',
      next: '1 result needs review'
    },
    {
      id: 'therapy',
      title: labels.therapy,
      sub: 'Sessions & guidance',
      icon: 'heart',
      color: '#E87C8E',
      bg: '#FBE8EC',
      stat: '8',
      statLabel: 'sessions',
      next: 'Next session: Friday 4pm'
    },
    {
      id: 'library',
      title: labels.library,
      sub: 'Articles for you',
      icon: 'book',
      color: '#7C6FE8',
      bg: '#EFEDFB',
      stat: '12',
      statLabel: 'saved',
      next: '3 new this week'
    },
  ];

  return (
    <section className="ph-tiles-section">
      <div className="ph-section-head">
        <h2 className="ph-section-title">Your care plan</h2>
        <p className="ph-section-sub">Everything from your doctor, in one place</p>
      </div>
      <div className="ph-tiles">
        {tiles.map(tile => (
          <button key={tile.id} className="ph-tile" onClick={() => onOpen(tile.id)}>
            <div className="ph-tile-top">
              <div className="ph-tile-icon" style={{ background: tile.bg }}>
                <Icon name={tile.icon} size={22} color={tile.color} />
              </div>
              <div className="ph-tile-stat">
                <span className="ph-tile-stat-num" style={{ color: tile.color }}>{tile.stat}</span>
                <span className="ph-tile-stat-label">{tile.statLabel}</span>
              </div>
            </div>
            <div className="ph-tile-body">
              <div className="ph-tile-title">{tile.title}</div>
              <div className="ph-tile-sub">{tile.sub}</div>
            </div>
            <div className="ph-tile-foot">
              <span>{tile.next}</span>
              <Icon name="chevronRight" size={14} />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
}
