import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

// The information for the card comes from props.
function ProfileCard(props) {
  return (
    <article className="profile-card">
      <div className="cover"></div>
      <img className="avatar" src={props.imageUrl} alt={props.name} />
      <div className="profile-content">
        <p className="role">{props.role}</p>
        <h1>{props.name}</h1>
        <p className="description">{props.description}</p>
        <button type="button" className="contact-button">Say hello</button>
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
      <p className="caption">The card gets its details from props.</p>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
