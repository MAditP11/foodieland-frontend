import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
import Header from '../components/header'
import IconHotRecipe from '../assets/IMG_FOODIELAND/jumbotron/image 14.png'
import { Timer, Utensils, ChevronRight, User } from 'lucide-react'
import { SiInstagram } from 'react-icons/si'
import Jumbotron from '../assets/IMG_FOODIELAND/jumbotron/baked-chicken-wings-asian-style-tomatoes-sauce-plate 1.png'
import Badge from '../assets/IMG_FOODIELAND/jumbotron/Badge.png'

import ImgCardCategory from '../assets/IMG_FOODIELAND/categories/image 25.png'
import CardCategory from '../components/cardCategory'

// import CardList from '../components/cardList'

import ImgLearnMore from '../assets/IMG_FOODIELAND/learn_more/portrait-happy-male-chef-dressed-uniform 1.png'

import ImgPost from '../assets/IMG_FOODIELAND/medsos/Post.png'

import CardList2Container from '../components/cardList2Container'

import SubscribeContainer from '../components/subsContainer'

import Footer from '../components/footer'
import { GetAllRecipes } from '../api/recipeApi'

export default function Home() {
  const [recipes, setRecipes] = useState([])
  useEffect(() => {
    GetAllRecipes().then(setRecipes).catch(console.error)
  }, [])

  console.log(recipes)
  return (
    <div>
      <Header></Header>

      <div className="main flex flex-col gap-28 py-5">
        {/* JUMBOTRON */}
        <div className="jumbotron flex w-full py-5 px-12">
          <div className="content flex flex-col gap-8 w-1/2 bg-primary rounded-s-3xl justify-between">
            <div className="content-top flex flex-col gap-6 p-8">
              <a
                href="#"
                className="hot-recipes flex px-4 py-2 gap-2 bg-white w-fit rounded-3xl items-center shadow-[8px_12px_20px_rgba(0,0,0,0.07)]"
              >
                <img src={IconHotRecipe} alt="" />
                <p className="text-sm font-semibold font-inter">Hot Recipes</p>
              </a>
              <h1 className="font-semibold font-inter text-6xl">
                Spicy delicious chicken wings
              </h1>
              <p className="font-normal text-base font-inter text-black/60 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur pariatur officia sit quia quaerat. Maiores nihil,
                aut non ipsa quod iusto facilis voluptas quisquam totam nostrum
                facere perspiciatis voluptates ducimus!
              </p>
              <div className="etc flex gap-3">
                <div className="hot-recipes flex px-3 py-2 gap-2 w-fit rounded-2xl bg-black/5 items-center">
                  <Timer color="black" size={20} />
                  <p className="font-inter font-medium text-sm text-black/60">
                    30 Minutes
                  </p>
                </div>
                <div className="hot-recipes flex px-3 py-2 gap-2 bg-black/5 w-fit rounded-2xl items-center">
                  <Utensils color="black" size={18} />
                  <p className="font-inter font-medium text-sm text-black/60">
                    Chicken
                  </p>
                </div>
              </div>
            </div>

            <div className="content-bottom flex justify-between p-8">
              <div className="user flex items-center gap-3">
                <div className="img-user rounded-full bg-slate-400">
                  <User color="black" size={48} />
                </div>
                <div className="data-user flex flex-col gap-0.5">
                  <p className="font-inter font-bold text-base">John Smith</p>
                  <p className="font-inter font-medium text-sm text-black/60">
                    15 March 2002
                  </p>
                </div>
              </div>

              <div className="button-view flex gap-3 bg-black items-center px-7 py-4 rounded-2xl">
                <div className="">
                  <p className="font-inter font-semibold text-sm text-white">
                    View Recipes
                  </p>
                </div>
                <div className="bg-white rounded-full">
                  <ChevronRight color="black" size={18} />
                </div>
              </div>
            </div>
          </div>
          <div className="img w-1/2">
            <img className="rounded-e-3xl" src={Jumbotron} alt="" />
          </div>

          <div className="badge absolute left-1/2 transform -translate-x-1/2 top-1/4">
            <img src={Badge} alt="" />
          </div>
        </div>
        {/* CATEGORIES */}
        <div className="categories flex flex-col gap-10 w-full py-5 px-12">
          <div className="content-top flex justify-between">
            <div className="sub-title font-semibold font-inter text-5xl">
              Categories
            </div>
            <a
              href="#"
              className="button-view bg-primary rounded-2xl px-5 py-4 flex items-center"
            >
              <p className="font-semibold text-base">View All Categories</p>
            </a>
          </div>

          <div className="card-container flex gap-10">
            <CardCategory
              src={ImgCardCategory}
              name={'Breakfast'}
            ></CardCategory>
            <CardCategory
              src={ImgCardCategory}
              name={'Breakfast'}
            ></CardCategory>
            <CardCategory
              src={ImgCardCategory}
              name={'Breakfast'}
            ></CardCategory>
            <CardCategory
              src={ImgCardCategory}
              name={'Breakfast'}
            ></CardCategory>
            <CardCategory
              src={ImgCardCategory}
              name={'Breakfast'}
            ></CardCategory>
            <CardCategory
              src={ImgCardCategory}
              name={'Breakfast'}
            ></CardCategory>
          </div>
        </div>
        {/* LIST */}
        <div className="list-recipes flex flex-col items-center gap-16 w-full py-5 px-12">
          <div className="sub-title flex flex-col gap-5 items-center w-3/4">
            <h1 className="font-semibold font-inter text-5xl">
              Simple and tasty recipes
            </h1>
            <p className="font-normal text-base font-inter text-black/60 leading-7 text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
              consectetur repellendus enim commodi alias cupiditate. Dolorem
              dignissimos odit exercitationem. Ad.
            </p>
          </div>

          <div className="content grid grid-cols-3 gap-8">
            {recipes.map((recipe) => (
              <Link
                to={`/recipe_detail/${recipe.id}`}
                key={recipe.id}
                className="card flex flex-col gap-5 bg-[linear-gradient(to_bottom,var(--color-white),var(--color-primary))] pb-7 pt-3 rounded-3xl"
              >
                <div className="img-recipe">
                  <img
                    className="rounded-3xl"
                    src={`http://localhost:8080/${recipe.image}`}
                    alt=""
                  />
                </div>
                <div className="name-recipe pl-5">
                  <h3 className="font-semibold font-inter text-2xl leading-8">
                    {recipe.title}
                  </h3>
                </div>
                <div className="etc flex w-full pl-5 gap-7">
                  <div className="duration flex gap-2 items-center">
                    <Timer color="black" size={20} />
                    <p className="font-inter font-medium text-sm text-black/60">
                      {recipe.cook_time}
                    </p>
                  </div>
                  <div className="category flex gap-3">
                    <Utensils color="black" size={20} />
                    <p className="font-inter font-medium text-sm text-black/60">
                      {recipe.category}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
            {/*             
            <CardList
              src={ImgCardList}
              nameRecipe={'Big and Juicy Wagyu Beef Cheesburger'}
              duration={'30 minues'}
              category={'Snack'}
            ></CardList> */}
          </div>
        </div>
        {/* LEARN MORE */}
        <div className="learn-more flex gap-32 items-center justify-between w-full py-5 px-12">
          <div className="content flex flex-col gap-14 w-1/2">
            <div className="content-top flex flex-col gap-4">
              <h1 className="font-semibold font-inter text-5xl">
                Everyone can be a chef in their own kitchen
              </h1>
              <p className="font-normal text-base font-inter text-black/60 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                veniam eius suscipit fugiat libero dolorem facere rerum
                molestiae odio velit.
              </p>
            </div>

            <a
              className="content-button bg-black w-fit px-8 py-4 rounded-xl"
              href="#"
            >
              <p className="font-semibold font-inter text-sm text-white">
                Learn more
              </p>
            </a>
          </div>

          <div className="img-content w-1/2 rounded-2xl bg-[linear-gradient(to_bottom,var(--color-white),var(--color-primary))]">
            <img className="" src={ImgLearnMore} alt="" />
          </div>
        </div>
        {/* POST */}
        <div className="post flex flex-col items-center gap-20 w-full pt-5 pb-20 px-12 bg-[linear-gradient(to_bottom,var(--color-white),var(--color-primary))]">
          <div className="content-top flex flex-col gap-5 items-center">
            <h1 className="font-semibold font-inter text-5xl">
              Check out @foodieland on Instagram
            </h1>
            <p className="font-normal text-base font-inter text-black/60 leading-7 text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam,
              velit architecto neque quibusdam dolores libero voluptates!
            </p>
          </div>
          <div className="content-post flex justify-center gap-10">
            <img src={ImgPost} alt="" />
            <img src={ImgPost} alt="" />
            <img src={ImgPost} alt="" />
            <img src={ImgPost} alt="" />
          </div>
          <a
            className="post-button flex gap-3 items-center rounded-2xl px-6 py-4 bg-black"
            href="#"
          >
            <p className="font-semibold text-sm font-inter text-white">
              View our Instagram
            </p>
            <SiInstagram className="w-5 h-5 text-white" />
          </a>
        </div>
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
