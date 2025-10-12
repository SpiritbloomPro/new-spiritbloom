import EvokerSpells from '@site/static/spells/evoker.json';
import PaladinSpells from '@site/static/spells/paladin.json';
import ShamanSpells from '@site/static/spells/shaman.json';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function WowheadLink({ spellShorthand }) {
    const { siteConfig, i18n } = useDocusaurusContext();
    const language = i18n.currentLocale;

    var spellId = EvokerSpells[spellShorthand];
    if(!spellId){
        spellId = PaladinSpells[spellShorthand];
    }
    if(!spellId){
        spellId = ShamanSpells[spellShorthand];
    }

    if(spellId){
        const specialVersion = 'beta'; //This can be used to replace links with special wowhead versions
        var wowheadVersion;
        if(language == 'en'){
            if(specialVersion != ''){
                wowheadVersion = `/${specialVersion}/`;
            } else {
                wowheadVersion = ''
            }
        } else {
            wowheadVersion = `/${language}/`;
        }

        return (
            <a href={`https://www.wowhead.com${wowheadVersion}spell=${spellId}`} target="_blank" rel="noopener noreferrer">
                {spellShorthand}
            </a>
        );
    } else {
        return (
            <>[{spellShorthand}]</>
        );
    }
}
