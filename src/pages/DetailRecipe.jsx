import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../index.css'
import Header from '../components/header'
import ImgCover from '../assets/IMG_FOODIELAND/details/Group13937.png'
import ImgDirect1 from '../assets/IMG_FOODIELAND/details/directions/Rectangle 23.png'
import ImgOtherRecipe1 from '../assets/IMG_FOODIELAND/details/other-recipe/Mask Group.png'
import ImgAds from '../assets/IMG_FOODIELAND/details/other-recipe/Ads.png'
import { Timer, Utensils, User, Printer, Share } from 'lucide-react'
import NutritionInfo from '../components/recipe/nutritionInfo'
import MainDishList from '../components/recipe/maindishlist'
import SauceList from '../components/recipe/saucelist'
import OtherRecipeCard from '../components/recipe/otherRecipeCard'
import SubscribeContainer from '../components/subsContainer'
import ImgCardList from '../assets/IMG_FOODIELAND/list/image 26.png'
import CardList2 from '../components/cardList2'
import Footer from '../components/footer'
import CardList2Container from '../components/cardList2Container'
import { GetAllRecipes, GetRecipeById } from '../api/recipeApi'

export default function DetailRecipe() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)
  const [recipes, setRecipes] = useState(null)
  const otherRecipe = recipes.filter((r) => r.id !== Number(id))
  useEffect(() => {
    GetRecipeById(id).then(setRecipe).catch(console.error)
    GetAllRecipes().then(setRecipes).catch(console.error)
  }, [id])

  return (
    <div>
      <Header></Header>

      <div class="main flex flex-col gap-28 py-5 px-12">
        {/* <!-- DETAIL RECIPE --> */}
        <div class="flex flex-col w-full pt-14 gap-16">
          <div class="content-top w-full flex items-center justify-between">
            {/* LEFT CONTENT */}
            <div class=" flex flex-col gap-12">
              <div class="title">
                <h1 class="font-semibold font-inter text-6xl">
                  {recipe.title}
                </h1>
              </div>
              <div class="flex">
                <div class="user flex items-center gap-2.5 pr-8 border-r border-black/10">
                  <div class="img-user rounded-full border-2">
                    <User color="black" size={36} />
                  </div>
                  <div class="data-user flex flex-col gap-0.5">
                    <p class="font-bold text-base font-inter">
                      {recipe.writer}
                    </p>
                    <p class="font-medium text-sm font-inter text-black/60">
                      {recipe.create_at}
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-2.5 px-10 border-r border-black/10">
                  <div class="">
                    <Timer color="black" size={24} />
                  </div>
                  <div class="prep-time flex flex-col gap-0.5">
                    <p class="font-medium text-sm font-inter">PREP TIME</p>
                    <p class="font-medium text-sm font-inter text-black/60">
                      {recipe.prep_time}
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-2.5 px-10 border-r border-black/10">
                  <div class="">
                    <Timer color="black" size={24} />
                  </div>
                  <div class="cook-time flex flex-col gap-0.5">
                    <p class="font-medium text-sm font-inter">COOK TIME</p>
                    <p class="font-medium text-sm font-inter text-black/60">
                      {recipe.cook_time}
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-2.5 pl-10">
                  <div class="">
                    <Utensils color="black" size={24} />
                  </div>
                  <div class="type-recipe">
                    <p class="font-medium text-sm font-inter text-black/60">
                      {recipe.category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT CONTENT */}
            <div class="flex gap-6">
              <div class="flex flex-col gap-3 items-center">
                <div class="img bg-primary p-5 rounded-full">
                  <Printer color="black" size={20} />
                </div>
                <div class="">
                  <p class="font-medium text-sm font-inter">PRINT</p>
                </div>
              </div>

              <div class="flex flex-col gap-3 items-center">
                <div class="img bg-primary p-5 rounded-full">
                  <Share color="black" size={20} />
                </div>
                <div class="">
                  <p class="font-medium text-sm font-inter">SHARE</p>
                </div>
              </div>
            </div>
          </div>

          {/* MIDDLE CONTENT */}
          <div class="flex gap-8">
            <div class="img w-5/6">
              <img
                class="w-full"
                src={`http://localhost:8080/${recipe.image}`}
                alt=""
              />
            </div>
            <div class="nutrition-info w-1/3 flex flex-col justify-between px-6 py-8 bg-primary rounded-2xl">
              <div class="top-content flex flex-col gap-3">
                <div class="sub-title">
                  <h3 class="font-semibold text-2xl font-inter">
                    Nutrition Information
                  </h3>
                </div>
                <div class="detail flex flex-col">
                  <NutritionInfo
                    name={'Calories'}
                    count={`${recipe.nutrition.calories}`}
                  />
                  <NutritionInfo
                    name={'Total Fat'}
                    count={`${recipe.nutrition.total_fat}`}
                  />
                  <NutritionInfo
                    name={'Protein'}
                    count={`${recipe.nutrition.protein}`}
                  />
                  <NutritionInfo
                    name={'Carbohydrate'}
                    count={`${recipe.nutrition.carbohydrate}`}
                  />
                  <NutritionInfo
                    name={'Cholesterol'}
                    count={`${recipe.nutrition.cholesterol}`}
                  />
                </div>
              </div>

              <div class="bottom-content flex text-center">
                <p class="font-normal text-base font-inter leading-7 text-black/60">
                  {recipe.nutrition.description}
                </p>
              </div>
            </div>
          </div>

          <div class="content-bottom">
            <p class="font-normal text-base font-inter leading-7 text-black/60">
              {recipe.description}
            </p>
          </div>

          {/* <!-- OTHER INFO --> */}
          <div class="flex gap-6 w-full">
            {/* RIGHT CONTENT */}
            <div class="flex flex-col w-5/6 gap-20">
              <div class="ingredients flex flex-col gap-12">
                <div class="title">
                  <h2 class="font-semibold font-inter text-4xl">Ingredients</h2>
                </div>
                {/* <!-- MAIN DISH --> */}
                <div class="flex flex-col gap-2">
                  <div class="sub-title">
                    <h3 class="font-semibold font-inter text-2xl">
                      For main dish
                    </h3>
                  </div>
                  {recipe.main_dish.map((item, index) => (
                    <div
                      key={index}
                      class="flex gap-5 py-6 border-b border-black/10 w-full items-center"
                    >
                      <div class="p-2.5 border border-[#DBE2E5] rounded-full"></div>
                      <div class="font-normal font-inter text-lg">{item}</div>
                    </div>
                  ))}
                </div>

                {/* <!-- THE SAUCE --> */}
                <div class="flex flex-col gap-2">
                  <div class="sub-title">
                    <h3 class="font-semibold font-inter text-2xl">
                      For the sauce
                    </h3>
                  </div>
                  {recipe.sauce.map((item, index) => (
                    <div
                      key={index}
                      class="flex gap-5 py-6 border-b border-black/10 w-full items-center"
                    >
                      <div class="p-2.5 border border-[#DBE2E5] rounded-full"></div>
                      <div class="font-normal font-inter text-lg">{item}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* DIRECTION */}
              <div class="flex flex-col gap-4">
                <div class="sub-title">
                  <h2 class="font-semibold text-3xl">Directions</h2>
                </div>
                <div class="flex flex-col">
                  <div class="flex gap-5 pt-8 pb-10 border-b border-black/10 w-full">
                    <div class="p-2.5 border border-[#DBE2E5] rounded-full h-fit mt-1"></div>
                    <div class="flex flex-col gap-6 ">
                      <div class="font-semibold font-inter text-2xl">
                        1. Lorem ipsum dolor sit amet.
                      </div>
                      <div class="font-normal text-base font-inter text-black/60 leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Unde accusamus, dolor necessitatibus reprehenderit
                        dolorem libero quae? Officia alias facere qui animi
                        accusamus. Dolorum dolore repellat animi? Impedit soluta
                        dignissimos modi.
                      </div>
                      <div class="">
                        <img src={ImgDirect1} alt="" />
                      </div>
                      <div class="font-normal text-base font-inter text-black/60 leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Perferendis cupiditate asperiores laboriosam
                        voluptates eligendi? Quos harum voluptatem temporibus
                        vitae doloribus obcaecati dolor doloremque consequuntur.
                        Magnam placeat soluta laborum id eveniet!
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-4 py-10 border-b border-black/10 w-full">
                    <div class="p-2.5 border border-[#DBE2E5] rounded-full h-fit mt-1"></div>
                    <div class="flex flex-col gap-3">
                      <div class="font-semibold font-inter text-2xl">
                        2. Lorem ipsum dolor sit amet.
                      </div>
                      <div class="font-normal text-base font-inter text-black/60 leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Unde accusamus, dolor necessitatibus reprehenderit
                        dolorem libero quae? Officia alias facere qui animi
                        accusamus. Dolorum dolore repellat animi? Impedit soluta
                        dignissimos modi.
                      </div>
                    </div>
                  </div>
                  <div class="flex gap-4 py-10 border-b border-black/10 w-full">
                    <div class="p-2.5 border border-[#DBE2E5] rounded-full h-fit mt-1"></div>
                    <div class="flex flex-col gap-3">
                      <div class="font-semibold font-inter text-2xl">
                        3. Lorem ipsum dolor sit amet.
                      </div>
                      <div class="font-normal text-base font-inter text-black/60 leading-7">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Unde accusamus, dolor necessitatibus reprehenderit
                        dolorem libero quae? Officia alias facere qui animi
                        accusamus. Dolorum dolore repellat animi? Impedit soluta
                        dignissimos modi.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* RIGHT CONTENT */}
            <div class="w-1/3 flex flex-col p-4 gap-20">
              <div class="other-recipe flex flex-col gap-8">
                <div class="sub-title">
                  <h2 class="font-semibold font-inter text-3xl">
                    Other Recipe
                  </h2>
                </div>
                <div class="flex flex-col gap-4">
                  {otherRecipe.map((recipe) => (
                    <Link
                      key={recipe.id}
                      to={`/recipe_detail/${recipe.id}`}
                      class="flex gap-4 items-center"
                    >
                      <div class="img">
                        <img
                          src={`http://localhost:8080/${recipe.image}`}
                          alt=""
                        />
                      </div>
                      <div class="flex flex-col gap-3">
                        <div class="">
                          <p class="font-semibold font-inter text-base leading-4.5">
                            {recipe.title}
                          </p>
                        </div>
                        <div class="">
                          <p class="font-medium font-inter text-xs text-black/60">
                            By {recipe.writer}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div class="ads">
                <img src={ImgAds} alt="" />
              </div>
            </div>
          </div>
        </div>

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
