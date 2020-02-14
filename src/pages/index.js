import React from 'react';
import profile from '../../static/images/profile.jpg';

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
            <img src={profile} alt="Profile" className="image" />
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
              This is a list of projects I have worked on. They are either my
              contribution to an open-source project or projects I have built
              myself to enhance my Web Development knowledge.
            </p>
            <section className="features">
              <article>
                <a className="image" href="https:/freedomains.dev">
                  <img src="images/proxy.png" alt="My Proxy" />
                </a>
                <h3 className="major">MyProxy</h3>
                <p>
                  MyProxy is an application that helps you connect to your
                  Domain provider, setup A and CNAME records, create and serve
                  SSL certificates, and run an unlimited number of applications
                  on your subdomains. I implemented authentication middleware
                  for cookies and access tokens, increased the performance of
                  application by implementing key-value in-memory caching, and
                  validated support for AWS and Google Cloud Service.
                  FreeDomains is a website that allows users to host their own
                  web apps quickly powered by MyProxy
                </p>
                <a
                  className="special"
                  href="https://garagescript.github.io/myProxy/"
                >
                  Learn more
                </a>
              </article>
              <article>
                <a href="https://v2.c0d3.app" className="image">
                  <img src="images/code.png" alt="" />
                </a>
                <h3 className="major">C0D3.com</h3>
                <p>
                  C0D3.com is a website that serves as a open-source platform to
                  teach people how to become great Software Engineers. I am
                  currently on a team of engineers that is rebuilding the new
                  platform. My latest contribution is building the landing page.
                </p>
                <a
                  href="https://github.com/garagescript/c0d3-app"
                  className="special"
                >
                  Learn more
                </a>
              </article>
              <article>
                <a href="#" className="image">
                  <img src="images/kanban.png" alt="" />
                </a>
                <h3 className="major">React Kanban Board</h3>
                <p>
                  A Kanban Board built in React with Drag and Drop capabilities.
                  It is built with Create-React-App and React-Beautify-Dnd.
                </p>
                <a
                  href="https://github.com/hwong0305/drag-and-drop-kanban"
                  className="special"
                >
                  Learn more
                </a>
              </article>
              <article>
                <a
                  href="https://dazzling-mcnulty-64b68a.netlify.com/# "
                  className="image"
                >
                  <img src="images/rest.png" alt="" />
                </a>
                <h3 className="major">Vue Rest of World API</h3>
                <p>
                  This is my solution to{' '}
                  <a href="https://github.com/hwong0305/drag-and-drop-kanban">
                    FrontEnd Mentor's
                  </a>{' '}
                  Rest of World API challenge. I implemented the solution using
                  CSS variables, Vue.JS and TailwindCSS
                </p>
                <a
                  href="https://github.com/hwong0305/rest-countries-vue-tailwind"
                  className="special"
                >
                  Learn more
                </a>
              </article>
              <article>
                <a
                  href="https://github.com/hwong0305/react-map"
                  className="image"
                >
                  <img src="images/post.png" alt="" />
                </a>
                <h3 className="major">React Map</h3>
                <p>
                  An application that lets users entered a title, description
                  and image URL into a form style website. The owner of the
                  posts can update or delete their own post. Users can only view
                  posts in their own city. Built on MERN stack.
                </p>
                <a
                  href="https://github.com/hwong0305/react-map"
                  className="special"
                >
                  Learn more
                </a>
              </article>
              <article>
                <a
                  href="https://github.com/hwong0305/tab-tracker"
                  className="image"
                >
                  <img src="images/tab.png" alt="" />
                </a>
                <h3 className="major">Tab Tracker</h3>
                <p>
                  This is built following Cody Seibert's Tutorial on building a
                  Full Stack Web Application. This application allows users to
                  store and edit their songs and guitar tabs. This is my first
                  exposure to Full Stack Development and the project that made
                  me want to change careers.
                </p>
                <a
                  href="https://github.com/hwong0305/tab-tracker"
                  className="special"
                >
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
