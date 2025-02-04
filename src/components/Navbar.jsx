"use client"
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from "next/image";


const navItems = [
  { href: '/', label: 'الرئيسية' },
  { href: '/about', label: 'من نحن' },
  { href: '/contact', label: 'اتصل بنا' }
]

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 bg-white  shadow-lg  px-6 text-right h-25 z-50 mb-28"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex space-x-4 reverse">
          {navItems.map((item) => (
            <motion.div
              key={item.href}
              whileHover={{ scale: 1.1, color: '#fff' }}
              whileTap={{ scale: 1.5 }}
            >
              <Link 
                href={item.href} 
                className="text-red-500 mx-6 text-xl hover:text-green-600 transition-colors text-center"
              >
                {item.label}
              </Link>
            </motion.div>
          ))}
        </div>
        <motion.div 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
             <a
          href="/"
          className="text-lg font-bold "
        
        >
          <Image
              width={100}
              height={60}
              src="/logo.png"
              className="w-full h-full rounded-lg"
              alt=""
          />
        </a>
        </motion.div>
      </div>
    </motion.nav>
  )
}