import React from 'react';
import { Icon } from './Icons.jsx';

// Top bar with greeting + user
export default function TopBar({ patient, onAsk }) {
  const hour = new Date().getHours();
  const greeting = hour < 12 ? 'Good morning' : hour < 18 ? 'Good afternoon' : 'Good evening';

  return (
    <header className="ph-topbar">
      <div className="ph-topbar-greet">
        <div className="ph-topbar-hello">{greeting},</div>
        <div className="ph-topbar-name">{patient.firstName} 👋</div>
      </div>

      <div className="ph-topbar-actions">
        <button className="ph-icon-btn" aria-label="Search">
          <Icon name="search" size={18} />
        </button>
        <button className="ph-icon-btn ph-icon-btn--bell" aria-label="Notifications">
          <Icon name="bell" size={18} />
          <span className="ph-bell-dot"></span>
        </button>
        <button className="ph-ask-btn" onClick={onAsk}>
          <Icon name="sparkle" size={16} color="#fff" />
          <span>Ask Dr.T</span>
        </button>
        <div className="ph-topbar-avatar">
          <div className="ph-avatar-img">
            <span>H</span>
          </div>
          <div className="ph-avatar-status"></div>
        </div>
      </div>
    </header>
  );
}
