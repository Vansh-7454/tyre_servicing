'use client';

import React, { useState } from 'react';
import { FAQItem } from '@/data/faqs';
import { ChevronDown } from 'lucide-react';

interface FaqAccordionProps {
  items: FAQItem[];
  theme?: 'light' | 'dark';
}

export default function FaqAccordion({ items, theme = 'light' }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const isDark = theme === 'dark';

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              backgroundColor: isDark ? '#1E2327' : '#FFFFFF',
              border: isDark
                ? (isOpen ? '1px solid rgba(230, 106, 53, 0.5)' : '1px solid rgba(185, 191, 194, 0.15)')
                : (isOpen ? '1px solid rgba(230, 106, 53, 0.4)' : '1px solid var(--border-light)'),
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'border-color 200ms ease, box-shadow 200ms ease',
              boxShadow: isOpen ? '0 4px 16px rgba(0,0,0,0.06)' : 'none',
            }}
          >
            <button
              onClick={() => toggle(idx)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                textAlign: 'left',
                backgroundColor: 'transparent',
                cursor: 'pointer',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: isDark ? '#FFFFFF' : 'var(--carbon-black)',
                  lineHeight: 1.35,
                }}
              >
                {item.question}
              </span>
              <div
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 200ms cubic-bezier(0.16, 1, 0.3, 1)',
                  color: isOpen ? 'var(--racing-orange)' : (isDark ? '#B9BFC2' : '#586066'),
                  flexShrink: 0,
                }}
              >
                <ChevronDown size={20} />
              </div>
            </button>

            {isOpen && (
              <div
                style={{
                  padding: '0 1.5rem 1.35rem 1.5rem',
                  borderTop: isDark ? '1px solid rgba(185, 191, 194, 0.08)' : '1px solid var(--border-light)',
                  paddingTop: '0.85rem',
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontSize: '0.94rem',
                    lineHeight: 1.65,
                    color: isDark ? '#B9BFC2' : 'var(--text-muted)',
                  }}
                >
                  {item.answer}
                </p>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
