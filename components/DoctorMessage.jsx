import React from 'react';
import { Icon } from './Icons.jsx';

// Doctor message preview
export default function DoctorMessage({ onOpen }) {
  return (
    <section className="ph-card ph-msg">
      <div className="ph-card-head">
        <h2 className="ph-card-title">From your doctor</h2>
        <button className="ph-link" onClick={onOpen}>All messages →</button>
      </div>
      <div className="ph-msg-item">
        <div className="ph-doc-avatar ph-doc-avatar--lg">DT</div>
        <div className="ph-msg-body">
          <div className="ph-msg-head">
            <span className="ph-msg-name">Dr. Tarek</span>
            <span className="ph-msg-time">2 hours ago</span>
          </div>
          <p className="ph-msg-text">Hi Hina, your latest blood panel is back and everything looks great. I've added a small adjustment to your supplement plan — see your prescription tab. Talk soon!</p>
          <button className="ph-msg-reply" onClick={onOpen}>
            <Icon name="chat" size={14} />
            Reply
          </button>
        </div>
      </div>
    </section>
  );
}
