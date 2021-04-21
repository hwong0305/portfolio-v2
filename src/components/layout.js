/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import MyModal from './modal';

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
          <MyModal />
        </nav>
      </header>

      <nav id="menu">
        <div className="inner">
          <h2>Menu</h2>
          <ul className="links">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="generic.html">Generic</a>
            </li>
            <li>
              <a href="element.html">Element</a>
            </li>
          </ul>
        </div>
      </nav>

      <section id="banner">
        <div className="inner">
          <h2>Hi. I'm Herman Wong</h2>
          <p>Full Stack Developer / Mechanical Engineer in Silicon Valley</p>
        </div>
      </section>
      <main>{children}</main>
      <section id="footer">
        <div className="inner">
          <h2 className="major">Get in touch</h2>
          <p>
            If you have any questions or if you want to collaborate on a
            project, please feel free to reach out to me.
          </p>
          <form method="post" action="https://formspree.io/mzbrwekr">
            <div className="fields">
              <div className="field">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input type="text" name="_replyto" id="email" />
              </div>
              <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
              </div>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send" />
              </li>
            </ul>
          </form>
          <ul className="contact">
            <li className="icon solid fa-envelope">
              <a href="mailto:hwong.0305@gmail.com">hwong.0305@gmail.com</a>
            </li>
            <li className="icon brands fa-twitter">
              <a href="https://twitter.com/devwong0305">devwong0305</a>
            </li>
            <li className="icon brands fa-github">
              <a href="https://www.github.com/hwong0305">hwong0305</a>
            </li>
            <li className="icon brands fa-linkedin">
              <a href="https://www.linkedin.com/in/hw335">hw335</a>
            </li>
            <li className="icon solid fa-download">
              <a href="/hermanwong.pdf" target="_blank">
                Resume
              </a>
            </li>
          </ul>
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
