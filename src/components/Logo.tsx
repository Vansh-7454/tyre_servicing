import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'header' | 'footer' | 'compact' | 'mark-only';
  theme?: 'dark' | 'light';
  className?: string;
}

export default function Logo({ variant = 'header', theme = 'light', className = '' }: LogoProps) {
  const isDark = theme === 'dark';
  
  // Primary brand colours
  const orange = '#E66A35';
  const primaryText = isDark ? '#FFFFFF' : '#171A1D';
  const subtitleColor = isDark ? '#B9BFC2' : '#586066';
  const rimColor = isDark ? '#B9BFC2' : '#353B40';

  // Precision Tyre Tread Emblem SVG
  const TreadEmblem = ({ size = 36 }: { size?: number }) => (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ flexShrink: 0 }}
      aria-label="TreadCraft Emblem"
    >
      {/* Outer Tyre Rim & Tread Grooves */}
      <circle cx="24" cy="24" r="21" stroke={rimColor} strokeWidth="3" opacity="0.9" />
      <circle cx="24" cy="24" r="14" stroke={rimColor} strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
      
      {/* Directional Tread Blocks (Precision Geometric Cuts) */}
      <path d="M24 3 L24 8" stroke={orange} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M24 40 L24 45" stroke={orange} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M3 24 L8 24" stroke={orange} strokeWidth="3.5" strokeLinecap="round" />
      <path d="M40 24 L45 24" stroke={orange} strokeWidth="3.5" strokeLinecap="round" />
      
      {/* Angled Tread Sipes (45-degree racing grooves) */}
      <path d="M9 9 L13 13" stroke={orange} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M35 35 L39 39" stroke={orange} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M39 9 L35 13" stroke={orange} strokeWidth="2.5" strokeLinecap="round" />
      <path d="M9 39 L13 35" stroke={orange} strokeWidth="2.5" strokeLinecap="round" />

      {/* Central Precision Hub */}
      <circle cx="24" cy="24" r="5" fill={orange} />
      <circle cx="24" cy="24" r="2" fill={isDark ? '#171A1D' : '#FFFFFF'} />
    </svg>
  );

  if (variant === 'mark-only') {
    return (
      <Link href="/" className={`inline-flex items-center ${className}`} aria-label="TreadCraft Home">
        <TreadEmblem size={40} />
      </Link>
    );
  }

  if (variant === 'compact') {
    return (
      <Link href="/" className={`inline-flex items-center gap-2.5 ${className}`} aria-label="TreadCraft Home">
        <TreadEmblem size={32} />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: '1.05rem',
              letterSpacing: '0.04em',
              color: primaryText,
              lineHeight: 1,
            }}
          >
            TREAD<span style={{ color: orange }}>CRAFT</span>
          </span>
          <span
            style={{
              fontFamily: 'var(--font-body)',
              fontWeight: 600,
              fontSize: '0.62rem',
              letterSpacing: '0.18em',
              color: subtitleColor,
              marginTop: '2px',
              textTransform: 'uppercase',
            }}
          >
            Auto Care
          </span>
        </div>
      </Link>
    );
  }

  if (variant === 'footer') {
    return (
      <div className={className} style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
        <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.85rem' }} aria-label="TreadCraft Home">
          <TreadEmblem size={42} />
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.45rem',
                letterSpacing: '0.05em',
                color: '#FFFFFF',
                lineHeight: 1,
              }}
            >
              TREAD<span style={{ color: orange }}>CRAFT</span>
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontWeight: 600,
                fontSize: '0.72rem',
                letterSpacing: '0.24em',
                color: '#B9BFC2',
                marginTop: '4px',
                textTransform: 'uppercase',
              }}
            >
              Auto Care
            </span>
          </div>
        </Link>
        <p style={{ fontSize: '0.88rem', color: '#9BA3A8', margin: 0, fontStyle: 'italic', letterSpacing: '0.02em' }}>
          “Precision on Every Mile.”
        </p>
      </div>
    );
  }

  // Default: Main Header Logo
  return (
    <Link
      href="/"
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.85rem',
        textDecoration: 'none',
      }}
      aria-label="TreadCraft Auto Care Home"
    >
      <TreadEmblem size={38} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: '1.3rem',
            letterSpacing: '0.04em',
            color: primaryText,
            lineHeight: 1,
          }}
        >
          TREAD<span style={{ color: orange }}>CRAFT</span>
        </span>
        <span
          style={{
            fontFamily: 'var(--font-body)',
            fontWeight: 600,
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            color: subtitleColor,
            marginTop: '3px',
            textTransform: 'uppercase',
          }}
        >
          Auto Care
        </span>
      </div>
    </Link>
  );
}
