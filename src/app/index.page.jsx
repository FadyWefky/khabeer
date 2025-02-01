"use client"

import Head from 'next/head'
import { motion } from 'framer-motion'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import ContactForm from '../components/ContactForm'

export default function Home() {
  return (
    <div dir="rtl" className="min-h-screen flex flex-col">
      <Head>
        <title>مشروع الخبير</title>
        <meta name="description" content="صفحة رئيسية لمشروع الخبير" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="flex-grow container mx-auto px-4 py-8"
      >
        <div className="text-center">
          <motion.h1 
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold mb-6 text-gray-800"
          >
            مرحبًا بكم في مشروع الخبير
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-xl text-gray-600 mb-8"
          >
            نحن هنا لتقديم أفضل الخدمات والحلول المبتكرة
          </motion.p>
          
          <div className="max-w-xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </motion.main>
      
      <Footer />
    </div>
  )
}