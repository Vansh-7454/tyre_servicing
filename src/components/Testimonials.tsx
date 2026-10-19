import React from 'react';
import { TESTIMONIALS_DATA } from '@/data/testimonials';
import { Star, ShieldCheck, Car } from 'lucide-react';

export default function Testimonials() {
  return (
    <div className="grid-cards-3">
      {TESTIMONIALS_DATA.map((t) => (
        <div
          key={t.id}
          className="card-premium"
          style={{
            padding: '2rem 1.75rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#FFFFFF',
          }}
        >
          <div>
            {/* Rating Stars & Sample Badge */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginBottom: '1rem',
              }}
            >
              <div style={{ display: 'flex', gap: '3px' }}>
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--racing-orange)" color="var(--racing-orange)" />
                ))}
              </div>
              <span
                style={{
                  fontSize: '0.68rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: '#7E878C',
                  backgroundColor: 'var(--warm-ivory)',
                  padding: '2px 7px',
                  borderRadius: '3px',
                  fontWeight: 600,
                }}
              >
                Sample Client Demo
              </span>
            </div>

            {/* Testimonial Quote */}
            <p
              style={{
                fontSize: '0.94rem',
                color: 'var(--carbon-black)',
                lineHeight: 1.62,
                fontStyle: 'italic',
                marginBottom: '1.5rem',
              }}
            >
              “{t.quote}”
            </p>
          </div>

          {/* Author Details & Vehicle */}
          <div
            style={{
              borderTop: '1px solid var(--border-light)',
              paddingTop: '1rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '0.35rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  fontSize: '1rem',
                  color: 'var(--carbon-black)',
                }}
              >
                {t.author}
              </span>
              <span style={{ fontSize: '0.78rem', color: '#7E878C' }}>{t.date}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.45rem', fontSize: '0.82rem', color: 'var(--racing-orange)', fontWeight: 600 }}>
              <Car size={14} />
              <span>{t.vehicle}</span>
            </div>

            <span style={{ fontSize: '0.78rem', color: '#586066' }}>
              Service: {t.service}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
