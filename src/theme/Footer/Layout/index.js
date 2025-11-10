import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {ThemeClassNames} from '@docusaurus/theme-common';

var Links = [
    {
        alt: 'QuestionablyEpic Live',
        image: '/img/qelive-image.png',
        link: 'https://questionablyepic.com/live'
    },
    {
        alt: 'SpiritbloomPro Discord',
        image: '/img/discord-image.png',
        link: 'http://discord.spiritbloom.pro'
    }
];

function FooterElement({alt, link, image}){
    return (
        <div className={clsx('col footer-element')}>
            <Link to={link}>
                <div className='footer-element-image-container'>
                    <img className='footer-element-image' src={image} alt={alt}></img>
                </div>
                <h4>{alt}</h4>
            </Link>
        </div>
    );
}

export default function FooterLayout({style, links, logo, copyright}) {
    return (
        <footer
        className={clsx(ThemeClassNames.layout.footer.container, 'footer', {
            'footer--dark': style === 'dark',
        })}>
        <div className="container container-fluid">
            <div className="container footer-elements-container">
                {Links.map((props, idx) => (
                    <FooterElement key={idx} {...props} />
                ))}
            </div>
            {(logo || copyright) && (
            <div className="footer__bottom text--center">
                {copyright}
            </div>
            )}
        </div>
        </footer>
    );
}
