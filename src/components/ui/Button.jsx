import React from 'react'
import '../../styles/buttons.css'

const variants = {
  primary: 'btn-elegante',
  ghost: 'btn-ghost',
} 

export default function Button({ as = 'button', children, href = '#', className = '', variant = 'primary', ...props }) {
  const classes = `${variants[variant] || ''} ${className}`.trim()

  if (as === 'a') {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}