"use client"
import React from 'react'
import { motion } from 'framer-motion';

const Service2 = () => {
  return (
     <div className=' rounded-lg  p-8 max-w-6xl mx-auto flex items-center my-40'>
    
        <motion.div
         initial={{ opacity: 0, x: 50 }}
         whileInView={{ opacity: 10, x: 0 }}
         transition={{ duration: 0.6 }}
         viewport={{ once: true }}
         className="mx-8">
          <img src="/services/2.jpeg" alt="خدمات الاستثمار" className="rounded-lg h-56" />
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 10, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className=""
        >
   
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-700">خدمه الافتكاك من التعليق ( مستشارك الفني)
      </h2>
      <div className="space-y-6">
        <div>
          <p className="text-gray-600">
          بيتم تعين مستشار فني خاص للرد علي جميع استفساراتك السوقيه علي مدار 24 ساعه
          </p>
          <p className="text-gray-600">
          بيساعدك في الخروج من الاسهم المتعلقه بطرق احترافيه 
          </p>
          <p className="text-gray-600">
          يعد لك أدق التقارير الفنيه للأسهم السعوديه و الاسهم المتعلقه 
          </p>
          <p className="text-gray-600">
            نبيساعدك علي اختيارات الاسهم الأنسب للمحفظه وسيولتك 

          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2 text-blue-500">رسوم الاشتراك</h3>
          <ul className="text-gray-600 space-y-2">
            <li>اشتراك لمدة 6 أشهر: 5,000 ريال</li>
            <li>اشتراك لمدة سنة: 8,000 ريال</li>
            <li>اشتراك لمدة سنتين: 20,000 ريال</li>
          </ul>
          
        </div>
      </div>
    </div>
  </motion.div>
  </div>
  );
};

export default Service2;