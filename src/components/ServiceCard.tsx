import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ServiceItem } from '@/data/services';
import { Clock, Shield, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServiceCardProps {
  service: ServiceItem;
  theme?: 'light' | 'dark';
}

export default function ServiceCard({ service, theme = 'light' }: ServiceCardProps) {
  const isDark = theme === 'dark';

  return (
    <article
      className={isDark ? 'card-dark' : 'card-premium'}
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative',
      }}
    >
      {/* Service Image Banner */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '220px',
          overflow: 'hidden',
          backgroundColor: '#1E2327',
        }}
      >
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
            transition: 'transform 400ms cubic-bezier(0.16, 1, 0.3, 1)',
          }}
          className="service-card-image"
        />
      </div>

      {/* Card Body */}
      <div
        style={{
          padding: '1.35rem clamp(1rem, 3.5vw, 1.5rem)',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          width: '100%',
        }}
      >
        {/* Category & Duration Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.74rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--racing-orange)',
            }}
          >
            {service.category}
          </span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.76rem', color: isDark ? '#9BA3A8' : '#7E878C' }}>
            <Clock size={12} color="var(--racing-orange)" />
            <span>{service.estimatedDuration}</span>
          </div>
        </div>

        <h3
          style={{
            fontSize: '1.25rem',
            color: isDark ? '#FFFFFF' : 'var(--carbon-black)',
            marginBottom: '0.75rem',
            lineHeight: 1.3,
          }}
        >
          {service.title}
        </h3>

        <p
          style={{
            fontSize: '0.92rem',
            color: isDark ? '#9BA3A8' : '#586066',
            lineHeight: 1.6,
            marginBottom: '1.25rem',
            flexGrow: 1,
          }}
        >
          {service.shortDescription}
        </p>

        {/* Key Benefits Checklist */}
        <div
          style={{
            borderTop: isDark ? '1px solid rgba(185, 191, 194, 0.12)' : '1px solid var(--border-light)',
            paddingTop: '1rem',
            marginBottom: '1.25rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}
        >
          {service.keyBenefits.slice(0, 2).map((benefit, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '0.5rem',
                fontSize: '0.82rem',
                color: isDark ? '#E8E2D5' : '#353B40',
                lineHeight: 1.4,
              }}
            >
              <CheckCircle2 size={14} color="var(--racing-orange)" style={{ flexShrink: 0, marginTop: '2px' }} />
              <span>{benefit}</span>
            </div>
          ))}
        </div>

        {/* Equipment Stamp */}
        <div
          style={{
            fontSize: '0.76rem',
            color: isDark ? '#7E878C' : '#8A9297',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.4rem',
          }}
        >
          <Shield size={12} color="var(--racing-orange)" />
          <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {service.equipmentUsed}
          </span>
        </div>

        {/* Action Row */}
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
          }}
        >
          <Link
            href={`/contact?service=${encodeURIComponent(service.title)}`}
            className="btn btn-primary btn-sm"
            style={{ width: '100%' }}
          >
            <span>Book This Service</span>
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </article>
  );
}
