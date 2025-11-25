import { useEffect, useState } from 'react'

import ImgCardList1 from '../assets/IMG_FOODIELAND/list/image 26.png'
import ImgCardList2 from '../assets/IMG_FOODIELAND/list/image 26.png'
import ImgCardList3 from '../assets/IMG_FOODIELAND/list/image 26.png'
import ImgCardList4 from '../assets/IMG_FOODIELAND/list/image 26.png'

import { Timer, Utensils } from 'lucide-react'
import { GetAllRecipes } from '../api/recipeApi'

export default function CardList2Container({ title, paragraf = false, id }) {
  const [recipes, setRecipes] = useState([])
  const otherRecipes = recipes.filter((r) => r.id !== Number(id))
  useEffect(() => {
    GetAllRecipes().then(setRecipes).catch(console.error)
  }, [])
  return (
    <>
      {paragraf ? (
        <div className="list-recipes2 flex flex-col items-center gap-20 w-full py-5 px-12">
          <div className="flex gap-24 justify-between items-center">
            <div className="sub-title w-1/2">
              <h1 className="text-5xl font-semibold font-inter">{title}</h1>
            </div>
            <div className="parag w-1/2">
              <p className="font-normal text-base font-inter text-black/60 leading-7">
                {paragraf}
              </p>
            </div>
          </div>

          <div className="content grid grid-cols-4 gap-8">
            {otherRecipes.map((item) => (
              <div
                key={item.id}
                className="card flex flex-col gap-4 pb-5 rounded-3xl"
              >
                <div className="img-recipe">
                  <img
                    className="rounded-3xl"
                    src={`http://localhost:8080/${item.image}`}
                    alt=""
                  />
                </div>
                <div className="name-recipe">
                  <h3 className="font-semibold text-lg font-inter leading-6">
                    {item.title}
                  </h3>
                </div>
                <div className="etc flex w-full gap-6">
                  <div className="duration flex gap-2">
                    <Timer color="black" size={20} />
                    <p className="font-inter font-medium text-sm text-black/60">
                      {item.cook_time}
                    </p>
                  </div>
                  <div className="category flex gap-2">
                    <Utensils color="black" size={20} />
                    <p className="font-inter font-medium text-sm text-black/60">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="list-recipes2 flex flex-col items-center gap-16 w-full py-5">
          <div className="flex gap-24 items-center">
            <div className="sub-title">
              <h1 className="text-3xl font-semibold">{title}</h1>
            </div>
          </div>

          <div className="content grid grid-cols-4 gap-8">
            {otherRecipes.map((item) => (
              <div
                key={item.id}
                className="card flex flex-col gap-4 pb-5 rounded-3xl"
              >
                <div className="img-recipe">
                  <img
                    className="rounded-3xl"
                    src={`http://localhost:8080/${item.image}`}
                    alt=""
                  />
                </div>
                <div className="name-recipe">
                  <h3 className="font-semibold text-lg font-inter leading-6">
                    {item.title}
                  </h3>
                </div>
                <div className="etc flex w-full gap-6">
                  <div className="duration flex gap-2">
                    <Timer color="black" size={20} />
                    <p className="font-inter font-medium text-sm text-black/60">
                      {item.cook}
                    </p>
                  </div>
                  <div className="category flex gap-2">
                    <Utensils color="black" size={20} />
                    <p className="font-inter font-medium text-sm text-black/60">
                      {item.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  )
}
