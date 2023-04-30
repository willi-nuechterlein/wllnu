import Header from '@/components/atoms/Header'

export default async function LoadingPostPage() {
  return (
    <>
      <Header />
      <main>
        <div className="w-32 h-6 mb-2 bg-slate-200 animate-pulse" />
        <div className="w-24 h-6 mb-2 bg-slate-200 animate-pulse" />
        <div className="w-full h-48 mb-2 bg-slate-200 animate-pulse" />
      </main>
    </>
  )
}
