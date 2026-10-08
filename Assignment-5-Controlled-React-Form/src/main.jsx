import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const initialValues = { name: '', email: '', about: '' };

function App() {
  const [form, setForm] = useState(initialValues);
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  return (
    <main className="layout">
      <section className="form-panel">
        <p className="eyebrow">ASSIGNMENT 05 · REACT STATE</p>
        <h1>Introduce<br />yourself.</h1>
        <p className="intro">As you type, your profile takes shape on the right.</p>
        <form>
          <label htmlFor="name">Your name</label>
          <input id="name" name="name" value={form.name} onChange={update} placeholder="e.g. Sam Taylor" />
          <label htmlFor="email">Email address</label>
          <input id="email" name="email" type="email" value={form.email} onChange={update} placeholder="sam@example.com" />
          <label htmlFor="about">A little about you</label>
          <textarea id="about" name="about" rows="4" value={form.about} onChange={update} placeholder="What are you working on?" />
        </form>
      </section>

      <section className="preview-panel" aria-live="polite">
        <p className="preview-label">LIVE PREVIEW</p>
        <article className="preview-card">
          <div className="avatar" aria-hidden="true">{form.name.trim() ? form.name.trim().charAt(0).toUpperCase() : '✳'}</div>
          <h2>{form.name || 'Your name'}</h2>
          <p className="email">{form.email || 'your@email.com'}</p>
          <div className="divider" />
          <p className="about">{form.about || 'Your introduction will show up here as you write it.'}</p>
        </article>
        <p className="preview-note">Your changes appear instantly.</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
