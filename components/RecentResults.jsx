import React from 'react';
import { Icon } from './Icons.jsx';

// Recent results - friendly lab/test result cards
export default function RecentResults({ onOpen }) {
  const results = [
    { id: 1, name: 'Vitamin D level', value: '38 ng/mL', status: 'good', date: '2 days ago', note: 'In healthy range', trend: 'up' },
    { id: 2, name: 'Cholesterol panel', value: 'New', status: 'new', date: 'Today', note: 'Tap to read full report', trend: null },
    { id: 3, name: 'Iron (Ferritin)', value: '85 ng/mL', status: 'good', date: '1 week ago', note: 'Healthy & steady', trend: 'flat' },
  ];

  const statusStyles = {
    good: { bg: '#E8F7EF', color: '#1F8A5A', label: '✓ Healthy' },
    watch: { bg: '#FFF6E5', color: '#B8860B', label: '⚠ Watch' },
    new: { bg: '#E8F0FF', color: '#2A6FE8', label: '● New' },
  };

  return (
    <section className="ph-card ph-results">
      <div className="ph-card-head">
        <div>
          <h2 className="ph-card-title">Recent test results</h2>
          <p className="ph-card-sub">Easy-to-read summaries</p>
        </div>
        <button className="ph-link" onClick={onOpen}>See all →</button>
      </div>

      <div className="ph-results-list">
        {results.map(r => {
          const s = statusStyles[r.status];
          return (
            <button key={r.id} className="ph-result-row" onClick={onOpen}>
              <div className="ph-result-icon">
                <Icon name="flask" size={18} color="#1FA785" />
              </div>
              <div className="ph-result-body">
                <div className="ph-result-name">{r.name}</div>
                <div className="ph-result-note">{r.note}</div>
              </div>
              <div className="ph-result-meta">
                <div className="ph-result-value">{r.value}</div>
                <div className="ph-result-date">{r.date}</div>
              </div>
              <div className="ph-result-status" style={{ background: s.bg, color: s.color }}>
                {s.label}
              </div>
              <Icon name="chevronRight" size={16} color="#9AA39B" />
            </button>
          );
        })}
      </div>
    </section>
  );
}
