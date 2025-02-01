"use client"
import React from 'react'
import { motion } from 'framer-motion';

const AmService1 = () => {
  return (
    <div className=' rounded-lg shadow-lg p-8 max-w-6xl mx-auto flex items-center mt-40'>
   
       <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 10, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-8">
         <img src="/services/amService1.jpeg" alt="خدمات الاستثمار" className="rounded-lg h-56" />
       </motion.div>
       <motion.div
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 10, y: 0 }}
       transition={{ duration: 0.6 }}
       viewport={{ once: true }}
       className=""
       >
   
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-700">باقات التوصيات الأمريكي      </h2>
      <div className="space-y-6">
        <div>
          <p className="text-gray-600">
          عدد توصيات يوميا من اتنين الي ثلاث توصيات  
          </p>
          <p className="text-gray-600">
          ربح التوصيه تتراوح بين 5% الي 10%
          </p>
          <p className="text-gray-600">
          متوسط الربح الشهري 20%
          </p>
          <p className="text-gray-600">
            نقمده التحقيق من جلستين الي 6 جلسات 
          </p>
          <p className="text-gray-600">
          وقف خساره 3%

          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2 text-blue-500">رسوم الاشتراك</h3>
          <ul className="text-gray-600 space-y-2">
            <li>اشتراك لمدة شهر: 800 دولار</li>
            <li>اشتراك لمدة 3 اشهر: 2,000 دولار</li>
            <li>اشتراك لمدة 6 اشهر: 3,500 دولار</li>
            <li>اشتراك لمدة 12 شهر: 5,000 دولار</li>

          </ul>
         
        </div>
      </div>
    </div>
  </motion.div>
  </div>
  );
};

export default AmService1;