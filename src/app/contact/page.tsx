import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import BookingForm from '@/components/BookingForm';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import { BRAND_INFO } from '@/data/navigation';
import { WORKSHOP_DETAILS } from '@/data/workshop';
import {
  Phone,
  MessageSquare,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Lock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Contact Us & Book a Service Appointment',
  description:
    'Schedule your tyre fitting, 3D laser wheel alignment, or dynamic road-force balance appointment at TreadCraft Auto Care. Direct WhatsApp consultation available.',
};

export default function ContactPage() {
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
          <Breadcrumbs items={[{ label: 'Contact & Booking' }]} theme="dark" />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow" style={{ color: 'var(--racing-orange)' }}>
              Direct Technician Scheduling
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                lineHeight: 1.12,
              }}
            >
              Contact & Book a Service
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#B9BFC2',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Reserve an allocated alignment bay or enquire regarding specific tyre compound sizes. Our technician desk confirms vehicle fitment specs and schedules your appointment promptly.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form and Direct Contact Cards Section */}
      <section className="section section-light">
        <div className="container">
          <div className="grid-cards-2" style={{ gap: 'clamp(2.5rem, 5vw, 4rem)', alignItems: 'flex-start' }}>
            {/* Left Column: Direct Contact Info Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div>
                <span className="eyebrow">Immediate Assistance</span>
                <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', marginBottom: '1rem' }}>
                  Speak Directly With a Technician
                </h2>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.65 }}>
                  Prefer to speak with our service manager directly? Call our workshop desk or launch an instant WhatsApp thread with your vehicle details.
                </p>
              </div>

              {/* Direct Channels Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {/* Telephone Card */}
                <a
                  href={`tel:${BRAND_INFO.phoneTel}`}
                  className="card-premium"
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    textDecoration: 'none',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(230, 106, 53, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Phone size={22} color="var(--racing-orange)" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: '#7E878C', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block' }}>
                      Workshop Service Line
                    </span>
                    <strong style={{ fontSize: '1.15rem', color: 'var(--carbon-black)' }}>
                      {BRAND_INFO.phoneDisplay}
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: '#059669', display: 'block', marginTop: '2px' }}>
                      ● Lines Open 08:00 – 18:30 (Mon–Fri)
                    </span>
                  </div>
                </a>

                {/* WhatsApp Card */}
                <a
                  href={`https://wa.me/${BRAND_INFO.whatsappNumber.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card-premium"
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    textDecoration: 'none',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(16, 185, 129, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <MessageSquare size={22} color="#059669" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: '#7E878C', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block' }}>
                      WhatsApp Direct Desk
                    </span>
                    <strong style={{ fontSize: '1.15rem', color: 'var(--carbon-black)' }}>
                      {BRAND_INFO.whatsappNumber}
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: '#586066', display: 'block', marginTop: '2px' }}>
                      Send photos of tyre wear for instant advisory
                    </span>
                  </div>
                </a>

                {/* Email Card */}
                <a
                  href={`mailto:${BRAND_INFO.email}`}
                  className="card-premium"
                  style={{
                    padding: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1.25rem',
                    textDecoration: 'none',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(23, 26, 29, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                    }}
                  >
                    <Mail size={22} color="var(--carbon-black)" />
                  </div>
                  <div>
                    <span style={{ fontSize: '0.78rem', color: '#7E878C', textTransform: 'uppercase', letterSpacing: '0.06em', display: 'block' }}>
                      Electronic Inquiries & Fleets
                    </span>
                    <strong style={{ fontSize: '1.05rem', color: 'var(--carbon-black)' }}>
                      {BRAND_INFO.email}
                    </strong>
                    <span style={{ fontSize: '0.8rem', color: '#586066', display: 'block', marginTop: '2px' }}>
                      Responses within 2 business hours
                    </span>
                  </div>
                </a>
              </div>

              {/* Physical Workshop Card */}
              <div
                style={{
                  backgroundColor: '#FFFFFF',
                  borderRadius: '10px',
                  padding: '1.5rem',
                  border: '1px solid var(--border-light)',
                  boxShadow: 'var(--shadow-subtle)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', marginBottom: '1rem' }}>
                  <MapPin size={20} color="var(--racing-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <strong style={{ color: 'var(--carbon-black)', fontSize: '0.98rem', display: 'block' }}>
                      TreadCraft Flagship Diagnostic Hub
                    </strong>
                    <span style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                      {BRAND_INFO.address}
                    </span>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <Clock size={18} color="var(--racing-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <span>Mon – Fri: 08:00 – 18:30</span><br />
                    <span>Sat: 08:30 – 16:30 | Sun: Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Booking Form */}
            <div>
              <Suspense fallback={<div style={{ padding: '2rem', textAlign: 'center' }}>Loading booking portal...</div>}>
                <BookingForm />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
