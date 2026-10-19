import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TrustStrip from '@/components/TrustStrip';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import Testimonials from '@/components/Testimonials';
import BookingCtaBanner from '@/components/BookingCtaBanner';
import { SERVICES_DATA } from '@/data/services';
import {
  Calendar,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Gauge,
  Zap,
  RotateCw,
  Compass,
  AlertTriangle,
  Clock,
  Sparkles,
  Wrench,
  Check,
} from 'lucide-react';
import { BRAND_INFO } from '@/data/navigation';

export default function HomePage() {
  const alignmentService = SERVICES_DATA.find((s) => s.id === 'alignment') || SERVICES_DATA[1];
  const supportingServices = SERVICES_DATA.filter((s) => s.id !== 'alignment' && s.featured);

  return (
    <>
      {/* 1. HERO SECTION — Asymmetric Editorial Automotive Showcase */}
      <section
        style={{
          position: 'relative',
          backgroundColor: 'var(--carbon-black)',
          color: '#FFFFFF',
          paddingTop: 'clamp(3.5rem, 6.5vw, 6.5rem)',
          paddingBottom: 'clamp(4.5rem, 8vw, 8rem)',
          overflow: 'hidden',
        }}
        className="bg-grid-pattern"
      >
        <div className="container">
          <div className="grid-cards-2" style={{ gap: 'clamp(2.5rem, 5vw, 5rem)' }}>
            {/* Left Editorial Copy */}
            <div style={{ display: 'flex', flexDirection: 'column', zIndex: 2 }}>
              <div className="hero-animate-1">
                <span className="eyebrow" style={{ color: 'var(--racing-orange)' }}>
                  Precision Tyre & Wheel Care
                </span>

                <h1
                  style={{
                    fontSize: 'clamp(2.75rem, 5.4vw, 4.4rem)',
                    lineHeight: 1.08,
                    fontWeight: 800,
                    color: '#FFFFFF',
                    marginBottom: '1.5rem',
                    letterSpacing: '-0.035em',
                  }}
                >
                  Better Grip. <br />
                  <span style={{ color: 'var(--racing-orange)' }}>Smoother Miles.</span>
                </h1>
              </div>

              <p
                className="hero-animate-2"
                style={{
                  fontSize: 'clamp(1.05rem, 1.35vw, 1.22rem)',
                  color: '#B9BFC2',
                  lineHeight: 1.68,
                  marginBottom: '2.25rem',
                  maxWidth: '560px',
                }}
              >
                Engineered tyre fitting, millimetre-accurate 3D laser wheel alignment, and dynamic road-force diagnostics. Delivering absolute safety, reduced fuel consumption, and pristine rim protection for every passenger car and performance vehicle.
              </p>

              {/* Action Button Row */}
              <div
                className="hero-animate-3"
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '1rem',
                  marginBottom: '2.75rem',
                }}
              >
                <Link href="/contact" className="btn btn-primary btn-lg">
                  <Calendar size={18} />
                  <span>Book a Service</span>
                  <ArrowRight size={16} />
                </Link>

                <Link href="/services" className="btn btn-secondary-light btn-lg">
                  <span>Explore All Services</span>
                </Link>
              </div>

              {/* Micro Trust Bullets */}
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1.25rem 2.25rem',
                  paddingTop: '1.75rem',
                  borderTop: '1px solid rgba(185, 191, 194, 0.15)',
                  fontSize: '0.86rem',
                  color: '#E8E2D5',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <ShieldCheck size={17} color="var(--racing-orange)" />
                  <span>Touchless 0-Scratch Alloy Mounting</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <Zap size={17} color="var(--racing-orange)" />
                  <span>±0.01° 3D Laser Alignment</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.55rem' }}>
                  <Gauge size={17} color="var(--racing-orange)" />
                  <span>32-Point Digital Tread Audit</span>
                </div>
              </div>
            </div>

            {/* Right Editorial Photography Composition */}
            <div style={{ position: 'relative' }}>
              {/* Outer Decorative Frame */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(360px, 45vw, 540px)',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(185, 191, 194, 0.22)',
                  boxShadow: '0 24px 60px rgba(0, 0, 0, 0.55)',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?auto=format&fit=crop&w=1400&q=85"
                  alt="Precision Tyre Mounting and Wheel Care at TreadCraft Workshop"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Decorative Geometric Corner Accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  width: '70px',
                  height: '70px',
                  borderTop: '3px solid var(--racing-orange)',
                  borderRight: '3px solid var(--racing-orange)',
                  borderRadius: '0 16px 0 0',
                  pointerEvents: 'none',
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. TRUST AND SERVICE-BENEFIT STRIP */}
      <TrustStrip />

      {/* 3. FEATURED SERVICES — Varied Asymmetric Layout */}
      <section className="section section-light" id="featured-services">
        <div className="container">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
              gap: '1.5rem',
              marginBottom: '3rem',
            }}
          >
            <div>
              <span className="eyebrow">Engineered Wheel Solutions</span>
              <h2>Specialist Tyre & Wheel Disciplines</h2>
            </div>
            <Link href="/services" className="btn btn-secondary">
              <span>View All 8 Services</span>
              <ArrowRight size={15} />
            </Link>
          </div>

          {/* Flagship Highlight Box: 3D Laser Alignment */}
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-card)',
              overflow: 'hidden',
              marginBottom: '2.5rem',
            }}
            className="grid-cards-2"
          >
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(280px, 35vw, 420px)',
              }}
            >
              <Image
                src={alignmentService.image}
                alt={alignmentService.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </div>

            <div style={{ padding: 'clamp(1.5rem, 3.5vw, 2.5rem)', display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                <span
                  style={{
                    backgroundColor: 'rgba(230, 106, 53, 0.12)',
                    border: '1px solid var(--racing-orange)',
                    color: 'var(--racing-orange)',
                    padding: '3px 10px',
                    borderRadius: '4px',
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  Flagship Discipline
                </span>
                <span className="eyebrow" style={{ margin: 0, fontSize: '0.72rem' }}>
                  {alignmentService.category}
                </span>
                <span style={{ color: '#B9BFC2' }}>•</span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.82rem', color: '#586066' }}>
                  <Clock size={13} color="var(--racing-orange)" />
                  <span>{alignmentService.estimatedDuration}</span>
                </div>
              </div>

              <h3 style={{ fontSize: 'clamp(1.6rem, 2.8vw, 2.1rem)', color: 'var(--carbon-black)', marginBottom: '1rem', lineHeight: 1.25 }}>
                {alignmentService.title}
              </h3>

              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
                {alignmentService.shortDescription} Using high-definition optical camera targets, we correct Camber, Caster, and Toe vectors to restore straight-line stability and eradicate uneven shoulder scrub.
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))', gap: '0.65rem', marginBottom: '1.75rem' }}>
                {alignmentService.keyBenefits.map((benefit, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.84rem', color: '#353B40' }}>
                    <CheckCircle2 size={15} color="var(--racing-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1rem' }}>
                <Link href="/contact?service=3D%20Laser%20Wheel%20Alignment" className="btn btn-primary">
                  <span>Book Alignment Bay</span>
                  <ArrowRight size={14} />
                </Link>
                <Link href="/wheel-alignment-balancing" className="btn btn-secondary">
                  <span>Technical Deep Dive</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Secondary 3-Card Grid */}
          <div className="grid-cards-3">
            {supportingServices.map((service) => (
              <ServiceCard key={service.id} service={service} theme="light" />
            ))}
          </div>
        </div>
      </section>

      {/* 4. TYRE EXPERTISE — Editorial Asymmetric Feature */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid-cards-2" style={{ gap: 'clamp(2.5rem, 6vw, 5rem)' }}>
            {/* Image Composition */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: 'clamp(340px, 42vw, 500px)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  border: '1px solid rgba(185, 191, 194, 0.2)',
                  boxShadow: 'var(--shadow-dark-card)',
                }}
              >
                <Image
                  src="https://images.unsplash.com/photo-1625047509168-a7026f36de04?auto=format&fit=crop&w=1200&q=85"
                  alt="High-performance tyre tread channel geometry"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Editorial Content */}
            <div>
              <span className="eyebrow">The Contact Patch Principle</span>
              <h2 style={{ color: '#FFFFFF', marginBottom: '1.25rem', lineHeight: 1.18 }}>
                Your Only 4 Palm-Sized Connections to the Tarmac
              </h2>

              {/* Safety Benchmark Inline Callout */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  backgroundColor: 'rgba(230, 106, 53, 0.12)',
                  borderLeft: '4px solid var(--racing-orange)',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '0 8px 8px 0',
                  marginBottom: '1.5rem',
                }}
              >
                <div>
                  <strong style={{ color: '#FFFFFF', fontSize: '0.96rem', display: 'block' }}>
                    Critical 3mm Safety Threshold
                  </strong>
                  <span style={{ color: '#B9BFC2', fontSize: '0.84rem' }}>
                    Recommended tyre replacement threshold before wet braking stopping distance doubles.
                  </span>
                </div>
              </div>
              <p style={{ color: '#B9BFC2', fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                At 110 km/h on a wet motorway, each of your tyres must evacuate up to 30 litres of water per second through its longitudinal grooves. A difference of just 1.5mm in tread depth adds up to two full vehicle lengths to your emergency stopping distance.
              </p>
              <p style={{ color: '#9BA3A8', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '2rem' }}>
                At TreadCraft, we do not guess tyre condition. Every inspection measures tread depth across three independent channels, analyzes sidewall ply stress, verifies bead seal integrity, and matches tyre load ratings specifically to your vehicle chassis dynamics.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#E8E2D5', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={18} color="var(--racing-orange)" />
                  <span>Micro-siped tread block stability under heavy lateral braking</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#E8E2D5', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={18} color="var(--racing-orange)" />
                  <span>Silica-rich compounds maintaining grip below 7°C ambient temperature</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: '#E8E2D5', fontSize: '0.92rem' }}>
                  <CheckCircle2 size={18} color="var(--racing-orange)" />
                  <span>Touchless leverless demounting to protect diamond-cut rim faces</span>
                </div>
              </div>

              <Link href="/tyres" className="btn btn-primary">
                <span>Browse Tyre Specifications</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE SELECTOR — Find the Right Service for Your Vehicle */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="Targeted Diagnostics"
            title="Find the Right Service for Your Vehicle"
            description="Identify your vehicle symptoms or driving conditions below to match the exact engineered service you require."
            align="center"
          />

          <div className="grid-cards-4">
            {[
              {
                symptom: 'Steering Wheel Shudders at 80+ km/h',
                diagnosis: 'High-speed dynamic imbalance or radial tyre runout.',
                recommendedService: 'Dynamic Road-Force Wheel Balancing',
                link: '/wheel-alignment-balancing',
                badge: 'Vibration Diagnostic',
              },
              {
                symptom: 'Car Pulls to Left or Right on Straight Roads',
                diagnosis: 'Camber or Toe geometry misalignment causing tyre scrub.',
                recommendedService: '3D Laser 4-Wheel Alignment',
                link: '/wheel-alignment-balancing',
                badge: 'Steering Geometry',
              },
              {
                symptom: 'Slow Air Pressure Loss (1-2 PSI Weekly)',
                diagnosis: 'Corrosion along alloy bead seat or failing TPMS valve seal.',
                recommendedService: 'Alloy Bead Sealing & TPMS Refurbishment',
                link: '/services#tpms-rim',
                badge: 'Rim Seal Integrity',
              },
              {
                symptom: 'Sudden Nail Puncture in Central Tread',
                diagnosis: 'Puncture within repairable crown zone (BS AU 159).',
                recommendedService: 'Dismounted Mushroom Plug Vulcanization',
                link: '/services#puncture',
                badge: 'Permanent Safety Repair',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="card-premium"
                style={{
                  padding: '2rem 1.75rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderTop: '3px solid var(--racing-orange)',
                }}
              >
                <div>
                  <span
                    style={{
                      fontSize: '0.72rem',
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      color: 'var(--racing-orange)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                      display: 'block',
                      marginBottom: '0.65rem',
                    }}
                  >
                    {item.badge}
                  </span>
                  <h3 style={{ fontSize: '1.18rem', color: 'var(--carbon-black)', marginBottom: '0.75rem', lineHeight: 1.35 }}>
                    {item.symptom}
                  </h3>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', lineHeight: 1.55, marginBottom: '1.25rem' }}>
                    {item.diagnosis}
                  </p>
                </div>

                <div style={{ borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  <span style={{ fontSize: '0.74rem', color: '#7E878C', display: 'block', textTransform: 'uppercase', marginBottom: '4px' }}>
                    Recommended Solution
                  </span>
                  <Link
                    href={item.link}
                    style={{
                      fontSize: '0.92rem',
                      fontWeight: 700,
                      color: 'var(--carbon-black)',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                    }}
                  >
                    <span>{item.recommendedService}</span>
                    <ChevronRight size={15} color="var(--racing-orange)" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. STEP-BY-STEP SERVICE PROTOCOL — Timeline Progression */}
      <section className="section section-graphite">
        <div className="container">
          <SectionHeader
            eyebrow="The TreadCraft Standard"
            title="The Step-by-Step Service Experience"
            description="From digital optical check-in to final road-tested sign-off, every vehicle passes through our transparent 4-stage engineering protocol."
            theme="dark"
            align="center"
          />

          <div className="grid-cards-4">
            {[
              {
                step: '01',
                title: 'Optical Check-In',
                desc: 'Drive-over digital laser tread profiler instantly scans tyre condition, producing a 3D wear heat map.',
              },
              {
                step: '02',
                title: 'Clear Digital Quotation',
                desc: 'You receive a complete upfront breakdown on tablet with zero hidden extras or surprise additions.',
              },
              {
                step: '03',
                title: 'Touchless Fitment',
                desc: 'Corghi robotic demount heads and Hunter road-force balancers service your wheels with zero alloy rim contact.',
              },
              {
                step: '04',
                title: 'Torque & Road Handover',
                desc: 'Bolts tightened to exact OEM foot-pounds with calibrated digital torque wrenches, followed by a signed audit.',
              },
            ].map((s, idx) => (
              <div
                key={idx}
                className="card-dark timeline-step"
                style={{
                  padding: '2.25rem 1.75rem',
                  position: 'relative',
                  borderTop: '3px solid var(--racing-orange)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.5rem',
                    fontWeight: 800,
                    color: 'rgba(230, 106, 53, 0.4)',
                    lineHeight: 1,
                    display: 'block',
                    marginBottom: '1rem',
                  }}
                >
                  {s.step}
                </span>
                <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '0.65rem' }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: '0.88rem', color: '#B9BFC2', margin: 0, lineHeight: 1.6 }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TYRE SAFETY & TREAD DEPTH GAUGE GUIDE */}
      <section className="section section-light">
        <div className="container">
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid var(--border-light)',
              padding: 'clamp(1.5rem, 4vw, 3.5rem)',
              boxShadow: 'var(--shadow-card)',
            }}
          >
            <div style={{ maxWidth: '820px', marginBottom: '2.5rem' }}>
              <span className="eyebrow">Tread Depth Safety Guide</span>
              <h2 style={{ marginBottom: '0.75rem' }}>Understand Your Tread Depth Life Cycle</h2>
              <p style={{ fontSize: '0.98rem', color: 'var(--text-muted)' }}>
                Tread depth directly determines wet stopping distances. When travelling at 80 km/h in wet weather, worn tyres dramatically increase emergency braking distance:
              </p>
            </div>

            {/* Visual Depth Comparison Bars with Distances */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
              {/* 8mm */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem 0.75rem', marginBottom: '0.45rem', fontSize: '0.9rem' }}>
                  <strong style={{ color: 'var(--carbon-black)' }}>8mm — Brand New Premium Tyre</strong>
                  <span style={{ color: '#059669', fontWeight: 700 }}>Stopping Distance: 25.9 metres</span>
                </div>
                <div style={{ height: '14px', width: '100%', backgroundColor: 'var(--warm-ivory)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '100%', backgroundColor: '#10B981', borderRadius: '9999px' }} />
                </div>
              </div>

              {/* 4mm */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem 0.75rem', marginBottom: '0.45rem', fontSize: '0.9rem' }}>
                  <strong style={{ color: 'var(--carbon-black)' }}>4mm — Recommended Inspection Range</strong>
                  <span style={{ color: '#D97706', fontWeight: 700 }}>Stopping Distance: 31.4 metres (+21%)</span>
                </div>
                <div style={{ height: '14px', width: '100%', backgroundColor: 'var(--warm-ivory)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '65%', backgroundColor: '#F59E0B', borderRadius: '9999px' }} />
                </div>
              </div>

              {/* 3mm */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem 0.75rem', marginBottom: '0.45rem', fontSize: '0.9rem' }}>
                  <strong style={{ color: 'var(--carbon-black)' }}>3mm — TreadCraft Safety Replacement Threshold</strong>
                  <span style={{ color: 'var(--racing-orange)', fontWeight: 700 }}>Stopping Distance: 35.8 metres (+38%)</span>
                </div>
                <div style={{ height: '14px', width: '100%', backgroundColor: 'var(--warm-ivory)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '40%', backgroundColor: 'var(--racing-orange)', borderRadius: '9999px' }} />
                </div>
              </div>

              {/* 1.6mm */}
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.35rem 0.75rem', marginBottom: '0.45rem', fontSize: '0.9rem' }}>
                  <strong style={{ color: '#DC2626' }}>1.6mm — UK & European Legal Minimum Limit</strong>
                  <span style={{ color: '#DC2626', fontWeight: 700 }}>Stopping Distance: 43.1 metres (+66% Danger!)</span>
                </div>
                <div style={{ height: '14px', width: '100%', backgroundColor: 'var(--warm-ivory)', borderRadius: '9999px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: '20%', backgroundColor: '#DC2626', borderRadius: '9999px' }} />
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '2.5rem',
                paddingTop: '1.75rem',
                borderTop: '1px solid var(--border-light)',
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1.25rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Gauge size={22} color="var(--racing-orange)" />
                <span style={{ fontSize: '0.92rem', color: 'var(--carbon-black)', fontWeight: 600 }}>
                  Not sure of your current tread depth? Drive in for our complimentary 5-minute digital check.
                </span>
              </div>
              <Link href="/contact" className="btn btn-primary btn-sm">
                <span>Book Free Audit</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS SECTION */}
      <section className="section section-light" id="testimonials">
        <div className="container">
          <SectionHeader
            eyebrow="Client Experiences"
            title="Trusted by Drivers of Premium & Performance Cars"
            description="Read verified feedback from owners of executive saloons, sports coupés, and electric vehicles serviced at our workshop."
            align="center"
          />
          <Testimonials />
        </div>
      </section>

      {/* 9. STRONG BOOKING CTA BANNER */}
      <section className="section-compact section-light">
        <div className="container">
          <BookingCtaBanner
            title="Book Your Laser Alignment & Tyre Care Appointment"
            subtitle="Precision non-contact machinery, certified master technicians, and executive customer lounge facilities. Reserve your appointment online today."
          />
        </div>
      </section>
    </>
  );
}
