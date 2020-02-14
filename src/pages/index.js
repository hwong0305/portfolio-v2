import React from 'react';
import pic01 from '../../static/images/pic01.jpg';
// import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <Layout>
      {/* Wrapper */}
      <section id="wrapper">
        <section id="one" className="wrapper spotlight style1">
          <div className="inner">
            <a href="#" className="image">
              <img src={pic01} alt="" />
            </a>
            <div className="content">
              <h2 className="major">Background</h2>
              <p>
                I obtained my Bachelor in Mechanical Engineering in 2013 and
                started working as a Mechanical Engineer in the semiconductor
                industry. While working, I began to learn software engineering
                through resources such as{' '}
                <a href="https://freecodecamp.org">FreeCodeCamp</a>. After going
                through several YouTube videos, I decided I want to make career
                change to Software Engineering and I began contributing to open
                source communities such as{' '}
                <a href="https://c0d3.com">c0d3.com</a>.
              </p>
            </div>
          </div>
        </section>
        <section id="two" className="wrapper alt style1">
          <div className="inner">
            <h2 className="major">Projects</h2>
            <p>
              Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
              Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
              egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
              in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
            </p>
            <section className="features">
              <article>
                <a href="#" className="image">
                  <img src="images/pic04.jpg" alt="" />
                </a>
                <h3 className="major">Sed feugiat lorem</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
                </p>
                <a href="#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="#" className="image">
                  <img src="images/pic05.jpg" alt="" />
                </a>
                <h3 className="major">Nisl placerat</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
                </p>
                <a href="#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="#" className="image">
                  <img src="images/pic06.jpg" alt="" />
                </a>
                <h3 className="major">Ante fermentum</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
                </p>
                <a href="#" className="special">
                  Learn more
                </a>
              </article>
              <article>
                <a href="#" className="image">
                  <img src="images/pic07.jpg" alt="" />
                </a>
                <h3 className="major">Fusce consequat</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing vehicula id
                  nulla dignissim dapibus ultrices.
                </p>
                <a href="#" className="special">
                  Learn more
                </a>
              </article>
            </section>
          </div>
        </section>
      </section>
    </Layout>
  </>
);

export default IndexPage;
