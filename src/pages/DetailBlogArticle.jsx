// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../index.css'
import Header from '../components/header'
import DetailBlogContainer from '../components/blog/detailBlogContainer'
import CardList2Container from '../components/cardList2Container'
import SubscribeContainer from '../components/subsContainer'
import Footer from '../components/footer'

export default function DetailBlogArticle() {
  // const [count, setCount] = useState(0)
  return (
    <div>
      <Header></Header>
      <div class="main flex flex-col gap-28 py-5 px-12">
        {/* <!-- DETAIL BLOG & ARTICLE --> */}
        <DetailBlogContainer />

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
