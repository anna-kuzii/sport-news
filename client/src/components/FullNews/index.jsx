import React from 'react';
import './style.scss';

export const FullNews = () => {
  return (
    <section className='single-news-container'>
      <div className='news-wrapper'>
        <div className='top-info'>
          <h4>
            <span className='nba-span'>NBA </span> <p className='nba-paragraph'> &gt; Tennessee / As M.L.B. &apos; s Season Opens in Japan, at Least the Dirt Is Familiar</p>
          </h4>
        </div>
        <div className='middle-container'>
          <div className='image-container'>
            <div>NBA PHOTO</div>
          </div>
          <div className='card-container'>
            <h4>Published / 20.09.2019</h4>
            <h3>Article by Some Name / Assosiated Prass</h3>
            <h2>
                As M.L.B. &apos; s Season Opens in Japan, at Least the Dirt Is Familiar
            </h2>
          </div>
        </div>
        <div className='information'>
          <p>
              TOKYO — Major League Baseball begins its 2019 season on Wednesday in
              Japan with the first of two games between the Oakland Athletics and the <span>Seattle Mariners</span>. NBA which equipe is the best? But when the teams take
              the field at the Tokyo Dome, don’t say they’re playing on foreign soil.
          </p>
          <p>
              That’s because 12 tons of clay, silt and sand mixtures have been shipped
              by boat from the United States to make the batter’s box, pitcher’s
              mound, base pits and bullpens feel like home. The dirt swap was news to
              the veteran Seattle pitcher Mike Leake, who nonetheless gave his stomp
              of approval after starting the first of two exhibition games each club
              played against teams from <span>Japan’s Nippon Professional Baseball</span> as a
              tuneup.
          </p>
          <p>
              “Oh, you mean we weren’t pitching on the same mound the Japanese
              teams use during their season?” Leake said Sunday. “It felt like the
              same mound that we pitch on in the States. The only thing I would say is
              that maybe they put a little too much water at first, so some of the
              clay stuck to my spikes in the first inning, but that happens at home,
              too. After that, it was perfect.”
          </p>
        </div>
      </div>
      
    </section>
  );
};


