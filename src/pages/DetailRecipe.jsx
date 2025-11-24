// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
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

export default function DetailRecipe() {
  // const [count, setCount] = useState(0)

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
                  Health Japanese Fried Rice
                </h1>
              </div>
              <div class="flex">
                <div class="user flex items-center gap-2.5 pr-8 border-r border-black/10">
                  <div class="img-user rounded-full border-2">
                    <User color="black" size={36} />
                  </div>
                  <div class="data-user flex flex-col gap-0.5">
                    <p class="font-bold text-base font-inter">John Smith</p>
                    <p class="font-medium text-sm font-inter text-black/60">
                      15 March 2002
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
                      15 Minutes
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
                      15 Minutes
                    </p>
                  </div>
                </div>

                <div class="flex items-center gap-2.5 pl-10">
                  <div class="">
                    <Utensils color="black" size={24} />
                  </div>
                  <div class="type-recipe">
                    <p class="font-medium text-sm font-inter text-black/60">
                      Chicken
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
              <img class="w-full" src={ImgCover} alt="" />
            </div>
            <div class="nutrition-info w-1/3 flex flex-col justify-between px-6 py-8 bg-primary rounded-2xl">
              <div class="top-content flex flex-col gap-3">
                <div class="sub-title">
                  <h3 class="font-semibold text-2xl font-inter">
                    Nutrition Information
                  </h3>
                </div>
                <div class="detail flex flex-col">
                  <NutritionInfo name={'Calories'} count={'219.9 kcal'} />
                  <NutritionInfo name={'Total Fat'} count={'10.7 g'} />
                  <NutritionInfo name={'Protein'} count={'7.9 g'} />
                  <NutritionInfo name={'Carbohydrate'} count={'22.3 g'} />
                  <NutritionInfo name={'Cholesterol'} count={'37.5 mg'} />
                </div>
              </div>

              <div class="bottom-content flex text-center">
                <p class="font-normal text-base font-inter leading-7 text-black/60">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Officia, iure.
                </p>
              </div>
            </div>
          </div>

          <div class="content-bottom">
            <p class="font-normal text-base font-inter leading-7 text-black/60">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum
              sint, ad ducimus reprehenderit eum illum assumenda eos vero
              commodi, debitis suscipit facere esse fuga, nostrum incidunt
              voluptas porro. Ab architecto id explicabo hic ducimus. Temporibus
              fugit dolores, consequatur id repellat voluptates explicabo
              voluptatem in soluta impedit praesentium veritatis dicta odit
              reprehenderit a saepe nostrum odio! Vero voluptatem temporibus
              libero expedita ex, maiores dicta aliquam molestias debitis
              perspiciatis laboriosam soluta dolorem error assumenda quod
              inventore obcaecati officia consequuntur reiciendis cum! Eum vero
              ipsum nam, fugit hic animi doloribus aspernatur ipsa quam
              explicabo consequatur accusamus minima omnis! Maxime, iure
              nostrum. Ea, explicabo!
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
                  <MainDishList
                    paragraf={'Lorem ipsum dolor sit amet consectetur.'}
                  />
                  <MainDishList
                    paragraf={'Lorem ipsum dolor sit amet consectetur.'}
                  />
                  <MainDishList
                    paragraf={'Lorem ipsum dolor sit amet consectetur.'}
                  />
                </div>

                {/* <!-- THE SAUCE --> */}
                <div class="flex flex-col gap-2">
                  <div class="sub-title">
                    <h3 class="font-semibold font-inter text-2xl">
                      For the sauce
                    </h3>
                  </div>
                  <SauceList
                    paragraf={'Lorem ipsum dolor sit amet consectetur.'}
                  />
                  <SauceList
                    paragraf={'Lorem ipsum dolor sit amet consectetur.'}
                  />
                  <SauceList
                    paragraf={'Lorem ipsum dolor sit amet consectetur.'}
                  />
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
                  <OtherRecipeCard
                    Img={ImgOtherRecipe1}
                    Title={'Chicken Meatball with Creamy Chess...'}
                    Author={'Andreas Pauls'}
                  />
                  <OtherRecipeCard
                    Img={ImgOtherRecipe1}
                    Title={'Chicken Meatball with Creamy Chess...'}
                    Author={'Andreas Pauls'}
                  />
                  <OtherRecipeCard
                    Img={ImgOtherRecipe1}
                    Title={'Chicken Meatball with Creamy Chess...'}
                    Author={'Andreas Pauls'}
                  />
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
