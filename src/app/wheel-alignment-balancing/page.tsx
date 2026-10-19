import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import AlignmentVsBalancing from '@/components/AlignmentVsBalancing';
import FaqAccordion from '@/components/FaqAccordion';
import BookingCtaBanner from '@/components/BookingCtaBanner';
import { FAQS_DATA } from '@/data/faqs';
import {
  Compass,
  RotateCw,
  AlertTriangle,
  CheckCircle2,
  ArrowRight,
  Shield,
  Activity,
  Layers,
  Sparkles,
} from 'lucide-react';

export const metadata: Metadata = {
  title: '3D Laser Wheel Alignment & Dynamic Road-Force Balancing',
  description:
    'Restore factory chassis geometry, eliminate high-speed steering vibration, and prevent uneven tyre scrub with our Hunter 3D optical laser alignment and road-force balancing.',
};

export default function WheelAlignmentBalancingPage() {
  const alignmentFaqs = FAQS_DATA.filter((f) => f.category === 'alignment' || f.category === 'general');

  return (
    <>
      {/* Specialist Hero Header */}
      <section
        style={{
          backgroundColor: 'var(--carbon-black)',
          color: '#FFFFFF',
          paddingTop: 'clamp(3rem, 5vw, 5.5rem)',
          paddingBottom: 'clamp(3.5rem, 6vw, 6rem)',
          position: 'relative',
        }}
        className="bg-grid-pattern"
      >
        <div className="container">
          <Breadcrumbs items={[{ label: 'Wheel Alignment & Balancing' }]} theme="dark" />

          <div className="grid-cards-2" style={{ gap: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            <div>
              <span className="eyebrow" style={{ color: 'var(--racing-orange)' }}>
                Chassis Telemetry & Vibration Diagnostics
              </span>
              <h1
                style={{
                  fontSize: 'clamp(2.4rem, 4.8vw, 3.8rem)',
                  color: '#FFFFFF',
                  lineHeight: 1.12,
                  marginBottom: '1.25rem',
                }}
              >
                3D Laser Alignment & Road-Force Balancing
              </h1>
              <p
                style={{
                  fontSize: '1.12rem',
                  color: '#B9BFC2',
                  lineHeight: 1.68,
                  marginBottom: '2rem',
                  maxWidth: '560px',
                }}
              >
                Eliminate steering wheel shudder, eradicate uneven shoulder tyre scrub, and restore your vehicle’s factory handling precision using Hunter Hawkeye 3D optical sensors and 600kg load-roller balancing.
              </p>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2rem' }}>
                <Link href="/contact?service=3D%20Laser%20Wheel%20Alignment" className="btn btn-primary btn-lg">
                  <span>Book Alignment Bay</span>
                  <ArrowRight size={16} />
                </Link>
                <a href="#comparison" className="btn btn-secondary-light btn-lg">
                  <span>Compare Differences</span>
                </a>
              </div>

              {/* Stat Info Cleanly in Text Column */}
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.85rem',
                  padding: '0.75rem 1.25rem',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(230, 106, 53, 0.35)',
                  borderRadius: '8px',
                }}
              >
                <Activity size={20} color="var(--racing-orange)" />
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <span style={{ fontSize: '0.72rem', color: '#B9BFC2', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    Measurement Precision
                  </span>
                  <strong style={{ color: '#FFFFFF', fontSize: '0.98rem' }}>±0.01° Angular Tolerance</strong>
                </div>
              </div>
            </div>

            {/* Hero Image Rig */}
            <div>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(320px, 40vw, 460px)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid rgba(185, 191, 194, 0.22)',
                  boxShadow: 'var(--shadow-dark-card)',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=85"
                  alt="Automotive chassis on 3D optical laser alignment lift"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 3 Core Alignment Angles Explained */}
      <section className="section section-light">
        <div className="container">
          <SectionHeader
            eyebrow="Chassis Geometry Principles"
            title="The Three Critical Angles of Wheel Alignment"
            description="Our optical camera telemetry measures and corrects all three geometric vectors on every axle."
            align="center"
          />

          <div className="grid-cards-3">
            {/* Camber */}
            <div className="card-premium" style={{ padding: '2.25rem 2rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(230, 106, 53, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Compass size={26} color="var(--racing-orange)" />
              </div>
              <span className="eyebrow" style={{ fontSize: '0.72rem' }}>Vertical Incline</span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--carbon-black)', marginBottom: '0.75rem' }}>
                Camber Angle
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.62, marginBottom: '1.25rem' }}>
                The inward or outward vertical tilt of the wheel when viewed from the front of the vehicle. Incorrect negative camber causes severe wear on the inside tyre shoulder, while excessive positive camber wears the outside edge.
              </p>
              <div style={{ backgroundColor: 'var(--warm-ivory)', padding: '0.75rem', borderRadius: '6px', fontSize: '0.8rem', color: '#353B40' }}>
                <strong>Key Effect:</strong> Cornering grip and uniform shoulder wear.
              </div>
            </div>

            {/* Caster */}
            <div className="card-premium" style={{ padding: '2.25rem 2rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(230, 106, 53, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <Layers size={26} color="var(--racing-orange)" />
              </div>
              <span className="eyebrow" style={{ fontSize: '0.72rem' }}>Steering Axis Tilt</span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--carbon-black)', marginBottom: '0.75rem' }}>
                Caster Angle
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.62, marginBottom: '1.25rem' }}>
                The forward or backward tilt of the steering pivot axis when viewed from the side. Positive caster provides high-speed straight-line directional stability and enables the steering wheel to self-centre naturally after taking a bend.
              </p>
              <div style={{ backgroundColor: 'var(--warm-ivory)', padding: '0.75rem', borderRadius: '6px', fontSize: '0.8rem', color: '#353B40' }}>
                <strong>Key Effect:</strong> Highway tracking and steering wheel return-to-centre.
              </div>
            </div>

            {/* Toe */}
            <div className="card-premium" style={{ padding: '2.25rem 2rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(230, 106, 53, 0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                <RotateCw size={26} color="var(--racing-orange)" />
              </div>
              <span className="eyebrow" style={{ fontSize: '0.72rem' }}>Directional Tracking</span>
              <h3 style={{ fontSize: '1.35rem', color: 'var(--carbon-black)', marginBottom: '0.75rem' }}>
                Toe (Toe-In / Toe-Out)
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: 1.62, marginBottom: '1.25rem' }}>
                The inward or outward pointing of the tyres when viewed from directly above, akin to your feet pointing together or apart. Toe error is the number one cause of rapid, feather-edged tread destruction and elevated fuel consumption.
              </p>
              <div style={{ backgroundColor: 'var(--warm-ivory)', padding: '0.75rem', borderRadius: '6px', fontSize: '0.8rem', color: '#353B40' }}>
                <strong>Key Effect:</strong> Rapid tyre scrubbing prevention & minimal rolling drag.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Section */}
      <section className="section section-graphite" id="comparison">
        <div className="container">
          <SectionHeader
            eyebrow="Diagnostic Distinction"
            title="Wheel Alignment vs. Wheel Balancing"
            description="Although often confused, alignment and balancing solve completely different physical issues. Review our side-by-side technical breakdown below."
            theme="dark"
            align="center"
          />

          <AlignmentVsBalancing />
        </div>
      </section>

      {/* Symptoms Checklist */}
      <section className="section section-white">
        <div className="container">
          <div className="grid-cards-2" style={{ gap: '3rem' }}>
            <div>
              <span className="eyebrow">Driver Warning Signs</span>
              <h2 style={{ marginBottom: '1rem' }}>When Does Your Vehicle Require Attention?</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.75rem' }}>
                Even minor curb scuffs, road potholes, or normal suspension bushing wear gradually disrupt factory chassis angles. Inspect for these five classic warning signs:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  {
                    title: 'Vehicle Drifts or Pulls to One Side',
                    desc: 'When driving on a flat motorway lane, the car drifts off-line if you momentarily ease grip on the steering wheel.',
                  },
                  {
                    title: 'Off-Centre Steering Wheel',
                    desc: 'The steering wheel spoke sits visibly crooked even while travelling completely straight forward.',
                  },
                  {
                    title: 'Steering Wheel Vibration at 80–120 km/h',
                    desc: 'Rhythmic shuddering through the steering rim indicating dynamic wheel imbalance on the front axle.',
                  },
                  {
                    title: 'Seat or Floorpan Buzzing',
                    desc: 'Vibration felt through the driver seat cushion or footwell, pointing to rear wheel balance runout.',
                  },
                  {
                    title: 'Uneven, Scalloped, or Feathered Tread Wear',
                    desc: 'Run your hand gently across the tyre face; sharp sawtooth edges indicate severe toe misalignment.',
                  },
                ].map((symptom, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem' }}>
                    <AlertTriangle size={18} color="var(--racing-orange)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <div>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--carbon-black)', display: 'block' }}>
                        {symptom.title}
                      </strong>
                      <span style={{ fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, display: 'block', marginTop: '2px' }}>
                        {symptom.desc}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Supporting Workshop Image */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(360px, 45vw, 500px)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=85"
                  alt="Precision Hunter Hawkeye alignment bay with optical camera target"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section section-light">
        <div className="container container-narrow">
          <SectionHeader
            eyebrow="Expert Clarifications"
            title="Frequently Asked Questions"
            description="Detailed answers on alignment intervals, steering calibrations, and balancing diagnostics."
            align="center"
          />

          <FaqAccordion items={alignmentFaqs} theme="light" />
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-compact section-light">
        <div className="container">
          <BookingCtaBanner
            title="Book Your 3D Alignment & Road-Force Balance"
            subtitle="Appointments take under 60 minutes. Experience razor-sharp directional stability and zero high-speed vibrations on your next journey."
          />
        </div>
      </section>
    </>
  );
}
