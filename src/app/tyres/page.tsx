import React from 'react';
import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import SectionHeader from '@/components/SectionHeader';
import TyreCatalogue from '@/components/TyreCatalogue';
import TyreSpecVisualizer from '@/components/TyreSpecVisualizer';
import FaqAccordion from '@/components/FaqAccordion';
import BookingCtaBanner from '@/components/BookingCtaBanner';
import { FAQS_DATA } from '@/data/faqs';
import { ShieldCheck, Compass, CloudRain, Zap, Check, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Tyre Catalogue & Size Specification Guide',
  description:
    'Browse TreadCraft tyre categories including Ultra High Performance, Touring, SUV 4x4, All-Weather, and EV Silent Acoustic tyres. Decode sidewall sizes and find the right compound.',
};

export default function TyresPage() {
  const tyreFaqs = FAQS_DATA.filter((f) => f.category === 'tyres' || f.category === 'general');

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
          <Breadcrumbs items={[{ label: 'Tyre Catalogue' }]} theme="dark" />

          <div style={{ maxWidth: '820px' }}>
            <span className="eyebrow" style={{ color: 'var(--racing-orange)' }}>
              Engineered Rubber & Tread Profiles
            </span>
            <h1
              style={{
                fontSize: 'clamp(2.5rem, 4.5vw, 3.8rem)',
                color: '#FFFFFF',
                marginBottom: '1.25rem',
                lineHeight: 1.12,
              }}
            >
              Tyre Catalogue & Specification Guide
            </h1>
            <p
              style={{
                fontSize: '1.15rem',
                color: '#B9BFC2',
                lineHeight: 1.65,
                margin: 0,
              }}
            >
              Explore our curated tyre range categorized by vehicle dynamics, wet grip ratings, and noise dampening characteristics. Decode your vehicle sidewall markings and request a personalized fitment consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Main Catalogue Section */}
      <section className="section section-light">
        <div className="container">
          <div style={{ marginBottom: '2.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '0.75rem' }}>
              <h2>Browse Tyre Categories</h2>
              <span
                style={{
                  fontSize: '0.75rem',
                  backgroundColor: 'rgba(23, 26, 29, 0.08)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  color: '#586066',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                Sample Catalogue Models
              </span>
            </div>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', margin: 0, maxWidth: '720px' }}>
              Note: All models and prices shown are illustrative demonstrations for the TreadCraft Auto Care showcase. Actual fitments are ordered from certified distributors based on your vehicle VIN and rim dimensions.
            </p>
          </div>

          <TyreCatalogue />
        </div>
      </section>

      {/* Tyre Sidewall Marking Decoding Visualizer */}
      <section className="section section-graphite">
        <div className="container">
          <SectionHeader
            eyebrow="Technical Education"
            title="Understanding Your Tyre Dimensions"
            description="Before replacing tyres, verify your sidewall sequence. Each alphanumeric value defines critical load, speed, and rim compatibility tolerances."
            theme="dark"
            align="center"
          />

          <TyreSpecVisualizer />
        </div>
      </section>

      {/* How to Choose the Right Tyre Guide */}
      <section className="section section-white">
        <div className="container">
          <SectionHeader
            eyebrow="Purchasing Advisory"
            title="How to Choose the Right Tyre for Your Driving Needs"
            description="Selecting tyres is an engineering decision balancing treadwear, wet stopping power, and cabin refinement."
            align="left"
          />

          <div className="grid-cards-4">
            {[
              {
                icon: CloudRain,
                title: '1. European Wet Grip Ratings',
                desc: 'Look for an "A" rating in wet braking. Stopping from 80 km/h in wet conditions on A-rated tyres is up to 18 metres shorter than F-rated equivalents — more than 4 full car lengths.',
              },
              {
                icon: Zap,
                title: '2. Low Rolling Resistance & Range',
                desc: 'Tyres account for up to 20% of vehicle fuel consumption and up to 15% of EV battery range. A-rated rolling resistance reduces powertrain drag significantly over 50,000 km.',
              },
              {
                icon: Compass,
                title: '3. Seasonal Compound Chemistry',
                desc: 'Summer tyres lose elasticity below 7°C. If you drive extensively through cold winter months without dedicated winter tyres, select 3PMSF-certified All-Weather compounds.',
              },
              {
                icon: ShieldCheck,
                title: '4. Load & Speed Index Compliance',
                desc: 'Never fit a tyre with a lower load index than specified in your vehicle door-pillar placard. Heavy kerb weights, especially on modern SUVs and EVs, demand XL reinforced casings.',
              },
            ].map((guide, idx) => {
              const Icon = guide.icon;
              return (
                <div
                  key={idx}
                  className="card-premium"
                  style={{
                    padding: '2rem 1.75rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <div
                    style={{
                      width: '46px',
                      height: '46px',
                      borderRadius: '8px',
                      backgroundColor: 'rgba(230, 106, 53, 0.12)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Icon size={24} color="var(--racing-orange)" />
                  </div>

                  <h3 style={{ fontSize: '1.2rem', color: 'var(--carbon-black)', margin: 0 }}>
                    {guide.title}
                  </h3>

                  <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.62, margin: 0 }}>
                    {guide.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tyre FAQs */}
      <section className="section section-light">
        <div className="container container-narrow">
          <SectionHeader
            eyebrow="Purchasing Questions"
            title="Tyre Care & Fitment FAQs"
            description="Common inquiries regarding tyre wear, run-flat replacements, and legal regulations."
            align="center"
          />

          <FaqAccordion items={tyreFaqs} theme="light" />
        </div>
      </section>

      {/* Booking CTA */}
      <section className="section-compact section-light">
        <div className="container">
          <BookingCtaBanner
            title="Need Assistance Choosing the Ideal Tyre?"
            subtitle="Send your vehicle registration number or current tyre size to our technician desk for personalized compound recommendations and immediate price quotes."
          />
        </div>
      </section>
    </>
  );
}
