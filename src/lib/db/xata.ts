import { buildClient } from '@xata.io/client'
import type {
  BaseClientOptions,
  SchemaInference,
  XataRecord
} from '@xata.io/client'

const tables = [
  {
    name: 'posts',
    columns: [
      { name: 'title', type: 'string', notNull: true, defaultValue: 'null' },
      {
        name: 'description',
        type: 'string',
        notNull: true,
        defaultValue: 'null'
      },
      { name: 'tags', type: 'multiple' },
      { name: 'content', type: 'text' },
      { name: 'embedding', type: 'vector', vector: { dimension: 1536 } },
      { name: 'cover', type: 'string' }
    ]
  }
] as const

export type SchemaTables = typeof tables
export type InferredTypes = SchemaInference<SchemaTables>

export type Posts = InferredTypes['posts']
export type PostsRecord = Posts & XataRecord

export type DatabaseSchema = {
  posts: PostsRecord
}

const DatabaseClient = buildClient()

const defaultOptions = {
  databaseURL: process.env.XATA_DATABASE_URL || ''
}

export class XataClient extends DatabaseClient<DatabaseSchema> {
  constructor(options?: BaseClientOptions) {
    super({ ...defaultOptions, ...options }, tables)
  }
}

let instance: XataClient | undefined = undefined

export const getXataClient = () => {
  if (instance) return instance

  instance = new XataClient()
  return instance
}

export const xata = getXataClient()
