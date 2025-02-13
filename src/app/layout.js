import "./styles/globals.css";
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'


export const metadata = {
  title: 'الخبير المالية  ',
  description: 'خدمات استشارية مالية متقدمة في الأسواق السعودية والأمريكية',
  icon: '/logo.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body>
          <Navbar />
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
          {children}
        </div>
          <Footer />
      </body>
    </html>
  )
}