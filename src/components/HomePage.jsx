
import React from 'react'
import OurServices from './OurServices'
import ContactForm from './ContactForm'
import CustomerReviews from './CustomerReviews'
import Main from './Main'
import WelcomeHero from './WelcomeHero'

export default function HomePage() {
  return (
    <main> 
      <WelcomeHero/>
      <Main/>
    <OurServices />
    <CustomerReviews/>
    <ContactForm />
  </main>
  )
}
