import React from 'react';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { WORKSHOP_DETAILS } from '@/data/workshop';

export default function StaticMap() {
  return (
    <div
      style={{
        backgroundColor: '#171A1D',
        borderRadius: '14px',
        overflow: 'hidden',
        border: '1px solid rgba(185, 191, 194, 0.2)',
        boxShadow: 'var(--shadow-dark-card)',
        width: '100%',
        maxWidth: '100%',
      }}
    >
      {/* Precision Engineered Vector Map Art */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '320px',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 800 320"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '100%', height: '100%', display: 'block' }}
        >
          <rect width="800" height="320" fill="#14171A" />
          
          {/* Subtle coordinate grid lines */}
          <line x1="0" y1="60" x2="800" y2="60" stroke="#24292E" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="0" y1="120" x2="800" y2="120" stroke="#24292E" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="0" y1="180" x2="800" y2="180" stroke="#24292E" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="0" y1="240" x2="800" y2="240" stroke="#24292E" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="160" y1="0" x2="160" y2="320" stroke="#24292E" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="320" y1="0" x2="320" y2="320" stroke="#24292E" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="480" y1="0" x2="480" y2="320" stroke="#24292E" strokeWidth="1" strokeDasharray="4 8" />
          <line x1="640" y1="0" x2="640" y2="320" stroke="#24292E" strokeWidth="1" strokeDasharray="4 8" />

          {/* Industrial Park Zones */}
          <polygon points="120,30 360,30 380,140 140,140" fill="#1B1F23" />
          <polygon points="460,50 740,50 720,170 440,170" fill="#1B1F23" />
          <polygon points="180,200 480,200 460,300 160,300" fill="#1B1F23" />
          <polygon points="520,210 780,210 760,310 500,310" fill="#1B1F23" />

          {/* Arterial Dual Carriageway Highway */}
          <path d="M -20,160 C 200,160 280,190 400,190 C 560,190 680,110 820,110" stroke="#2F363C" strokeWidth="26" fill="none" strokeLinecap="round" />
          <path d="M -20,160 C 200,160 280,190 400,190 C 560,190 680,110 820,110" stroke="#E66A35" strokeWidth="2" strokeDasharray="10 12" fill="none" opacity="0.8" />

          {/* Secondary Access Roads */}
          <path d="M 400,0 L 400,320" stroke="#353B40" strokeWidth="14" fill="none" />
          <path d="M 140,140 L 400,190" stroke="#2A2F34" strokeWidth="10" fill="none" />
          <path d="M 400,190 L 640,270" stroke="#2A2F34" strokeWidth="10" fill="none" />

          {/* Precision Way & Autocare Boulevard */}
          <path d="M 400,120 L 520,120 L 520,190" stroke="#E66A35" strokeWidth="3" fill="none" opacity="0.6" />

          {/* Workshop Building Footprint */}
          <rect x="420" y="85" width="85" height="55" rx="6" fill="#2A3036" stroke="#E66A35" strokeWidth="2" />
          <text x="430" y="115" fill="#E66A35" fontSize="10" fontWeight="bold" fontFamily="sans-serif">TREADCRAFT</text>
          <text x="442" y="128" fill="#B9BFC2" fontSize="7" fontFamily="sans-serif">BAY 1 - 6</text>

          {/* Pulse Target Rings at Workshop Location */}
          <circle cx="462" cy="112" r="24" stroke="#E66A35" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.5" />
          <circle cx="462" cy="112" r="40" stroke="#E66A35" strokeWidth="1" strokeDasharray="4 6" opacity="0.25" />
          <circle cx="462" cy="112" r="6" fill="#E66A35" />
        </svg>
      </div>

      {/* Info Bar Cleanly Positioned Below Map */}
      <div
        style={{
          padding: '1.25rem 1.75rem',
          backgroundColor: '#1E2227',
          borderTop: '1px solid rgba(185, 191, 194, 0.15)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}
      >
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '0.25rem' }}>
            <MapPin size={18} color="var(--racing-orange)" />
            <h4 style={{ fontSize: '1.05rem', color: '#FFFFFF', margin: 0 }}>
              {WORKSHOP_DETAILS.name}
            </h4>
          </div>
          <p style={{ fontSize: '0.86rem', color: '#B9BFC2', margin: 0 }}>
            {WORKSHOP_DETAILS.address}, {WORKSHOP_DETAILS.postalCode}
          </p>
        </div>

        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a
            href={WORKSHOP_DETAILS.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-sm"
          >
            <Navigation size={14} />
            <span>Open in Google Maps</span>
            <ExternalLink size={12} />
          </a>
        </div>
      </div>
    </div>
  );
}
