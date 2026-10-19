import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  items: { label: string; href?: string }[];
  theme?: 'light' | 'dark';
}

export default function Breadcrumbs({ items, theme = 'dark' }: BreadcrumbsProps) {
  const isDark = theme === 'dark';

  return (
    <nav
      aria-label="Breadcrumb"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.45rem',
        fontSize: '0.8rem',
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        color: isDark ? '#9BA3A8' : '#586066',
        marginBottom: '1.25rem',
      }}
    >
      <Link
        href="/"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.35rem',
          color: isDark ? '#B9BFC2' : '#353B40',
          transition: 'color 150ms ease',
        }}
        className="breadcrumb-home"
      >
        <Home size={13} color="var(--racing-orange)" />
        <span>Home</span>
      </Link>

      {items.map((item, idx) => {
        const isLast = idx === items.length - 1;
        return (
          <React.Fragment key={idx}>
            <ChevronRight size={13} color={isDark ? '#586066' : '#B9BFC2'} />
            {item.href && !isLast ? (
              <Link
                href={item.href}
                style={{
                  color: isDark ? '#B9BFC2' : '#353B40',
                  transition: 'color 150ms ease',
                }}
              >
                {item.label}
              </Link>
            ) : (
              <span
                style={{
                  color: isDark ? '#FFFFFF' : 'var(--carbon-black)',
                  fontWeight: 600,
                }}
              >
                {item.label}
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
