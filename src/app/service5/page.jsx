"use client"
import React from 'react'
import { motion } from 'framer-motion';

const Service5 = () => {
  return (
     <div className=' rounded-lg  p-8 max-w-6xl mx-auto flex items-center my-40'>
    
        <motion.div
         initial={{ opacity: 0, x: 50 }}
         whileInView={{ opacity: 10, x: 0 }}
         transition={{ duration: 0.6 }}
         viewport={{ once: true }}
         className="mx-8">
          <img src="/services/5.jpeg" alt="خدمات الاستثمار" className="rounded-lg h-56" />
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 10, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className=""
        >
   
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-700">خدمه التوصيات الاستثمارية قصيره الاجل</h2>
      <div className="space-y-6">
        <div>
          <p className="text-gray-600">
            نعدد التوصيات من 10 الي 12 سهم 

          </p>
          <p className="text-gray-600">
          نسبه الربح للسهم من 5% الي 12%
          </p>
          <p className="text-gray-600">
          مده تحقيق السهم الاستثماري من اسبوع الي ثلاتة اسابيع 
          </p>
          <p className="text-gray-600">
            نقوقف الخساره 2.5%

          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2 text-blue-500">رسوم الاشتراك</h3>
          <ul className="text-gray-600 space-y-2">
            <li>اشتراك لمدة 6 أشهر: 7,500 ريال</li>
            <li>اشتراك لمدة سنة: 10,000 ريال</li>
            <li>اشتراك لمدة سنتين: 14,000 ريال</li>
          </ul>
        
        </div>
      </div>
    </div>
  </motion.div>
  </div>
  );
};

export default Service5;