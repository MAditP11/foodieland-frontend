import Jumbotron from '../../assets/home/jumbotron/jumbotron.png'
import Badge from '../../assets/home/jumbotron/badge.png'
import IconHotRecipe from '../../assets/home/jumbotron/hot_recipe.png'

import { Timer, Utensils, ChevronRight, User } from 'lucide-react'

export default function JumbotronContainer() {
  return (
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
          <h1 className="font-semibold font-inter text-6xl leading-20">
            Spicy delicious chicken wings
          </h1>
          <p className="font-normal text-base font-inter text-black/60 leading-7">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            pariatur officia sit quia quaerat. Maiores nihil, aut non ipsa quod
            iusto facilis voluptas quisquam totam nostrum facere perspiciatis
            voluptates ducimus!
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
  )
}
