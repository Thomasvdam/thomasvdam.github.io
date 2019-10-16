import React from 'react';
import $ from './about.module.scss';

import Layout from '~/components/layout/layout';
import Image from '~/components/image';
import SEO from '~/components/seo';
import InfoBlock from '~/components/infoBlock/infoBlock';

const IndexPage = () => (
  <Layout>
    <SEO title="About me" />
    <h2>About me</h2>

    <div className={$.upperContainer}>
      <div className={$.introText}>
        <p>
          I'm Thomas. I work at <a target="_blank" href="https://www.wearetriple.com/">Triple</a> as a frontend web
          developer and 'personal coach', more on that later.
        </p>
        <p>
          I created this site because I wanted to get some experience with Gatsby, I needed a holiday project, and
          it gives me a place to store my thoughts. It's not about publishing articles, I hope that the act of writing
          will help me structure my thoughts.
        </p>
      </div>

      <div className={$.pictureContainer}>
        <Image filename="batman.png" title="I've never seen Batman and myself in the same room together..." alt="A photo of Thomas"/>
      </div>
    </div>

    <h2>Context</h2>

    <div className={$.middleContainer}>
      <InfoBlock className={$.moreInfo} title="What I do">
        Filler.
      </InfoBlock>
      <InfoBlock className={$.moreInfo} title="Experience">
        Filler.
      </InfoBlock>
    </div>

    <h2>My interests</h2>

    <div className={$.lowerContainer}>
      <InfoBlock className={$.moreInfo} title="Development">
        Filler.
      </InfoBlock>
      <InfoBlock className={$.moreInfo} title="Music">
        Filler.
      </InfoBlock>
      <InfoBlock className={$.moreInfo} title="Music making / Synthesis">
        Filler.
      </InfoBlock>
      <InfoBlock className={$.moreInfo} title="Sports">
        Filler.
      </InfoBlock>
      <InfoBlock className={$.moreInfo} title="Games">
        Filler.
      </InfoBlock>
      <InfoBlock className={$.moreInfo} title="Mental health">
        Filler.
      </InfoBlock>
    </div>
  </Layout>
);

export default IndexPage;
