'use client'
import { FormEvent } from 'react'

import Button from '@/components/atoms/Button'

export default async function PublishPage() {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const data = new FormData(event.target)
    const body = Object.fromEntries(data)
    console.log('👉 ~ body:', body)
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ ...body, tags: [body.tags] })
    })
    const result = await response.json()
    console.log(result)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-2">
      <input type="text" name="title" />
      <input type="text" name="description" />
      <input type="text" name="tags" />
      <textarea name="content" />
      <Button type="submit">Publish</Button>
    </form>
  )
}
