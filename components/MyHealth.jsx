import React from 'react';
import { Icon } from './Icons.jsx';
import { WellbeingAssessments, BodyAssessments, LabTestsView } from './HealthTabs.jsx';

// My Health page - container for 3 tabs
export default function MyHealth() {
  const [tab, setTab] = React.useState('wellbeing');

  const tabs = [
    { id: 'wellbeing', label: 'Mind & wellbeing', sub: 'How you feel & think', icon: 'sparkle', count: 6 },
    { id: 'body', label: 'Body & exams', sub: 'Physical check-ups', icon: 'heart', count: 26 },
    { id: 'lab', label: 'Lab tests', sub: 'Blood, urine & more', icon: 'flask', count: 7 },
  ];

  return (
    <div className="ph-myhealth">
      <div className="ph-section-head ph-section-head--big">
        <h2 className="ph-section-title">My health</h2>
        <p className="ph-section-sub">Everything your care team has tracked, in plain language.</p>
      </div>

      <div className="ph-tabs-bar">
        {tabs.map(t => (
          <button
            key={t.id}
            className={`ph-tab-card ${tab === t.id ? 'is-active' : ''}`}
            onClick={() => setTab(t.id)}
          >
            <div className="ph-tab-card-icon">
              <Icon name={t.icon} size={18} />
            </div>
            <div className="ph-tab-card-text">
              <div className="ph-tab-card-label">{t.label}</div>
              <div className="ph-tab-card-sub">{t.sub}</div>
            </div>
            <div className="ph-tab-card-count">{t.count}</div>
          </button>
        ))}
      </div>

      <div className="ph-tab-panel">
        {tab === 'wellbeing' && (
          <>
            <div className="ph-tab-banner">
              <div className="ph-tab-banner-icon" style={{ background: '#EFEDFB', color: '#7C6FE8' }}>
                <Icon name="sparkle" size={18} color="#7C6FE8" />
              </div>
              <div>
                <div className="ph-tab-banner-title">How you feel & think</div>
                <div className="ph-tab-banner-sub">Quick check-ins to understand your stress, mood, and mental wellbeing. Take them at your own pace.</div>
              </div>
              <button className="ph-btn ph-btn--primary ph-btn--sm">
                <Icon name="plus" size={14} color="#fff" /> Start a check-in
              </button>
            </div>
            <WellbeingAssessments />
          </>
        )}
        {tab === 'body' && (
          <>
            <div className="ph-tab-banner">
              <div className="ph-tab-banner-icon" style={{ background: '#FBE8EC', color: '#E87C8E' }}>
                <Icon name="heart" size={18} color="#E87C8E" />
              </div>
              <div>
                <div className="ph-tab-banner-title">Body & physical exams</div>
                <div className="ph-tab-banner-sub">Tests done at the clinic with your care team — vitals, body composition, heart, sleep and more.</div>
              </div>
              <button className="ph-btn ph-btn--primary ph-btn--sm">
                <Icon name="calendar" size={14} color="#fff" /> Book a visit
              </button>
            </div>
            <BodyAssessments />
          </>
        )}
        {tab === 'lab' && (
          <>
            <div className="ph-tab-banner">
              <div className="ph-tab-banner-icon" style={{ background: '#E8F7EF', color: '#1FA785' }}>
                <Icon name="flask" size={18} color="#1FA785" />
              </div>
              <div>
                <div className="ph-tab-banner-title">Lab tests & markers</div>
                <div className="ph-tab-banner-sub">Your blood work and other lab results. Tap any test to see a friendly explanation.</div>
              </div>
              <button className="ph-btn ph-btn--ghost ph-btn--sm">
                <Icon name="download" size={14} /> Download all
              </button>
            </div>
            <LabTestsView />
          </>
        )}
      </div>
    </div>
  );
}
