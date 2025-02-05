"use client"
import React from 'react'
import { motion } from 'framer-motion';

const Service6 = () => {
  return (
    <div className='rounded-lg pt-40 p-8 max-w-6xl mx-auto flex items-center '>

    <motion.div
     initial={{ opacity: 0, x: 50 }}
     whileInView={{ opacity: 10, x: 0 }}
     transition={{ duration: 0.6 }}
     viewport={{ once: true }}
     className="mx-8">
      <img src="/services/6.jpeg" alt="خدمات الاستثمار" className="rounded-lg h-56" />
    </motion.div>
    <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 10, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    className=""
    >
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-700">خدمه التحليلات الفنيه والمالية وقراءة وضع المؤشر العام</h2>
      <div className="space-y-6">
        <div>
          <p className="text-gray-600">
          تحليل جميع اسهمك فنياً وماليا علي جميع المؤشرات مثل MADC - ADX

          </p>
          <p className="text-gray-600">
          المتابعه المستمرة للأحداث الاقتصادية وتحليل الرسوم البيانية وحجم التداول 
          </p>
          <p className="text-gray-600">
          يمكن للمستثمرين اتخاذ قرارات مستنيره بشأن استثماراتهم
          </p>
          
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2 text-blue-500">رسوم الاشتراك</h3>
          <ul className="text-gray-600 space-y-2">
          <p className="text-green-800 font-bold">
          تقدم هذه الخدمه بشكل مجاني بدون اي رسوم
          </p>          
          </ul>
         
        </div>
      </div>
    </div>
  </motion.div>
       </div>
  );
};

export default Service6;