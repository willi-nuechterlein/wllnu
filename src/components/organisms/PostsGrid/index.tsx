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
          <article className="relative flex h-48 p-6 border group rounded-xl border-slate-300 hover:cursor-pointer hover:border-slate-400">
            <section className="flex flex-col justify-between w-3/4 h-full z-1">
              <div className="max-h-32 overflow-clip">
                <h1 className="mb-2 text-lg font-medium">{title}</h1>
                <p className="mb-2 text-sm text-slate-500">{description}</p>
              </div>
              <ul className="flex flex-wrap gap-2 mt-4">
                {tags?.map((tag) => (
                  <Badge key={tag} tag={tag} />
                ))}
              </ul>
            </section>
            {cover ? (
              <figure className="absolute top-0 right-0 w-1/2 h-full overflow-hidden rounded-r-xl -z-30">
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-slate-50 to-transparent -z-10" />
                <div className="relative w-full h-full -z-20 blur-sm group-hover:blur-none saturate-50 group-hover:saturate-100">
                  <Image
                    src={cover}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt={title + 'cover image'}
                    sizes="(max-width: 768px) 50vw,
                    (max-width: 1200px) 25vw"
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkiAYAAGEAXWDbSoIAAAAASUVORK5CYII="
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
