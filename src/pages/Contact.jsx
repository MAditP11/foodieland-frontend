// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../index.css'
import Header from '../components/header'
import ContactFormContainer from '../components/contact/contactFormContainer'
import SubscribeContainer from '../components/subsContainer'
import CardList2Container from '../components/cardList2Container'

import Footer from '../components/footer'

export default function Contact() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <div class="main flex flex-col gap-28 py-5 px-12">
        {/* <!-- CONTENT FORM CONTACT --> */}
        <ContactFormContainer />

        {/* SUBSCRIBE */}
        <SubscribeContainer />

        {/* <!-- LIST RECIPE --> */}
        <CardList2Container title={'Check out the delicious recipe'} />

        {/* FOOTER */}
        <Footer></Footer>
      </div>
    </div>
  )
}
