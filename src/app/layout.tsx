import './globals.css'
import { Inter } from 'next/font/google'
import classNames from 'classnames'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'wllnu.com'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body className={classNames(inter.className, 'bg-slate-50')}>
        <div className="max-w-4xl p-4 mx-auto mt-20">{children}</div>
      </body>
    </html>
  )
}
