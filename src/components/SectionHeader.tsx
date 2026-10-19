import React from 'react';

interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  highlightWord?: string;
  description?: string;
  align?: 'left' | 'center';
  theme?: 'dark' | 'light';
  maxWidth?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  highlightWord,
  description,
  align = 'left',
  theme = 'light',
  maxWidth = '720px',
}: SectionHeaderProps) {
  const isDark = theme === 'dark';
  const isCenter = align === 'center';

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCenter ? 'center' : 'flex-start',
        textAlign: isCenter ? 'center' : 'left',
        marginBottom: 'clamp(2.5rem, 5vw, 4rem)',
        maxWidth: isCenter ? maxWidth : '100%',
        marginLeft: isCenter ? 'auto' : '0',
        marginRight: isCenter ? 'auto' : '0',
      }}
    >
      {eyebrow && (
        <span
          className="eyebrow"
          style={{
            justifyContent: isCenter ? 'center' : 'flex-start',
          }}
        >
          {eyebrow}
        </span>
      )}

      <h2
        style={{
          color: isDark ? '#FFFFFF' : 'var(--carbon-black)',
          marginBottom: description ? '1.15rem' : 0,
          lineHeight: 1.18,
        }}
      >
        {title}
        {highlightWord && (
          <span style={{ color: 'var(--racing-orange)' }}> {highlightWord}</span>
        )}
      </h2>

      {description && (
        <p
          style={{
            color: isDark ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
            fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
            lineHeight: 1.68,
            maxWidth: maxWidth,
            margin: 0,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
