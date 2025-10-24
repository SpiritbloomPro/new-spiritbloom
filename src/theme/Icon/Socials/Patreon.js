import React from 'react';

export default function Patreon({className, alt = 'Patreon', ...props}) {
  return (
    <img
      src="/img/patreon-favicon.png"
      alt={alt}
      className={className}
      {...props}
      style={{width: '1em', height: '1em', display: 'inline-block'}}
    />
  );
}
