import React from 'react';
import { Icon } from './Icons.jsx';

// Soft Chex - assessments about how the patient feels & thinks
export default function WellbeingTab() {
  const assessments = [
    {
      id: 'stress',
      name: 'Stress Level',
      original: 'PSS Chex',
      sub: 'How stress affects your daily life',
      icon: '🌿',
      color: '#7C6FE8',
      status: 'completed',
      result: 'Moderate',
      resultColor: '#B8860B',
      lastDate: '2 weeks ago',
      score: 18,
      max: 40,
    },
    {
      id: 'mood',
      name: 'How You Feel',
      original: 'My Story Chex',
      sub: 'Your mood and emotional wellbeing',
      icon: '💚',
      color: '#1FA785',
      status: 'pending',
      result: null,
      lastDate: null,
    },
    {
      id: 'cognition',
      name: 'Memory & Focus',
      original: 'Cognition Chex',
      sub: 'Quick check on memory and clarity',
      icon: '🧠',
      color: '#3FA9D5',
      status: 'completed',
      result: 'Healthy',
      resultColor: '#1F8A5A',
      lastDate: '1 month ago',
      score: 28,
      max: 30,
    },
    {
      id: 'condition',
      name: 'Daily Condition',
      original: 'My Condition Chex',
      sub: 'How you are doing today, overall',
      icon: '☀️',
      color: '#E8A33F',
      status: 'pending',
      result: null,
      lastDate: null,
    },
    {
      id: 'me',
      name: 'About Me',
      original: 'Me Chex',
      sub: 'Your personal goals and lifestyle',
      icon: '✨',
      color: '#E87C8E',
      status: 'in-progress',
      result: 'In progress',
      resultColor: '#B8860B',
      lastDate: 'Started yesterday',
      score: 6,
      max: 12,
    },
    {
      id: 'ladder',
      name: 'Life Satisfaction',
      original: 'Ladder Chex',
      sub: 'Where you stand on your life ladder',
      icon: '🪜',
      color: '#5BB6D9',
      status: 'pending',
      result: null,
      lastDate: null,
    },
  ];

  return (
    <div className="ph-tab-pane">
      <div className="ph-tab-intro">
        <h2 className="ph-tab-title">How you feel & think</h2>
        <p className="ph-tab-sub">Quick assessments about your wellbeing. Take them at your own pace — your care team uses them to support you better.</p>
      </div>

      <div className="ph-assess-grid">
        {assessments.map(a => (
          <div key={a.id} className={`ph-assess-card ph-assess-card--${a.status}`}>
            <div className="ph-assess-card-top">
              <div className="ph-assess-emoji" style={{ background: `${a.color}18` }}>
                <span>{a.icon}</span>
              </div>
              <StatusPill status={a.status} resultColor={a.resultColor} result={a.result} />
            </div>
            <div className="ph-assess-card-body">
              <div className="ph-assess-name">{a.name}</div>
              <div className="ph-assess-sub">{a.sub}</div>
              <div className="ph-assess-original">Originally: {a.original}</div>
            </div>
            {a.status === 'completed' && (
              <div className="ph-assess-result">
                <div className="ph-assess-result-bar">
                  <div className="ph-assess-result-fill" style={{ width: `${(a.score / a.max) * 100}%`, background: a.color }}></div>
                </div>
                <div className="ph-assess-result-meta">
                  <span>Score: <b>{a.score}/{a.max}</b></span>
                  <span>{a.lastDate}</span>
                </div>
              </div>
            )}
            {a.status === 'in-progress' && (
              <div className="ph-assess-result">
                <div className="ph-assess-result-bar">
                  <div className="ph-assess-result-fill" style={{ width: `${(a.score / a.max) * 100}%`, background: a.color }}></div>
                </div>
                <div className="ph-assess-result-meta">
                  <span>{a.score} of {a.max} answered</span>
                  <span>{a.lastDate}</span>
                </div>
              </div>
            )}
            <div className="ph-assess-card-foot">
              {a.status === 'completed' && (
                <>
                  <button className="ph-assess-btn ph-assess-btn--ghost">View report</button>
                  <button className="ph-assess-btn ph-assess-btn--primary">Retake</button>
                </>
              )}
              {a.status === 'in-progress' && (
                <button className="ph-assess-btn ph-assess-btn--primary ph-assess-btn--full">Continue <Icon name="arrowRight" size={14} color="#fff" /></button>
              )}
              {a.status === 'pending' && (
                <button className="ph-assess-btn ph-assess-btn--primary ph-assess-btn--full">Start now <Icon name="arrowRight" size={14} color="#fff" /></button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusPill({ status, result, resultColor }) {
  if (status === 'completed') {
    return <span className="ph-status-pill" style={{ background: `${resultColor}20`, color: resultColor }}>✓ {result}</span>;
  }
  if (status === 'in-progress') {
    return <span className="ph-status-pill" style={{ background: '#FFF6E5', color: '#B8860B' }}>● In progress</span>;
  }
  return <span className="ph-status-pill ph-status-pill--pending">Not started</span>;
}

