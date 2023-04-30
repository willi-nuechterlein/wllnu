export enum PostTag {
  WWW = 'www',
  Code = 'code',
  Photography = 'photography',
  Travel = 'travel',
  Life = 'life',
  Other = 'other'
}

export interface Post {
  id: string
  title: string
  description: string
  tags: Array<PostTag | string> | null
  content: string
  createdAt: Date
}
