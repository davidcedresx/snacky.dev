import { getAllPosts } from '../lib/api'
import Head from 'next/head'
import Link from 'next/link'
import PostTile from '../components/postTile.js'

export default function landing ({ posts }) {
  return (
    <div>
      <Head>
        <title>David Cedrés</title>
        <link rel="icon" href="/pizza.svg" />
      </Head>

      <nav>
        <div className="container">
            <Link href="/">
                <a>Home</a>
            </Link>
        </div>
      </nav>

      <header>
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6">
              <h1>Blog</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="row">
          {posts.map(post => (<PostTile post={post} key={post.slug} />))}
        </div>
      </div>

      <style jsx>{`
        header {
          align-items: center;
          align-items: center;
          display: block;
          display: flex;
          flex-direction: row;
          flex: 1;
          padding-top: 36px;
          background-color: #eef6ff;
          padding-bottom: 36px;
        }

        h1 {
          color: #333;
          font-family: Oswald, sans-serif;
          font-size: 6em;
          font-weight: 500;
          line-height: 1em;
          margin: 0;
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

export async function getStaticProps ({ params }) {
  const posts = getAllPosts(['slug', 'title', 'picture'])

  return {
    props: {
      posts
    }
  }
}
