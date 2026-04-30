import React from 'react';
import { Icon } from './Icons.jsx';

// Wellbeing assessments (renamed from Soft Chex Summary)
export function WellbeingAssessments() {
  const items = [
    { id: 'stress', name: 'Stress level', oldName: 'PSS Chex', icon: 'leaf', color: '#7C6FE8', status: 'done', score: 'Low', scoreNote: 'You\'re managing well', date: '2 days ago' },
    { id: 'mood', name: 'How you\'re feeling', oldName: 'My Condition Chex', icon: 'heart', color: '#E87C8E', status: 'done', score: 'Steady', scoreNote: 'Mood has been stable', date: '1 week ago' },
    { id: 'cognition', name: 'Memory & focus', oldName: 'Cognition Chex', icon: 'sparkle', color: '#3FA9D5', status: 'pending', score: null, scoreNote: 'Take this 10-min check', date: null },
    { id: 'story', name: 'Your story', oldName: 'My Story Chex', icon: 'book', color: '#E8A33F', status: 'done', score: 'Complete', scoreNote: 'Reviewed by Dr.T', date: '3 weeks ago' },
    { id: 'energy', name: 'Daily energy', oldName: 'Ladder Chex', icon: 'activity', color: '#1FA785', status: 'pending', score: null, scoreNote: 'Quick 5-min self check-in', date: null },
    { id: 'me', name: 'About you', oldName: 'Me Chex', icon: 'user', color: '#E8A33F', status: 'done', score: 'Complete', scoreNote: 'Updated last month', date: '1 month ago' },
  ];

  return (
    <div className="ph-assess-grid">
      {items.map(it => (
        <button key={it.id} className={`ph-assess ${it.status === 'pending' ? 'is-pending' : 'is-done'}`}>
          <div className="ph-assess-top">
            <div className="ph-assess-icon" style={{ background: `${it.color}18`, color: it.color }}>
              <Icon name={it.icon} size={20} color={it.color} />
            </div>
            {it.status === 'done' ? (
              <span className="ph-assess-badge ph-assess-badge--done">
                <Icon name="check" size={11} strokeWidth={3} /> Done
              </span>
            ) : (
              <span className="ph-assess-badge ph-assess-badge--pending">Not yet</span>
            )}
          </div>
          <div className="ph-assess-name">{it.name}</div>
          <div className="ph-assess-old">Also called: {it.oldName}</div>
          <div className="ph-assess-foot">
            {it.status === 'done' ? (
              <>
                <div className="ph-assess-score" style={{ color: it.color }}>{it.score}</div>
                <div className="ph-assess-note">{it.scoreNote} · {it.date}</div>
              </>
            ) : (
              <>
                <div className="ph-assess-cta" style={{ color: it.color }}>Start check-in →</div>
                <div className="ph-assess-note">{it.scoreNote}</div>
              </>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

// Body / clinical exams (renamed from Client In-Clinics Summary)
export function BodyAssessments() {
  const groups = [
    {
      title: 'Core check-ups',
      items: [
        { id: 'vitals', name: 'Vitals', oldName: 'Vitals', icon: 'heart', status: 'done', date: '2 days ago' },
        { id: 'body', name: 'Body composition', oldName: 'Body Chex', icon: 'user', status: 'done', date: '1 week ago' },
        { id: 'brain', name: 'Brain & nerves', oldName: 'Brain Chex', icon: 'sparkle', status: 'pending' },
        { id: 'breath', name: 'Breathing', oldName: 'Breath Chex', icon: 'leaf', status: 'pending' },
      ]
    },
    {
      title: 'Heart & movement',
      items: [
        { id: 'ecg', name: 'Heart rhythm (ECG)', oldName: 'ECG Chex', icon: 'activity', status: 'done', highlight: true, date: 'Today' },
        { id: 'mind', name: 'Mind & mood', oldName: 'Mind Chex', icon: 'heart', status: 'pending' },
        { id: 'movement', name: 'How you move', oldName: 'Movement Chex', icon: 'footprints', status: 'pending' },
        { id: 'msk', name: 'Muscles & joints', oldName: 'MSK Chex', icon: 'shield', status: 'pending' },
      ]
    },
    {
      title: 'Performance',
      items: [
        { id: 'perf', name: 'Fitness level', oldName: 'Performance Chex', icon: 'star', status: 'pending' },
        { id: 'rmr', name: 'Resting metabolism', oldName: 'RMR Chex', icon: 'flask', status: 'pending' },
        { id: 'sleep', name: 'Sleep quality', oldName: 'Sleep Chex', icon: 'moon', status: 'done', date: '5 days ago' },
        { id: 'spine', name: 'Spine health', oldName: 'Spine Chex', icon: 'shield', status: 'pending' },
        { id: 'vo2', name: 'Cardio fitness', oldName: 'VO2max Chex', icon: 'activity', status: 'pending' },
        { id: 'medex', name: 'Medical exam', oldName: 'Medex Chex', icon: 'shield', status: 'pending' },
        { id: 'cardio', name: 'Heart & metabolism', oldName: 'Cardiometabolic Chex', icon: 'heart', status: 'pending' },
        { id: 'clinical', name: 'Doctor\'s exam', oldName: 'Clinical Chex', icon: 'user', status: 'pending' },
      ]
    },
    {
      title: 'Specialized tests',
      items: [
        { id: 'zinc', name: 'Zinc tolerance', oldName: 'Zinc Tolerance', icon: 'droplet', status: 'pending' },
        { id: 'acid', name: 'Acid/alkaline balance', oldName: 'Acid/Alkaline Balance', icon: 'flask', status: 'pending' },
        { id: 'saliva', name: 'Saliva pH', oldName: 'Saliva pH', icon: 'droplet', status: 'pending' },
        { id: 'iodine', name: 'Iodine patch', oldName: 'Iodine Patch', icon: 'shield', status: 'pending' },
        { id: 'ridely', name: 'Ridely reflex points', oldName: 'Ridely Reflex points', icon: 'target', status: 'pending' },
        { id: 'sortorius', name: 'Sortorius tenderness', oldName: 'Sortorius Tenderness', icon: 'target', status: 'pending' },
        { id: 'pupil', name: 'Pupil reaction', oldName: 'Pupillary Reaction', icon: 'target', status: 'pending' },
        { id: 'postural', name: 'Postural hypotension', oldName: 'Postural Hypotension', icon: 'activity', status: 'pending' },
        { id: 'inter', name: 'Intercostal space', oldName: 'Intercrostal Space', icon: 'shield', status: 'pending' },
        { id: 'chapman', name: 'Chapman reflex points', oldName: 'Chapman Reflex Points', icon: 'target', status: 'pending' },
      ]
    },
  ];

  return (
    <div className="ph-body-groups">
      {groups.map(group => (
        <div key={group.title} className="ph-body-group">
          <h3 className="ph-body-group-title">{group.title}</h3>
          <div className="ph-body-grid">
            {group.items.map(it => (
              <button
                key={it.id}
                className={`ph-body-tile ${it.status === 'done' ? 'is-done' : 'is-pending'} ${it.highlight ? 'is-highlight' : ''}`}
              >
                <div className="ph-body-tile-icon">
                  <Icon name={it.icon} size={18} />
                </div>
                <div className="ph-body-tile-text">
                  <div className="ph-body-tile-name">{it.name}</div>
                  <div className="ph-body-tile-meta">
                    {it.status === 'done' ? `Done · ${it.date}` : 'Not done yet'}
                  </div>
                </div>
                {it.status === 'done' && <Icon name="check" size={14} strokeWidth={3} />}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

// Lab tests / markers — simplified PDF-first view with expandable biomarkers
export function LabTestsView() {
  const [expanded, setExpanded] = React.useState(null);

  const tests = [
    {
      id: 1, name: 'Vitamin D level', date: 'Apr 28, 2026', sharedBy: 'Dr. T',
      pages: 3, fileSize: '420 KB', status: 'good',
      summary: 'Your Vitamin D is in the healthy range. Keep up your morning sun + D3 supplement.',
      markers: [
        { name: '25-OH Vitamin D', value: 38, unit: 'ng/mL', range: '30 – 60', status: 'good' },
      ]
    },
    {
      id: 2, name: 'Cholesterol panel', date: 'Apr 25, 2026', sharedBy: 'Dr. T',
      pages: 2, fileSize: '310 KB', status: 'good',
      summary: 'All cholesterol numbers look healthy. No changes needed.',
      markers: [
        { name: 'Total cholesterol', value: 178, unit: 'mg/dL', range: '< 200', status: 'good' },
        { name: 'HDL (good)', value: 62, unit: 'mg/dL', range: '> 50', status: 'good' },
        { name: 'LDL (bad)', value: 96, unit: 'mg/dL', range: '< 100', status: 'good' },
        { name: 'Triglycerides', value: 88, unit: 'mg/dL', range: '< 150', status: 'good' },
      ]
    },
    {
      id: 3, name: 'Iron / Ferritin', date: 'Apr 20, 2026', sharedBy: 'Dr. T',
      pages: 2, fileSize: '280 KB', status: 'good',
      summary: 'Your iron levels are healthy and steady.',
      markers: [
        { name: 'Ferritin', value: 85, unit: 'ng/mL', range: '20 – 200', status: 'good' },
        { name: 'Serum iron', value: 95, unit: 'µg/dL', range: '60 – 170', status: 'good' },
      ]
    },
    {
      id: 4, name: 'Complete blood count', date: 'Apr 15, 2026', sharedBy: 'Dr. T',
      pages: 4, fileSize: '512 KB', status: 'good',
      summary: 'All blood cell counts are within normal ranges.',
      markers: [
        { name: 'White blood cells', value: 6.4, unit: 'K/µL', range: '4.5 – 11.0', status: 'good' },
        { name: 'Red blood cells', value: 4.8, unit: 'M/µL', range: '4.2 – 5.4', status: 'good' },
        { name: 'Hemoglobin', value: 13.6, unit: 'g/dL', range: '12.0 – 16.0', status: 'good' },
        { name: 'Platelets', value: 245, unit: 'K/µL', range: '150 – 400', status: 'good' },
      ]
    },
    {
      id: 5, name: 'Thyroid panel (TSH)', date: 'Apr 10, 2026', sharedBy: 'Not shared yet',
      pages: 2, fileSize: '290 KB', status: 'watch',
      summary: 'TSH is slightly above normal. Dr. T will review this with you next visit.',
      markers: [
        { name: 'TSH', value: 4.8, unit: 'mIU/L', range: '0.4 – 4.0', status: 'watch' },
        { name: 'Free T4', value: 1.2, unit: 'ng/dL', range: '0.8 – 1.8', status: 'good' },
        { name: 'Free T3', value: 3.1, unit: 'pg/mL', range: '2.3 – 4.2', status: 'good' },
      ]
    },
    {
      id: 6, name: 'Urinalysis', date: 'Apr 5, 2026', sharedBy: 'Dr. T',
      pages: 1, fileSize: '180 KB', status: 'good',
      summary: 'Urinalysis is clear — no signs of infection or other issues.',
      markers: [
        { name: 'pH', value: 6.2, unit: '', range: '4.5 – 8.0', status: 'good' },
        { name: 'Protein', value: 'Negative', unit: '', range: 'Negative', status: 'good' },
        { name: 'Glucose', value: 'Negative', unit: '', range: 'Negative', status: 'good' },
      ]
    },
    {
      id: 7, name: 'Vitamin B12', date: 'Mar 28, 2026', sharedBy: 'Dr. T',
      pages: 1, fileSize: '210 KB', status: 'good',
      summary: 'B12 is in a great range, supporting energy and nerves.',
      markers: [
        { name: 'Vitamin B12', value: 520, unit: 'pg/mL', range: '200 – 900', status: 'good' },
      ]
    },
  ];

  const statusStyles = {
    good: { bg: '#E8F7EF', color: '#1F8A5A', label: '✓ Healthy' },
    watch: { bg: '#FFF6E5', color: '#B8860B', label: '⚠ Watch' },
    new: { bg: '#E8F0FF', color: '#2A6FE8', label: '● New' },
  };

  return (
    <div className="ph-lab">
      <div className="ph-lab-toolbar ph-lab-toolbar--simple">
        <div className="ph-lab-tabs">
          <button className="ph-lab-tab is-active">My reports <span>({tests.length})</span></button>
          <button className="ph-lab-tab">Archived <span>(0)</span></button>
          <button className="ph-lab-tab">External <span>(0)</span></button>
        </div>
        <div className="ph-lab-search">
          <Icon name="search" size={16} color="#8A968F" />
          <input type="text" placeholder="Search reports..." />
        </div>
      </div>

      <div className="ph-pdf-list">
        {tests.map(t => {
          const s = statusStyles[t.status];
          const isOpen = expanded === t.id;
          return (
            <div key={t.id} className={`ph-pdf-card ${isOpen ? 'is-open' : ''}`}>
              <button className="ph-pdf-row" onClick={() => setExpanded(isOpen ? null : t.id)}>
                <div className="ph-pdf-thumb">
                  <div className="ph-pdf-thumb-page">
                    <div className="ph-pdf-thumb-line"></div>
                    <div className="ph-pdf-thumb-line ph-pdf-thumb-line--short"></div>
                    <div className="ph-pdf-thumb-line"></div>
                    <div className="ph-pdf-thumb-line ph-pdf-thumb-line--short"></div>
                  </div>
                  <div className="ph-pdf-thumb-tag">PDF</div>
                </div>
                <div className="ph-pdf-info">
                  <div className="ph-pdf-name">{t.name}</div>
                  <div className="ph-pdf-meta">
                    <span><Icon name="calendar" size={12} /> {t.date}</span>
                    <span className="ph-pdf-meta-dot"></span>
                    <span>{t.pages} {t.pages === 1 ? 'page' : 'pages'} · {t.fileSize}</span>
                    <span className="ph-pdf-meta-dot"></span>
                    <span>{t.sharedBy === 'Not shared yet' ? '🔒 Not shared yet' : `Shared by ${t.sharedBy}`}</span>
                  </div>
                  <div className="ph-pdf-summary">{t.summary}</div>
                </div>
                <div className="ph-pdf-side">
                  <span className="ph-lab-status" style={{ background: s.bg, color: s.color }}>{s.label}</span>
                  <div className="ph-pdf-actions">
                    <button className="ph-pdf-action ph-pdf-action--ghost" onClick={(e) => e.stopPropagation()} title="View PDF">
                      <Icon name="search" size={14} /> View
                    </button>
                    <button className="ph-pdf-action ph-pdf-action--primary" onClick={(e) => e.stopPropagation()} title="Download">
                      <Icon name="download" size={14} color="#fff" /> PDF
                    </button>
                  </div>
                </div>
                <div className="ph-pdf-chevron">
                  <Icon name={isOpen ? 'chevronDown' : 'chevronRight'} size={16} />
                </div>
              </button>

              {isOpen && (
                <div className="ph-pdf-markers">
                  <div className="ph-pdf-markers-head">
                    <Icon name="activity" size={14} color="#1FA785" />
                    <span>Individual values from this report</span>
                  </div>
                  <div className="ph-marker-list">
                    <div className="ph-marker-row ph-marker-row--head">
                      <div>Marker</div>
                      <div>Your value</div>
                      <div>Healthy range</div>
                      <div>Status</div>
                    </div>
                    {t.markers.map((m, i) => {
                      const ms = statusStyles[m.status];
                      return (
                        <div key={i} className="ph-marker-row">
                          <div className="ph-marker-name">{m.name}</div>
                          <div className="ph-marker-value">
                            <span className="ph-marker-num">{m.value}</span>
                            {m.unit && <span className="ph-marker-unit">{m.unit}</span>}
                          </div>
                          <div className="ph-marker-range">{m.range} {m.unit}</div>
                          <div>
                            <span className="ph-lab-status" style={{ background: ms.bg, color: ms.color }}>{ms.label}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
