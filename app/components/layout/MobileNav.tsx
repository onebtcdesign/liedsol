'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="flex items-center gap-4 md:hidden">
      {/* STAKE SOL Button */}
      <button className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2 text-sm font-[500]">
        <Image src="/images/icon_sol.svg" alt="" width={20} height={20} />
        STAKE SOL
      </button>

      {/* 汉堡菜单按钮 */}
      <button
        className="p-2 relative z-20"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all duration-300 ${
          isOpen ? 'transform rotate-45 translate-y-2' : ''
        }`}></div>
        <div className={`w-6 h-0.5 bg-black mb-1.5 transition-all duration-300 ${
          isOpen ? 'opacity-0' : ''
        }`}></div>
        <div className={`w-6 h-0.5 bg-black transition-all duration-300 ${
          isOpen ? 'transform -rotate-45 -translate-y-2' : ''
        }`}></div>
      </button>

      {/* 移动端菜单 */}
      <div
        className={`fixed inset-0 bg-white transition-all duration-300 ease-in-out ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: '80px' }}
      >
        <nav className="px-4 py-6 bg-white">
          <div className="space-y-6">
            <Link 
              href="#" 
              className="block text-xl text-gray-600 hover:text-gray-900 transition-colors font-[500]"
              onClick={() => setIsOpen(false)}
            >
              HOME
            </Link>
            <Link 
              href="#" 
              className="block text-xl text-gray-600 hover:text-gray-900 transition-colors font-[500]"
              onClick={() => setIsOpen(false)}
            >
              DOCS
            </Link>
            <Link 
              href="#" 
              className="block text-xl text-gray-600 hover:text-gray-900 transition-colors font-[500]"
              onClick={() => setIsOpen(false)}
            >
              DEFI
            </Link>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default MobileNav 