import React from 'react';
import { Icon } from './Icons.jsx';

// Order History - past orders with status, expandable to see test items
export default function Orders() {
  const [tab, setTab] = React.useState('all');
  const [expanded, setExpanded] = React.useState('7A3C0994');

  const orders = [
    { id: '7A3C0994', status: 'completed', date: '26 Mar 2026', total: 'AED 1,452', items: [
      { name: 'Pathway Chex Comp', barcode: '26032612595014', type: 'Lab Specialty Tests', status: 'released', releaseDate: '26 Mar 2026, 1:04 PM' },
    ]},
    { id: '8298939C', status: 'in-progress', date: '23 Feb 2026', total: 'AED 786', items: [
      { name: 'Methylation Chex', barcode: '23022611200014', type: 'DNA Report', status: 'processing', releaseDate: null },
    ]},
    { id: '6C3C2F37', status: 'completed', date: '5 Feb 2026', total: 'AED 515', items: [
      { name: 'OncoSeq C', barcode: '05022609300014', type: 'DNA Report', status: 'released', releaseDate: '12 Feb 2026, 10:00 AM' },
    ]},
  ];

  const filtered = orders.filter(o => tab === 'all' || o.status === tab);

  const statusStyle = {
    completed: { bg: '#E8F7EF', color: '#1F8A5A', label: 'Completed' },
    'in-progress': { bg: '#E8F0FF', color: '#2A6FE8', label: 'In progress' },
    cancelled: { bg: '#FBE8E8', color: '#C04545', label: 'Cancelled' },
  };

  return (
    <div className="ph-page">
      <div className="ph-page-head">
        <h1 className="ph-page-title">Your orders</h1>
        <p className="ph-page-sub">All your test orders and their status</p>
      </div>

      <div className="ph-th-tabs">
        {[{id:'all',l:'All'},{id:'in-progress',l:'In progress'},{id:'completed',l:'Completed'},{id:'cancelled',l:'Cancelled'}].map(t => (
          <button key={t.id} className={`ph-th-tab ${tab === t.id ? 'is-active' : ''}`} onClick={() => setTab(t.id)}>
            {t.l}
          </button>
        ))}
      </div>

      <div className="ph-orders">
        {filtered.map(o => {
          const s = statusStyle[o.status];
          const isOpen = expanded === o.id;
          return (
            <div key={o.id} className={`ph-order ${isOpen ? 'is-open' : ''}`}>
              <button className="ph-order-head" onClick={() => setExpanded(isOpen ? null : o.id)}>
                <div className="ph-order-id">
                  <Icon name="bag" size={18} color="#1FA785" />
                  <div>
                    <div className="ph-order-num">Order #{o.id}</div>
                    <div className="ph-order-date">{o.date}</div>
                  </div>
                </div>
                <div className="ph-order-status" style={{ background: s.bg, color: s.color }}>● {s.label}</div>
                <div className="ph-order-total">{o.total}</div>
                <Icon name="chevronDown" size={16} color="#9AA39B" />
              </button>
              {isOpen && (
                <div className="ph-order-body">
                  <div className="ph-order-items-head">
                    <span>Test name</span>
                    <span>Type</span>
                    <span>Status</span>
                    <span>Release date</span>
                    <span></span>
                  </div>
                  {o.items.map((item, i) => (
                    <div key={i} className="ph-order-item">
                      <div className="ph-order-item-name">
                        <Icon name="flask" size={14} color="#1FA785" />
                        {item.name}
                        <div className="ph-order-barcode">{item.barcode}</div>
                      </div>
                      <div>{item.type}</div>
                      <div className={`ph-order-item-status ph-order-item-status--${item.status}`}>
                        {item.status === 'released' ? '✓ Released' : '⏳ Processing'}
                      </div>
                      <div>{item.releaseDate || '—'}</div>
                      <button className="ph-mini-btn">
                        {item.status === 'released' ? <><Icon name="download" size={14} /> Report</> : 'Track'}
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
