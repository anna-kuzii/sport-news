import React from 'react';
import './style.scss';
import teamImg from '../../assets/img/Basketball.png';
import { Route, Switch } from 'react-router-dom';
import { Header } from '../Header';
import { Menu } from '../Menu';
import menuData from '../../assets/data/menuItems.json';

export const NewsArticle = () => (
  <Route exact path='/news'>
    <Switch>
      <Header />
    </Switch>
    <Switch>
      <Menu menuList={menuData.menu} />
    </Switch>
    <section className='single-news-container'>
      <div className='news-wrapper'>
        <div className='top-info'>
          <h4>
            <span className='team-name'>NBA </span> <p className='team-paragraph'> &gt; Tennessee / As M.L.B. &apos; s Season Opens in Japan, at Least the Dirt Is Familiar</p>
          </h4>
        </div>
        <div className='article-brochure'>
          <div className='image-container'>
            <img src={teamImg} alt='team information' />
          </div>
          <div className='card-container'>
            <h4>Published / 20.09.2019</h4>
            <h3>Article by Some Name / Assosiated Prass</h3>
            <h2>
                As M.L.B. &apos; s Season Opens in Japan, at Least the Dirt Is Familiar
            </h2>
          </div>
        </div>
        <div className='information-about-current-news'>
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
  </Route>
);


