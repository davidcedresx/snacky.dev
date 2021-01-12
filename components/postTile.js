import Link from 'next/link'

export default function PostTile ({ post }) {
  return (
        <div className="col-xs-6">
            <Link href={`/posts/${post.slug}`}>
                <div className="link">
                    <img src={post.picture} />
                    <h2 className="title">{post.title}</h2>
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
                margin-top: 32px;
            }
        `}</style>
        </div>
  )
}
