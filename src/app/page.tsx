import { xata } from '@/lib/db/xata'

import GridPage from '@/components/templates/GridPage'

export default async function Home() {
  // TODO: error handling
  const posts = await xata.db.posts
    .select(['id', 'title', 'description', 'tags'])
    .getAll()

  return <GridPage posts={posts} />
}
