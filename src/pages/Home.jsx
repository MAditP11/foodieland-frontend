import '../index.css'
import Header from '../components/header'
import JumbotronContainer from '../components/home/jumbotron'
import CategoriesContainer from '../components/home/categories'
import ListContainer from '../components/home/list'
import LearnMoreContainer from '../components/home/learn_more'
import PostMediaContainer from '../components/home/post_media'
import SubscribeContainer from '../components/subsContainer'
import Footer from '../components/footer'
// import CardList from '../components/cardList'

import CardList2Container from '../components/cardList2Container'

export default function Home() {
  return (
    <div>
      <Header></Header>

      <div className="main flex flex-col gap-28 py-5">
        {/* JUMBOTRON */}
        <JumbotronContainer />

        {/* CATEGORIES */}
        <CategoriesContainer />

        {/* LIST */}
        <ListContainer />

        {/* LEARN MORE */}
        <LearnMoreContainer />

        {/* POST Media */}
        <PostMediaContainer />
        {/* LIST 2 */}
        <CardList2Container
          title={'Try this delicious recipe to make your day'}
          paragraf={
            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam consectetur repellendus enim commodi alias cupiditate. Dolorem dignissimos odit exercitationem. Ad.'
          }
        />
        {/* SUBSCRIBE */}
        <SubscribeContainer style={'px-12'} />
        {/* FOOTER */}
        <Footer style={'px-12'}></Footer>
      </div>

      <script>lucide.createIcons()</script>
    </div>
  )
}
