import React from 'react';
import { Compass, RotateCw, AlertTriangle, Check, Shield } from 'lucide-react';

export default function AlignmentVsBalancing() {
  const comparisonItems = [
    {
      feature: 'Primary Objective',
      alignment: 'Adjusts the directional suspension angles so all 4 wheels travel completely parallel.',
      balancing: 'Equalizes centrifugal weight distribution around the tyre and rim circumference.',
    },
    {
      feature: 'Common Symptom When Faulty',
      alignment: 'Car pulls to one side, off-centre steering wheel, rapid inner/outer edge tyre scrub.',
      balancing: 'Steering wheel vibration or seat shudder occurring at specific highway speeds (80–120 km/h).',
    },
    {
      feature: 'Component Adjusted',
      alignment: 'Tie rods, control arms, camber eccentric bolts, subframe positioning.',
      balancing: 'Precision adhesive coated zinc counterweights attached to inner alloy rim barrel.',
    },
    {
      feature: 'Technology & Tooling',
      alignment: 'Hunter Hawkeye 3D multi-camera laser optical telemetry rig.',
      balancing: 'Hunter Road Force HD diagnostic load-roller simulating 600kg road pressure.',
    },
    {
      feature: 'Recommended Check Frequency',
      alignment: 'Every 10,000 km, after hard pothole/curb impact, or when fitting new tyres.',
      balancing: 'With every new tyre installation, tyre rotation, or when highway shudder develops.',
    },
  ];

  return (
    <div
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: '12px',
        border: '1px solid var(--border-light)',
        boxShadow: 'var(--shadow-card)',
        overflow: 'hidden',
      }}
    >
      {/* Comparison Header Cards */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
          backgroundColor: '#171A1D',
          color: '#FFFFFF',
          borderBottom: '1px solid rgba(185, 191, 194, 0.2)',
        }}
      >
        {/* Alignment Header */}
        <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1.25rem, 3vw, 1.75rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div
              style={{
                backgroundColor: 'rgba(230, 106, 53, 0.2)',
                borderRadius: '8px',
                padding: '0.5rem',
                display: 'flex',
                flexShrink: 0,
              }}
            >
              <Compass size={24} color="var(--racing-orange)" />
            </div>
            <div>
              <span className="eyebrow" style={{ margin: 0, fontSize: '0.7rem' }}>Geometric Telemetry</span>
              <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', margin: 0 }}>Wheel Alignment</h3>
            </div>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#B9BFC2', margin: 0, lineHeight: 1.5 }}>
            Targets vehicle tracking angles (Camber, Caster, Toe) relative to chassis thrust angle.
          </p>
        </div>

        {/* Balancing Header */}
        <div style={{ padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1.25rem, 3vw, 1.75rem)', borderTop: '1px solid rgba(185, 191, 194, 0.15)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem' }}>
            <div
              style={{
                backgroundColor: 'rgba(230, 106, 53, 0.2)',
                borderRadius: '8px',
                padding: '0.5rem',
                display: 'flex',
                flexShrink: 0,
              }}
            >
              <RotateCw size={24} color="var(--racing-orange)" />
            </div>
            <div>
              <span className="eyebrow" style={{ margin: 0, fontSize: '0.7rem' }}>Centrifugal Harmony</span>
              <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', margin: 0 }}>Wheel Balancing</h3>
            </div>
          </div>
          <p style={{ fontSize: '0.88rem', color: '#B9BFC2', margin: 0, lineHeight: 1.5 }}>
            Targets rotational mass uniformity to eliminate centrifugal wobbles and premature bearing wear.
          </p>
        </div>
      </div>

      {/* Comparison Rows */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {comparisonItems.map((row, idx) => (
          <div
            key={idx}
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              borderBottom: idx === comparisonItems.length - 1 ? 'none' : '1px solid var(--border-light)',
              backgroundColor: idx % 2 === 0 ? '#FFFFFF' : 'var(--warm-ivory)',
            }}
          >
            {/* Feature Label */}
            <div
              style={{
                gridColumn: '1 / -1',
                padding: '0.85rem clamp(1rem, 3vw, 1.75rem) 0',
                fontFamily: 'var(--font-display)',
                fontSize: '0.76rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                color: 'var(--racing-orange)',
              }}
            >
              {row.feature}
            </div>

            {/* Alignment Col */}
            <div style={{ padding: '0.5rem clamp(1rem, 3vw, 1.75rem) 1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Check size={16} color="var(--racing-orange)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--carbon-black)', lineHeight: 1.55 }}>
                  {row.alignment}
                </span>
              </div>
            </div>

            {/* Balancing Col */}
            <div style={{ padding: '0.5rem clamp(1rem, 3vw, 1.75rem) 1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
                <Check size={16} color="var(--carbon-black)" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span style={{ fontSize: '0.9rem', color: 'var(--carbon-black)', lineHeight: 1.55 }}>
                  {row.balancing}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
