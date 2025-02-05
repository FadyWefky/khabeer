"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from "next/image"
import { useState } from 'react'

const navItems = [
  { 
    href: '/', 
    label: 'الرئيسية', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        <polyline points="9 22 9 12 15 12 15 22"></polyline>
      </svg>
    )
  },
  { 
    href: '/about', 
    label: 'من نحن',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="12" y1="16" x2="12" y2="12"></line>
        <line x1="12" y1="8" x2="12.01" y2="8"></line>
      </svg>
    )
  },
  { 
    href: 'https://wa.me/966546656351', 
    label: 'اتصل بنا',
    isExternal: true,
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    )
  }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full md:w-2/3 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl py-3 px-4 md:px-6"
      >
        <div className="flex justify-between items-center">
          <motion.div 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </motion.div>

          <div className={`${isOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-16 md:top-0 left-4 right-4 md:left-0 md:right-0 flex-col md:flex-row items-center gap-2 md:gap-6 bg-white/90 md:bg-transparent p-4 md:p-0 rounded-xl md:rounded-none`}>
            {navItems.map((item) => (
              <motion.div
                key={item.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(false)}
              >
                {item.isExternal ? (
                  <a 
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-100 text-gray-700 hover:text-green-600 transition-all w-full md:w-auto"
                  >
                    {item.icon}
                    <span className="text-base md:text-lg">{item.label}</span>
                  </a>
                ) : (
                  <Link 
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 rounded-xl hover:bg-gray-100 text-gray-700 hover:text-green-600 transition-all w-full md:w-auto"
                  >
                    {item.icon}
                    <span className="text-base md:text-lg">{item.label}</span>
                  </Link>
                )}
              </motion.div>
            ))}
          </div>
          
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href="/">
              <Image
                width={70}
                height={42}
                src="/logo.png"
                className="rounded-lg"
                alt="Logo"
              />
            </Link>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  )
}