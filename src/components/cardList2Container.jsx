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
            {recipe.map((item) => (
              <div
                key={item.id}
                className="card flex flex-col items-center gap-4 pb-5 rounded-3xl"
              >
                <div className="img-recipe">
                  <img className="rounded-3xl" src={item.image} alt="" />
                </div>
                <div className="name-recipe">
                  <h3 className="font-semibold text-lg font-inter leading-6">
                    {item.name}
                  </h3>
                </div>
                <div className="etc flex w-full gap-6">
                  <div className="duration flex gap-2">
                    <Timer color="black" size={20} />
                    <p className="font-inter font-medium text-sm text-black/60">
                      {item.duration}
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
            {recipe.map((item) => (
              <div
                key={item.id}
                className="card flex flex-col items-center gap-4 pb-5 rounded-3xl"
              >
                <div className="img-recipe">
                  <img className="rounded-3xl" src={item.image} alt="" />
                </div>
                <div className="name-recipe">
                  <h3 className="font-semibold text-lg font-inter leading-6">
                    {item.name}
                  </h3>
                </div>
                <div className="etc flex w-full gap-6">
                  <div className="duration flex gap-2">
                    <Timer color="black" size={20} />
                    <p className="font-inter font-medium text-sm text-black/60">
                      {item.duration}
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
