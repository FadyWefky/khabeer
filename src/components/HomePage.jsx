import { Main } from 'next/document'
import React from 'react'
import OurServices from './OurServices'
import ContactForm from './ContactForm'
import CustomerReviews from './CustomerReviews'

export default function HomePage() {
  return (
    <main> 
    <OurServices />
    <CustomerReviews/>
    <ContactForm />
  </main>
  )
}
