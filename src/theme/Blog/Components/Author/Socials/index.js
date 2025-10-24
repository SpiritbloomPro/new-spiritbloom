import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Twitter from '@theme/Icon/Socials/Twitter';
import GitHub from '@theme/Icon/Socials/GitHub';
import X from '@theme/Icon/Socials/X';
import StackOverflow from '@theme/Icon/Socials/StackOverflow';
import LinkedIn from '@theme/Icon/Socials/LinkedIn';
import DefaultSocialIcon from '@theme/Icon/Socials/Default';
import Bluesky from '@theme/Icon/Socials/Bluesky';
import Instagram from '@theme/Icon/Socials/Instagram';
import Threads from '@theme/Icon/Socials/Threads';
import Youtube from '@theme/Icon/Socials/YouTube';
import Mastodon from '@theme/Icon/Socials/Mastodon';
import Twitch from '@theme/Icon/Socials/Twitch';
import Email from '@theme/Icon/Socials/Email';
import Patreon from '@theme/Icon/Socials/Patreon';
import styles from './styles.module.css';
const SocialPlatformConfigs = {
  twitter: {Icon: Twitter, label: 'Twitter'},
  github: {Icon: GitHub, label: 'GitHub'},
  stackoverflow: {Icon: StackOverflow, label: 'Stack Overflow'},
  linkedin: {Icon: LinkedIn, label: 'LinkedIn'},
  x: {Icon: X, label: 'X'},
  bluesky: {Icon: Bluesky, label: 'Bluesky'},
  instagram: {Icon: Instagram, label: 'Instagram'},
  threads: {Icon: Threads, label: 'Threads'},
  mastodon: {Icon: Mastodon, label: 'Mastodon'},
  youtube: {Icon: Youtube, label: 'YouTube'},
  patreon: {Icon: Patreon, label: 'Patreon'},
  twitch: {Icon: Twitch, label: 'Twitch'},
  email: {Icon: Email, label: 'Email'},
};
function getSocialPlatformConfig(platformKey) {
  return (
    SocialPlatformConfigs[platformKey] ?? {
      Icon: DefaultSocialIcon,
      label: platformKey,
    }
  );
}
function SocialLink({platform, link}) {
  const {Icon, label} = getSocialPlatformConfig(platform);
  // Normalize username-only inputs into full links for known platforms
  let href = link;
  if (typeof link === 'string') {
    const isUrl = /^(https?:)?\/\//i.test(link) || link.includes('/');
    if (!isUrl) {
      // Only auto-expand Patreon usernames to full URLs here.
      // Other platforms are already handled elsewhere in the codebase.
      if (platform === 'patreon') {
        href = `https://www.patreon.com/${link}`;
      }
    }
  }

  return (
    <Link className={styles.authorSocialLink} href={href} title={label}>
      <Icon className={clsx(styles.authorSocialIcon)} />
    </Link>
  );
}
export default function BlogAuthorSocials({author}) {
  const entries = Object.entries(author.socials ?? {});
  return (
    <div className={styles.authorSocials}>
      {entries.map(([platform, linkUrl]) => {
        return <SocialLink key={platform} platform={platform} link={linkUrl} />;
      })}
    </div>
  );
}
