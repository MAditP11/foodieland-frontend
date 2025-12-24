import '../index.css'
import Header from '../components/header'
import SubscribeContainer from '../components/subsContainer'
import Footer from '../components/footer'
import CardList2Container from '../components/cardList2Container'
import DetailRecipeContainer from '../components/detail_recipe/DetailRecipeContainer'

export default function DetailRecipe() {
  return (
    <div>
      <Header></Header>

      <div class="main flex flex-col gap-28 py-5 px-12">
        {/* <!-- DETAIL RECIPE --> */}
        <DetailRecipeContainer />

        {/* SUBSCRIBE */}
        <SubscribeContainer />

        {/* <!-- LIST --> */}
        <CardList2Container title={'You may like these recipe too'} />

        {/* FOOTER */}
        <Footer></Footer>
      </div>
    </div>
  )
}
