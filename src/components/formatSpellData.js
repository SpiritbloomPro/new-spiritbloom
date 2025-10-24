import EvokerSpells from '@site/static/spells/evoker.json';
import PaladinSpells from '@site/static/spells/paladin.json';
import ShamanSpells from '@site/static/spells/shaman.json';
import PriestSpells from '@site/static/spells/priest.json';
import OtherSpells from '@site/static/spells/other.json';

var fullSpellList = {};
const spellListSections = [
    'active-spells',
    'class-talents',
    'spec-talents',
    'hero-talents',
    'other'
];
const spellLists = [
    EvokerSpells,
    PaladinSpells,
    ShamanSpells,
    PriestSpells,
    OtherSpells
];

spellLists.forEach(function(list){
    spellListSections.forEach(function(section){
        if(typeof(list[section]) == "object"){
            for (const [key, val] of Object.entries(list[section])){
                fullSpellList[key] = val;
            }
        }
    });
});

export default fullSpellList;