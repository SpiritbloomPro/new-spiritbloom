import React from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import contentImages from './contentImages.json';

// Helper to format filenames (e.g., "algethar-academy.png" -> "Algethar Academy")
function formatName(filename) {
  const name = filename.replace(/\.[^/.]+$/, ""); // strip extension
  const cleanName = name.replace(/^\d+-/, ""); // strip leading number and hyphen (e.g., "1-averzian" -> "averzian")
  return cleanName
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

export default function ContentGrid() {
  const { pathname } = useLocation();
  const spec = pathname.split('/').filter(Boolean)[0];
  const isSpec = spec && spec !== 'general';

  const { dungeons, raids } = contentImages;

  const renderCard = (item, type) => {
    const { filename, link, exists } = item;
    const displayName = formatName(filename);
    const imgSrc = `/img/content/${type}/${filename}`;

    let finalLink = link;
    if (exists && link && isSpec) {
      finalLink = `${link}?spec=${spec}`;
    }

    console.log(exists, finalLink)
    if (exists && finalLink) {
      return (
        <Link to={finalLink} key={filename} className="grid-card-link">
          <div className="grid-card">
            <img
              className="grid-card-image"
              src={imgSrc}
              alt={displayName}
              loading="lazy"
            />
          </div>
        </Link>
      );
    } else {
      return (
        <a key={filename} className="grid-card-link">
          <div className="grid-card no-link">
            <img
              className="grid-card-image no-link"
              src={imgSrc}
              alt={displayName}
              loading="lazy"
            />
          </div>
        </a>
      );
    }
  };

  return (
    <div className="content-grid-container">
      <h3 className="grid-section-title">Dungeons</h3>
      <div className="dungeons-grid">
        {dungeons.map(item => renderCard(item, 'dungeons'))}
      </div>

      <h3 className="grid-section-title">Raids</h3>
      <div className="raids-grid">
        {raids.map(item => renderCard(item, 'raids'))}
      </div>
    </div>
  );
}
