import fullSpellList from '@site/src/components/formatSpellData';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function WowheadLink({ spellShorthand }) {
    const { siteConfig, i18n } = useDocusaurusContext();
    const language = i18n.currentLocale;

    var spellId = fullSpellList[spellShorthand];

    if(spellId){
        const specialVersion = 'beta'; //This can be used to replace links with special wowhead versions. Default = ''
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
