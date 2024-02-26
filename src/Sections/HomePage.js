import React from 'react'
import CallToAction from './CallToAction'
import Specials from './Special'
import CustomersSay from './CustomerSay'
import Chicago from './Chicago'

export default function HomePage() {
  return (
    <div>
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </div>
  )
}
