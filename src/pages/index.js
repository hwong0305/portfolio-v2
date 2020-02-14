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
          <h2>Projects</h2>
        </section>
      </section>
      {/*
      <p>
        I obtained my Bachelor in Mechanical Engineering in 2013 and started
        working as a Mechanical Engineer in the semiconductor industry. While
        working, I began to learn software engineering through resources such as{' '}
        <a href="https://freecodecamp.org">FreeCodeCamp</a> After going through
        several YouTube videos, I decided I want to make career change to
        Software Engineering and I began contributing to open source communities
        such as <a href="https://c0d3.com">c0d3.com</a>
      </p>
      <Link to="/page-2/">Go to page 2</Link>
      */}
    </Layout>
  </>
);

export default IndexPage;
