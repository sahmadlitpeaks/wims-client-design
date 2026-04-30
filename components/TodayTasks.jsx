import React from 'react';
import { Icon } from './Icons.jsx';

// Today's tasks - simple checklist of what to do today
export default function TodayTasks() {
  const [tasks, setTasks] = React.useState([
    { id: 1, type: 'pill', title: 'Take Vitamin D3', time: '9:00 AM', done: true, sub: '2 capsules with breakfast' },
    { id: 2, type: 'activity', title: '20-min walk', time: 'Before lunch', done: true, sub: 'Aim for 3,000 steps' },
    { id: 3, type: 'pill', title: 'Magnesium Glycinate', time: '9:00 PM', done: false, sub: '1 capsule before bed' },
    { id: 4, type: 'droplet', title: 'Drink 8 glasses of water', time: 'Throughout the day', done: false, sub: '5 of 8 logged' },
  ]);

  const toggle = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const done = tasks.filter(t => t.done).length;
  const pct = (done / tasks.length) * 100;

  return (
    <section className="ph-card ph-tasks">
      <div className="ph-card-head">
        <div>
          <h2 className="ph-card-title">Today's plan</h2>
          <p className="ph-card-sub">{done} of {tasks.length} done · keep going</p>
        </div>
        <div className="ph-progress-ring">
          <svg width="48" height="48" viewBox="0 0 48 48">
            <circle cx="24" cy="24" r="20" fill="none" stroke="#E8F4EE" strokeWidth="4" />
            <circle
              cx="24" cy="24" r="20" fill="none" stroke="#1FA785" strokeWidth="4"
              strokeDasharray={`${(pct / 100) * 125.6} 125.6`}
              strokeLinecap="round"
              transform="rotate(-90 24 24)"
              style={{ transition: 'stroke-dasharray 0.4s ease' }}
            />
          </svg>
          <div className="ph-progress-pct">{Math.round(pct)}%</div>
        </div>
      </div>

      <ul className="ph-task-list">
        {tasks.map(task => (
          <li key={task.id} className={`ph-task ${task.done ? 'is-done' : ''}`}>
            <button className="ph-task-check" onClick={() => toggle(task.id)} aria-label={task.done ? 'Mark incomplete' : 'Mark complete'}>
              {task.done && <Icon name="check" size={14} color="#fff" strokeWidth={3} />}
            </button>
            <div className="ph-task-icon">
              <Icon name={task.type} size={18} color="#1FA785" />
            </div>
            <div className="ph-task-body">
              <div className="ph-task-title">{task.title}</div>
              <div className="ph-task-sub">{task.sub}</div>
            </div>
            <div className="ph-task-time">
              <Icon name="clock" size={12} />
              {task.time}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
