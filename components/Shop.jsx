import React from 'react';
import { Icon } from './Icons.jsx';

// Shop / Promotions - tests & DNA reports the patient can purchase
export default function Shop() {
  const [filter, setFilter] = React.useState('all');

  const products = [
    { id: 1, name: 'Cortisol Chex', desc: 'Stress & cortisol levels test', price: 1050, oldPrice: null, category: 'hormone', emoji: '🧬', bg: '#FFF6E5', tag: null },
    { id: 2, name: 'ImmuneSEQ — Immunity & Genetics', desc: 'Genetic immune profile + DNA report', price: 298, oldPrice: 380, category: 'dna', emoji: '🛡️', bg: '#E8F4FB', tag: 'SALE' },
    { id: 3, name: 'Methylation Chex', desc: 'Methylation DNA test', price: 706, oldPrice: 850, category: 'dna', emoji: '🧪', bg: '#EFEDFB', tag: 'SALE' },
    { id: 4, name: 'NIPTune C — NIPT Report', desc: 'Non-invasive prenatal screening', price: 901, oldPrice: null, category: 'prenatal', emoji: '👶', bg: '#FBE8EC', tag: 'NEW' },
    { id: 5, name: 'NIPTune S — NIPT Report', desc: 'Advanced prenatal screening', price: 1145, oldPrice: null, category: 'prenatal', emoji: '👶', bg: '#FBE8EC', tag: null },
    { id: 6, name: 'NIPTune X — NIPT Report', desc: 'Premium prenatal genetic screening', price: 1452, oldPrice: 1700, category: 'prenatal', emoji: '👶', bg: '#FBE8EC', tag: 'SALE' },
    { id: 7, name: 'OncoSeq C — Cancer Report', desc: 'Cancer susceptibility screening', price: 731, oldPrice: null, category: 'cancer', emoji: '🎗️', bg: '#FBE8E8', tag: null },
    { id: 8, name: 'OncoSeq X — Reports', desc: 'Comprehensive cancer screening', price: 1099, oldPrice: null, category: 'cancer', emoji: '🎗️', bg: '#FBE8E8', tag: null },
    { id: 9, name: 'Risk Chex Cardio', desc: 'Cardiovascular risk DNA report', price: 282, oldPrice: 350, category: 'risk', emoji: '❤️', bg: '#FBE8EC', tag: 'SALE' },
    { id: 10, name: 'Risk Chex Digestive', desc: 'Digestive risk DNA report', price: 282, oldPrice: 350, category: 'risk', emoji: '🫀', bg: '#FBE8EC', tag: 'SALE' },
    { id: 11, name: 'Risk Chex Immuno', desc: 'Immune risk DNA report', price: 282, oldPrice: 350, category: 'risk', emoji: '🛡️', bg: '#E8F4FB', tag: 'SALE' },
    { id: 12, name: 'Treatwell — Treatment & Genetics', desc: 'Personalized treatment DNA report', price: 279, oldPrice: 320, category: 'dna', emoji: '💊', bg: '#E8F7EF', tag: 'SALE' },
  ];

  const filtered = products.filter(p => filter === 'all' || p.category === filter);

  return (
    <div className="ph-page">
      <div className="ph-page-head">
        <div className="ph-page-head-row">
          <div>
            <h1 className="ph-page-title">Shop tests & reports</h1>
            <p className="ph-page-sub">Recommended tests, DNA reports, and assessments — discuss with Dr. Tarek before ordering</p>
          </div>
          <button className="ph-cart-btn">
            <Icon name="bag" size={16} />
            Cart <span className="ph-cart-count">2</span>
          </button>
        </div>
      </div>

      <div className="ph-th-filters">
        {[
          {id:'all',l:'All'},
          {id:'dna',l:'DNA reports'},
          {id:'risk',l:'Risk panels'},
          {id:'cancer',l:'Cancer'},
          {id:'prenatal',l:'Prenatal'},
          {id:'hormone',l:'Hormone'},
        ].map(f => (
          <button key={f.id} className={`ph-chip ${filter === f.id ? 'is-active' : ''}`} onClick={() => setFilter(f.id)}>
            {f.l}
          </button>
        ))}
      </div>

      <div className="ph-shop-grid">
        {filtered.map(p => (
          <article key={p.id} className="ph-shop-card">
            <div className="ph-shop-thumb" style={{ background: p.bg }}>
              <div className="ph-shop-emoji">{p.emoji}</div>
              {p.tag && <div className={`ph-shop-tag ph-shop-tag--${p.tag.toLowerCase()}`}>{p.tag}</div>}
            </div>
            <div className="ph-shop-body">
              <h3 className="ph-shop-name">{p.name}</h3>
              <p className="ph-shop-desc">{p.desc}</p>
              <div className="ph-shop-price-row">
                <div>
                  <span className="ph-shop-price">AED {p.price}</span>
                  {p.oldPrice && <span className="ph-shop-old">AED {p.oldPrice}</span>}
                </div>
              </div>
              <div className="ph-shop-actions">
                <button className="ph-mini-btn"><Icon name="info" size={14} /> Details</button>
                <button className="ph-mini-btn ph-mini-btn--primary"><Icon name="plus" size={14} /> Add</button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
