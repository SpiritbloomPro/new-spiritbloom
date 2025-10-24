export default function WowheadTalents({ spec, hero, string }) {

    const specList = {
        Evoker: 'evoker/preservation',
        Shaman: 'shaman/restoration',
        Paladin: 'paladin/holy',
        Priest: 'priest/holy'
    };

    const heroTalentList = {
        Flameshaper: 'flameshaper',
        Chronowarden: 'chronowarden',
        Herald: 'herald-of-the-sun',
        Lightsmith: 'lightsmith',
        Farseer: 'farseer',
        Totemic: 'totemic',
        Archon: 'archon',
        Oracle: 'oracle'
    };

    const wowheadVersion = 'beta'; //Loading special versions of the wowhead site. Default = 'www'

    return (
        <iframe src={`https://${wowheadVersion}.wowhead.com/talent-calc/embed/${specList[spec]}/${heroTalentList[hero]}/${string}`} width={'100%'} height={'575px'} scrolling="no"></iframe>
    );

}
