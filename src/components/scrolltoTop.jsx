'use client'

import { useState, useEffect } from 'react'
import { ArrowUpIcon } from 'lucide-react'

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', toggleVisibility)

    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-12 right-28 z-50 p-2 bg-gray-100 text-gray-600 rounded-full shadow-lg hover:bg-gray-200 transition-all duration-300 ease-in-out hover:scale-110 focus:outline-none focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50"
          aria-label="Volver al inicio de la página"
        >
          <ArrowUpIcon className="w-6 h-6" />
        </button>
      )}
    </>
  )
}