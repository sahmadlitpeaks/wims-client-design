import React from 'react';
import { Icon } from './Icons.jsx';

// Library - documents and videos for the patient
export default function Library() {
  const [tab, setTab] = React.useState('docs');
  const [search, setSearch] = React.useState('');

  const docs = [
    { name: 'Functional Chex Report', type: 'pdf', date: '31 Mar 2026', size: '2.4 MB', category: 'Lab Report' },
    { name: 'Age Chex Report', type: 'pdf', date: '1 Apr 2026', size: '1.8 MB', category: 'Lab Report' },
    { name: 'Gut Chex Report', type: 'pdf', date: '2 Apr 2026', size: '3.1 MB', category: 'Lab Report' },
    { name: 'Tracewell Report', type: 'pdf', date: '2 Apr 2026', size: '2.0 MB', category: 'Lab Report' },
    { name: 'SportsChex Report', type: 'pdf', date: '2 Apr 2026', size: '1.5 MB', category: 'Lab Report' },
    { name: 'Pathway Report', type: 'pdf', date: '2 Apr 2026', size: '4.2 MB', category: 'Lab Report' },
    { name: 'NutriChex Report', type: 'pdf', date: '2 Apr 2026', size: '2.8 MB', category: 'Lab Report' },
    { name: 'Treatment plan overview', type: 'pdf', date: '15 Mar 2026', size: '900 KB', category: 'Care Plan' },
  ];

  const videos = [
    { name: 'Welcome from Dr. Tarek', duration: '3:24', date: '1 Mar 2026', thumb: '👨‍⚕️', bg: '#E8F7EF' },
    { name: 'How to read your lab results', duration: '8:12', date: '15 Mar 2026', thumb: '🔬', bg: '#E8F4FB' },
    { name: 'Mindful breathing tutorial', duration: '5:00', date: '20 Mar 2026', thumb: '🌬️', bg: '#EFEDFB' },
    { name: 'Setting up Red Light Therapy', duration: '4:45', date: '25 Mar 2026', thumb: '💡', bg: '#FBE8C7' },
  ];

  const filtered = (tab === 'docs' ? docs : videos).filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="ph-page">
      <div className="ph-page-head">
        <h1 className="ph-page-title">Your library</h1>
        <p className="ph-page-sub">All your reports, videos, and care materials in one place</p>
      </div>

      <div className="ph-lib-bar">
        <div className="ph-th-tabs ph-th-tabs--inline">
          <button className={`ph-th-tab ${tab === 'docs' ? 'is-active' : ''}`} onClick={() => setTab('docs')}>
            <Icon name="book" size={14} /> Documents <span className="ph-th-count">{docs.length}</span>
          </button>
          <button className={`ph-th-tab ${tab === 'videos' ? 'is-active' : ''}`} onClick={() => setTab('videos')}>
            <Icon name="play" size={14} /> Videos <span className="ph-th-count">{videos.length}</span>
          </button>
        </div>
        <div className="ph-search">
          <Icon name="search" size={16} />
          <input
            type="text"
            placeholder={`Search ${tab === 'docs' ? 'documents' : 'videos'}…`}
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      {tab === 'docs' ? (
        <div className="ph-doc-grid">
          {filtered.map((d, i) => (
            <div key={i} className="ph-doc-card">
              <div className="ph-doc-thumb">
                <div className="ph-doc-thumb-pdf">PDF</div>
                <Icon name="book" size={26} color="#C04545" />
              </div>
              <div className="ph-doc-body">
                <div className="ph-doc-cat">{d.category}</div>
                <div className="ph-doc-name">{d.name}</div>
                <div className="ph-doc-meta">{d.date} · {d.size}</div>
              </div>
              <div className="ph-doc-actions">
                <button className="ph-mini-btn"><Icon name="info" size={14} /> Open</button>
                <button className="ph-mini-btn ph-mini-btn--primary"><Icon name="download" size={14} /> Save</button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="ph-vid-grid">
          {filtered.map((v, i) => (
            <div key={i} className="ph-vid-card">
              <div className="ph-vid-thumb" style={{ background: v.bg }}>
                <div className="ph-vid-emoji">{v.thumb}</div>
                <div className="ph-vid-play">
                  <Icon name="play" size={18} color="#fff" />
                </div>
                <div className="ph-vid-duration">{v.duration}</div>
              </div>
              <div className="ph-vid-body">
                <div className="ph-vid-name">{v.name}</div>
                <div className="ph-vid-date">{v.date}</div>
              </div>
            </div>
          ))}
        </div>
      )}

      {filtered.length === 0 && <div className="ph-empty">Nothing matches your search.</div>}
    </div>
  );
}
