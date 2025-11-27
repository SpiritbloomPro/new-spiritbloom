import React from 'react';

export default function Image({alt, ...props}) {
  return (
    <figure style={{textAlign: 'center', margin: 0}}>
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <img {...props} alt={alt} style={{ height: 'auto' }} />
      {alt && <figcaption style={{fontSize: '0.9em', color: 'var(--ifm-color-emphasis-700)', fontStyle: 'italic' }}>{alt}</figcaption>}
    </figure>
  );
}
