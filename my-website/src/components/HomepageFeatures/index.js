import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gabriela Melo',
    imgSrc: '/img/perfil_gabriela.svg',
    description: (
      <>
        Texto descrevendo o que fez
      </>
    ),
  },
  {
    title: 'Geovanna',
    imgSrc: '/img/geovanna.svg',
    description: (
      <>
        Texto descrevendo o que fez
      </>
    ),
  },
  {
    title: 'Letícia Oliveira',
    imgSrc: '/img/perfil_leticia.svg',
    description: (
      <>
        Texto descrevendo o que fez
      </>
    ),
  },
  {
    title: 'Raphaela Tavares',
    imgSrc: '/img/undraw_docusaurus_tree.svg',
    description: (
      <>
        Texto descrevendo o que fez
      </>
    ),
  },
];

function Feature({ imgSrc, title, description }) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <img src={imgSrc} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}