export enum PostTag {
  WWW = 'www',
  Code = 'code',
  Photography = 'photography'
}

export interface Post {
  id: string
  title: string
  description: string
  tags: Array<PostTag | string> | null
  content: string
  cover: string | null
  createdAt: Date
}
