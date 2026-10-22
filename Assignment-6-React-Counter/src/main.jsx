import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(count + 1);
  }

  function decreaseCount() {
    setCount(count - 1);
  }

  function resetCount() {
    setCount(0);
  }

  return (
    <main className="counter-card">
      <p className="eyebrow">ASSIGNMENT 06 · REACT HOOKS</p>
      <div className="icon">↗</div>
      <h1>Small steps<br />add up.</h1>
      <p className="intro">A counter powered by <code>useState</code>.</p>
      <div className="count-display">{count}</div>
      <div className="controls">
        <button type="button" className="step-button" onClick={decreaseCount}>−</button>
        <button type="button" className="reset-button" onClick={resetCount}>Reset</button>
        <button type="button" className="step-button" onClick={increaseCount}>+</button>
      </div>
      <p className="hint">Change the number one step at a time.</p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
