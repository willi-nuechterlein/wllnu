'use client'
import { Field, Form } from 'houseform'
import { z } from 'zod'

import Button from '@/components/atoms/Button'

interface PostForm {
  title: string
  description: string
  tags: string
  content: string
}

export default async function PublishPage() {
  const handleSubmit = async (values: PostForm) => {
    const response = await fetch('/api/post', {
      method: 'POST',
      body: JSON.stringify({ ...values, tags: values.tags.split(',') })
    })
    const result = await response.json()
    console.log(result)
  }

  // TODO: auth?!
  if (process.env.NODE_ENV === 'production')
    return <p>publishing is disabled in production...</p>

  return (
    <Form<PostForm> onSubmit={(values) => handleSubmit(values)}>
      {({ submit }) => (
        <form
          className="flex flex-col max-w-xl gap-2 mx-auto mt-4"
          onSubmit={(e) => {
            e.preventDefault()
            submit()
          }}
        >
          <Field<PostForm['title']>
            name="title"
            onBlurValidate={z
              .string()
              .min(5, 'Must be at least 5 characters long')}
          >
            {({ value, setValue, onBlur, errors }) => {
              return (
                <div className="flex flex-col gap-1 ">
                  <label htmlFor="title" className="text-sm text-gray-600 ">
                    Title
                  </label>
                  <input
                    className="p-1.5 border border-gray-300 rounded-md"
                    value={value}
                    onBlur={onBlur}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={'Title'}
                  />
                  {errors.map((error) => (
                    <p key={error} className="text-sm text-red-500">
                      {error}
                    </p>
                  ))}
                </div>
              )
            }}
          </Field>
          <Field<PostForm['description']>
            name="description"
            onBlurValidate={z
              .string()
              .min(5, 'Must be at least 5 characters long')}
          >
            {({ value, setValue, onBlur, errors }) => {
              return (
                <div className="flex flex-col gap-1 ">
                  <label
                    htmlFor="description"
                    className="text-sm text-gray-600 "
                  >
                    Description
                  </label>
                  <input
                    className="p-1.5 border border-gray-300 rounded-md"
                    value={value}
                    onBlur={onBlur}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={'Description'}
                  />
                  {errors.map((error) => (
                    <p key={error} className="text-sm text-red-500">
                      {error}
                    </p>
                  ))}
                </div>
              )
            }}
          </Field>
          <Field<PostForm['tags']>
            name="tags"
            onBlurValidate={z
              .string()
              .min(5, 'Must be at least 5 characters long')}
          >
            {({ value, setValue, onBlur, errors }) => {
              return (
                <div className="flex flex-col gap-1 ">
                  <label htmlFor="tags" className="text-sm text-gray-600 ">
                    Tags
                  </label>
                  <input
                    className="p-1.5 border border-gray-300 rounded-md"
                    value={value}
                    onBlur={onBlur}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={'Tags'}
                  />
                  {errors.map((error) => (
                    <p key={error} className="text-sm text-red-500">
                      {error}
                    </p>
                  ))}
                </div>
              )
            }}
          </Field>
          <Field<PostForm['content']>
            name="content"
            onBlurValidate={z
              .string()
              .min(5, 'Must be at least 5 characters long')}
          >
            {({ value, setValue, onBlur, errors }) => {
              return (
                <div className="flex flex-col gap-1 ">
                  <label htmlFor="content" className="text-sm text-gray-600 ">
                    Content
                  </label>
                  <textarea
                    rows={10}
                    className="p-1.5 border border-gray-300 rounded-md"
                    value={value}
                    onBlur={onBlur}
                    onChange={(e) => setValue(e.target.value)}
                    placeholder={'Content'}
                  />
                  {errors.map((error) => (
                    <p key={error} className="text-sm text-red-500">
                      {error}
                    </p>
                  ))}
                </div>
              )
            }}
          </Field>

          <Button type="submit">Publish</Button>
        </form>
      )}
    </Form>
  )
}
