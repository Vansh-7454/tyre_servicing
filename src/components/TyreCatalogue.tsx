'use client';

import React, { useState } from 'react';
import TyreCard from './TyreCard';
import { TYRES_DATA, TYRE_CATEGORIES, TyreProduct } from '@/data/tyres';
import { Filter, Search } from 'lucide-react';

export default function TyreCatalogue() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredTyres = TYRES_DATA.filter((tyre) => {
    const matchesCategory = selectedCategory === 'all' || tyre.category === selectedCategory;
    const matchesSearch =
      tyre.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tyre.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tyre.sizeExample.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tyre.bestFor.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      {/* Category Pills & Search Filter */}
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          marginBottom: '2.5rem',
          backgroundColor: '#FFFFFF',
          padding: '1.25rem clamp(0.85rem, 3vw, 1.5rem)',
          borderRadius: '10px',
          border: '1px solid var(--border-light)',
          boxShadow: 'var(--shadow-subtle)',
          width: '100%',
        }}
      >
        {/* Category Buttons */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem', maxWidth: '100%' }}>
          {TYRE_CATEGORIES.map((cat) => {
            const isSelected = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(0.78rem, 2vw, 0.85rem)',
                  fontWeight: isSelected ? 700 : 500,
                  padding: '0.45rem clamp(0.75rem, 2vw, 1.15rem)',
                  borderRadius: '9999px',
                  backgroundColor: isSelected ? 'var(--carbon-black)' : 'var(--warm-ivory)',
                  color: isSelected ? 'var(--warm-ivory)' : 'var(--carbon-black)',
                  border: isSelected ? '1px solid var(--carbon-black)' : '1px solid var(--border-light)',
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                }}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Quick Search */}
        <div style={{ position: 'relative', flex: '1 1 200px', width: '100%', maxWidth: '400px', minWidth: 0 }}>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by size, vehicle, or feature..."
            style={{
              width: '100%',
              padding: '0.55rem 1rem 0.55rem 2.25rem',
              borderRadius: '6px',
              border: '1px solid var(--border-light)',
              backgroundColor: 'var(--warm-ivory)',
              fontSize: '0.85rem',
              fontFamily: 'inherit',
            }}
          />
          <Search size={15} color="#7E878C" style={{ position: 'absolute', left: '0.75rem', top: '50%', transform: 'translateY(-50%)' }} />
        </div>
      </div>

      {/* Product Cards Grid — Fluid & Responsive */}
      {filteredTyres.length > 0 ? (
        <div className="grid-cards-3">
          {filteredTyres.map((tyre) => (
            <TyreCard key={tyre.id} tyre={tyre} />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: '4rem 1.5rem',
            backgroundColor: '#FFFFFF',
            borderRadius: '10px',
            border: '1px solid var(--border-light)',
          }}
        >
          <Filter size={36} color="var(--racing-orange)" style={{ margin: '0 auto 1rem auto' }} />
          <h3 style={{ fontSize: '1.25rem', color: 'var(--carbon-black)', marginBottom: '0.5rem' }}>
            No Tyres Matched Your Filter
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.92rem', marginBottom: '1.25rem' }}>
            Try resetting your search query or selecting a different tyre category.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="btn btn-secondary btn-sm"
          >
            Reset Filters
          </button>
        </div>
      )}
    </div>
  );
}
