import React from 'react';
import {useLocation} from '@docusaurus/router';

const imageMap = {
    'preservation': {
        'image': 'preservation-content-hero.png',
        'title': 'Preservation Evoker'
    },
    'holy-paladin': {
        'image': 'holy-paladin-content-hero.png',
        'title': 'Holy Paladin'
    },
    'restoration-shaman': {
        'image': 'restoration-shaman-content-hero.png',
        'title': 'Restoration Shaman'
    },
    'holy-priest': {
        'image': 'holy-priest-content-hero.png',
        'title': 'Holy Priest'
    },
    'general' : {
        'image': 'home-hero.jpg',
        'title': 'General Healing'
    },
    'blog' : {
        'image': 'home-hero.jpg',
        'title': 'Blog'
    },
    'support' : {
        'image': 'home-hero.jpg',
        'title': 'Support SpiritbloomPro'
    }
};

export default function ContentHero() {
  const {pathname} = useLocation();
  const pluginKey = pathname.split('/').filter(Boolean)[0]; // first path segment
  if(pluginKey && imageMap[pluginKey]){
    const image = '/img/' + imageMap[pluginKey]['image'];
    const title = imageMap[pluginKey]['title'];
    return (
        <div className="content-hero" style={{backgroundImage: `url(${image})`}}>
            <h1 className="content-hero-title">{title}</h1>
        </div>
    );
  } else {
    return null;
  }
}