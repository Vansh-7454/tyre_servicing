'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import { NAV_ITEMS, BRAND_INFO } from '@/data/navigation';
import { Phone, Calendar, Menu, X, ChevronRight, Clock } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <>
      {/* Top Advisory Strip - Fully Responsive */}
      <div
        style={{
          backgroundColor: '#111315',
          color: '#B9BFC2',
          fontSize: '0.78rem',
          padding: '0.45rem 1rem',
          borderBottom: '1px solid rgba(185, 191, 194, 0.1)',
          width: '100%',
          maxWidth: '100%',
          overflow: 'hidden',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          {/* Left Live Status */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            <span
              style={{
                display: 'inline-block',
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: '#10B981',
                boxShadow: '0 0 8px #10B981',
                flexShrink: 0,
              }}
            />
            <span style={{ fontSize: '0.76rem', color: '#D1D5DB' }}>
              <span className="top-banner-full">Workshop Open Today: 08:00 – 18:30 | 3D Laser Alignment Bays Active</span>
              <span className="top-banner-short">Open Today: 08:00 – 18:30</span>
            </span>
          </div>

          {/* Right Direct Phone Call */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
            <span className="express-badge" style={{ alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', color: '#9CA3AF' }}>
              <Clock size={12} color="#E66A35" />
              <span>Express 45-Min Service</span>
            </span>
            <a
              href={`tel:${BRAND_INFO.phoneTel}`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.35rem',
                color: '#FFFFFF',
                fontWeight: 600,
                fontSize: '0.78rem',
                whiteSpace: 'nowrap',
              }}
              aria-label={`Call ${BRAND_INFO.phoneDisplay}`}
            >
              <Phone size={12} color="#E66A35" />
              <span>{BRAND_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 100,
          backgroundColor: scrolled ? 'rgba(23, 26, 29, 0.98)' : 'var(--carbon-black)',
          backdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(185, 191, 194, 0.14)',
          transition: 'all 200ms ease',
          width: '100%',
          maxWidth: '100%',
        }}
      >
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '76px',
            gap: '1rem',
          }}
        >
          {/* Brand Logo */}
          <div style={{ flexShrink: 0 }}>
            <Logo theme="dark" variant="header" />
          </div>

          {/* Desktop Navigation Links */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(0.85rem, 1.5vw, 1.85rem)',
              whiteSpace: 'nowrap',
            }}
            className="desktop-nav"
            aria-label="Main Navigation"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    position: 'relative',
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(0.84rem, 0.96vw, 0.92rem)',
                    fontWeight: isActive ? 600 : 500,
                    color: isActive ? '#FFFFFF' : '#B9BFC2',
                    padding: '0.4rem 0',
                    transition: 'color 150ms ease',
                    letterSpacing: '0.01em',
                    whiteSpace: 'nowrap',
                  }}
                  className="nav-link-item"
                >
                  {item.label}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: '-4px',
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'var(--racing-orange)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Header Action & Mobile Menu Toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', flexShrink: 0 }}>
            <Link
              href="/contact"
              className="btn btn-primary btn-sm desktop-cta"
              style={{
                borderRadius: '4px',
                padding: '0.65rem 1.25rem',
                fontSize: '0.86rem',
              }}
            >
              <Calendar size={14} />
              <span>Book a Service</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-toggle"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
              style={{
                display: 'none',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#FFFFFF',
                width: '42px',
                height: '42px',
                borderRadius: '6px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(185, 191, 194, 0.25)',
                cursor: 'pointer',
              }}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            top: '76px',
            backgroundColor: 'rgba(17, 19, 21, 0.98)',
            backdropFilter: 'blur(20px)',
            zIndex: 99,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '1.75rem 1.25rem 2.5rem 1.25rem',
            overflowY: 'auto',
          }}
          className="mobile-drawer"
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <span className="eyebrow" style={{ color: 'var(--racing-orange)', marginBottom: '0.25rem' }}>
              Precision Tyre & Wheel Care
            </span>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '0.95rem 1.2rem',
                      borderRadius: '8px',
                      backgroundColor: isActive ? 'rgba(230, 106, 53, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                      color: isActive ? '#FFFFFF' : '#D1D5DB',
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.1rem',
                      fontWeight: isActive ? 700 : 500,
                      border: isActive ? '1px solid rgba(230, 106, 53, 0.5)' : '1px solid rgba(255, 255, 255, 0.06)',
                      transition: 'all 150ms ease',
                    }}
                  >
                    <span>{item.label}</span>
                    <ChevronRight size={18} color={isActive ? 'var(--racing-orange)' : '#9CA3AF'} />
                  </Link>
                );
              })}
            </div>
          </div>

          <div
            style={{
              paddingTop: '1.75rem',
              borderTop: '1px solid rgba(185, 191, 194, 0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.85rem',
              marginTop: '1.5rem',
            }}
          >
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '0.95rem' }}
            >
              <Calendar size={18} />
              <span>Book Service Online</span>
            </Link>

            <a
              href={`tel:${BRAND_INFO.phoneTel}`}
              className="btn btn-secondary-light"
              style={{ width: '100%', justifyContent: 'center', padding: '0.95rem' }}
            >
              <Phone size={18} color="var(--racing-orange)" />
              <span>Call Workshop: {BRAND_INFO.phoneDisplay}</span>
            </a>

            <div style={{ textAlign: 'center', fontSize: '0.75rem', color: '#7E878C', marginTop: '0.5rem' }}>
              Mon – Fri 08:00 – 18:30 | Sat 08:30 – 16:30
            </div>
          </div>
        </div>
      )}
    </>
  );
}
