import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    comment: '',
    market: '', // New field for market selection
    stocks: ''  // New field for stocks input
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('YOUR_API_ENDPOINT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        phone: '',
        comment: '',
        market: '',
        stocks: ''
      });

      alert('تم إرسال النموذج بنجاح!');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen  py-16 px-4 sm:px-6 lg:px-8 rounded-lg relative overflow-hidden">
      {/* Previous decorative elements remain the same */}
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-2xl mx-auto relative"
      >
        <motion.div 
          className="text-center mb-12"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">تواصل معنا</h2>
          <p className="text-lg text-gray-600">نحن نتطلع للتواصل معك</p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 md:p-12 space-y-8"
          variants={containerVariants}
        >
        

          {/* Existing form fields remain the same */}
          <motion.div variants={itemVariants}>
            <label htmlFor="name" className="block text-lg font-medium text-gray-700 text-right mb-2">
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
              className="block w-full px-6 py-4 text-right bg-white/50 border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <label htmlFor="email" className="block text-lg font-medium text-gray-700 text-right mb-2">
              البريد الإلكتروني
            </label>
            <motion.input
              type="email"
              name="email"
              id="email"
              required
              dir="rtl"
              value={formData.email}
              onChange={handleChange}
              whileFocus={{ scale: 1.01 }}
              className="block w-full px-6 py-4 text-right bg-white/50 border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700 text-right mb-2">
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
              className="block w-full px-6 py-4 text-right bg-white/50 border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
            />
          </motion.div>
            {/* New Market Selection Dropdown */}
            <motion.div variants={itemVariants}>
            <label htmlFor="market" className="block text-lg font-medium text-gray-700 text-right mb-2">
              السوق
            </label>
            <motion.select
              name="market"
              id="market"
              required
              dir="rtl"
              value={formData.market}
              onChange={handleChange}
              className="block w-full px-6 py-4 text-right bg-white/50 border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
            >
              <option value="">اختر السوق</option>
              <option value="saudi">السوق السعودي</option>
              <option value="us">السوق الأمريكي</option>
              <option value="both">الاثنين معاً</option>
            </motion.select>
          </motion.div>

          {/* New Stocks Input */}
          <motion.div variants={itemVariants}>
            <label htmlFor="stocks" className="block text-lg font-medium text-gray-700 text-right mb-2">
              الأسهم المعلقة
            </label>
            <motion.input
              type="text"
              name="stocks"
              id="stocks"
              required
              dir="rtl"
              value={formData.stocks}
              onChange={handleChange}
              whileFocus={{ scale: 1.01 }}
              className="block w-full px-6 py-4 text-right bg-white/50 border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label htmlFor="comment" className="block text-lg font-medium text-gray-700 text-right mb-2">
              الرسالة
            </label>
            <motion.textarea
              name="comment"
              id="comment"
              rows="4"
              required
              dir="rtl"
              value={formData.comment}
              onChange={handleChange}
              whileFocus={{ scale: 1.01 }}
              className="block w-full px-6 py-4 text-right bg-white/50 border border-gray-300 rounded-2xl shadow-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-all duration-200 resize-none"
            />
          </motion.div>
          <motion.div variants={itemVariants}>
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: 1.02, boxShadow: "0 10px 30px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex justify-center items-center gap-2 py-4 px-6 border border-transparent rounded-2xl text-lg font-medium text-white bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span>{isSubmitting ? 'جاري الإرسال...' : 'إرسال الرسالة'}</span>
              <motion.svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
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

        {/* Decorative elements remain the same */}
      </motion.div>
    </div>
  );
};

export default ContactForm;