import React from 'react';
import { Icon } from './Icons.jsx';

// In-Clinics summary - body/physical exam assessments
export default function BodyTab() {
  const groups = [
    {
      title: 'Core checks',
      sub: 'Done at your last visit',
      items: [
        { name: 'Vital Signs', sub: 'Blood pressure, heart rate, temp', original: 'Vitals', icon: 'heart', color: '#E87C8E', status: 'completed', result: 'Normal', date: '2 weeks ago' },
        { name: 'Body Composition', sub: 'Weight, muscle, body fat %', original: 'Body Chex', icon: 'user', color: '#1FA785', status: 'completed', result: 'Healthy', date: '2 weeks ago' },
        { name: 'Heart & ECG', sub: 'Heart rhythm and electrical activity', original: 'ECG Chex', icon: 'activity', color: '#E87C8E', status: 'completed', result: 'Normal', date: '2 weeks ago' },
        { name: 'Breathing', sub: 'Lung capacity and breath patterns', original: 'Breath Chex', icon: 'leaf', color: '#3FA9D5', status: 'completed', result: 'Healthy', date: '2 weeks ago' },
      ]
    },
    {
      title: 'Movement & fitness',
      sub: 'How your body moves',
      items: [
        { name: 'Posture & Mobility', sub: 'How you stand and move', original: 'Movement Chex', icon: 'footprints', color: '#7C6FE8', status: 'pending' },
        { name: 'Muscle & Joints', sub: 'Strength and flexibility', original: 'MSK Chex', icon: 'shield', color: '#1FA785', status: 'completed', result: 'Watch', date: '1 month ago' },
        { name: 'Spine Health', sub: 'Back and neck alignment', original: 'Spine Chex', icon: 'shield', color: '#7C6FE8', status: 'pending' },
        { name: 'Cardio Fitness', sub: 'Endurance and stamina', original: 'VO2max Chex', icon: 'activity', color: '#E87C8E', status: 'pending' },
      ]
    },
    {
      title: 'Mind & nervous system',
      sub: 'How your brain & nerves work',
      items: [
        { name: 'Brain Function', sub: 'Cognitive performance', original: 'Brain Chex', icon: 'sparkle', color: '#3FA9D5', status: 'pending' },
        { name: 'Mind & Mood', sub: 'Mental wellness check', original: 'Mind Chex', icon: 'sparkle', color: '#E8A33F', status: 'pending' },
        { name: 'Sleep Quality', sub: 'How well you rest at night', original: 'Sleep Chex', icon: 'moon', color: '#7C6FE8', status: 'completed', result: 'Good', date: '3 weeks ago' },
        { name: 'Pupillary Reflex', sub: 'Eye response check', original: 'Pupillary Reaction', icon: 'target', color: '#1FA785', status: 'pending' },
      ]
    },
    {
      title: 'Metabolic & nutrition',
      sub: 'How your body uses energy',
      items: [
        { name: 'Energy at Rest', sub: 'How many calories you burn at rest', original: 'RMR Chex', icon: 'leaf', color: '#1FA785', status: 'pending' },
        { name: 'Performance', sub: 'Athletic and physical output', original: 'Performance Chex', icon: 'activity', color: '#E87C8E', status: 'pending' },
        { name: 'Heart-Metabolic Health', sub: 'Combined cardio & metabolic', original: 'Cardiometabolic Chex', icon: 'heart', color: '#E87C8E', status: 'pending' },
        { name: 'Body pH', sub: 'Acid/alkaline balance', original: 'Acid/Alkaline Balance', icon: 'droplet', color: '#3FA9D5', status: 'pending' },
        { name: 'Saliva pH', sub: 'Mouth acidity check', original: 'Saliva pH', icon: 'droplet', color: '#3FA9D5', status: 'pending' },
        { name: 'Iodine Patch', sub: 'Iodine absorption test', original: 'Iodine Patch', icon: 'shield', color: '#E8A33F', status: 'pending' },
      ]
    },
  ];

  const statusStyle = (s, result) => {
    if (s === 'completed') {
      const c = result === 'Watch' ? '#B8860B' : '#1F8A5A';
      const bg = result === 'Watch' ? '#FFF6E5' : '#E8F7EF';
      return { bg, color: c };
    }
    return { bg: '#F0F4F1', color: '#8A968F' };
  };

  return (
    <div className="ph-tab-pane">
      <div className="ph-tab-intro">
        <h2 className="ph-tab-title">Your body & physical health</h2>
        <p className="ph-tab-sub">All the checks done during your clinic visits, grouped by what they measure.</p>
      </div>

      {groups.map(group => (
        <div key={group.title} className="ph-body-group">
          <div className="ph-body-group-head">
            <h3 className="ph-body-group-title">{group.title}</h3>
            <p className="ph-body-group-sub">{group.sub}</p>
          </div>
          <div className="ph-body-grid">
            {group.items.map((item, idx) => {
              const sty = statusStyle(item.status, item.result);
              return (
                <button key={idx} className={`ph-body-card ph-body-card--${item.status}`}>
                  <div className="ph-body-card-icon" style={{ background: `${item.color}18`, color: item.color }}>
                    <Icon name={item.icon} size={20} color={item.color} />
                  </div>
                  <div className="ph-body-card-body">
                    <div className="ph-body-card-name">{item.name}</div>
                    <div className="ph-body-card-sub">{item.sub}</div>
                  </div>
                  <div className="ph-body-card-foot">
                    {item.status === 'completed' ? (
                      <>
                        <span className="ph-body-card-status" style={{ background: sty.bg, color: sty.color }}>
                          {item.result === 'Watch' ? '⚠' : '✓'} {item.result}
                        </span>
                        <span className="ph-body-card-date">{item.date}</span>
                      </>
                    ) : (
                      <span className="ph-body-card-status" style={{ background: sty.bg, color: sty.color }}>Not done yet</span>
                    )}
                    <Icon name="chevronRight" size={14} color="#9AA39B" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

