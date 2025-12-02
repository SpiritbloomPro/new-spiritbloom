import React from 'react';
import {TitleFormatterProvider} from '@docusaurus/theme-common/internal';
const formatter = (params) => {
  // Add your own title formatting logic here!
  var pluginTitles = {
    "restoration-shaman": 'Shaman',
    "preservation": 'Evoker',
    "holy-paladin": 'Paladin',
    "holy-priest": 'Priest',
    "general": 'General Healing'
  };
  var currentPluging = params.plugin.id !== 'default' ? pluginTitles[params.plugin.id] + ' | ' : '';
  var title = params.title + ' | ' + currentPluging + params.siteTitle;
  return title;
};
export default function ThemeProviderTitleFormatter({children}) {
  return (
    <TitleFormatterProvider formatter={formatter}>
      {children}
    </TitleFormatterProvider>
  );
}
