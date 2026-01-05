import React from 'react'
import '../../styles/card.css'

export default function Card({ children, className = '' }) {
  return (
    <div className={`card-elegante ${className}`}>
      {children}
    </div>
  )
} 