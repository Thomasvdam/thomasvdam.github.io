import React from 'react';
import $ from './about.module.scss';

import Layout from '~/components/layout/layout';
import Image from '~/components/image';
import SEO from '~/components/seo';
import InfoBlock from '~/components/infoBlock/infoBlock';
import FirstWordHighlight from '~/components/firstWordHighlight/firstWordHighlight';

const IndexPage = () => (
  <Layout>
    <SEO title="About me" />
    <h2><FirstWordHighlight>About me</FirstWordHighlight></h2>

    <div className={$.upperContainer}>
      <div className={$.introText}>
        <p>
          I'm Thomas. I work at <a target="_blank" rel="noopener" href="https://www.wearetriple.com/">Triple</a> as a frontend web
          developer and do some 'coaching' on the side, more on that later.
        </p>
        <p>
          I created this site because I wanted to get some experience with Gatsby, I needed a holiday project, and
          it gives me a place to store my thoughts. It's not about publishing articles; I hope that the taking the time
          to write will give me the opportunity to structure my thoughts.
        </p>
      </div>

      <div className={$.pictureContainer}>
        <Image className={$.picture} filename="batman.png" title="I've never seen Batman and myself in the same room together..." alt="A photo of Thomas"/>
      </div>
    </div>

    <h2>Context</h2>

    <div className={$.infoContainer}>
      <InfoBlock className={$.moreInfo} title="Skills">
        <ul>
          <li>Frontend web development: HTML, CSS, JavaScript, and various frameworks/build tools</li>
          <li>Basic understanding of video streaming and playback</li>
          <li>Coaching</li>
        </ul>
      </InfoBlock>
      <InfoBlock className={$.moreInfo} title="Experience">
        <ul>
          <li>Bachelor's degree in English Language & Culture from the University of Amsterdam</li>
          <li>Master's degree in Information Studies: Game Studies track from the University of Amsterdam</li>
          <li>Frontend web developer at <a target="_blank" rel="noopener" href="https://www.wearetriple.com/">Triple</a></li>
        </ul>
      </InfoBlock>
      <InfoBlock className={`${$.moreInfo} ${$.moreInfo_wide}`} title="What I do now">
        <p>
          I'm currently a frontend web developer at <a target="_blank" rel="noopener" href="https://www.wearetriple.com/">Triple</a>,
          with a focus on the more technical side rather than the visual side (as you have probably already gathered).
          This includes video streaming; DRM; integration of various open source streaming projects such as hls.js,
          dash.js, Shaka Player; and Chromecast development.
        </p>
        <p>
          In addition to my position as a developer at Triple I've also been trying to help others as a kind of 'coach'
          , for lack of a better word. It boils down to keeping an eye on people's happiness level and helping them in
          their career/personal growth. It's still vague, but we're slowly figuring out what it is that I'm doing.
          Meanwhile, I'd like to think that I'm at least helping a few people be happier. :)
        </p>
      </InfoBlock>
    </div>

    <h2>My interests</h2>

    <div className={$.infoContainer}>
      <InfoBlock className={`${$.moreInfo} ${$.moreInfo_wide}`} title="Development">
        <p>
          While I'm working as a frontend web developer my interest in development is much broader. I'm interested in
          all programming languages; in particular strongly typed and compiled languages.
        </p>
        <p>
          As clearly demonstrated here I don't care too much for design/visuals. I'm more interested in the application
          architecture and technical implementation, as well as CI/CD, Git, and other related topics.
        </p>
      </InfoBlock>
      <InfoBlock className={$.moreInfo} title="Sports">
        <p>
          I enjoy being physically active and work out almost every day.
        </p>
      </InfoBlock>
      <InfoBlock className={$.moreInfo} title="Games">
        <p>
          I'm always up for a game, whether it's the virtual or physical kind.
        </p>
      </InfoBlock>
      <InfoBlock className={`${$.moreInfo} ${$.moreInfo_wide}`} title="Music">
        <p>
          I listen to music a lot (and I mean a <b>lot</b>). These days it's mostly techno and some house/techouse.
          I'm a huge fan of Richie Hawtin, in particular his CLOSE shows. There's a special place in my heart for Adam
          Beyer and his label Drumcode as well. I also still enjoy rock, punk, progressive metal, and a broad range of
          other genres from time to time.
        </p>
      </InfoBlock>
      <InfoBlock className={$.moreInfo} title="Music making / Synthesis">
        <p>
          While I have no musical background, I found myself really enjoying messing around with synthesizers and
          drumcomputers. Lately I've been diving into eurorack and learning a lot about sound synthesis in general.
        </p>
      </InfoBlock>
      <InfoBlock className={$.moreInfo} title="Mental health">
        <p>
          As it's something I struggle with from time to time I'm interested in mental wellbeing and how it influences
          me and how I can influence it in return.
        </p>
      </InfoBlock>
    </div>
  </Layout>
);

export default IndexPage;
