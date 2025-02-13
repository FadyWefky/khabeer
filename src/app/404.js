import Link from 'next/link';

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <h1 className="text-6xl font-bold text-indigo-600 mb-4">404</h1>
      <p className="text-xl text-gray-700 mb-8">الصفحة التي تبحث عنها غير موجودة</p>
      <Link href="/">
        <a className="bg-indigo-600 text-white px-6 py-3 rounded-md text-lg font-medium hover:bg-indigo-700">
          العودة إلى الصفحة الرئيسية
        </a>
      </Link>
    </div>
  );
};

export default NotFound;