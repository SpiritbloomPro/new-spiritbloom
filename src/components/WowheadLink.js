import EvokerSpells from '@site/static/spells/evoker.json';
import PaladinSpells from '@site/static/spells/paladin.json';
import ShamanSpells from '@site/static/spells/shaman.json';

export default function WowheadLink({ spellShorthand, language = 'en' }) {
    var spellId = EvokerSpells[spellShorthand];
    const selectedLanguage = language == 'en' ? 'www' : language;

    return (
        <a href={`https://${selectedLanguage}.wowhead.com/spell=${spellId}`} target="_blank" rel="noopener noreferrer">
            {spellShorthand}
        </a>
    );
}
