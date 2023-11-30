/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product } from '../components/Icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my musical playlist section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <h4>Lastest works.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Tul Page"
                  href="https://www.tul.io/co"
                >
                  TUL S.A.S <small>Tech Lead</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2021 - 2023</b>
                </a>
                <p>
                  Manage teams of 25 developers including roles of backend, frontend, mobile and QA. Estimation of user
                  histories and effort points, creation and delegations of tasks. Monitoring the software products, scaling, debugging 
                  and confirm that everything is going well. Design of microservices architecture, API Rest and Microfronts modules. 
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Tul Page"
                  href="https://www.tul.io/co"
                >
                  TUL S.A.S <small>SR Backend Engineer</small>
                </a>
                <p>
                  Development of high quality code for microservices, API Rest, Kafka topics. Usage of high scalable databases, like Postgres, Maria DB, Mongo and Redis.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Digicert BO Page"
                  href="https://www.digicert.bo/"
                >
                  Digicert S.R.L. <small>Software Engineer</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2019 - 2021</b>
                </a>
                <p>
                  Development of desktop apps. Development of Python scripts for internal processes. Development of codebase for the first 
                  microservices. Development of internal backoffice tool. Dvelopment of native applications participating with gouvernamental entities.{' '}
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open S.O.S Agro page"
                  href="https://www.facebook.com/dsosagro"
                >
                  S.O.S Agro <small>Software Engineer</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2017 - 2021</b>
                </a>
                <p>
                  Development of web applications, including the API REST and frontend. Development of the first native application POC for S.O.S Agro
                   which was used to value the idea resulting in a valuation of $1 million 💸. 
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="None"
                  href="#"
                >
               Freelancer software engineer   
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2017 - 2021</b>
                </a>
                <p>
                  Development of web applications. Development of mobile applications. Configurations of web server, provisioning, configuring DNS and SSL. Deploy of software products
                  using native web server and cloud based platforms using docker images. Continious software maintance.
                </p>
              </li>
              <li>
                <Link
                  href="/articles"
                  aria-label="Check my articles and recent reads"
                  id="cardHover"
                >
                  Learning Something Great 😉
                </Link>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Currently</b>
                </a>
                <p>We continue learning everyday. </p>
              </li>
            </ul>
          </article>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
