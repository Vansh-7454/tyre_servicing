import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TyreProduct } from '@/data/tyres';
import { Fuel, Droplets, Volume2, ArrowRight, ShieldCheck } from 'lucide-react';

interface TyreCardProps {
  tyre: TyreProduct;
}

export default function TyreCard({ tyre }: TyreCardProps) {
  // EU Label Rating Colors
  const getRatingColor = (rating: string) => {
    switch (rating) {
      case 'A': return '#059669';
      case 'B': return '#10B981';
      case 'C': return '#D97706';
      default: return '#DC2626';
    }
  };

  return (
    <article
      className="card-premium"
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        backgroundColor: '#FFFFFF',
      }}
    >
      {/* Product Image Header */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '210px',
          backgroundColor: '#1E2327',
          overflow: 'hidden',
        }}
      >
        <Image
          src={tyre.image}
          alt={tyre.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: 'cover',
          }}
          className="tyre-card-img"
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
        {/* Category & Dimension Row */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.72rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              color: 'var(--racing-orange)',
            }}
          >
            {tyre.categoryLabel}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: 'var(--carbon-black)',
              backgroundColor: 'var(--warm-ivory)',
              padding: '2px 8px',
              borderRadius: '4px',
              border: '1px solid var(--border-light)',
            }}
          >
            {tyre.sizeExample}
          </span>
        </div>

        <h3
          style={{
            fontSize: '1.2rem',
            color: 'var(--carbon-black)',
            marginBottom: '0.5rem',
            lineHeight: 1.3,
            wordBreak: 'break-word',
          }}
        >
          {tyre.name}
        </h3>

        <p
          style={{
            fontSize: '0.88rem',
            color: 'var(--text-muted)',
            lineHeight: 1.55,
            marginBottom: '1.25rem',
            wordBreak: 'break-word',
          }}
        >
          {tyre.description}
        </p>

        {/* EU Tyre Label Ratings Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '0.35rem',
            backgroundColor: 'var(--warm-ivory)',
            padding: '0.65rem 0.5rem',
            borderRadius: '6px',
            marginBottom: '1.25rem',
            border: '1px solid var(--border-light)',
            width: '100%',
          }}
        >
          {/* Fuel Efficiency */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.68rem', color: '#586066' }}>
              <Fuel size={12} color="var(--racing-orange)" style={{ flexShrink: 0 }} />
              <span>Fuel</span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.05rem',
                color: getRatingColor(tyre.fuelEfficiency),
              }}
            >
              {tyre.fuelEfficiency}
            </span>
          </div>

          {/* Wet Grip */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.68rem', color: '#586066' }}>
              <Droplets size={12} color="#0284C7" style={{ flexShrink: 0 }} />
              <span>Wet</span>
            </div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.05rem',
                color: getRatingColor(tyre.wetGrip),
              }}
            >
              {tyre.wetGrip}
            </span>
          </div>

          {/* Noise dB */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', minWidth: 0 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.68rem', color: '#586066' }}>
              <Volume2 size={12} color="var(--carbon-black)" style={{ flexShrink: 0 }} />
              <span>Noise</span>
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.95rem', color: 'var(--carbon-black)', whiteSpace: 'nowrap' }}>
              {tyre.noiseLevelDb} dB
            </span>
          </div>
        </div>

        {/* Best For Note */}
        <div style={{ fontSize: '0.8rem', color: '#353B40', marginBottom: '1.25rem', lineHeight: 1.45, wordBreak: 'break-word' }}>
          <strong>Suitability:</strong> {tyre.bestFor}
        </div>

        {/* Illustrative Price Guide & CTA */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: '1rem',
            borderTop: '1px solid var(--border-light)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '0.65rem 0.75rem',
            width: '100%',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', minWidth: '110px' }}>
            <span style={{ fontSize: '0.68rem', color: '#7E878C', textTransform: 'uppercase', letterSpacing: '0.04em' }}>Sample Guide</span>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '0.94rem', color: 'var(--carbon-black)', whiteSpace: 'nowrap' }}>
              {tyre.illustrativePriceGuide.split('(')[0].trim()}
            </span>
          </div>

          <Link
            href={`/contact?service=Tyre+Fitting&tyre=${encodeURIComponent(tyre.name)}`}
            className="btn btn-primary btn-sm"
            style={{ flexShrink: 0 }}
          >
            <span>Enquire</span>
            <ArrowRight size={13} />
          </Link>
        </div>
      </div>
    </article>
  );
}
