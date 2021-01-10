import Head from 'next/head'

export default function landing () {
  return (
    <div>
      <Head>
        <title>David Cedrés</title>
        <link rel="icon" href="/pizza.svg" />
      </Head>

      <header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <h1>David Cedrés</h1>
              <h2>Fullstack developer</h2>
              <p>I&apos;ve been coding for +3 years straight, being involved in the development of websites and mobile apps, using modern javascript, python and ruby.</p>
            </div>
            <div className="col-xs-12 col-md-6">
              <img src="/profile.jpeg" />
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <section id="experience">
          <h2>Experience</h2>
          <div>
            <h3>Ignis Gravitas</h3>
            <p>
              I was part of a team responsible of the manteinance of an entrepenurship platform, building tools that would help clients build MVPs.
              ‍   I worked with Ruby on Rails and React.
          </p>
          </div>
          <div>
            <h3>Novateva</h3>
            <p>
              In this software agency I built mobile apps and web platforms, using NodeJS, Express, React, Python, Apollo, GraphQL and React Native.

          </p>
          </div>
          <div>
            <h3>Pathscale</h3>
            <p>
              I currently work here, I have been part of a team responsible for the development of an open source UI library for vue3, a browser game, several rollup plugins that are used internally, the mantainance of several JS packages on npm, as well as the optimization of code that is critical to the products we build.
          </p>
          </div>
        </section>
        <section>
          <h2>Projects</h2>

          <p>I will be working on some side projects to put here!</p>
        </section>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-xs-offset-9 col-xs-3">
              <h4>Links</h4>
              <ul>
                <li><a href="https://www.linkedin.com/in/david-cedr%C3%A9s-39b458176/" className="footer-link">Linkedin</a></li>
                <li><a href="https://github.com/davidcedresx" className="footer-link">Github</a></li>
                <li><a href="https://dev.to/davidcedresx" className="footer-link">Dev</a></li>
                <li><a href="http://twitter.com/davidcedresx" className="footer-link">Twitter</a></li>
              </ul>
            </div>
          </div>
          <div className="row center-xs copyright">
            <p>Copyright © 2021 David Cedrés. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        footer, header { 
          background-color: #eef6ff;
        }

        header {
          align-items: center;
          align-items: center;
          display: block;
          display: flex;
          flex-direction: row;
          flex: 1;
          padding-top: 36px;
          padding-bottom: 36px;
        }

        img {
          border-radius: 100%;
          width: 231px;
        }

        h1 {
          color: #333;
          font-family: Oswald, sans-serif;
          font-size: 6em;
          font-weight: 500;
          line-height: 1em;
          margin: 0;
        }

        h2 {
          color: #5466f9;
          font-family: Oswald, sans-serif;
          font-size: 2em;
          font-weight: 400;
          margin-top: 32px;
        }

        h3 {
          color: #5466f9;
          font-family: Oswald, sans-serif;
          font-size: 2em;
          font-weight: 400;
          margin-bottom: 32px;
          margin-top: 32px;
        }

        h4 {
          color: #333;
          font-weight: 500;
        }

        p {
          color: #333;
          font-family: Arial,sans-serif;
          line-height: 2em;
        }

        section h2 {
          color: black;
          font-weight: 500;
        }

        ul {
          padding-left: 0;
          list-style: none;
        }

        ul li a {
          display: block;
          margin-bottom: 10px;
          color: #444;
          text-decoration: none;
          font-size: 14px;
        }

        .copyright {
          font-size: 14px;

        }

      `}</style>
    </div>
  )
}
