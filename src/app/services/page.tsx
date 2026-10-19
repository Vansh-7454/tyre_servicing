import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import SectionHeader from '@/components/SectionHeader';
import Breadcrumbs from '@/components/Breadcrumbs';
import BookingCtaBanner from '@/components/BookingCtaBanner';
import { SERVICES_DATA } from '@/data/services';
import {
  Clock,
  Shield,
  CheckCircle2,
  ArrowRight,
  Wrench,
  ShieldCheck,
  Zap,
  Layers,
  Award,
  Calendar,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Our Tyre & Wheel Services',
  description:
    'Comprehensive automotive tyre and wheel servicing: Touchless tyre fitting, 3D laser alignment, road-force balancing, BS AU 159 puncture repair, and digital tread inspections.',
};

export default function ServicesPage() {
  const featured = SERVICES_DATA.slice(0, 3);
  const secondary = SERVICES_DATA.slice(3);

  return (
    <>
      {/* Page Hero Header */}
      <section
        style={{
          backgroundColor: 'var(--carbon-black)',
          color: '#FFFFFF',
          paddingTop: 'clamp(3rem, 5vw, 5rem)',
          paddingBottom: 'clamp(3.5rem, 5.5vw, 5rem)',
          position: 'relative',
        }}
        className="bg-grid-pattern"
      >
        <div className="container">
          <Breadcrumbs items={[{ label: 'Services' }]} theme="dark" />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow" style={{ color: 'var(--racing-orange)' }}>
              Comprehensive Wheel Engineering
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                lineHeight: 1.12,
              }}
            >
              Precision Tyre & Chassis Services
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#B9BFC2',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Every wheel and chassis procedure is executed with robotic touchless mounting arms, 3D laser telemetry, and calibrated road-force diagnostic rollers to ensure zero alloy damage and optimal vehicle dynamics.
            </p>
          </div>

          {/* Quick Anchor Navigation Strip */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.65rem',
              marginTop: '2.5rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid rgba(185, 191, 194, 0.15)',
            }}
          >
            {SERVICES_DATA.map((srv) => (
              <a
                key={srv.id}
                href={`#${srv.id}`}
                style={{
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-display)',
                  fontWeight: 600,
                  color: '#FFFFFF',
                  backgroundColor: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(185, 191, 194, 0.15)',
                  padding: '6px 14px',
                  borderRadius: '9999px',
                  transition: 'all 150ms ease',
                }}
              >
                {srv.title.split(' ')[0]} {srv.title.split(' ')[1]}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services — Deep-Dive Editorial Alternating Rows */}
      <section className="section section-light">
        <div className="container">
          <SectionHeader
            eyebrow="Flagship Disciplines"
            title="Core Specialized Capabilities"
            description="Our primary workshop services feature industry-leading diagnostic and mounting equipment."
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(3rem, 6vw, 5rem)' }}>
            {featured.map((service, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={service.id}
                  id={service.id}
                  style={{
                    gap: 'clamp(1.5rem, 5vw, 4rem)',
                    alignItems: 'center',
                    backgroundColor: '#FFFFFF',
                    borderRadius: '14px',
                    border: '1px solid var(--border-light)',
                    boxShadow: 'var(--shadow-card)',
                    overflow: 'hidden',
                    direction: isEven ? 'rtl' : 'ltr',
                  }}
                  className="grid-cards-2"
                >
                  {/* Photo Column */}
                  <div
                    style={{
                      position: 'relative',
                      width: '100%',
                      height: 'clamp(280px, 35vw, 440px)',
                      direction: 'ltr',
                    }}
                  >
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      style={{ objectFit: 'cover' }}
                    />
                  </div>

                  {/* Text Column */}
                  <div
                    style={{
                      padding: 'clamp(1.75rem, 4vw, 3rem)',
                      display: 'flex',
                      flexDirection: 'column',
                      direction: 'ltr',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <span
                        style={{
                          fontSize: '0.78rem',
                          color: 'var(--racing-orange)',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          letterSpacing: '0.08em',
                        }}
                      >
                        Service 0{idx + 1}
                      </span>
                      <span style={{ color: '#B9BFC2' }}>•</span>
                      <span
                        style={{
                          backgroundColor: 'var(--warm-ivory)',
                          color: 'var(--carbon-black)',
                          padding: '2px 8px',
                          borderRadius: '4px',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          border: '1px solid var(--border-light)',
                        }}
                      >
                        {service.category}
                      </span>
                      <span style={{ color: '#B9BFC2' }}>•</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: '#586066' }}>
                        <Clock size={13} color="var(--racing-orange)" />
                        <span>{service.estimatedDuration}</span>
                      </div>
                    </div>

                    <h2 style={{ fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: 'var(--carbon-black)', marginBottom: '1rem', lineHeight: 1.25 }}>
                      {service.title}
                    </h2>

                    <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.68, marginBottom: '1.5rem' }}>
                      {service.fullDescription}
                    </p>

                    {/* Key Benefits List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', marginBottom: '1.75rem' }}>
                      {service.keyBenefits.map((benefit, bIdx) => (
                        <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.88rem', color: '#353B40' }}>
                          <CheckCircle2 size={16} color="var(--racing-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                          <span>{benefit}</span>
                        </div>
                      ))}
                    </div>

                    {/* Technical Equipment Badge */}
                    <div
                      style={{
                        backgroundColor: 'var(--warm-ivory)',
                        padding: '0.75rem 1rem',
                        borderRadius: '6px',
                        border: '1px solid var(--border-light)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.65rem',
                        fontSize: '0.82rem',
                        color: 'var(--carbon-black)',
                        marginBottom: '1.75rem',
                      }}
                    >
                      <Wrench size={16} color="var(--racing-orange)" />
                      <span><strong>Equipment:</strong> {service.equipmentUsed}</span>
                    </div>

                    {/* Action Row */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                      <Link
                        href={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="btn btn-primary"
                      >
                        <span>Book This Service</span>
                        <ArrowRight size={15} />
                      </Link>

                      {service.id === 'alignment' && (
                        <Link href="/wheel-alignment-balancing" className="btn btn-secondary">
                          <span>Alignment Deep Dive</span>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Secondary Services — Structured Technical Cards Grid */}
      <section className="section section-graphite">
        <div className="container">
          <SectionHeader
            eyebrow="Routine & Preventative Care"
            title="Additional Wheel & Tyre Disciplines"
            description="Comprehensive tyre rotations, digital health scans, and alloy rim restoration protocols."
            theme="dark"
          />

          <div className="grid-cards-3">
            {secondary.map((service) => (
              <div
                key={service.id}
                id={service.id}
                className="card-dark"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '2rem 1.75rem',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span
                      style={{
                        fontSize: '0.72rem',
                        textTransform: 'uppercase',
                        color: 'var(--racing-orange)',
                        fontWeight: 700,
                        letterSpacing: '0.08em',
                      }}
                    >
                      {service.category}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.76rem', color: '#9BA3A8' }}>
                      <Clock size={12} color="var(--racing-orange)" />
                      <span>{service.estimatedDuration}</span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                    {service.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: '#B9BFC2', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                    {service.shortDescription}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {service.keyBenefits.slice(0, 2).map((b, bIdx) => (
                      <div key={bIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.82rem', color: '#E8E2D5' }}>
                        <CheckCircle2 size={14} color="var(--racing-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ borderTop: '1px solid rgba(185, 191, 194, 0.15)', paddingTop: '1.25rem' }}>
                  <Link
                    href={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="btn btn-secondary-light btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>Schedule Appointment</span>
                    <ArrowRight size={13} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workshop Guarantee Strip */}
      <section className="section-compact section-white">
        <div className="container">
          <div className="grid-cards-3" style={{ alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Award size={32} color="var(--racing-orange)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ fontSize: '1rem', color: 'var(--carbon-black)', display: 'block' }}>
                  BS AU 159 Safety Compliance
                </strong>
                <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  Punctures repaired exclusively to British & European safety standards.
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <ShieldCheck size={32} color="var(--racing-orange)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ fontSize: '1rem', color: 'var(--carbon-black)', display: 'block' }}>
                  100% Touchless Rim Safe
                </strong>
                <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  Robotic demount tools guarantee zero alloy wheel scratching.
                </span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <Zap size={32} color="var(--racing-orange)" style={{ flexShrink: 0 }} />
              <div>
                <strong style={{ fontSize: '1rem', color: 'var(--carbon-black)', display: 'block' }}>
                  45-Minute Express Slots
                </strong>
                <span style={{ fontSize: '0.84rem', color: 'var(--text-muted)' }}>
                  Pre-allocated diagnostic bays ensuring zero delays upon arrival.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA Banner */}
      <section className="section-compact section-light">
        <div className="container">
          <BookingCtaBanner
            title="Book Your Tyre or Chassis Service Today"
            subtitle="Choose your preferred appointment window and let our certified master technicians inspect your vehicle with zero obligation."
          />
        </div>
      </section>
    </>
  );
}
