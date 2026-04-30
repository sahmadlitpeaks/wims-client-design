import React from 'react';
import { Icon } from './Icons.jsx';

// Therapy page - prescribed treatments + logged sessions
// Replaces the old "Therapy / Prescribed / Logged / Technology / Complementary" maze
export default function Therapy() {
  const [tab, setTab] = React.useState('active');
  const [filter, setFilter] = React.useState('all');

  const treatments = [
    { id: 'PRCN-13879', name: 'Red Light Therapy', category: 'technology', status: 'active', date: '10 Apr 2026', frequency: '3× per week', duration: '20 min', next: 'Tomorrow, 9:30 AM', emoji: '🔴', color: '#E87C5C' },
    { id: 'PRCN-13880', name: 'Mindful Breathing', category: 'complementary', status: 'active', date: '8 Apr 2026', frequency: 'Daily', duration: '10 min', next: 'Tonight, 9:00 PM', emoji: '🌬️', color: '#7C6FE8' },
    { id: 'PRCN-13881', name: 'Cold Plunge', category: 'technology', status: 'active', date: '5 Apr 2026', frequency: '2× per week', duration: '3 min', next: 'Friday, 7:00 AM', emoji: '🧊', color: '#3FA9D5' },
    { id: 'PRCN-13860', name: 'Acupuncture', category: 'complementary', status: 'completed', date: '20 Mar 2026', frequency: 'Weekly', duration: '45 min', next: null, emoji: '🪡', color: '#1FA785' },
  ];

  const filtered = treatments.filter(t => {
    if (tab === 'active' && t.status !== 'active') return false;
    if (tab === 'completed' && t.status !== 'completed') return false;
    if (filter !== 'all' && t.category !== filter) return false;
    return true;
  });

  return (
    <div className="ph-page">
      <div className="ph-page-head">
        <h1 className="ph-page-title">Your therapies</h1>
        <p className="ph-page-sub">Treatments prescribed by Dr. Tarek to support your wellness journey</p>
      </div>

      <div className="ph-th-tabs">
        {['active', 'completed', 'all'].map(t => (
          <button key={t} className={`ph-th-tab ${tab === t ? 'is-active' : ''}`} onClick={() => setTab(t)}>
            {t === 'active' ? 'Currently doing' : t === 'completed' ? 'Completed' : 'All'}
          </button>
        ))}
      </div>

      <div className="ph-th-filters">
        {[{id:'all',l:'All'},{id:'technology',l:'Tech-based'},{id:'complementary',l:'Complementary'}].map(f => (
          <button key={f.id} className={`ph-chip ${filter === f.id ? 'is-active' : ''}`} onClick={() => setFilter(f.id)}>
            {f.l}
          </button>
        ))}
      </div>

      <div className="ph-th-list">
        {filtered.map(tx => (
          <div key={tx.id} className="ph-th-card">
            <div className="ph-th-emoji" style={{ background: `${tx.color}1A` }}>{tx.emoji}</div>
            <div className="ph-th-body">
              <div className="ph-th-row1">
                <h3 className="ph-th-name">{tx.name}</h3>
                <span className={`ph-th-pill ph-th-pill--${tx.category}`}>{tx.category === 'technology' ? 'Tech' : 'Complementary'}</span>
              </div>
              <div className="ph-th-meta">
                <span><Icon name="clock" size={12} /> {tx.frequency} · {tx.duration}</span>
                <span>· Started {tx.date}</span>
              </div>
              {tx.next && (
                <div className="ph-th-next">
                  <span className="ph-pulse"></span>
                  Next session: <b>{tx.next}</b>
                </div>
              )}
            </div>
            <div className="ph-th-actions">
              <button className="ph-mini-btn"><Icon name="info" size={14} /> Details</button>
              {tx.status === 'active' && <button className="ph-mini-btn ph-mini-btn--primary"><Icon name="check" size={14} /> Log session</button>}
            </div>
          </div>
        ))}
        {filtered.length === 0 && (
          <div className="ph-empty">No therapies in this category yet.</div>
        )}
      </div>
    </div>
  );
}
