import React from 'react'

export default function SectionTitle({ children, className = '' }) {
  return (
    <h2 className={`text-2xl md:text-3xl font-semibold mb-4 ${className}`}>{children}</h2>
  )
}