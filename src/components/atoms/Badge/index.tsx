import { PostTag } from '@/lib/types/posts'
import classNames from 'classnames'

interface BadgeProps {
  tag: PostTag | string
  size?: 'sm' | 'xs'
}

const Badge = ({ tag, size = 'sm' }: BadgeProps) => (
  <li
    className={classNames(
      `text-${size} px-2.5 py-1 rounded-full font-medium`,
      {
        'bg-gradient-to-b from-green-50 via-green-100 to-green-200 text-green-900 border border-green-300 ':
          tag === PostTag.Code
      },
      {
        'bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 text-blue-900 border border-blue-300 ':
          tag === PostTag.Photography
      },
      {
        'bg-gradient-to-b from-amber-50 via-amber-100 to-amber-200 text-amber-900 border border-amber-300 ':
          tag === PostTag.WWW
      },
      {
        'bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 text-slate-900 border border-slate-300 ':
          tag !== PostTag.Code &&
          tag !== PostTag.Photography &&
          tag !== PostTag.WWW
      }
    )}
  >
    {tag}
  </li>
)

export default Badge
