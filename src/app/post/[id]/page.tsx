import Header from '@/components/atoms/Header'
import { POSTS } from '@/lib/mocks/posts'

export default function PostPage({
  params: { id }
}: {
  params: {
    id: string
  }
}) {
  const post = POSTS.find((post) => post.id === Number(id))
  if (!post) {
    return <div>Post not found</div>
  }
  return (
    <>
      <Header />
      <main>
        <article className="">
          <h1 className="mb-2 text-lg font-medium">{post.title}</h1>
          <ul className="flex flex-wrap">
            {post.tags.map((tag) => (
              <li
                key={tag}
                className="px-2 py-1 mb-2 mr-2 text-xs border rounded-lg text-slate-600 border-slate-400"
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="mb-2 text-sm text-slate-600">{post.content}</p>
        </article>
      </main>
    </>
  )
}