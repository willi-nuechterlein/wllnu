'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import classNames from 'classnames'
import { useRouter, usePathname } from 'next/navigation'

import { PostTag } from '@/lib/types/posts'
import Button from '../Button'
import Badge from '../Badge'

interface HeaderProps {
  title?: string
  tags?: Array<string>
}

const Header = ({
  title = 'wllnu',
  tags = Object.keys(PostTag).map((t) => t.toLowerCase())
}: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const isRoot = pathname === '/'

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
    <header className="fixed top-0 z-10 flex items-center justify-between w-full h-20 max-w-4xl gap-2 mr-4 ">
      <div className="fixed w-[100vw] h-20 backdrop-blur-lg z-9 left-0" />
      <h1
        className={classNames(
          `text-2xl relative font-semibold transition-all hidden sm:block`,
          { 'opacity-100': !isScrolled },
          { 'opacity-0': isScrolled }
        )}
      >
        {title}
      </h1>
      <ul
        className={classNames(
          'z-20 duration-300 ease-in-out space-x-4 flex transition-all',
          { 'left-0 absolute sm:left-auto sm:relative': isScrolled }
        )}
      >
        {tags.map((tag) => (
          <Link key={tag} href={`/${tag}`}>
            <Badge tag={tag} />
          </Link>
        ))}
      </ul>
      <div className="z-10 w-16 h-8">
        {!isRoot ? <Button onClick={() => router.back()}>Back</Button> : null}
      </div>
    </header>
  )
}

export default Header
