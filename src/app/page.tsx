import { xata } from '@/lib/db/xata'

import GridPage from '@/components/templates/GridPage'

export const revalidate = 60

export default async function Home() {
  // TODO: error handling
  const posts = await xata.db.posts
    .select(['id', 'title', 'description', 'tags'])
    .getAll()

  return <GridPage posts={posts} />
}
