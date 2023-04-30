import { xata } from '@/lib/db/xata'

import GridPage from '@/components/templates/GridPage'

export const revalidate = 60

export default async function TagPage({ params }: { params: { tag: string } }) {
  // TODO: error handling
  const posts = await xata.db.posts
    .select(['id', 'title', 'description', 'tags'])
    .filter({ tags: { $includes: params.tag } })
    .getAll()

  return <GridPage posts={posts} />
}
