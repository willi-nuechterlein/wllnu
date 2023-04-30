'use client'

import classNames from 'classnames'
import { useRouter, usePathname } from 'next/navigation'
import React, { useState, useEffect } from 'react'
import Button from '../Button'

const Header = () => {
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
    <header className="flex items-center justify-between">
      <h1 className={`p-4 text-2xl relative z-10`}>Title</h1>
      <ul
        className={classNames(
          `fixed top-0 z-20 p-8 transition-all duration-300 ease-in-out flex space-x-4 `,
          { 'left-0': isScrolled },
          { 'left-1/2 -translate-x-1/2': !isScrolled }
        )}
      >
        <li className="text-sm">Tag 1</li>
        <li className="text-sm">Tag 2</li>
        <li className="text-sm">Tag 3</li>
      </ul>
      {isNotRoot ? <Button onClick={() => router.back()}>Back</Button> : null}
    </header>
  )
}

export default Header
