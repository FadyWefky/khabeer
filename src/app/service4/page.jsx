"use client"
import React from 'react'
import { motion } from 'framer-motion';

const Service4 = () => {
  return (
   <div className=' rounded-lg  p-8 max-w-6xl mx-auto flex items-center my-40'>
  
      <motion.div
       initial={{ opacity: 0, x: 50 }}
       whileInView={{ opacity: 10, x: 0 }}
       transition={{ duration: 0.6 }}
       viewport={{ once: true }}
       className="mx-8">
        <img src="/services/4.jpeg" alt="خدمات الاستثمار" className="rounded-lg h-56" />
      </motion.div>
      <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 10, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className=""
      >
   
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-700">خدمه التوصيات المضاربيه </h2>
      <div className="space-y-6">
        <div>
          <p className="text-gray-600">
          عدد التوصيات الشهريه من 40 : 60 توصيه 

          </p>
          <p className="text-gray-600">
          نسبه الربح لكل توصيه من 2% الي 3%
          </p>
          <p className="text-gray-600">
          مده تحقيق التوصيه بنسبه 85% بنفس الجلسه كحد أقصى ثلاثه جلسات 
          </p>
          <p className="text-gray-600">
            نوقف خساره 1%

          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2 text-blue-500">رسوم الاشتراك</h3>
          <ul className="text-gray-600 space-y-2">
            <li>اشتراك لمدة 6 أشهر: 8,000 ريال</li>
            <li>اشتراك لمدة سنة: 12,000 ريال</li>
            <li>اشتراك لمدة سنتين: 14,000 ريال</li>
          </ul>
         
        </div>
      </div>
    </div>
  </motion.div>
  </div>
  );
};

export default Service4;