export default function Home() {
  return (
    <>
      <header>
        <h1 className="mb-6 text-2xl font-medium">wllnu</h1>
      </header>
      <main>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Array.from({
            length: 20
          }).map((_, i) => (
            <article
              key={i}
              className="p-4 border rounded-lg border-slate-300 hover:cursor-pointer hover:border-slate-400"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatum, voluptate, quibusdam, quia voluptas quod quos
              voluptatibus quae doloribus quas natus. Quisquam, voluptatum
              voluptate. Quisquam, voluptatum voluptate. Quisquam, voluptatum
              voluptate. Quisquam, voluptatum voluptate. Quisquam, voluptatum
            </article>
          ))}
        </section>
      </main>
    </>
  )
}
