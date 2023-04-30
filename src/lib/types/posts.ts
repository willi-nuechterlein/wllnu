export enum PostTag {
  WWW = 'www',
  Code = 'code',
  Photography = 'photography',
  Travel = 'travel',
  Life = 'life',
  Other = 'other'
}

export interface Post {
  id: number
  title: string
  description: string
  tags: Array<PostTag>
  content: string
  createdAt: Date
}
