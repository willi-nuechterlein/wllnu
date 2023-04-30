import Header from '@/components/atoms/Header'

export default async function LoadingPostPage() {
  return (
    <>
      <Header />
      <main>
        <div className="w-full h-56 mx-auto mb-6 sm:w-3/4 bg-slate-200 animate-pulse" />
        <div className="w-32 h-6 mb-2 bg-slate-200 animate-pulse" />
        <div className="w-full h-48 mb-2 bg-slate-200 animate-pulse" />
      </main>
    </>
  )
}
