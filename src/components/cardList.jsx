import { Timer, Utensils } from 'lucide-react'

export default function CardList({ src, nameRecipe, duration, category }) {
  return (
    <div className="card flex flex-col items-center gap-5 bg-[linear-gradient(to_bottom,var(--color-white),var(--color-primary))] pb-7 pt-3 rounded-3xl">
      <div className="img-recipe">
        <img className="rounded-3xl" src={src} alt="" />
      </div>
      <div className="name-recipe pl-5">
        <h3 className="font-semibold font-inter text-2xl leading-8">
          {nameRecipe}
        </h3>
      </div>
      <div className="etc flex w-full pl-5 gap-7">
        <div className="duration flex gap-2 items-center">
          <Timer color="black" size={20} />
          <p classNameName="font-inter font-medium text-sm text-black/60">
            {duration}
          </p>
        </div>
        <div className="category flex gap-3">
          <Utensils color="black" size={20} />
          <p classNameName="font-inter font-medium text-sm text-black/60">
            {category}
          </p>
        </div>
      </div>
    </div>
  )
}
