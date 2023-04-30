import { xata } from '@/lib/db/xata'

import Header from '@/components/atoms/Header'
import Image from 'next/image'

export const revalidate = 60

export default async function PostPage({
  params: { id }
}: {
  params: {
    id: string
  }
}) {
  const post = await xata.db.posts.read(id)
  if (!post) {
    return <div>Post not found</div>
  }

  const { title, cover, tags } = post
  return (
    <>
      <Header tags={tags || undefined} />
      <main>
        {cover ? (
          <figure className="relative w-full h-56 mx-auto mb-8 overflow-hidden sm:w-3/4 rounded-xl">
            <Image
              src={cover}
              fill
              style={{ objectFit: 'cover' }}
              alt={title + 'cover image'}
              sizes="(max-width: 768px) 30vw,
            (max-width: 1200px) 50vw"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkiAYAAGEAXWDbSoIAAAAASUVORK5CYII="
            />
          </figure>
        ) : null}
        <article>
          <h1 className="mb-2 text-xl font-medium">{post.title}</h1>
          <p className="text-sm text-slate-600">{post.content}</p>
        </article>
      </main>
    </>
  )
}
