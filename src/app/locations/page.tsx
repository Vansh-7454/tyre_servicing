import React from 'react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import StaticMap from '@/components/StaticMap';
import BookingCtaBanner from '@/components/BookingCtaBanner';
import { WORKSHOP_DETAILS } from '@/data/workshop';
import { BRAND_INFO } from '@/data/navigation';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
  Navigation,
  CheckCircle,
  Wrench,
  Coffee,
  Wifi,
  Shield,
  ArrowRight,
  Car,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Workshop & Service Locations',
  description:
    'Visit TreadCraft Auto Care flagship diagnostic hub. 6 dedicated service bays, Hunter 3D optical alignment, touchless Corghi tyre changers, and executive lounge.',
};

export default function LocationsPage() {
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
          <Breadcrumbs items={[{ label: 'Workshop Locations' }]} theme="dark" />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow" style={{ color: 'var(--racing-orange)' }}>
              Diagnostic Facility & Bay Availability
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                lineHeight: 1.12,
              }}
            >
              Flagship Workshop & Diagnostic Hub
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#B9BFC2',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Purpose-built for rapid wheel alignment, touchless tyre mounting, and suspension telemetry. Conveniently situated in northwest London with 6 dedicated service bays and executive customer amenities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Workshop Overview Card */}
      <section className="section section-light">
        <div className="container">
          <div
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: '14px',
              border: '1px solid var(--border-light)',
              boxShadow: 'var(--shadow-card)',
              overflow: 'hidden',
              marginBottom: '3.5rem',
            }}
          >
            {/* Top Hub Banner Image */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: 'clamp(280px, 32vw, 420px)',
                backgroundColor: '#171A1D',
              }}
            >
              <Image
                src="https://images.unsplash.com/photo-1574755393849-623942496936?auto=format&fit=crop&w=1400&q=85"
                alt="TreadCraft Flagship Diagnostic Hub Exterior and Customer Showroom"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1200px"
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Clean Hub Header Info Strip Below Image */}
            <div
              style={{
                padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1.5rem, 4vw, 3rem)',
                backgroundColor: 'var(--carbon-black)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              }}
            >
              <div>
                <span
                  className="badge badge-orange"
                  style={{
                    backgroundColor: 'var(--racing-orange)',
                    color: '#FFFFFF',
                    marginBottom: '0.4rem',
                    display: 'inline-block',
                  }}
                >
                  {WORKSHOP_DETAILS.badge}
                </span>
                <h2 style={{ color: '#FFFFFF', fontSize: 'clamp(1.5rem, 2.8vw, 2.25rem)', margin: 0 }}>
                  {WORKSHOP_DETAILS.name}
                </h2>
              </div>

              <div
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                  border: '1px solid rgba(185, 191, 194, 0.25)',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  color: '#FFFFFF',
                  fontSize: '0.88rem',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#22c55e', display: 'inline-block' }}></span>
                6 Service Bays Active
              </div>
            </div>

            {/* Hub Details Grid */}
            <div
              className="grid-cards-2"
              style={{
                padding: 'clamp(1.5rem, 4vw, 3rem)',
                gap: '2.5rem 2rem',
                alignItems: 'start',
              }}
            >
              {/* Left Column: Contact & Quick Links */}
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--carbon-black)', marginBottom: '1.25rem' }}>
                  Address & Direct Contacts
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.15rem', marginBottom: '2rem' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                    <MapPin size={20} color="var(--racing-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <strong style={{ fontSize: '0.95rem', color: 'var(--carbon-black)', display: 'block' }}>
                        {WORKSHOP_DETAILS.address}
                      </strong>
                      <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                        {WORKSHOP_DETAILS.city}, {WORKSHOP_DETAILS.postalCode}
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <Phone size={20} color="var(--racing-orange)" style={{ flexShrink: 0 }} />
                    <a href={`tel:${BRAND_INFO.phoneTel}`} style={{ fontSize: '0.95rem', color: 'var(--carbon-black)', fontWeight: 600 }}>
                      {WORKSHOP_DETAILS.phone}
                    </a>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <MessageSquare size={20} color="var(--racing-orange)" style={{ flexShrink: 0 }} />
                    <a
                      href={`https://wa.me/${WORKSHOP_DETAILS.whatsapp.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '0.95rem', color: 'var(--carbon-black)', fontWeight: 600 }}
                    >
                      WhatsApp: {WORKSHOP_DETAILS.whatsapp}
                    </a>
                  </div>
                </div>

                {/* Direct Action Buttons */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.85rem' }}>
                  <a
                    href={WORKSHOP_DETAILS.directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    <Navigation size={15} />
                    <span>Get Directions</span>
                  </a>

                  <Link href="/contact" className="btn btn-secondary">
                    <span>Reserve Appointment</span>
                  </Link>
                </div>
              </div>

              {/* Right Column: Operating Hours & Bay Stats */}
              <div>
                <h3 style={{ fontSize: '1.25rem', color: 'var(--carbon-black)', marginBottom: '1.25rem' }}>
                  Operating Hours & Availability
                </h3>

                <div
                  style={{
                    backgroundColor: 'var(--warm-ivory)',
                    borderRadius: '8px',
                    padding: '1.25rem 1.5rem',
                    border: '1px solid var(--border-light)',
                    marginBottom: '1.75rem',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {WORKSHOP_DETAILS.openingHours.map((slot, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          fontSize: '0.92rem',
                          borderBottom: idx === WORKSHOP_DETAILS.openingHours.length - 1 ? 'none' : '1px solid var(--border-light)',
                          paddingBottom: idx === WORKSHOP_DETAILS.openingHours.length - 1 ? '0' : '0.5rem',
                        }}
                      >
                        <span style={{ fontWeight: 600, color: 'var(--carbon-black)' }}>{slot.days}</span>
                        <span style={{ color: 'var(--text-muted)' }}>{slot.hours}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ fontSize: '0.82rem', color: '#586066', lineHeight: 1.5 }}>
                  <Shield size={14} color="var(--racing-orange)" style={{ display: 'inline', marginRight: '6px' }} />
                  Secure on-site gated parking, EV rapid destination chargers, and 24/7 security monitored bays.
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Vector Workshop Schematic Map */}
          <div style={{ marginBottom: '4rem' }}>
            <SectionHeader
              eyebrow="Access & Approach"
              title="Location & Route Map"
              description="Located 3 minutes off the A406 North Circular with direct ground-level vehicle access for low-clearance performance vehicles."
            />
            <StaticMap />
          </div>

          {/* Bay Machinery & Customer Amenities 2-Col Grid */}
          <div className="grid-cards-2">
            {/* Machinery Column */}
            <div className="card-premium" style={{ padding: '2.25rem 2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <Wrench size={22} color="var(--racing-orange)" />
                <h3 style={{ fontSize: '1.3rem', color: 'var(--carbon-black)', margin: 0 }}>
                  Diagnostic Equipment In Hub
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {WORKSHOP_DETAILS.equipment.map((eq, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: '#353B40' }}>
                    <CheckCircle size={16} color="var(--racing-orange)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{eq}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Customer Amenities Column */}
            <div className="card-premium" style={{ padding: '2.25rem 2rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', marginBottom: '1.25rem' }}>
                <Coffee size={22} color="var(--racing-orange)" />
                <h3 style={{ fontSize: '1.3rem', color: 'var(--carbon-black)', margin: 0 }}>
                  Customer Lounge Amenities
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {WORKSHOP_DETAILS.amenities.map((am, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem', fontSize: '0.9rem', color: '#353B40' }}>
                    <CheckCircle size={16} color="var(--racing-orange)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span>{am}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-compact section-light">
        <div className="container">
          <BookingCtaBanner
            title="Plan Your Visit to TreadCraft Flagship Hub"
            subtitle="Book an allocated time slot to ensure zero waiting time upon arrival. Our team prepares your tyre set before you pull into the bay."
          />
        </div>
      </section>
    </>
  );
}
