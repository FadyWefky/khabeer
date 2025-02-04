"use client"
import React from 'react'
import { motion } from 'framer-motion';

const Service1 = () => {
  return (
    <div className=' rounded-lg  p-8 max-w-6xl mx-auto flex items-center my-40'>
   
       <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 10, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mx-8">
         <img src="/services/1.jpeg" alt="خدمات الاستثمار" className="rounded-lg h-56" />
       </motion.div>
       <motion.div
       initial={{ opacity: 0, y: 50 }}
       whileInView={{ opacity: 10, y: 0 }}
       transition={{ duration: 0.6 }}
       viewport={{ once: true }}
       className=""
       >
   
    <div>
      <h2 className="text-2xl font-bold mb-6 text-green-700">خدمه اداره المحافظ      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium mb-2 text-orange-500">إدارة المحفظة</h3>
          <p className="text-gray-600">
            نقوم بتخطيط وتنويع استثماراتك عبر مختلف القطاعات، محققين عوائد أعلى مع الحد
            الأدنى من المخاطر.
          </p>
          <p className="text-gray-600">
            العائد الشهري المتوقع: من 7% إلى 12%
          </p>
          <p className="text-gray-600">
            نحتفظ بجزء من السيولة لاقتناص الفرص المتاحة في السوق يومياً.
          </p>
          <p className="text-gray-600">
            نقوم بمتابعة العوامل المؤثرة على السوق، مثل أسعار النفط والأوضاع الاقتصادية
            والسياسية العالمية، لتجنب المخاطر المحتملة.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2 text-blue-500">رسوم الاشتراك</h3>
          <ul className="text-gray-600 space-y-2">
            <li>اشتراك لمدة 6 أشهر: 8,000 ريال</li>
            <li>اشتراك لمدة سنة: 12,000 ريال</li>
            <li>اشتراك لمدة سنتين: 20,000 ريال</li>
          </ul>
          <p className="text-gray-600">
            بالإضافة إلى نسبة من الأرباح الشهرية المحققة في محافظ العملاء، يتم الاتفاق
            عليها.
          </p>
        </div>
      </div>
    </div>
  </motion.div>
  </div>
  );
};

export default Service1;