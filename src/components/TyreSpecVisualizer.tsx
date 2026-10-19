'use client';

import React, { useState } from 'react';
import { TYRE_SPEC_GUIDE } from '@/data/tyres';
import { Info, HelpCircle } from 'lucide-react';

export default function TyreSpecVisualizer() {
  const [selectedPart, setSelectedPart] = useState<string>('225');

  const currentSpec = TYRE_SPEC_GUIDE.find((s) => s.part === selectedPart) || TYRE_SPEC_GUIDE[0];

  return (
    <div
      style={{
        backgroundColor: '#1E2327',
        color: '#FFFFFF',
        borderRadius: '12px',
        border: '1px solid rgba(185, 191, 194, 0.2)',
        padding: 'clamp(1.5rem, 3.5vw, 2.5rem)',
        boxShadow: 'var(--shadow-dark-card)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1rem' }}>
        <HelpCircle size={20} color="var(--racing-orange)" />
        <h3 style={{ fontSize: '1.35rem', color: '#FFFFFF', margin: 0 }}>
          Decoding Your Tyre Sidewall Markings
        </h3>
      </div>
      
      <p style={{ color: '#B9BFC2', fontSize: '0.92rem', marginBottom: '2rem' }}>
        Click any segment of the sample tyre code below to understand its precise engineering dimension:
      </p>

      {/* Interactive Size Segment Buttons */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.5rem',
          backgroundColor: '#171A1D',
          padding: '1.25rem',
          borderRadius: '8px',
          border: '1px solid rgba(185, 191, 194, 0.15)',
          marginBottom: '2rem',
          justifyContent: 'center',
        }}
      >
        {TYRE_SPEC_GUIDE.map((spec) => {
          const isSelected = spec.part === selectedPart;
          return (
            <button
              key={spec.part}
              onClick={() => setSelectedPart(spec.part)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '0.6rem 1rem',
                borderRadius: '6px',
                backgroundColor: isSelected ? 'var(--racing-orange)' : 'rgba(255, 255, 255, 0.05)',
                color: isSelected ? '#FFFFFF' : '#B9BFC2',
                border: isSelected ? '1px solid var(--racing-orange)' : '1px solid rgba(185, 191, 194, 0.1)',
                cursor: 'pointer',
                transition: 'all 150ms ease',
                transform: isSelected ? 'scale(1.05)' : 'none',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  lineHeight: 1,
                }}
              >
                {spec.part}
              </span>
              <span
                style={{
                  fontSize: '0.68rem',
                  color: isSelected ? '#FFFFFF' : '#7E878C',
                  marginTop: '4px',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                }}
              >
                {spec.name.split(' ')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Spec Explanation Card */}
      <div
        style={{
          backgroundColor: 'rgba(230, 106, 53, 0.08)',
          border: '1px solid rgba(230, 106, 53, 0.3)',
          borderRadius: '8px',
          padding: '1.5rem',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '1rem',
        }}
      >
        <Info size={24} color="var(--racing-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
        <div>
          <h4
            style={{
              color: '#FFFFFF',
              fontFamily: 'var(--font-display)',
              fontSize: '1.15rem',
              marginBottom: '0.35rem',
            }}
          >
            {currentSpec.part} — {currentSpec.name}
          </h4>
          <p style={{ color: '#E8E2D5', fontSize: '0.94rem', margin: 0, lineHeight: 1.6 }}>
            {currentSpec.description}
          </p>
        </div>
      </div>
    </div>
  );
}
