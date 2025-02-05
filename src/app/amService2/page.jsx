"use client"
import React from 'react'
import { motion } from 'framer-motion';

const AmService2 = () => {
  return (
    <div className='rounded-lg pt-40 p-8 max-w-6xl mx-auto flex items-center '>
   
       <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 10, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-8">
         <img src="/services/amService2.jpeg" alt="خدمات الاستثمار" className="rounded-lg h-56" />
       </motion.div>
       <motion.div
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 10, y: 0 }}
       transition={{ duration: 0.6 }}
       viewport={{ once: true }}
       className=""
       >
   
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-700">باقه اداره المحافظ</h2>
      <div className="space-y-6">
        <div>
          <p className="text-gray-600">
          متابعه السوق لحظياً لتحقيق أقصى استفادة من خلال منفذ خاص 

          </p>
          <p className="text-gray-600">
          للمستثمرين الراغبين في متابعة دقيقة للسوق الأمريكي، نقدم هذه الباقة التي توفر متابعة لحظية طوال الجلسة مع توقعات الخبراء وتحليل لأفضل الشركات سريعة الحركة
          </p>
          <p className="text-gray-600">
          بعائد ربح شهري من 15% الي 30%
          </p>
         
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2 text-blue-500">رسوم الاشتراك</h3>
          <ul className="text-gray-600 space-y-2">
            <li>اشتراك لمدة 6 أشهر: 5,000 دولار</li>
            <li>اشتراك لمدة سنة: 7,000 دولار</li>
            <li>اشتراك لمدة سنتين: 12,000 دولار</li>
          </ul>
         
        </div>
      </div>
    </div>
  </motion.div>
  </div>
  );
};

export default AmService2;