import React from 'react';
import Link from 'next/link';
import { Calendar, PhoneCall, ArrowRight, ShieldCheck } from 'lucide-react';
import { BRAND_INFO } from '@/data/navigation';

interface BookingCtaBannerProps {
  title?: string;
  subtitle?: string;
}

export default function BookingCtaBanner({
  title = 'Ready for Superior Grip and Laser Alignment?',
  subtitle = 'Experience our touchless mounting technology and millimetre-accurate 3D laser chassis alignment. Book your slot online in under 60 seconds.',
}: BookingCtaBannerProps) {
  return (
    <div
      style={{
        backgroundColor: '#171A1D',
        color: '#FFFFFF',
        borderRadius: '14px',
        border: '1px solid rgba(185, 191, 194, 0.18)',
        boxShadow: 'var(--shadow-dark-card)',
        padding: 'clamp(2rem, 5vw, 4rem) clamp(1.15rem, 4vw, 3.5rem)',
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
      }}
      className="bg-grid-pattern"
    >
      {/* Decorative Orange Glow Accent */}
      <div
        style={{
          position: 'absolute',
          top: '-40%',
          right: '-10%',
          width: '450px',
          height: '450px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(230, 106, 53, 0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          maxWidth: '780px',
          margin: '0 auto',
        }}
      >
        <span className="eyebrow" style={{ justifyContent: 'center' }}>
          Precision Automotive Care
        </span>

        <h2
          style={{
            fontSize: 'clamp(2rem, 3.5vw, 2.75rem)',
            color: '#FFFFFF',
            lineHeight: 1.2,
            marginBottom: '1rem',
          }}
        >
          {title}
        </h2>

        <p
          style={{
            color: '#B9BFC2',
            fontSize: '1.05rem',
            lineHeight: 1.65,
            marginBottom: '2.25rem',
          }}
        >
          {subtitle}
        </p>

        {/* Action Buttons */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            width: '100%',
          }}
        >
          <Link href="/contact" className="btn btn-primary btn-lg">
            <Calendar size={18} />
            <span>Book Service Appointment</span>
            <ArrowRight size={18} />
          </Link>

          <a
            href={`tel:${BRAND_INFO.phoneTel}`}
            className="btn btn-secondary-light btn-lg"
          >
            <PhoneCall size={18} color="var(--racing-orange)" />
            <span>Call Workshop ({BRAND_INFO.phoneDisplay})</span>
          </a>
        </div>

        {/* Security / Quality guarantee note */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0.5rem',
            marginTop: '1.75rem',
            fontSize: '0.82rem',
            color: '#9BA3A8',
            textAlign: 'center',
          }}
        >
          <ShieldCheck size={16} color="var(--racing-orange)" style={{ flexShrink: 0 }} />
          <span>Zero-scratch alloy rim guarantee & BS AU 159 certified fitting</span>
        </div>
      </div>
    </div>
  );
}
