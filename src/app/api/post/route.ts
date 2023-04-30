import { xata } from '@/lib/db/xata'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const body = await request.json()
  try {
    const record = await xata.db.posts.create(body)
    return NextResponse.json(record)
  } catch (error) {
    return NextResponse.error()
  }
}
