import Badge from '@/components/atoms/Badge'
import { Post } from '@/lib/types/posts'
import Image from 'next/image'
import Link from 'next/link'

interface PostsGridProps {
  posts?: Array<Partial<Post>>
}

const PostsGrid = ({ posts }: PostsGridProps) => {
  if (!posts) return null
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {posts.map(({ id, title, description, tags, cover }) => (
        <Link href={`/post/${id}`} key={id}>
          <article className="group relative p-6 border rounded-xl border-slate-300 hover:cursor-pointer hover:border-slate-400 hover:scale-[1.01] h-48 flex">
            <section className="flex flex-col justify-between h-full z-1">
              <div>
                <h1 className="mb-2 text-lg font-medium">{title}</h1>
                <p className="mb-2 text-sm text-slate-500">{description}</p>
              </div>
              <ul className="flex flex-wrap gap-2 mt-4">
                {tags?.map((tag) => (
                  <Badge key={tag} tag={tag} size="xs" />
                ))}
              </ul>
            </section>
            {cover ? (
              <figure className="absolute top-0 right-0 w-3/5 h-full overflow-hidden rounded-r-xl -z-30">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-50 to-transparent -z-10" />
                <div className="relative w-full h-full -z-20 blur-sm group-hover:blur-none">
                  <Image
                    src={cover}
                    fill
                    alt={title + 'cover image'}
                    sizes="(max-width: 768px) 50vw,
                    (max-width: 1200px) 25vw"
                  />
                </div>
              </figure>
            ) : null}
          </article>
        </Link>
      ))}
    </section>
  )
}
export default PostsGrid
