import { motion } from "framer-motion";

const Card = ({ title, description, icon, bgColor }) => {
  return (
    <motion.div
      className={`relative flex flex-col items-center justify-center rounded-lg p-6 shadow-md transform transition duration-500 hover:scale-105 ${bgColor}`}
      whileHover={{ scale: 1.05 }}
    >
      <div className="absolute top-4 right-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold text-gray-800 mb-2">
        {title}
      </h3>
      <p className="text-gray-600 text-center">{description}</p>
    </motion.div>
  );
};

function Cards() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-wrap justify-center gap-8">
        <Card
          title="من مبتدئ إلى محترف"
          description="كل ما تحتاج لمعرفته في عالم التداول في كتابين فقط الفرصة لا تنتظر !"
          icon={<span className="text-3xl font-bold text-gray-800">📚</span>}
          bgColor="bg-blue-100"
        />
        <Card
          title="تعلم وتداول"
          description="إغتنم الفرصة لتوسيع معرفتك وإكتساب مهارات جديدة وبناء ثروتك بنفسك ."
          icon={<span className="text-3xl font-bold text-gray-800">💡</span>}
          bgColor="bg-green-100"
        />
        <Card
          title="الخبرة والمعرفة المتخصصة"
          description="نقدم لعملائنا فريقاً معتمداً بشهادات CFA ,FRM, RIA يتميز بخبرة واسعة ."
          icon={<span className="text-3xl font-bold text-gray-800">📑</span>}
          bgColor="bg-purple-100"
        />
      </div>
    </div>
  );
}

export default function Main() {
  return (
    <div className="relative ">
      {/* Welcome section with absolute positioning */}
      <div className="relative z-10">
      <div className=" absolute top-0 h-full w-full bg-[url('/main.jpeg')] bg-cover  bg-no-repeat" />

      </div>
      
      {/* Cards section positioned below Welcome */}
      <div className="relative z-20 mt-20"> {/* Adjust mt-96 based on Welcome component height */}
        <Cards />
      </div>
    </div>
  );
}