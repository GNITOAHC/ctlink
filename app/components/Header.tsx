import React from 'react'
import { ThemeIcon } from './theme/icon'

export default function Header() {
  return (
    <header className="px-0 py-1 m-0 mb-4 w-full flex gap-x-3 items-center justify-between md:justify-start">
      Header
      <div className="w-4 h-4 items-center grid">
        <ThemeIcon className="w-4 h-4" />
      </div>
    </header>
  )
}
