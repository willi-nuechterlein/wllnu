import Badge from '@/components/atoms/Badge'
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
          <article className="p-6 border rounded-xl border-slate-300 hover:cursor-pointer hover:border-slate-400 hover:scale-[1.01] h-48 flex flex-col justify-between">
            <section>
              <h1 className="mb-2 text-lg font-medium">{title}</h1>
              <p className="mb-2 text-sm text-slate-500">{description}</p>
            </section>
            <ul className="flex flex-wrap gap-2 mt-4">
              {tags?.map((tag) => (
                <Badge key={tag} tag={tag} size="xs" />
              ))}
            </ul>
          </article>
        </Link>
      ))}
    </section>
  )
}
export default PostsGrid
