import Header from '@/components/atoms/Header'

export default async function LoadingHome() {
  return (
    <>
      <Header />
      <main>
        <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-32 border rounded-lg border-slate-300 animate-pulse bg-slate-100"
            />
          ))}
        </section>
      </main>
    </>
  )
}
