import { Timer, Utensils } from 'lucide-react'

export default function CardList2({ src, nameRecipe, duration, category }) {
  return (
    <div className="card flex flex-col items-center gap-4 pb-5 rounded-3xl">
      <div className="img-recipe">
        <img className="rounded-3xl" src={src} alt="" />
      </div>
      <div className="name-recipe">
        <h3 className="font-semibold text-lg font-inter leading-6">
          {nameRecipe}
        </h3>
      </div>
      <div className="etc flex w-full gap-6">
        <div className="duration flex gap-2">
          <Timer color="black" size={20} />
          <p classNameName="font-inter font-medium text-sm text-black/60">
            {duration}
          </p>
        </div>
        <div className="category flex gap-2">
          <Utensils color="black" size={20} />
          <p classNameName="font-inter font-medium text-sm text-black/60">
            {category}
          </p>
        </div>
      </div>
    </div>
  )
}
