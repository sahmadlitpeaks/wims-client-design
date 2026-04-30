import React from 'react';
import { Icon } from './Icons.jsx';

// Patient header - simplified version
export default function PatientHeader({ patient }) {
  return (
    <div className="ph-patient-header">
      <div className="ph-patient-header-left">
        <div className="ph-patient-avatar">
          <div className="ph-patient-avatar-img">{patient.initials}</div>
          <div className="ph-patient-avatar-ring">
            <svg width="76" height="76" viewBox="0 0 76 76">
              <circle cx="38" cy="38" r="36" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="3" />
              <circle
                cx="38" cy="38" r="36" fill="none" stroke="#fff" strokeWidth="3"
                strokeDasharray={`${0.75 * 226} 226`}
                strokeLinecap="round"
                transform="rotate(-90 38 38)"
              />
            </svg>
            <div className="ph-patient-avatar-pct">75%</div>
          </div>
        </div>
        <div className="ph-patient-info">
          <div className="ph-patient-name-row">
            <h1 className="ph-patient-name">{patient.fullName}</h1>
            <span className="ph-patient-pill ph-patient-pill--soft">Active member</span>
          </div>
          <div className="ph-patient-meta">
            <span><Icon name="user" size={13} /> {patient.gender}</span>
            <span className="ph-patient-meta-dot"></span>
            <span><Icon name="calendar" size={13} /> Day {patient.programDay} of program</span>
            <span className="ph-patient-meta-dot"></span>
            <span><Icon name="map" size={13} /> {patient.center}</span>
          </div>
          <div className="ph-patient-care">
            <span className="ph-patient-care-label">Your care team</span>
            <div className="ph-patient-care-people">
              <div className="ph-care-chip">
                <div className="ph-care-chip-avatar" style={{ background: 'linear-gradient(135deg, #B8AAF0, #7C6FE8)' }}>DT</div>
                <span>Dr. Tarek</span>
              </div>
              <div className="ph-care-chip">
                <div className="ph-care-chip-avatar" style={{ background: 'linear-gradient(135deg, #F5C19A, #E8956A)' }}>HT</div>
                <span>Hina (Coach)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ph-patient-header-right">
        <div className="ph-allergy-card">
          <div className="ph-allergy-head">
            <Icon name="info" size={14} color="#fff" />
            <span>Allergies</span>
          </div>
          <div className="ph-allergy-pills">
            <span className="ph-allergy-pill">Peanuts</span>
            <span className="ph-allergy-pill">Penicillin</span>
          </div>
        </div>
        <div className="ph-patient-actions">
          <button className="ph-patient-action" title="Call clinic"><Icon name="phone" size={16} color="#fff" /></button>
          <button className="ph-patient-action" title="Email"><Icon name="mail" size={16} color="#fff" /></button>
          <button className="ph-patient-action ph-patient-action--primary" title="Message"><Icon name="chat" size={16} color="#1FA785" /></button>
        </div>
      </div>
    </div>
  );
}
