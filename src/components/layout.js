/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';

import './layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => (
  <div id="page-wrapper">
    <header id="header" className="alt">
      <h1>
        <a href="#">Dev Wong</a>
      </h1>
      <nav>Menu</nav>
    </header>
    <section id="banner">
      <div className="inner">
        <h2>Hi Humans</h2>
        <p>
          I'm Herman Wong a self taught Full Stack Developer living in Silicon
          Valley
        </p>
      </div>
    </section>
    <main>{children}</main>
    <footer>
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a> | Design:{' '}
      <a href="https://html5up.net/">HTML5UP</a>
    </footer>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
