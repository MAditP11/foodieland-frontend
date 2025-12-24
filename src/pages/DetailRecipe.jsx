import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../index.css'
import Header from '../components/header'
import ImgCover from '../assets/details/Group13937.png'
import ImgDirect1 from '../assets/details/directions/Rectangle 23.png'
import ImgOtherRecipe1 from '../assets/details/other-recipe/Mask Group.png'
import ImgAds from '../assets/details/other-recipe/Ads.png'
import { Timer, Utensils, User, Printer, Share } from 'lucide-react'
import NutritionInfo from '../components/detail_recipe/nutritionInfo'
import MainDishList from '../components/detail_recipe/maindishlist'
import SauceList from '../components/detail_recipe/saucelist'
import OtherRecipeCard from '../components/detail_recipe/otherRecipeCard'
import SubscribeContainer from '../components/subsContainer'
import formatTanggal from '../components/formatTanggal'
import Footer from '../components/footer'
import CardList2Container from '../components/cardList2Container'
import { GetAllRecipes, GetRecipeById } from '../api/recipeApi'

export default function DetailRecipe() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  console.log(recipe)
  const [recipes, setRecipes] = useState([])
  const otherRecipe = recipes.filter((r) => r.id !== Number(id))
  useEffect(() => {
    GetRecipeById(id).then(setRecipe).catch(console.error)
    GetAllRecipes().then(setRecipes).catch(console.error)
  }, [id])

  if (!recipe) {
    return <div>Loading...</div> // ← cegah error
  }

  return (
    <div>
      <Header></Header>

      <div class="main flex flex-col gap-28 py-5 px-12">
        {/* <!-- DETAIL RECIPE --> */}

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
