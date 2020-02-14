import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section id="banner">
      <div className="inner">
        <h2>Hi Humans</h2>
        <p>
          I'm Herman Wong a self taught Full Stack Developer living in Silicon
          Valley
        </p>
      </div>
    </section>
    <p>
      I obtained my Bachelor in Mechanical Engineering in 2013 and started
      working as a Mechanical Engineer in the semiconductor industry. While
      working, I began to learn software engineering through resources such as{' '}
      <a href="https://freecodecamp.org">FreeCodeCamp</a> After going through
      several YouTube videos, I decided I want to make career change to Software
      Engineering and I began contributing to open source communities such as{' '}
      <a href="https://c0d3.com">c0d3.com</a>
    </p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
