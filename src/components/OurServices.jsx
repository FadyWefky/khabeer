import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const OurServices = () => {
  const saudiServices = [
    {
      title: 'خدمة إدارة المحافظ',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ),
      iconBg: 'bg-emerald-100',
      url: '/service1',
    },
    {
      title: 'الافتكاك من التعليق (مستشارك الفني)',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      ),
      iconBg: 'bg-emerald-100',
      url: '/service2',
    },
    {
      title: 'خدمة توصيات الخبير الذهبية',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="18" y1="20" x2="18" y2="10"></line>
          <line x1="12" y1="20" x2="12" y2="4"></line>
          <line x1="6" y1="20" x2="6" y2="14"></line>
        </svg>
      ),
      iconBg: 'bg-emerald-100',
      url: '/service3',
    },
    {
      title: 'خدمة التوصيات المضاربية',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ),
      iconBg: 'bg-emerald-100',
      url: '/service4',
    },
    {
      title: 'خدمة التوصيات الاستثمارية قصيرة الأجل',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ),
      iconBg: 'bg-emerald-100',
      url: '/service5',
    },
    {
      title: 'خدمة التحليلات الفنية والمالية وقراءة وضع المؤشر العام',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ),
      iconBg: 'bg-emerald-100',
      url: '/service6',
    },
  ];

  const americanServices = [
    {
      title: 'باقات التوصيات الأمريكية',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ),
      iconBg: 'bg-emerald-100',
      url: '/amService1',
    },
    {
      title: 'باقة إدارة المحافظ',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
      ),
      iconBg: 'bg-emerald-100',
      url: '/amService2',
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className=" min-h-screen py-16 px-4 mt-40">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-black mb-4">خدماتنا في السوق السعودي</h1>
        <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {saudiServices.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center my-16"
      >
        <h1 className="text-4xl font-bold text-black mb-4">خدماتنا في السوق الأمريكي</h1>
        <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {americanServices.map((service, index) => (
          <ServiceCard key={index} service={service} />
        ))}
      </motion.div>
    </div>
  );
};

const ServiceCard = ({ service }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }}
      className="bg-gray-800 rounded-xl p-6 shadow-xl relative overflow-hidden group"
    >
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className={`${service.iconBg} p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6 text-emerald-500`}
      >
        {service.icon}
      </motion.div>

      <h3 className="text-xl font-bold text-white mb-4 text-right">{service.title}</h3>
      <p className="text-gray-400 text-right">{service.description}</p>

      <motion.div
        whileHover={{ scale: 1.1 }}
        className="absolute bottom-6 left-6"
      >
        <Link href={service.url} className="bg-emerald-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
          التفاصيل
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="7" y1="17" x2="17" y2="7"></line>
            <polyline points="7 7 17 7 17 17"></polyline>
          </svg>
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute top-0 right-0 w-32 h-32 bg-emerald-500 rounded-full blur-3xl -mr-16 -mt-16 group-hover:opacity-20 transition-opacity"
      />
    </motion.div>
  );
};

export default OurServices;