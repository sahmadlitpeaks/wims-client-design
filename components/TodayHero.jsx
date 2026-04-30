// Hero card: Today's plan with next appointment & priority items
import React from 'react';
import { Icon } from './Icons.jsx';

export default function TodayHero({ patient, onAction }) {
  return (
    <div className="ph-hero">
      <div className="ph-hero-bg">
        <div className="ph-hero-blob ph-hero-blob--1"></div>
        <div className="ph-hero-blob ph-hero-blob--2"></div>
      </div>

      <div className="ph-hero-content">
        <div className="ph-hero-left">
          <div className="ph-hero-eyebrow">
            <span className="ph-pulse"></span>
            Your day · {new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          </div>
          <h1 className="ph-hero-title">You have <em>3 things</em> to do today.</h1>
          <p className="ph-hero-sub">Take a moment to review your plan. Everything is in order — your care team is here for you.</p>

          <div className="ph-hero-cta">
            <button className="ph-btn ph-btn--primary" onClick={() => onAction('today')}>
              See today's plan
              <Icon name="arrowRight" size={16} color="#fff" />
            </button>
            <button className="ph-btn ph-btn--ghost" onClick={() => onAction('messages')}>
              <Icon name="chat" size={16} />
              Message Dr.T
            </button>
          </div>
        </div>

        <div className="ph-hero-right">
          <div className="ph-next-appt">
            <div className="ph-next-appt-label">Next appointment</div>
            <div className="ph-next-appt-date">
              <span className="ph-next-appt-day">12</span>
              <div>
                <div className="ph-next-appt-month">May, Tuesday</div>
                <div className="ph-next-appt-time">10:30 AM · in 4 days</div>
              </div>
            </div>
            <div className="ph-next-appt-with">
              <div className="ph-doc-avatar">DT</div>
              <div>
                <div className="ph-doc-name">Dr. Tarek Saleh</div>
                <div className="ph-doc-role">Wellness check-up · PWZ Dubai</div>
              </div>
            </div>
            <div className="ph-next-appt-actions">
              <button className="ph-mini-btn"><Icon name="calendar" size={14} /> Reschedule</button>
              <button className="ph-mini-btn ph-mini-btn--primary"><Icon name="map" size={14} /> Directions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
