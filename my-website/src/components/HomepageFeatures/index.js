import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gabriela Melo',
    imgSrc: '/img/perfil_gabriela.svg',
    description: (
      <>
        Escreveu sobre Views e Models
      </>
    ),
  },
  {
    title: 'Geovanna',
    imgSrc: '/img/geovanna.svg',
    description: (
      <>
        Escreveu sobre Urls
      </>
    ),
  },
  {
    title: 'Letícia Oliveira',
    imgSrc: '/img/perfil_leticia.svg',
    description: (
      <>
        Escreveu a introdução e sobre o settings
      </>
    ),
  },
  {
    title: 'Raphaela Tavares',
    imgSrc: '/img/perfil_raphaela.svg',
    description: (
      <>
        Escreveu sobre o serializers
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