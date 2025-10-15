import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary hero-banner')}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

const Guides = [
    {
        title: 'Preservation Evoker',
        link: 'preservation',
        image: 'preservation-guide.png'
    },
    {
        title: 'Holy Paladin',
        link: 'holy-paladin',
        image: 'hpal-guide.png'
    },
    {
        title: 'Restoration Shaman',
        link: 'restoration-shaman',
        image: 'rsham-guide.png'
    },
    {
        title: 'Holy Priest',
        link: 'holy-priest',
        image: 'hpriest-guide.png'
    }
];

function Guide({title, link, image}){
    return (
        <div className={clsx('col col--2 guide-box')}>
            <Link to={link}>
                <Heading as="h3" className='guide-boxes-title'>{title}</Heading>
                <img className='guide-boxes-image' src={'/img/' + image}></img>
            </Link>
        </div>
    );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
        title={`Level up your Healing`}
        description="Healer guides and articles">
        <HomepageHeader />
        <main>
            <div className="container">
                <div className="guide-boxes-container">
                    {Guides.map((props, idx) => (
                        <Guide key={idx} {...props} />
                    ))}
                </div>
            </div>
        </main>
    </Layout>
  );
}
