import React from 'react';
import { Badge } from 'reactstrap';
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
        <section id="two" className="wrapper alt style3">
          <div className="inner">
            <h2 className="major">Skills</h2>
            <div className="row">
              <div className="col-6">
                <h4>Development</h4>
                <ul className="alt">
                  <li>HTML5</li>
                  <li>CSS3</li>
                  <li>JavaScript (ES6+)</li>
                  <li>TypeScript</li>
                  <li>GraphQL</li>
                  <li>React</li>
                  <li>Python</li>
                  <li>PostgreSQL</li>
                  <li>Sequelize</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div className="col-6">
                <h4>Tools</h4>
                <ul className="alt">
                  <li>Git</li>
                  <li>MatLab</li>
                  <li>Pandas</li>
                </ul>

                <h4>Mechanical Enginering</h4>
                <ul className="alt">
                  <li>Solidworks</li>
                  <li>Autodesk Inventor</li>
                  <li>Machining, Sheet Metal & Weldments</li>
                  <li>GD&T</li>
                  <li>Opto-Mechanical Design</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="three" className="wrapper style1">
          <div className="inner">
            <h2 className="major">Projects</h2>
            <p>
              This is a list of projects I have worked on. They are either my
              contribution to an open-source project or projects I have built
              myself to enhance my Web Development knowledge.
            </p>
            <section className="features">
              <article>
                <a
                  href="https://garagescript.github.io/myProxy/"
                  className="image"
                >
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
                  web apps quickly powered by MyProxy.
                  <br />
                  <br />
                  <span className="h5">
                    <Badge color="light">
                      <i className="fa fa-server mr-2" />4
                    </Badge>
                    <Badge color="light" className="ml-2">
                      <i className="fa fa-star mr-1" /> 18
                    </Badge>
                    <Badge color="light" className="ml-2">
                      <i className="fa fa-code-branch mr-1" /> 8
                    </Badge>
                  </span>
                </p>
                <a
                  className="special"
                  href="https://github.com/garageScript/myProxy"
                >
                  Learn more
                </a>
              </article>
              <article>
                <a href="https://www.c0d3.com" className="image">
                  <img src="images/code.png" alt="code screenshot" />
                </a>
                <h3 className="major">C0D3.com</h3>
                <p>
                  C0D3.com is a website that serves as a open-source platform to
                  teach people how to become great Software Engineers. I am
                  currently on a team of engineers that is rebuilding the new
                  platform. My latest contribution is building the landing page.
                  <br />
                  <br />
                  <span className="h5">
                    <Badge color="light">
                      <i className="fa fa-users mr-2" />
                      420
                    </Badge>
                    <Badge color="light" className="ml-2">
                      <i className="fa fa-star mr-1" /> 31
                    </Badge>
                    <Badge color="light" className="ml-2">
                      <i className="fa fa-code-branch mr-1" /> 14
                    </Badge>
                  </span>
                </p>
                <a
                  href="https://github.com/garagescript/c0d3-app"
                  className="special"
                >
                  Learn more
                </a>
              </article>
              <article className="image">
                <a href="https://github.com/hwong0305/wong-notes">
                  <img src="images/note.jpg" alt="" />
                </a>
                <h3 className="major">Notes App</h3>
                <p>
                  A self hosted notes application built on React and Node.JS
                  with git history tracking
                </p>
                <a
                  href="https://github.com/hwong0305/wong-notes"
                  className="special"
                >
                  Learn more
                </a>
              </article>
              <article>
                <a href="https://kanban.devwong.com/" className="image">
                  <img src="images/kanban.png" alt="Kanban Screenshot" />
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
                  href="https://focused-visvesvaraya-a2d7ea.netlify.app/#/"
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
                  href="https://codepen.io/sfwong445/full/qBdbxZE"
                  className="image"
                >
                  <img src="images/minesweeper.png" alt="" />
                </a>
                <h3 className="major">Minesweeper</h3>
                <p>A minesweeper game built in Vanilla.JS</p>
                <a
                  href="https://codepen.io/sfwong445/pen/qBdbxZE"
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
                  <img src="images/tab2.png" alt="" />
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
