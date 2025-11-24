import { useState } from 'react'

import ImgCardList1 from '../assets/IMG_FOODIELAND/list/image 26.png'
import ImgCardList2 from '../assets/IMG_FOODIELAND/list/image 26.png'
import ImgCardList3 from '../assets/IMG_FOODIELAND/list/image 26.png'
import ImgCardList4 from '../assets/IMG_FOODIELAND/list/image 26.png'

import { Timer, Utensils } from 'lucide-react'

export default function CardList2Container({ title, paragraf = false }) {
  const [recipe] = useState([
    {
      id: 1,
      name: 'Big and Juicy Wagyu Beef Cheesburger',
      duration: '30 Minutes',
      category: 'Snack',
      image: ImgCardList1,
      isLike: false,
    },
    {
      id: 2,
      name: 'Big and Juicy Wagyu Beef Cheesburger 2',
      duration: '30 Minutes',
      category: 'Snack',
      image: ImgCardList2,
      isLike: false,
    },
    {
      id: 3,
      name: 'Big and Juicy Wagyu Beef Cheesburger 3',
      duration: '30 Minutes',
      category: 'Snack',
      image: ImgCardList3,
      isLike: false,
    },
    {
      id: 4,
      name: 'Big and Juicy Wagyu Beef Cheesburger 4',
      duration: '30 Minutes',
      category: 'Snack',
      image: ImgCardList4,
      isLike: false,
    },
  ])
  return (
    <>
      {paragraf ? (
        <div class="list-recipes2 flex flex-col items-center gap-20 w-full py-5 px-12">
          <div class="flex gap-24 justify-between items-center">
            <div class="sub-title w-1/2">
              <h1 class="text-5xl font-semibold font-inter">{title}</h1>
            </div>
            <div class="parag w-1/2">
              <p className="font-normal text-base font-inter text-black/60 leading-7">
                {paragraf}
              </p>
            </div>
          </div>

          <div class="content grid grid-cols-4 gap-8">
            {recipe.map((item) => (
              <div
                key={item.id}
                class="card flex flex-col items-center gap-4 pb-5 rounded-3xl"
              >
                <div class="img-recipe">
                  <img class="rounded-3xl" src={item.image} alt="" />
                </div>
                <div class="name-recipe">
                  <h3 class="font-semibold text-lg font-inter leading-6">
                    {item.name}
                  </h3>
                </div>
                <div class="etc flex w-full gap-6">
                  <div class="duration flex gap-2">
                    <Timer color="black" size={20} />
                    <p className="font-inter font-medium text-sm text-black/60">
                      {item.duration}
                    </p>
                  </div>
                  <div class="category flex gap-2">
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
        <div class="list-recipes2 flex flex-col items-center gap-16 w-full py-5">
          <div class="flex gap-24 items-center">
            <div class="sub-title">
              <h1 class="text-3xl font-semibold">{title}</h1>
            </div>
          </div>

          <div class="content grid grid-cols-4 gap-8">
            {recipe.map((item) => (
              <div
                key={item.id}
                class="card flex flex-col items-center gap-4 pb-5 rounded-3xl"
              >
                <div class="img-recipe">
                  <img class="rounded-3xl" src={item.image} alt="" />
                </div>
                <div class="name-recipe">
                  <h3 class="font-semibold text-lg font-inter leading-6">
                    {item.name}
                  </h3>
                </div>
                <div class="etc flex w-full gap-6">
                  <div class="duration flex gap-2">
                    <Timer color="black" size={20} />
                    <p className="font-inter font-medium text-sm text-black/60">
                      {item.duration}
                    </p>
                  </div>
                  <div class="category flex gap-2">
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
