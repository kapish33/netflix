import Link from 'next/link'
import React from 'react'

const BackButtonLink = () => {
  return (
    <Link href="/" passHref>
        <div
          className="button circle"
          aria-label="Go back to home page"
          role="button"
          tabIndex={0}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M10 19l-7-7 7-7v14zm2-14h8v14h-8v-14z" />
          </svg>
        </div>
      </Link>
  )
}

export default BackButtonLink 