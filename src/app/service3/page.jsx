"use client"
import React from 'react'
import { motion } from 'framer-motion';

const Service3 = () => {
  return (
    <div className='rounded-lg pt-40 p-8 max-w-6xl mx-auto flex items-center '>
   
       <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 10, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-8">
         <img src="/services/3.jpeg" alt="خدمات الاستثمار" className="rounded-lg h-56" />
       </motion.div>
       <motion.div
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 10, y: 0 }}
       transition={{ duration: 0.6 }}
       viewport={{ once: true }}
       className=""
       >
    
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-700">خدمة توصيات الخبير الذهبية</h2>
      <div className="space-y-6">
        <div>
          <p className="text-gray-600">
          بيتم ارسال من 40 - 60 توصيه مضاربيه سريعة 
          ومن 10 - 12 توصية استثمارية (شهريا )
          </p>
          <p className="text-gray-600">
          ارسال تحاليل فنيه والرد علي استفساراتك  علي مدار اليوم 
          </p>
          <p className="text-red-900 font-bold">
          تقدم الخدمه للمحافظ فوق 80 الف ريال للاستفاده من تنوع الارباح
          </p>
          
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2 text-blue-500">رسوم الاشتراك</h3>
          <ul className="text-gray-600 space-y-2">
            <li>اشتراك لمدة 6 أشهر: 10,000 ريال</li>
            <li>اشتراك لمدة سنة: 15,000 ريال</li>
            <li>اشتراك لمدة سنتين: 24,000 ريال</li>
          </ul>
          
        </div>
      </div>
    </div>
  </motion.div>
  </div>
  );
};

export default Service3;