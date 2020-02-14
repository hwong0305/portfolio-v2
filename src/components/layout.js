/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import './layout.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = ({ children }) => {
  const headerRef = useRef();
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck) {
        headerRef.current.className = '';
      } else {
        headerRef.current.className = 'alt';
      }
    });
  });
  return (
    <div id="page-wrapper">
      <header id="header" className="alt" ref={headerRef}>
        <h1>
          <a href="#">Dev Wong</a>
        </h1>
        <nav>
          <a href="#">Menu</a>
        </nav>
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
      <section id="footer">
        <div className="inner">
          <h2 className="major">Get in touch</h2>
          <p>
            Cras mattis ante fermentum, malesuada neque vitae, eleifend erat.
            Phasellus non pulvinar erat. Fusce tincidunt, nisl eget mattis
            egestas, purus ipsum consequat orci, sit amet lobortis lorem lacus
            in tellus. Sed ac elementum arcu. Quisque placerat auctor laoreet.
          </p>
          <form method="post" action="#">
            <div className="fields">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <button type="submit">Submit</button>
              </li>
            </ul>
          </form>
          <ul className="copyright">
            <li>© {new Date().getFullYear()}</li>{' '}
            <li>
              Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </li>
            <li>
              Design: <a href="https://html5up.net/">HTML5UP</a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
