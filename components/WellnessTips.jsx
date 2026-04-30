import React from 'react';
import { Icon } from './Icons.jsx';

// Helpful tips/wellness articles
export default function WellnessTips() {
  const tips = [
    {
      id: 1,
      tag: 'Recommended for you',
      title: 'Why Vitamin D matters more in winter',
      time: '4 min read',
      bg: 'linear-gradient(135deg, #FBE8C7 0%, #F5D49E 100%)',
      emoji: '☀️',
    },
    {
      id: 2,
      tag: 'Sleep',
      title: 'A simple wind-down routine for better sleep',
      time: '6 min read',
      bg: 'linear-gradient(135deg, #DCD4F5 0%, #B8AAF0 100%)',
      emoji: '🌙',
    },
    {
      id: 3,
      tag: 'Nutrition',
      title: 'Foods that boost your iron, naturally',
      time: '5 min read',
      bg: 'linear-gradient(135deg, #C8EAD8 0%, #94D4B0 100%)',
      emoji: '🥬',
    },
  ];

  return (
    <section className="ph-tips">
      <div className="ph-section-head">
        <h2 className="ph-section-title">Picked for you</h2>
        <p className="ph-section-sub">Short reads from your care team</p>
      </div>
      <div className="ph-tips-grid">
        {tips.map(tip => (
          <article key={tip.id} className="ph-tip-card">
            <div className="ph-tip-cover" style={{ background: tip.bg }}>
              <div className="ph-tip-emoji">{tip.emoji}</div>
            </div>
            <div className="ph-tip-body">
              <div className="ph-tip-tag">{tip.tag}</div>
              <h3 className="ph-tip-title">{tip.title}</h3>
              <div className="ph-tip-meta">
                <Icon name="clock" size={12} />
                <span>{tip.time}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
