import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [about, setAbout] = useState('');

  return (
    <main className="layout">
      <section className="form-panel">
        <p className="eyebrow">ASSIGNMENT 05 · REACT STATE</p>
        <h1>Introduce<br />yourself.</h1>
        <p className="intro">As you type, your profile takes shape on the right.</p>
        <form>
          <label htmlFor="name">Your name</label>
          <input id="name" value={name} onChange={function (event) { setName(event.target.value); }} placeholder="e.g. Sam Taylor" />

          <label htmlFor="email">Email address</label>
          <input id="email" type="email" value={email} onChange={function (event) { setEmail(event.target.value); }} placeholder="sam@example.com" />

          <label htmlFor="about">A little about you</label>
          <textarea id="about" rows="4" value={about} onChange={function (event) { setAbout(event.target.value); }} placeholder="What are you working on?" />
        </form>
      </section>

      <section className="preview-panel">
        <p className="preview-label">LIVE PREVIEW</p>
        <article className="preview-card">
          <div className="avatar">{name ? name.charAt(0).toUpperCase() : '✳'}</div>
          <h2>{name || 'Your name'}</h2>
          <p className="email">{email || 'your@email.com'}</p>
          <div className="divider"></div>
          <p className="about">{about || 'Your introduction will show up here as you write it.'}</p>
        </article>
        <p className="preview-note">Your changes appear instantly.</p>
      </section>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
