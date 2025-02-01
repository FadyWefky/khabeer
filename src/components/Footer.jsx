"use client"
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const statistics = [
    { number: '+999', label: 'التوصيات المستلمة' },
    { number: '+190', label: 'عدد الفريق' },
    { number: '+1700', label: 'عدد العملاء' },
    { number: '+10', label: 'سنوات من الخبرة' }
  ];

  const workingHours = [
    { day: 'الأحد', hours: '9 صباحا - 5 مساء' },
    { day: 'الاثنين', hours: '9 صباحا - 5 مساء' },
    { day: 'الثلاثاء', hours: '9 صباحا - 5 مساء' },
    { day: 'الأربعاء', hours: '9 صباحا - 5 مساء' },
    { day: 'الخميس', hours: '9 صباحا - 5 مساء' },
    { day: 'الجمعة', hours: 'مغلق' },
    { day: 'السبت', hours: 'مغلق' }
  ];

  const pages = [
    { title: 'الصفحة الرئيسية', url: '#' },
    { title: 'خدمات', url: '#' },
    { title: 'اتصل', url: '#' },
    { title: 'معلومات عنا', url: '#' }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <footer className="bg-teal-200 rounded-t-xl py-16 px-4 overflow-hidden relative">
      {/* Stats Section */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto mb-16"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statistics.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-100"
            >
              <motion.h3
                className="text-4xl font-bold text-emerald-600 mb-2"
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-600 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      

        {/* Pages */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <h4 className="text-lg font-bold text-gray-800 mb-6 text-right">الصفحات</h4>
          <div className="space-y-3">
            {pages.map((page, index) => (
              <motion.a
                key={index}
                href={page.url}
                variants={itemVariants}
                whileHover={{ x: -5 }}
                className="block text-right text-gray-600 hover:text-emerald-600 transition-colors duration-200"
              >
                {page.title}
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Details */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible" 
          className="space-y-4"
        >
          <h4 className="text-lg font-bold text-gray-800 mb-6 text-right">تفاصيل</h4>
          <p className="text-gray-600 text-right leading-relaxed">
            خبرة التداول في الخبير طريقك نحو الاستثمار الآمن. نقدم لك الاستراتيجيات المتقدمة والتحليلات الذهنية لمساعدك في اتخاذ القرارات الاستثمارية الصائبة وتحقيق النجاح في عالم الأسواق المالية.
          </p>
        </motion.div>

        {/* Contact */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-4"
        >
          <h4 className="text-lg font-bold text-gray-800 mb-6 text-right">تواصل معنا</h4>
          <div className="space-y-3">
            <motion.div variants={itemVariants} className="flex items-center justify-end gap-3">
              <span className="text-gray-600">المملكة العربية السعودية</span>
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-center justify-end gap-3">
              <span className="text-gray-600">0546656351</span>
              <svg className="w-5 h-5 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-16 text-center text-gray-500 text-sm"
      >
        © 2025 جميع الحقوق محفوظة
      </motion.div>
    </footer>
  );
};

export default Footer;