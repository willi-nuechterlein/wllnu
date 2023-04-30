import { ButtonHTMLAttributes } from 'react'
import classNames from 'classnames'

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      type="button"
      {...props}
      className={classNames(
        'text-slate-800 bg-gradient-to-b from-slate-50 via-slate-100 to-slate-200 font-normal rounded-lg text-sm px-4 py-1.5 text-center mr-2 mb-2 border border-slate-300 h-full',
        props.className
      )}
    />
  )
}

export default Button
