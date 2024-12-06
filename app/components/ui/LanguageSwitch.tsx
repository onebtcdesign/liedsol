'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

type Props = {
  currentLang: string
  onLanguageChange: (lang: string) => void
}

export default function LanguageSwitch({ currentLang, onLanguageChange }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100/10"
      >
        <Image
          src="/images/icon_language.svg"
          alt="Language"
          width={24}
          height={24}
        />
        <span>{currentLang === 'en' ? 'English' : '简体中文'}</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-lg overflow-hidden z-50">
          <button
            className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
              currentLang === 'en' ? 'text-blue-600' : ''
            }`}
            onClick={() => {
              onLanguageChange('en')
              setIsOpen(false)
            }}
          >
            English
          </button>
          <button
            className={`w-full px-4 py-2 text-left hover:bg-gray-50 ${
              currentLang === 'zh' ? 'text-blue-600' : ''
            }`}
            onClick={() => {
              onLanguageChange('zh')
              setIsOpen(false)
            }}
          >
            简体中文
          </button>
        </div>
      )}
    </div>
  )
} 