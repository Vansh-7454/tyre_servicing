import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import BookingCtaBanner from '@/components/BookingCtaBanner';
import {
  ShieldCheck,
  Target,
  Eye,
  Recycle,
  Wrench,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Award,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About TreadCraft Auto Care | Engineering Philosophy & Values',
  description:
    'Discover the TreadCraft Auto Care philosophy: Touchless robotic rim protection, millimetre-accurate 3D laser telemetry, and transparent automotive tyre servicing.',
};

export default function AboutPage() {
  const coreValues = [
    {
      icon: Target,
      title: 'Laser Precision',
      desc: 'We do not rely on rough visual approximations. From optical 3D chassis geometry to laser-guided dynamic balancing, every measurement conforms to factory OEM tolerances.',
    },
    {
      icon: ShieldCheck,
      title: 'Touchless Protection',
      desc: 'Your alloy wheels are valuable design pieces. Our investment in non-contact robotic demount heads guarantees zero rim gouges, scratches, or finish degradation.',
    },
    {
      icon: Eye,
      title: 'Absolute Transparency',
      desc: 'No unnecessary upsells or mysterious charges. Customers receive digital tyre health scans showing exact millimeter tread readings and live alignment telemetry before work begins.',
    },
    {
      icon: Recycle,
      title: 'Environmental Stewardship',
      desc: '100% of end-of-life casings removed in our bays are handled through licensed rubber recycling programmes, repurposed into athletic surfaces and recycled asphalt binders.',
    },
  ];

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
          <Breadcrumbs items={[{ label: 'About Us' }]} theme="dark" />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow" style={{ color: 'var(--racing-orange)' }}>
              Brand Philosophy & Workshop Standards
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                lineHeight: 1.12,
              }}
            >
              Precision on Every Mile
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#B9BFC2',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              TreadCraft Auto Care was established to elevate tyre servicing from a hurried commodity into a disciplined automotive craft. By combining aerospace-grade optical telemetry with certified technician expertise, we deliver peerless ride comfort and unwavering safety.
            </p>
          </div>
        </div>
      </section>

      {/* Editorial Story Section */}
      <section className="section section-light">
        <div className="container">
          <div className="grid-cards-2" style={{ gap: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            {/* Story Text */}
            <div>
              <span className="eyebrow">Our Guiding Principle</span>
              <h2 style={{ marginBottom: '1.25rem' }}>
                Why Conventional Tyre Fitting Needed a New Benchmark
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                Modern passenger vehicles and electric cars have become heavier, faster, and far more technologically sophisticated. Yet traditional tyre shops frequently continue to use primitive iron tyre levers, outdated bubble balancers, and generic string puncture repairs that risk sudden casing blowouts and alloy damage.
              </p>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem' }}>
                TreadCraft re-engineers every single step of the tyre lifecycle. We designed clean, brightly illuminated workshop bays where customers can watch their wheels being mounted through our executive lounge viewing gallery. We employ touchless robotic arms that cradle the tyre bead without touching the wheel face, followed by dynamic road-force balancers that press a 600kg roller to simulate real highway friction.
              </p>

              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderLeft: '4px solid var(--racing-orange)',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '0 8px 8px 0',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <p style={{ fontSize: '0.96rem', color: 'var(--carbon-black)', fontWeight: 600, fontStyle: 'italic', margin: 0 }}>
                  “A car with 500 horsepower is only ever as capable as the four small patches of rubber meeting the road. We treat those contact patches with the engineering precision they demand.”
                </p>
              </div>
            </div>

            {/* Editorial Image */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(360px, 45vw, 520px)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1613214149922-f1809c99b414?auto=format&fit=crop&w=1200&q=85"
                  alt="TreadCraft master technician torquing wheel bolts"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Grid */}
      <section className="section section-graphite">
        <div className="container">
          <SectionHeader
            eyebrow="The TreadCraft Pillars"
            title="The Values That Guide Every Wheel Calibration"
            description="Our service ethos rests upon four non-negotiable standards of care, engineering integrity, and client transparency."
            theme="dark"
            align="center"
          />

          <div className="grid-cards-4">
            {coreValues.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="card-dark"
                  style={{
                    padding: '2.25rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(230, 106, 53, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={24} color="var(--racing-orange)" />
                  </div>
                  <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', margin: 0 }}>
                    {val.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#B9BFC2', lineHeight: 1.62, margin: 0 }}>
                    {val.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Technician Certifications & Standards Banner */}
      <section className="section section-white">
        <div className="container">
          <div className="grid-cards-2">
            <div>
              <span className="eyebrow">Professional Standards</span>
              <h2 style={{ marginBottom: '1rem' }}>Certified Chassis & Fitment Technicians</h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.68, marginBottom: '1.5rem' }}>
                Every technician at TreadCraft undergoes mandatory factory certification in laser alignment geometry, TPMS sensor diagnostics, and high-pressure run-flat tyre handling.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--carbon-black)' }}>
                  <Award size={18} color="var(--racing-orange)" />
                  <span>IMI (Institute of the Motor Industry) Trained Geometry Technicians</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--carbon-black)' }}>
                  <Award size={18} color="var(--racing-orange)" />
                  <span>Certified BS AU 159 Puncture Repair Specialists</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--carbon-black)' }}>
                  <Award size={18} color="var(--racing-orange)" />
                  <span>Touchless Mounting Protocol Certification for Multi-Piece & Forged Alloys</span>
                </div>
              </div>
            </div>

            {/* Environmental Metric Card */}
            <div
              style={{
                backgroundColor: 'var(--warm-ivory)',
                padding: '2.5rem 2rem',
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Recycle size={28} color="#059669" />
                <h3 style={{ fontSize: '1.25rem', color: 'var(--carbon-black)', margin: 0 }}>
                  100% Zero-Landfill Rubber Policy
                </h3>
              </div>
              <p style={{ fontSize: '0.92rem', color: '#586066', lineHeight: 1.6, margin: 0 }}>
                Every scrap tyre demounted in our workshop is registered and transferred to licensed rubber reprocessing facilities. Zero tyres enter municipal landfills.
              </p>
              <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                <div>
                  <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--carbon-black)', display: 'block' }}>
                    100%
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: '#7E878C' }}>Recycled Rubber</span>
                </div>
                <div>
                  <strong style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--carbon-black)', display: 'block' }}>
                    0%
                  </strong>
                  <span style={{ fontSize: '0.78rem', color: '#7E878C' }}>Landfill Waste</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clean Workshop & Lounge Experience */}
      <section className="section section-light">
        <div className="container">
          <div className="grid-cards-2" style={{ gap: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(320px, 40vw, 460px)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-card)',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1200&q=85"
                  alt="TreadCraft executive customer lounge and viewing gallery"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            <div>
              <span className="eyebrow">Customer-First Environment</span>
              <h2 style={{ marginBottom: '1.25rem' }}>
                A Service Experience Built Around Driver Comfort
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                We believe having your tyres fitted or chassis realigned should not mean waiting in a cold, oily waiting room. Our flagship facility features an executive customer lounge designed specifically for productivity and relaxation.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--carbon-black)' }}>
                  <CheckCircle2 size={18} color="var(--racing-orange)" />
                  <span>Panoramic glass gallery overlooking all 6 service bays</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--carbon-black)' }}>
                  <CheckCircle2 size={18} color="var(--racing-orange)" />
                  <span>Single-origin espresso bar and artisan refreshments</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--carbon-black)' }}>
                  <CheckCircle2 size={18} color="var(--racing-orange)" />
                  <span>Fibre-optic Wi-Fi, quiet work booths, and device charging</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.92rem', color: 'var(--carbon-black)' }}>
                  <CheckCircle2 size={18} color="var(--racing-orange)" />
                  <span>SMS and digital tablet updates when your car is ready</span>
                </div>
              </div>

              <Link href="/locations" className="btn btn-secondary">
                <span>Explore Workshop Facilities</span>
                <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Concept Disclaimer Note */}
      <section className="section-compact section-light">
        <div className="container container-narrow">
          <div
            style={{
              backgroundColor: 'var(--warm-ivory-muted)',
              border: '1px solid var(--border-light)',
              borderRadius: '8px',
              padding: '1.25rem 1.5rem',
              fontSize: '0.84rem',
              color: '#586066',
              lineHeight: 1.55,
              textAlign: 'center',
            }}
          >
            <strong>Brand Showcase Notice:</strong> TreadCraft Auto Care is a conceptual automotive brand design created to demonstrate modern, high-standard frontend craftsmanship in Next.js. All values, equipment representations, and processes illustrate premium automotive industry best practices.
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-compact section-light">
        <div className="container">
          <BookingCtaBanner
            title="Experience the TreadCraft Standard First-Hand"
            subtitle="Book an appointment online or contact our master technician team for guidance on your vehicle’s tyre setup."
          />
        </div>
      </section>
    </>
  );
}
