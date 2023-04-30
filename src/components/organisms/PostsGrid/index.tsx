import { Post } from '@/lib/types/posts'
import Link from 'next/link'

interface PostsGridProps {
  posts?: Array<Partial<Post>>
}

const PostsGrid = ({ posts }: PostsGridProps) => {
  if (!posts) return null
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {posts.map(({ id, title, description, tags }) => (
        <Link href={`/post/${id}`} key={id}>
          <article className="p-4 border rounded-lg border-slate-300 hover:cursor-pointer hover:border-slate-400 hover:scale-[1.01]">
            <h2 className="mb-2 text-lg font-medium">{title}</h2>
            <p className="mb-2 text-sm text-slate-500">{description}</p>
            <ul className="flex flex-wrap">
              {tags?.map((tag) => (
                <li
                  key={tag}
                  className="px-2 py-1 mb-2 mr-2 text-xs border rounded-lg text-slate-500 border-slate-400"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </article>
        </Link>
      ))}
    </section>
  )
}
export default PostsGrid
