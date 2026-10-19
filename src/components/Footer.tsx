import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { NAV_ITEMS, BRAND_INFO } from '@/data/navigation';
import { MapPin, Phone, Mail, Clock, ShieldCheck, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer
      style={{
        backgroundColor: '#111315',
        color: '#B9BFC2',
        borderTop: '1px solid rgba(185, 191, 194, 0.15)',
        position: 'relative',
        zIndex: 10,
      }}
    >
      {/* Upper Footer Grid */}
      <div
        className="container"
        style={{
          paddingTop: 'clamp(3.5rem, 6vw, 5.5rem)',
          paddingBottom: 'clamp(2.5rem, 4vw, 4rem)',
        }}
      >
        <div className="grid-cards-4" style={{ gap: '3rem 2rem' }}>
          {/* Brand Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            <Logo variant="footer" theme="dark" />
            <p style={{ fontSize: '0.92rem', color: '#9BA3A8', lineHeight: 1.65, maxWidth: '320px' }}>
              Specialist automotive wheel care, 3D laser telemetry alignment, and touchless tyre fitting designed for road safety and driving comfort.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginTop: '0.5rem' }}>
              <ShieldCheck size={18} color="var(--racing-orange)" />
              <span style={{ fontSize: '0.82rem', color: '#E8E2D5', fontWeight: 500 }}>
                BS AU 159 Compliant Tyre Safety Standard
              </span>
            </div>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.92rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
              }}
            >
              Navigation
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    style={{
                      fontSize: '0.9rem',
                      color: '#9BA3A8',
                      transition: 'color 150ms ease',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                    className="footer-link"
                  >
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.92rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
              }}
            >
              Specialist Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <li>
                <Link href="/services#fitting" className="footer-link" style={{ fontSize: '0.9rem', color: '#9BA3A8' }}>
                  Touchless Tyre Fitting
                </Link>
              </li>
              <li>
                <Link href="/wheel-alignment-balancing" className="footer-link" style={{ fontSize: '0.9rem', color: '#9BA3A8' }}>
                  3D Laser Wheel Alignment
                </Link>
              </li>
              <li>
                <Link href="/wheel-alignment-balancing" className="footer-link" style={{ fontSize: '0.9rem', color: '#9BA3A8' }}>
                  Road-Force Wheel Balancing
                </Link>
              </li>
              <li>
                <Link href="/services#puncture" className="footer-link" style={{ fontSize: '0.9rem', color: '#9BA3A8' }}>
                  Safety Puncture Repair
                </Link>
              </li>
              <li>
                <Link href="/tyres" className="footer-link" style={{ fontSize: '0.9rem', color: '#9BA3A8' }}>
                  EV Acoustic Silent Tyres
                </Link>
              </li>
              <li>
                <Link href="/services#inspection" className="footer-link" style={{ fontSize: '0.9rem', color: '#9BA3A8' }}>
                  32-Point Digital Tread Audit
                </Link>
              </li>
            </ul>
          </div>

          {/* Workshop Contact & Hours */}
          <div>
            <h4
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.92rem',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
              }}
            >
              Flagship Workshop
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.95rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <MapPin size={17} color="var(--racing-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <span>{BRAND_INFO.address}</span>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Phone size={17} color="var(--racing-orange)" style={{ flexShrink: 0 }} />
                <a href={`tel:${BRAND_INFO.phoneTel}`} style={{ color: '#FFFFFF', fontWeight: 600 }}>
                  {BRAND_INFO.phoneDisplay}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Mail size={17} color="var(--racing-orange)" style={{ flexShrink: 0 }} />
                <a href={`mailto:${BRAND_INFO.email}`} style={{ color: '#9BA3A8' }}>
                  {BRAND_INFO.email}
                </a>
              </div>
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                <Clock size={17} color="var(--racing-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
                  <span>Mon – Fri: 08:00 – 18:30</span>
                  <span>Saturday: 08:30 – 16:30</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Legal & Static Demo Disclaimer Banner */}
      <div
        style={{
          borderTop: '1px solid rgba(185, 191, 194, 0.1)',
          backgroundColor: '#0D0E10',
          padding: '1.5rem 0',
          fontSize: '0.8rem',
          color: '#7E878C',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
            <span>
              &copy; {currentYear} {BRAND_INFO.name}. All rights reserved. “Precision on Every Mile.”
            </span>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="/about" style={{ color: '#7E878C' }}>Brand Philosophy</Link>
              <Link href="/locations" style={{ color: '#7E878C' }}>Workshop Facilities</Link>
              <Link href="/contact" style={{ color: '#7E878C' }}>Book Consultation</Link>
            </div>
          </div>
          <p style={{ margin: 0, fontSize: '0.75rem', color: '#626B70', lineHeight: 1.5 }}>
            <strong>Demo Concept Notice:</strong> TreadCraft Auto Care is a static frontend website showcasing high-end automotive tyre care branding, typography, and responsive Next.js design. Contact and booking submissions trigger a prefilled WhatsApp or client demo acknowledgement without backend database persistence.
          </p>
        </div>
      </div>
    </footer>
  );
}
