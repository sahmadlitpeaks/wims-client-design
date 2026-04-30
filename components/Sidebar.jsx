import React from 'react';
import { Icon } from './Icons.jsx';

// Sidebar navigation - simple, friendly
export default function Sidebar({ active, onNavigate, labels }) {
  const items = [
    { id: 'home', label: labels.home, icon: 'home' },
    { id: 'today', label: labels.today, icon: 'calendar' },
    { id: 'health', label: labels.health, icon: 'heart' },
    { id: 'therapy', label: labels.therapy, icon: 'sparkle' },
    { id: 'library', label: labels.library, icon: 'book' },
    { id: 'orders', label: labels.orders, icon: 'bag' },
    { id: 'shop', label: labels.shop, icon: 'gift' },
    { id: 'messages', label: labels.messages, icon: 'chat' },
    { id: 'profile', label: labels.profile, icon: 'user' },
  ];

  return (
    <aside className="ph-sidebar">
      <div className="ph-brand">
        <div className="ph-brand-mark">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 21s-7-4.5-9-10a5 5 0 019-3 5 5 0 019 3c-2 5.5-9 10-9 10z" stroke="#1FA785" strokeWidth="1.8" strokeLinejoin="round"/>
            <path d="M8 11l2 2 2-3 2 4 2-2" stroke="#1FA785" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="ph-brand-text">
          <div className="ph-brand-name">Precision Health</div>
          <div className="ph-brand-sub">Your care, simplified</div>
        </div>
      </div>

      <nav className="ph-nav">
        {items.map(item => (
          <button
            key={item.id}
            className={`ph-nav-item ${active === item.id ? 'is-active' : ''}`}
            onClick={() => onNavigate(item.id)}
          >
            <Icon name={item.icon} size={20} />
            <span>{item.label}</span>
            {item.id === 'messages' && <span className="ph-nav-dot">3</span>}
          </button>
        ))}
      </nav>

      <div className="ph-sidebar-footer">
        <button className="ph-help-card">
          <Icon name="phone" size={18} color="#1FA785" />
          <div>
            <div className="ph-help-title">Need help?</div>
            <div className="ph-help-sub">Call your care team</div>
          </div>
        </button>
      </div>
    </aside>
  );
}
