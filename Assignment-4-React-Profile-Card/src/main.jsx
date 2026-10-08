import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

function ProfileCard({ name, imageUrl, description, role }) {
  return (
    <article className="profile-card">
      <div className="cover" />
      <img className="avatar" src={imageUrl} alt={`${name}'s portrait`} />
      <div className="profile-content">
        <p className="role">{role}</p>
        <h1>{name}</h1>
        <p className="description">{description}</p>
        <button type="button" className="contact-button">Say hello <span aria-hidden="true">↗</span></button>
      </div>
    </article>
  );
}

function App() {
  return (
    <main>
      <p className="eyebrow">ASSIGNMENT 04 · REACT PROPS</p>
      <ProfileCard
        name="Alex Morgan"
        role="PRODUCT DESIGNER"
        imageUrl="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=480&q=85"
        description="I turn curious questions into thoughtful digital experiences. Currently designing tools that make everyday work feel a little more human."
      />
      <p className="caption">A reusable card, personalized with component props.</p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
