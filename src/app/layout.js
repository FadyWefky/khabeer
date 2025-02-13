import "./styles/globals.css";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Head from 'next/head';

export const metadata = {
  title: 'الخبير المالية',
  description: 'خدمات استشارية مالية متقدمة في الأسواق السعودية والأمريكية',
  icon: '/logo.png',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />

      </head>
      <Head>
        <meta name="description" content="نقدم أفضل الخدمات لتلبية احتياجاتك. تواصل معنا اليوم!" />
        <meta name="keywords" content="استشارات مالية, أفضل خدمة, الخبير المالية" />
        <meta property="og:title" content="الخبير المالية" />
        <meta property="og:description" content="نقدم خدمات استشارية مالية متقدمة في الأسواق السعودية والأمريكية." />
        <meta property="og:image" content="https://elkhabeerelmalya.com/og-image.jpg" />
      </Head>
      <body>
        <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}