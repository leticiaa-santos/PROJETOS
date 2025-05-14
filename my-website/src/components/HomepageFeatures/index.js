import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Gabriela Melo',
    Svg: require('@site/static/img/perfil_gabriela.svg').default,
    description: (
      <>
        Texto descrevendo o que fez
      </>
    ),
  },
  {
    title: 'Geovanna',
    Svg: require('@site/static/img/perfil_geovanna.svg').default,
    description: (
      <>
        Texto descrevendo o que fez
      </>
    ),
  },
  {
    title: 'Letícia Oliveira',
    Svg: require('@site/static/img/perfil_leticia.svg').default,
    description: (
      <>
        Texto descrevendo o que fez
      </>
    ),
  },
  {
    title: 'Raphaela Tavares',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Texto descrevendo o que fez
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--3')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
