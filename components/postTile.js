import Link from 'next/link'
import { useMemo } from 'react'

export default function PostTile ({ post }) {
  const date = useMemo(() => new Intl.DateTimeFormat('en-US').format(new Date(post.date)))

  return (
        <div className="col-xs-12 col-md-6">
            <Link href={`/posts/${post.slug}`}>
                <div className="link">
                    <img src={post.picture} />
                    <h2 className="title">{post.title}</h2>
                    <p className="date">{date}</p>
                </div>
            </Link>

            <style jsx>{`
            img {
                max-width: 80%;
            }

            .link {
                cursor: pointer;
                margin-top: 4em;
            }

            .title {
                color: #333;
                font-weight: 400;
                font-size: 3em;
                font-family: Oswald, sans-serif;
                line-height: 1em;
                margin: .5em 0;
            }
            
            .date {
                line-height: 1em;
                color: #666;
                font-weight: 400;
            }
        `}</style>
        </div>
  )
}
