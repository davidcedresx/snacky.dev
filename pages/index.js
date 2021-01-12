import Head from 'next/head'
import Link from 'next/link'

export default function landing () {
  return (
    <div>
      <Head>
        <title>David Cedrés</title>
        <link rel="icon" href="/pizza.svg" />
      </Head>

      <nav>
        <div className="container">
            <Link href="/blog">
                <a>Blog</a>
            </Link>
        </div>
      </nav>

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
              I was part of a team responsible of the maintenance of an entrepreneurship platform, building tools that would help clients build MVPs and bring ideas to life.
              ‍<br />
              I worked with Ruby on Rails and React.
          </p>
          </div>
          <div>
            <h3>Novateva</h3>
            <p>
              As part of a software agency I built mobile apps and web platforms, using NodeJS, Express, React, Python, Apollo, GraphQL and React Native.
          </p>
          </div>
          <div>
            <h3>Pathscale</h3>
            <p>
              I currently work here, I have been part of a team responsible for the development of an open source UI library for vue3, a browser game, several rollup plugins that are used internally, the maintenance of several JS packages on npm, as well as the optimization of code that is critical to the products we build.
          </p>
          </div>
        </section>
        <section>
          <h2>Projects</h2>
          <p>I will be working on some side projects to put here!</p>
        </section>
      </div>

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

        nav a {
          text-decoration: none;
          color: #333;
          font-size: 1.5em;
        }
      `}</style>
    </div>
  )
}
