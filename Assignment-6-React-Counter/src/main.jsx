import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="counter-card">
      <p className="eyebrow">ASSIGNMENT 06 · REACT HOOKS</p>
      <div className="icon" aria-hidden="true">↗</div>
      <h1>Small steps<br />add up.</h1>
      <p className="intro">A counter powered by <code>useState</code>.</p>
      <div className="count-display" aria-live="polite" aria-atomic="true">{count}</div>
      <div className="controls">
        <button type="button" className="step-button" onClick={() => setCount((value) => value - 1)} aria-label="Decrement counter">−</button>
        <button type="button" className="reset-button" onClick={() => setCount(0)}>Reset</button>
        <button type="button" className="step-button" onClick={() => setCount((value) => value + 1)} aria-label="Increment counter">+</button>
      </div>
      <p className="hint">Change the number one step at a time.</p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
