import { getPostBySlug, getAllPosts } from '../../lib/api'
import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import Head from 'next/head'
import Link from 'next/link'
import markdownToHtml from '../../lib/markdownToHtml'

export default function Post ({ post }) {
  const router = useRouter()

  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  if (router.isFallback) { return <p>Loading...</p> }

  return <div>
        <Head>
            <title>
                {post.title}
            </title>
        </Head>

        <nav>
            <div className="container">
                <Link href="/">
                    <a>Blog</a>
                </Link>
            </div>
        </nav>

        <header>
            <div className="container">
                <h1>{post.title}</h1>
            </div>
        </header>

        <article className="container">
            <div dangerouslySetInnerHTML={{ __html: post.content }} />

        </article>

        <div className="credit container">
            <span>Photo by <a href="https://unsplash.com/@ryanquintal?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Ryan Quintal</a> on <a href="https://unsplash.com/s/photos/snacks?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        </div>

        <style jsx>{`
            .back-arrow {
                width: 24px;
            }

            header {
                background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${post.picture}");
                background-size: cover;
                min-height: 350px;
            }

            header h1 {
                color: #F8F7FF;
                font-size: 6em;
                font-family: Oswald, sans-serif;
                font-weight: 400;
            }

            article {
                color: #333;
                font-size: 1.5rem;
                line-height: 2.5rem;
                font-family: 'Pt Serif', serif;
            }

            nav a {
                text-decoration: none;
                color: #333;
                font-size: 1.5em;
            }

            .credit {
                text-align: right;
            }

            .credit a {
                color: #333;
            }
        `}</style>
    </div>
}

export async function getStaticProps ({ params }) {
  const post = getPostBySlug(params.slug, [
    'title',
    // 'date',
    'slug',
    'content',
    'picture'
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content
      }
    }
  }
}

export async function getStaticPaths () {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug
        }
      }
    }),
    fallback: false
  }
}
