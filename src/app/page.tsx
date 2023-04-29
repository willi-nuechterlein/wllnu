import { POSTS } from '@/lib/mocks/posts'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header>
        <h1 className="mb-6 text-2xl font-medium">wllnu</h1>
      </header>
      <main>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {POSTS.map(({ id, title, shortDescription, tags }) => (
            <Link href={`/post/${id}`} key={id}>
              <article className="p-4 border rounded-lg border-slate-300 hover:cursor-pointer hover:border-slate-400 hover:scale-[1.01]">
                <h2 className="mb-2 text-lg font-medium">{title}</h2>
                <p className="mb-2 text-sm text-slate-500">
                  {shortDescription}
                </p>
                <ul className="flex flex-wrap">
                  {tags.map((tag) => (
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
      </main>
    </>
  )
}
