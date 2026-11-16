import React from 'react';
import '../styles/BackgroundEffects.css';

export default function BackgroundEffects() {
  return (
    <div className="bg-effects-container" aria-hidden="true">
      {/* Dynamic Gradient Glow Orbs */}
      <div className="glow-orb glow-orb-1"></div>
      <div className="glow-orb glow-orb-2"></div>
      <div className="glow-orb glow-orb-3"></div>

      {/* Cyber Grid Lines */}
      <div className="cyber-grid"></div>

      {/* Subtle Star / Dust Field */}
      <div className="stars-field"></div>
    </div>
  );
}
