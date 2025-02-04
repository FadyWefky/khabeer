"use client"
import React, { useEffect, useState } from 'react';

const CompanyProfile = () => {
  const [isVisible, setIsVisible] = useState({});
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible({
        header: true,
        main: true,
        services: true,
        team: true,
        cta: true
      });
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const fadeInClass = "opacity-100 translate-y-0";
  const fadeOutClass = "opacity-0 translate-y-10";

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50 p-8 font-sans mt-28" dir="rtl">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className={`text-center mb-20 space-y-6 transition-all duration-1000 ease-out ${isVisible.header ? fadeInClass : fadeOutClass}`}>
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-green-600 mb-4">الخبير</h1>
            <div className="h-1 w-32 bg-gradient-to-r from-red-800 to-red-300 mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">شريكك الموثوق في عالم الاستشارات المالية المتقدمة</p>
        </div>

        {/* Main Content */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 transition-all duration-1000 delay-300 ease-out ${isVisible.main ? fadeInClass : fadeOutClass}`}>
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-10 hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-500">
            <div className="prose prose-lg text-gray-700 leading-relaxed space-y-8">
              <h2 className="text-3xl font-bold text-indigo-900 mb-6">من نحن</h2>
              <p className="text-lg">شركتنا هي شركة استشارات مالية رائدة تقدم خدمات استشارية مالية متقدمة في الأسواق السعودية والأمريكية. نستخدم تقنيات الذكاء الاصطناعي (AI) لتقديم توصيات استثمارية دقيقة ومخصصة.</p>
              <img src="/1.jpeg" alt="Financial consulting" className="rounded-2xl shadow-lg w-full object-cover hover:shadow-xl transition-shadow duration-300"/>
              <p className="text-gray-600">نحن نهدف إلى مساعدة عملائنا على تحقيق أهدافهم المالية من خلال تقديم خدمات استشارية مالية شاملة ومخصصة.</p>
            </div>
          </div>

          <div className={`space-y-8 transition-all duration-1000 delay-500 ease-out ${isVisible.services ? fadeInClass : fadeOutClass}`}>
            {[
              {
                icon: "📈",
                title: "التوصيات الاستثمارية",
                description: "نقدم توصيات استثمارية دقيقة ومخصصة بناءً على تحليل السوق وتقنيات الذكاء الاصطناعي المتطورة."
              },
              {
                icon: "💼",
                title: "إدارة المحافظ الاستثمارية",
                description: "خدمات إدارة محافظ متكاملة تضمن تحقيق أهداف عملائنا المالية بكفاءة عالية."
              },
              {
                icon: "🏢",
                title: "الاستشارات الفنية",
                description: "تحليلات فنية متقدمة وتوصيات استثمارية مدعومة بأحدث التقنيات."
              }
            ].map((service, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-500"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="flex items-start space-x-6 space-x-reverse">
                  <div className="text-3xl">{service.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-indigo-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-12 mb-20 transition-all duration-1000 delay-700 ease-out ${isVisible.team ? fadeInClass : fadeOutClass}`}>
          <div className="text-center max-w-3xl mx-auto">
            <div className="flex items-center justify-center mb-8">
              <span className="text-4xl">👥</span>
              <h2 className="text-3xl font-bold text-indigo-900 mr-4">فريقنا المتخصص</h2>
            </div>
            <p className="text-gray-700 text-lg leading-relaxed">
              نحن نعتمد على فريق من الخبراء الماليين ذوي الخبرة العالية في الأسواق المالية السعودية والأمريكية. نجمع بين الخبرة البشرية وتقنيات الذكاء الاصطناعي لتقديم أفضل الحلول لعملائنا.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`text-center transition-all duration-1000 delay-1000 ease-out ${isVisible.cta ? fadeInClass : fadeOutClass}`}>
          <button className="bg-[#FFA500] hover:bg-red-700 text-white px-8 py-3 rounded-lg 
                     text-xl font-bold transition-all duration-300 transform hover:scale-105
                     shadow-lg hover:shadow-xl animate-bounce">
            ابدأ رحلتك الاستثمارية معنا اليوم
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;