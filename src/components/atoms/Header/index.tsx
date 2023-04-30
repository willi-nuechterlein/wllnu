'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { useRouter, usePathname } from 'next/navigation'

import { PostTag } from '@/lib/types/posts'
import Button from '../Button'
import Badge from '../Badge'

interface HeaderProps {
  title: string
  tags?: Array<string>
}

const Header = ({
  title = 'Title',
  tags = Object.keys(PostTag).map((t) => t.toLowerCase())
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const isNotRoot = pathname !== '/'

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop
      setIsScrolled(scrollTop > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header className="flex items-center justify-between mb-4">
      <h1 className={`p-4 text-2xl relative z-10 font-semibold`}>{title}</h1>
      <ul
        className={classNames(
          `fixed top-0 z-20 p-8 transition-all duration-300 ease-in-out flex space-x-4 `,
          { 'left-0': isScrolled },
          { 'left-1/2 -translate-x-1/2': !isScrolled }
        )}
      >
        {tags.map((tag) => (
          <Link key={tag} href={`/${tag}`}>
            <Badge tag={tag} />
          </Link>
        ))}
      </ul>
      {isNotRoot ? <Button onClick={() => router.back()}>Back</Button> : null}
    </header>
  )
}

export default Header
