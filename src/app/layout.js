"use client"
import "./styles/globals.css";
import { motion } from 'framer-motion'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <div className="min-h-screen ">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}