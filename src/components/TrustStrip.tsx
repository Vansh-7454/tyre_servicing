import React from 'react';
import { Target, ShieldCheck, Zap, Gauge } from 'lucide-react';

export default function TrustStrip() {
  const pillars = [
    {
      icon: Target,
      stat: '±0.01° Laser Accuracy',
      title: 'Hunter 3D Telemetry',
      desc: 'Optical camera measurement restoring factory steering geometry.',
    },
    {
      icon: ShieldCheck,
      stat: '100% Touchless Rim Safe',
      title: 'Zero Alloy Scratches',
      desc: 'Corghi Artiglio robotic heads eliminate metal-on-wheel contact.',
    },
    {
      icon: Zap,
      stat: '45-Min Express Turnaround',
      title: 'Precision Without Delay',
      desc: 'Pre-calibrated bays and executive lounge work facilities.',
    },
    {
      icon: Gauge,
      stat: '32-Point Digital Audit',
      title: 'Transparent Diagnostics',
      desc: 'Detailed laser tread depth profiling and TPMS sensor reports.',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#1E2327',
        color: '#FFFFFF',
        borderTop: '1px solid rgba(185, 191, 194, 0.12)',
        borderBottom: '1px solid rgba(185, 191, 194, 0.12)',
        padding: '2.5rem 0',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 240px), 1fr))',
            gap: '2rem 1.5rem',
            width: '100%',
          }}
        >
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1rem',
                  padding: '0.5rem',
                }}
              >
                <div
                  style={{
                    backgroundColor: 'rgba(230, 106, 53, 0.12)',
                    border: '1px solid rgba(230, 106, 53, 0.3)',
                    borderRadius: '8px',
                    padding: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon size={24} color="var(--racing-orange)" />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#FFFFFF',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {item.stat}
                  </span>
                  <span
                    style={{
                      fontSize: '0.8rem',
                      color: 'var(--racing-orange)',
                      fontWeight: 600,
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {item.title}
                  </span>
                  <p
                    style={{
                      fontSize: '0.84rem',
                      color: '#9BA3A8',
                      lineHeight: 1.45,
                      margin: 0,
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
