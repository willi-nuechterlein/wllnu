import Header from '@/components/atoms/Header'
import PostsGrid from '@/components/organisms/PostsGrid'
import { Post } from '@/lib/types/posts'

interface GridPageProps {
  posts: Array<Partial<Post>>
}

const GridPage = ({ posts }: GridPageProps) => {
  return (
    <>
      <Header />
      <main>
        {!posts.length ? <p>no posts found</p> : <PostsGrid posts={posts} />}
      </main>
    </>
  )
}

export default GridPage
