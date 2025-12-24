// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import '../index.css'
import Header from '../components/header'
import BlogListContainer from '../components/blog/blogListContainer'
import SubscribeContainer from '../components/subsContainer'
import Footer from '../components/footer'
export default function BlogArticleList() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
      <div class="main flex flex-col gap-28 py-5 px-12">
        {/* <!-- BLOG & ARTICLE --> */}
        <BlogListContainer />

        {/* SUBSCRIBE */}
        <SubscribeContainer />

        {/* FOOTER */}
        <Footer></Footer>
      </div>
    </div>
  )
}
