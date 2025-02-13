import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    market: '',
    stocks: '',
    comment: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) throw new Error('Submission failed');

      setFormData({
        name: '',
        email: '',
        phone: '',
        market: '',
        stocks: '',
        comment: ''
      });
      alert('تم إرسال النموذج بنجاح!');
    } catch (error) {
      console.error('Error:', error);
      alert('حدث خطأ. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 rounded-lg">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto"
      >
        <motion.div className="text-center mb-8" variants={itemVariants}>

        <h1 className="text-4xl font-bold text-[#f35b1e] mb-4"> تواصل معنا  </h1>
        <div className="w-24 h-1 bg-[#8aa941] mx-auto"></div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-6 space-y-4"
          variants={containerVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div variants={itemVariants}>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 text-right mb-1">
                الاسم
              </label>
              <motion.input
                type="text"
                name="name"
                id="name"
                required
                dir="rtl"
                value={formData.name}
                onChange={handleChange}
                whileFocus={{ scale: 1.01 }}
                className="block w-full px-4 py-2 text-right bg-white/50 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 text-right mb-1">
                البريد الإلكتروني
              </label>
              <motion.input
                type="email"
                name="email"
                id="email"
                dir="rtl"
                value={formData.email}
                onChange={handleChange}
                whileFocus={{ scale: 1.01 }}
                className="block w-full px-4 py-2 text-right bg-white/50 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 text-right mb-1">
                رقم الهاتف
              </label>
              <motion.input
                type="tel"
                name="phone"
                id="phone"
                required
                dir="rtl"
                value={formData.phone}
                onChange={handleChange}
                whileFocus={{ scale: 1.01 }}
                className="block w-full px-4 py-2 text-right bg-white/50 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <label htmlFor="market" className="block text-sm font-medium text-gray-700 text-right mb-1">
                السوق
              </label>
              <motion.select
                name="market"
                id="market"

                dir="rtl"
                value={formData.market}
                onChange={handleChange}
                className="block w-full px-4 py-2 text-right bg-white/50 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              >
                <option value="">اختر السوق</option>
                <option value="saudi">السوق السعودي</option>
                <option value="us">السوق الأمريكي</option>
                <option value="both">الاثنين معاً</option>
              </motion.select>
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <label htmlFor="stocks" className="block text-sm font-medium text-gray-700 text-right mb-1">
              الأسهم المعلقة
            </label>
            <motion.input
              type="text"
              name="stocks"
              id="stocks"

              dir="rtl"
              value={formData.stocks}
              onChange={handleChange}
              whileFocus={{ scale: 1.01 }}
              className="block w-full px-4 py-2 text-right bg-white/50 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="comment" className="block text-sm font-medium text-gray-700 text-right mb-1">
              الرسالة
            </label>
            <motion.textarea
              name="comment"
              id="comment"
              rows="3"

              dir="rtl"
              value={formData.comment}
              onChange={handleChange}
              whileFocus={{ scale: 1.01 }}
              className="block w-full px-4 py-2 text-right bg-white/50 border border-gray-300 rounded-xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 resize-none"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-1/3 flex justify-center items-center space-x-4 py-2 px-4 rounded-xl text-base font-medium text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 focus:ring-2 focus:ring-emerald-500 disabled:opacity-50"
            >
              <span className='mx-3'>{isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h- w-8 mx-3" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ContactForm;